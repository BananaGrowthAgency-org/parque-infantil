import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroLaser from "@/components/laser-game/HeroLaser";
import LaserIntro from "@/components/laser-game/LaserIntro";
import ActivitiesGrid from "@/components/laser-game/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Ludykid | Laser Game Enfant Le Mans",
  description:
    "À la recherche d'un laser game pour votre enfant au Mans ? Offrez-lui une activité ludique qui développe esprit d'équipe et coordination chez Ludykid.",
  openGraph: {
    title: "Ludykid | Laser Game Enfant Le Mans",
    description: "À la recherche d'un laser game pour votre enfant au Mans ? Offrez-lui une activité ludique qui développe esprit d'équipe et coordination chez Ludykid.",
    url: "https://www.ludykid.com/laser-game-le-mans",
    images: [{ url: "/images/laser-game/laserSection1.jpg", alt: "Laser Game enfant Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/laser-game-le-mans" },
};

export default function LaserGamePage() {
  return (
    <main className="bg-[#F5EEFF]">
      <Navbar />
      <HeroLaser />
      <LaserIntro nextBg="#EDFAED" />
      <Cumple nextBg="white" reverse />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
