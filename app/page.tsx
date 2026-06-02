import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Atracciones from "@/components/Atracciones";
// Lazy-load heavy below-fold components → reduce TBT y bundle inicial
const Cumple = dynamic(() => import("@/components/Cumple"));
const Testimonios = dynamic(() => import("@/components/Testimonios"));
const Galerie = dynamic(() => import("@/components/Galerie"));
const InfosPratiques = dynamic(() => import("@/components/InfosPratiques"));
const Footer = dynamic(() => import("@/components/Footer"));

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
