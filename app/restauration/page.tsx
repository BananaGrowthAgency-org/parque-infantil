import { cookies } from "next/headers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FadeInUp from "@/components/ui/FadeInUp";
import HeroRestauracion from "@/components/restauration/HeroRestauracion";
import EditableHub from "@/components/restauration/edit/EditableHub";
import { getCarte } from "@/lib/restauration/store";
import { SESSION_COOKIE, verifySessionToken } from "@/lib/auth";

export const metadata = {
  title: "Restauration – Ludy'cafet · Ludykid Le Mans",
  description:
    "Découvrez Ludy'cafet : boissons fraîches, boissons chaudes, plaisirs sucrés et plaisirs salés à déguster pendant votre visite chez Ludykid.",
  openGraph: {
    title: "Restauration – Ludy'cafet · Ludykid Le Mans",
    description: "Découvrez Ludy'cafet : boissons fraîches, boissons chaudes, plaisirs sucrés et plaisirs salés à déguster pendant votre visite chez Ludykid.",
    url: "https://www.ludykid.com/restauration",
    images: [{ url: "/images/home/bar.jpg", alt: "Ludy'cafet – Restauration Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/restauration" },
};

export default async function RestaurationPage() {
  const carte = await getCarte();
  const editable = await verifySessionToken((await cookies()).get(SESSION_COOKIE)?.value);

  return (
    <main className="bg-[#F4FBF4] min-h-screen">
      <Navbar />
      <HeroRestauracion />

      {/* Barra informativa — misma posición que StatsBar en home */}
      <div className="relative z-10 -mt-28 sm:-mt-14 px-4 sm:px-8 lg:px-16 mb-10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
          <FadeInUp delay={0.05}>
            <div className="h-full flex items-start gap-4 px-6 py-5 rounded-clay-lg bg-white border-[3px] border-lk-green shadow-clay-green">
              <span className="text-2xl mt-0.5">🍽️</span>
              <p className="font-nunito text-gray-700 text-sm md:text-base leading-relaxed">
                Retrouvez ici la carte des consommations : boissons fraîches, boissons chaudes, plaisirs sucrés ou salés…
              </p>
            </div>
          </FadeInUp>
          <FadeInUp delay={0.12}>
            <div className="h-full flex items-start gap-4 px-6 py-5 rounded-clay-lg bg-white border-[3px] border-lk-orange shadow-clay-orange">
              <span className="text-2xl mt-0.5">🚫</span>
              <p className="font-nunito text-gray-600 text-sm md:text-base leading-relaxed italic">
                Les goûters et boissons apportés de l&apos;extérieur sont interdits dans l&apos;enceinte du parc.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>

      {/* Grid de catégories (editable in-place si hay sesión de gérant) */}
      <section id="carte" className="pb-16 px-6 pt-2">
        <EditableHub initialCarte={carte} editable={editable} />
      </section>

      {/* Paiements acceptés */}
      <section className="pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeInUp y={16}>
            <div className="bg-white rounded-clay p-5 shadow-clay-sm text-center">
              <p className="font-fredoka text-gray-700 text-base md:text-lg">
                <span className="font-extrabold text-lk-green">Paiements acceptés :</span>{" "}
                Carte bancaire · Espèces · Chèques vacances
              </p>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer waveBg="#F4FBF4" />
    </main>
  );
}
