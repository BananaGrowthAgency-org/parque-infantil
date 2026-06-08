import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Wave from "@/components/Wave";
import HeroAnniversaire from "@/components/anniversaire/HeroAnniversaire";
import StatsBarAnniversaire from "@/components/anniversaire/StatsBarAnniversaire";
import FormulesTable from "@/components/anniversaire/FormulesTable";
import Dimanche from "@/components/anniversaire/Dimanche";
import Avis from "@/components/anniversaire/Avis";
import PhotosAnniv from "@/components/anniversaire/PhotosAnniv";
import InfosAnniv from "@/components/anniversaire/InfosAnniv";

export const metadata = {
  title: "Ludykid Le Mans | Anniversaire enfant inoubliable dès 10,50€",
  description:
    "Organisez un anniversaire enfant au Mans sans stress. Aire de jeux intérieure couverte. Formules clés en main. Gâteau & fun garantis. Choisissez votre formule.",
  openGraph: {
    title: "Ludykid Le Mans | Anniversaire enfant inoubliable dès 10,50€",
    description: "Organisez un anniversaire enfant au Mans sans stress. Aire de jeux intérieure couverte. Formules clés en main. Gâteau & fun garantis.",
    url: "https://www.ludykid.com/anniversaire",
    images: [{ url: "/images/home/cumple.jpg", alt: "Anniversaire enfant Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/anniversaire" },
};

// Colores de fondo por sección — referenciados aquí para las olas de transición
const BG_FORMULES = "#FFF8EC"; // crema-amarillo
const BG_DIMANCHE = "#F5EEFF"; // morado claro
const BG_PHOTOS_AVIS = "#ffffff"; // PhotosAnniv y Avis comparten fondo blanco (igual que home)
const BG_INFOS = "#F9FAFB"; // gris-50

export default function AnniversairePage() {
  return (
    <main className="bg-[#FFF8EC]">
      <Navbar />
      <HeroAnniversaire />
      <StatsBarAnniversaire />
      <FormulesTable />
      <Wave fill={BG_DIMANCHE} bg={BG_FORMULES} />
      <Dimanche />
      <Wave fill={BG_PHOTOS_AVIS} bg={BG_DIMANCHE} />
      <PhotosAnniv />
      <Avis />
      <Wave fill={BG_INFOS} bg={BG_PHOTOS_AVIS} />
      <InfosAnniv />
      <Footer />
    </main>
  );
}
