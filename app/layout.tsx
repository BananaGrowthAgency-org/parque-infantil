import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import PromoBanner from "@/components/PromoBanner";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Ludykid Le Mans | Parc de jeux indoor enfants (1–12 ans)",
  description:
    "Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1200 m² d'activités, anniversaires clé en main et espace restauration",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body className={`${fredoka.variable} ${nunito.variable} font-nunito bg-white`}>
        <PromoBanner />
        {children}
      </body>
    </html>
  );
}
