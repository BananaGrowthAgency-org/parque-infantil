import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroGarderie from "@/components/garderie/HeroGarderie";
import Garderie from "@/components/Garderie";
import Testimonios from "@/components/Testimonios";
import InfosPratiques from "@/components/InfosPratiques";
import FadeInUp from "@/components/ui/FadeInUp";

const PURPLE = "#7B35A0";

const ACCENTS = ["#7B35A0", "#E8731A", "#2E9E2E", "#FFD600"];

const FEATURES = [
  { icon: "/images/iconos/enfants.png",                  label: "Dès 4 ans",            desc: "adapté aux tout-petits" },
  { icon: "/images/iconos/medaille.png",                 label: "Animateurs qualifiés", desc: "surveillance permanente" },
  { icon: "/images/iconos/garderie-icon-activites.png",  label: "Activités encadrées",  desc: "jeux, jeux de société" },
  { icon: "/images/iconos/garderie-icon-entree.png",     label: "Entrée incluse",       desc: "accès au parc compris" },
];

export const metadata = {
  title: "Ludykid Le Mans | Garderie enfant parc indoor dès 4 ans",
  description: "À la recherche d'une garderie au Mans ? Confiez votre enfant dès 4 ans à un parc indoor sécurisé avec jeux, activités ludiques et animateurs.",
  openGraph: {
    title: "Ludykid Le Mans | Garderie enfant parc indoor dès 4 ans",
    description: "À la recherche d'une garderie au Mans ? Confiez votre enfant dès 4 ans à un parc indoor sécurisé avec jeux, activités ludiques et animateurs.",
    url: "https://www.ludykid.com/garderie",
    images: [{ url: "/images/home/tobogan-azul.jpg", alt: "Garderie enfant Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/garderie" },
};

export default function GarderiePage() {
  return (
    <main className="bg-[#F5EEFF] min-h-screen">
      <Navbar />
      <HeroGarderie />

      {/* Stats — 4 cartes image+texte */}
      <div className="relative z-10 -mt-10 sm:-mt-14 px-4 sm:px-6 mb-0">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 items-stretch">
          {FEATURES.map((f, i) => (
            <FadeInUp key={f.label} y={20} delay={0.08 + i * 0.08} className="h-full">
              <div className="h-full rounded-clay-lg border-[3px] bg-white shadow-clay p-4 text-center space-y-1.5" style={{ borderColor: ACCENTS[i] }}>
                <div
                  aria-hidden="true"
                  className="mx-auto"
                  style={{
                    width: 64,
                    height: 64,
                    backgroundColor: PURPLE,
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
                <p className="font-fredoka font-extrabold text-[#7B35A0] text-sm">{f.label}</p>
                <p className="font-nunito text-gray-400 text-xs">{f.desc}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>

      <Garderie />
      <Testimonios nextBg="#F9FAFB" />
      <InfosPratiques showTopWave={false} />
      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
