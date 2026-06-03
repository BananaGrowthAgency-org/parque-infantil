import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroJeudiNounous from "@/components/garderie/HeroJeudiNounous";
import JeudiNounous from "@/components/JeudiNounous";
import Testimonios from "@/components/Testimonios";
import InfosPratiques from "@/components/InfosPratiques";
import FadeInUp from "@/components/ui/FadeInUp";

const ORANGE = "#E8731A";

const ACCENTS = ["#E8731A", "#2E9E2E", "#B8940A", "#7B35A0"];

const FEATURES = [
  { icon: "/images/iconos/enfants.png",                 label: "De 0 à 12 ans",          desc: "adapté à tous les âges" },
  { icon: "/images/iconos/calendar-icon-orange.png",    label: "1 jeudi / mois",          desc: "matinée dédiée", size: 76 },
  { icon: "/images/iconos/garderie-icon-activites.png", label: "Activités encadrées",     desc: "jeux, découvertes" },
  { icon: "/images/iconos/garderie-icon-entree.png",    label: "6,00 € / enfant",         desc: "tarif spécial nounous" },
];

export const metadata = {
  title: "Jeudi des Nounous | Ludykid Le Mans — Parc indoor pour assistantes maternelles",
  description: "Un jeudi matin par mois réservé aux assistantes maternelles et leurs enfants au Mans. Jeux, activités et partage dans un espace sécurisé chez Ludykid — 6€ / enfant.",
  openGraph: {
    title: "Jeudi des Nounous | Ludykid Le Mans — Parc indoor pour assistantes maternelles",
    description: "Un jeudi matin par mois réservé aux assistantes maternelles et leurs enfants au Mans. Jeux, activités et partage dans un espace sécurisé chez Ludykid — 6€ / enfant.",
    url: "https://www.ludykid.com/jeudi-des-nounous",
    images: [{ url: "/images/img_4094.jpg", alt: "Jeudi des nounous Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/jeudi-des-nounous" },
};

export default function JeudiNounousPage() {
  return (
    <main className="bg-[#FFF8EC] min-h-screen">
      <Navbar />
      <HeroJeudiNounous />

      {/* Stats — 4 cartes image+texte */}
      <div className="relative z-10 -mt-10 sm:-mt-14 px-4 sm:px-6 mb-0">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {FEATURES.map((f, i) => (
            <FadeInUp key={f.label} y={20} delay={0.08 + i * 0.08} className="h-full">
              <div className="h-full rounded-clay-lg border-[3px] bg-white shadow-clay p-4 text-center space-y-1.5" style={{ borderColor: ACCENTS[i] }}>
                {(f as { icon: string; label: string; desc: string; raw?: boolean }).raw ? (
                  <img src={f.icon} alt="" aria-hidden="true" className="mx-auto" style={{ width: 72, height: 72, objectFit: "contain" }} />
                ) : (
                  <div
                    aria-hidden="true"
                    className="mx-auto"
                    style={{
                      width: (f as { size?: number }).size ?? 64,
                      height: (f as { size?: number }).size ?? 64,
                      backgroundColor: ORANGE,
                      WebkitMaskImage: `url(${f.icon})`,
                      maskImage: `url(${f.icon})`,
                      WebkitMaskRepeat: "no-repeat",
                      maskRepeat: "no-repeat",
                      WebkitMaskPosition: "center",
                      maskPosition: "center",
                      WebkitMaskSize: "contain",
                      maskSize: "contain",
                    }}
                  />
                )}
                <p className="font-fredoka font-extrabold text-sm" style={{ color: ORANGE }}>{f.label}</p>
                <p className="font-nunito text-gray-400 text-xs">{f.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <JeudiNounous />
      <Testimonios nextBg="#F9FAFB" />
      <InfosPratiques showTopWave={false} />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
