import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAccro from "@/components/accrobranche/HeroAccro";
import AccroIntro from "@/components/accrobranche/AccroIntro";
import ActivitiesGrid from "@/components/accrobranche/ActivitiesGrid";
import Cumple from "@/components/Cumple";
import Testimonios from "@/components/Testimonios";
import Galerie from "@/components/Galerie";
import InfosPratiques from "@/components/InfosPratiques";

export const metadata = {
  title: "Ludykid | Parc Accrobranche Indoor Le Mans",
  description:
    "À la recherche d'un accrobranche pour votre enfant au Mans ? Offrez-lui un parcours ludique et sécurisé pour développer agilité et confiance chez Ludykid.",
  openGraph: {
    title: "Ludykid | Parc Accrobranche Indoor Le Mans",
    description: "À la recherche d'un accrobranche pour votre enfant au Mans ? Offrez-lui un parcours ludique et sécurisé pour développer agilité et confiance chez Ludykid.",
    url: "https://www.ludykid.com/accrobranche-le-mans",
    images: [{ url: "/images/home/accrobranche-hero.jpg", alt: "Accrobranche indoor Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/accrobranche-le-mans" },
};

export default function AccrobranchePage() {
  return (
    <main className="bg-[#FFF8CC]">
      <Navbar />
      <HeroAccro />
      <AccroIntro nextBg="#F5EEFF" />
      <Cumple nextBg="white" tone="purple" reverse />
      <Testimonios nextBg="white" />
      <ActivitiesGrid />
      <Galerie />
      <InfosPratiques />
      <Footer />
    </main>
  );
}
