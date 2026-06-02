import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Atracciones from "@/components/Atracciones";
import Cumple from "@/components/Cumple";
import Galerie from "@/components/Galerie";
import Testimonios from "@/components/Testimonios";
import InfosPratiques from "@/components/InfosPratiques";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Ludykid Le Mans | Parc de jeux indoor enfants (1–12 ans)",
  description:
    "Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1 200 m² d'activités, anniversaires clé en main et espace restauration.",
  openGraph: {
    title: "Ludykid Le Mans | Parc de jeux indoor enfants (1–12 ans)",
    description:
      "Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1 200 m² d'activités, anniversaires clé en main et espace restauration.",
    url: "https://www.ludykid.com",
    images: [{ url: "/images/home/tobogan-azul.jpg", alt: "Ludykid Le Mans – Parc de jeux indoor enfants" }],
  },
  alternates: {
    canonical: "https://www.ludykid.com",
  },
};

export default function Home() {
  return (
    <main className="bg-[#FFF4EC]">
      <Navbar />
      <Hero />
      <StatsBar />

      {/* Espace petits + Parc indoor → Cumple */}
      <Atracciones sectionId="atracciones" from={0} to={2} lastBg="#EDFAED" />
      <Cumple />

      {/* Restauration → Testimonios */}
      <Atracciones from={2} to={3} lastBg="#ffffff" />
      <Testimonios />

      {/* Trampoline + Laser + Escape + Accrobranche → Galerie */}
      <Atracciones from={3} to={7} lastBg="#ffffff" />
      <Galerie />

      <InfosPratiques />
      <Footer />
    </main>
  );
}
