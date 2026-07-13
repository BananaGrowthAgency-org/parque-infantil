"use server";

import { cookies } from "next/headers";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";
import { saveCarte, saveCategory } from "@/lib/restauration/store";
import type { Categorie } from "@/components/restauration/data";

// Edición in-place de la carte. Cada acción revalida la sesión (las Server Actions
// son accesibles por POST directo, así que el proxy por sí solo no basta).
async function requireSession(): Promise<void> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!(await verifySessionToken(token))) throw new Error("Non autorisé");
}

// Guarda toda la carte (orden/alta/baja/label/emoji/color de categorías).
export async function saveCarteAction(cats: Categorie[]): Promise<void> {
  await requireSession();
  if (!Array.isArray(cats)) throw new Error("Carte invalide");
  await saveCarte(cats);
}

// Guarda el contenido de una sola categoría (read-modify-write sobre la carte).
export async function saveCategoryAction(slug: string, cat: Categorie): Promise<void> {
  await requireSession();
  if (!slug || !cat) throw new Error("Catégorie invalide");
  await saveCategory(slug, cat);
}
