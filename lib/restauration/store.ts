import { unstable_cache, revalidateTag, revalidatePath } from "next/cache";
import type { Categorie } from "@/components/restauration/data";
import { CARTE_SEED } from "./seed";

// Almacenamiento de la carte de Ludy'cafet.
//  · Producción (Vercel, con BLOB_READ_WRITE_TOKEN): cms/carte.json en Vercel Blob.
//  · Desarrollo (sin token): almacén en memoria del proceso `next dev` (persiste
//    durante la sesión, se reinicia al reiniciar). No usamos el sistema de ficheros
//    para no romper el file-tracing del build en Vercel.
// La lectura pública va cacheada y se invalida en cada guardado con revalidateTag.

const BLOB_PATH = "cms/carte.json";
const CARTE_TAG = "carte";
const IS_BLOB = !!process.env.BLOB_READ_WRITE_TOKEN;

// Fallback en memoria para desarrollo sin Blob.
let memCarte: Categorie[] | null = null;

// ─── Vercel Blob (producción) ────────────────────────────────────────────────
async function getBlobCarte(): Promise<Categorie[]> {
  try {
    const { list } = await import("@vercel/blob");
    const { blobs } = await list({ prefix: BLOB_PATH, limit: 1 });
    const blob = blobs.find((b) => b.pathname === BLOB_PATH);
    if (!blob) return structuredClone(CARTE_SEED);
    // uploadedAt evita leer una sobrescritura cacheada por el CDN de Blob.
    const res = await fetch(`${blob.url}?v=${blob.uploadedAt.getTime()}`, { cache: "no-store" });
    if (!res.ok) return structuredClone(CARTE_SEED);
    return (await res.json()) as Categorie[];
  } catch {
    return structuredClone(CARTE_SEED);
  }
}

async function saveBlobCarte(cats: Categorie[]): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(BLOB_PATH, JSON.stringify(cats, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 60,
  });
}

// Un carte.json guardado antes de que existiera un campo (p.ej. Categorie.infos)
// no lo tendrá. Lo rellenamos desde el seed, por slug, sin pisar nada que el
// gérant ya haya editado — autorreparable, sin script de migración.
function backfillFromSeed(cats: Categorie[]): Categorie[] {
  const seedBySlug = new Map(CARTE_SEED.map((c) => [c.slug, c]));
  for (const cat of cats) {
    const seed = seedBySlug.get(cat.slug);
    if (!seed) continue;
    if (cat.infos === undefined && seed.infos) cat.infos = structuredClone(seed.infos);
  }
  return cats;
}

// ─── Lectura ─────────────────────────────────────────────────────────────────
async function getCarteFresh(): Promise<Categorie[]> {
  const raw = IS_BLOB ? await getBlobCarte() : (memCarte ?? structuredClone(CARTE_SEED));
  return backfillFromSeed(raw);
}

// Lectura pública cacheada; se invalida en cada guardado vía revalidateTag.
export const getCarte = unstable_cache(getCarteFresh, ["carte"], { tags: [CARTE_TAG] });

// ─── Escritura ───────────────────────────────────────────────────────────────
export async function saveCarte(cats: Categorie[]): Promise<void> {
  if (IS_BLOB) await saveBlobCarte(cats);
  else memCarte = cats;
  revalidateTag(CARTE_TAG, "max");
  revalidatePath("/restauration");
  revalidatePath("/restauration/[slug]", "page");
}

// Reemplaza una sola categoría (read-modify-write) sin pisar el resto.
export async function saveCategory(slug: string, cat: Categorie): Promise<void> {
  const cats = await getCarteFresh();
  const idx = cats.findIndex((c) => c.slug === slug);
  if (idx === -1) throw new Error(`Catégorie introuvable : ${slug}`);
  cats[idx] = cat;
  await saveCarte(cats);
}
