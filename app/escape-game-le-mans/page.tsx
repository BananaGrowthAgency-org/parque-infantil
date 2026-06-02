import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroEscape from "@/components/escape-game/HeroEscape";
import EscapeIntro from "@/components/escape-game/EscapeIntro";
import ActivitiesGrid from "@/components/escape-game/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Ludykid | Escape Game Enfant Le Mans",
  description:
    "À la recherche d'un escape game pour votre enfant au Mans ? Offrez-lui une aventure ludique en réalité augmentée qui stimule logique et esprit d'équipe.",
  openGraph: {
    title: "Ludykid | Escape Game Enfant Le Mans",
    description: "À la recherche d'un escape game pour votre enfant au Mans ? Offrez-lui une aventure ludique en réalité augmentée qui stimule logique et esprit d'équipe.",
    url: "https://www.ludykid.com/escape-game-le-mans",
    images: [{ url: "/images/escape-game/section1.jpg", alt: "Escape Game enfant Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/escape-game-le-mans" },
};

export default function EscapeGamePage() {
  return (
    <main className="bg-[#F4FBF4]">
      <Navbar />
      <HeroEscape />
      <EscapeIntro nextBg="#F5EEFF" />
      <Cumple nextBg="white" tone="purple" reverse />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
