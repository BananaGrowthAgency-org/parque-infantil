import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import CategoryCard from "@/components/restauration/CategoryCard";
import EditableCategory from "@/components/restauration/edit/EditableCategory";
import { getCarte } from "@/lib/restauration/store";
import { CARTE_SEED } from "@/lib/restauration/seed";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export function generateStaticParams() {
  return CARTE_SEED.map((c) => ({ slug: c.slug }));
}

type Params = { slug: string };

export async function generateMetadata({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const cat = (await getCarte()).find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} – Ludy'cafet · Ludykid Le Mans`,
    description: `Carte ${cat.label.toLowerCase()} disponible chez Ludy'cafet, le coin gourmand de Ludykid Le Mans.`,
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const carte = await getCarte();
  const cat = carte.find((c) => c.slug === slug);
  if (!cat) notFound();

  const editable = await verifySessionToken((await cookies()).get(SESSION_COOKIE)?.value);
  const others = carte.filter((c) => c.slug !== slug);

  return (
    <main style={{ backgroundColor: cat.softBg }} className="min-h-screen">
      <Navbar />

      <section className="relative pt-28 pb-8 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInUp className="mb-6">
            <a
              href="/restauration"
              className="inline-flex items-center gap-2 font-fredoka font-semibold text-base md:text-lg text-gray-600 hover:text-gray-900 transition-colors"
            >
              <span aria-hidden="true">←</span> Retour à Ludy&apos;cafet
            </a>
          </FadeInUp>

          <FadeInUp className="mb-8">
            <div className="flex flex-col items-center gap-5">
              <div
                className="w-28 h-28 rounded-full flex items-center justify-center text-6xl shadow-clay-inset bg-white"
                aria-hidden="true"
              >
                {cat.emoji}
              </div>
              <SquiggleTitle color={cat.color}>{cat.label}</SquiggleTitle>
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="pb-20 px-6">
        <EditableCategory category={cat} editable={editable} />
      </section>

      {/* À découvrir aussi — las otras 4 categorías */}
      <section className="pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeInUp className="mb-10">
            <SquiggleTitle color={cat.color}>À découvrir aussi</SquiggleTitle>
          </FadeInUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {others.map((other, i) => (
              <FadeInUp key={other.slug} delay={i * 0.06}>
                <CategoryCard cat={other} compact />
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <Footer waveBg={cat.softBg} />
    </main>
  );
}
