import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import PromoBanner from "@/components/PromoBanner";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ludykid.com"),
  title: {
    default: "Ludykid Le Mans | Parc de jeux indoor enfants (1–12 ans)",
    template: "%s",
  },
  description:
    "Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1 200 m² d'activités, anniversaires clé en main et espace restauration.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png" }],
  },
  openGraph: {
    siteName: "Ludykid Le Mans",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/home/tobogan-azul.jpg",
        alt: "Ludykid Le Mans – Parc de jeux indoor enfants",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ludykid Le Mans",
  description:
    "Parc de jeux indoor pour enfants de 1 à 12 ans au Mans. 1 200 m² d'activités couvertes : trampolines, escape game, laser game, accrobranche, espace restauration et anniversaires clé en main.",
  url: "https://www.ludykid.com",
  telephone: "+33243414869",
  email: "contact@ludykid.com",
  image: "https://www.ludykid.com/favicon.png",
  priceRange: "€€",
  currenciesAccepted: "EUR",
  paymentAccepted: "Cash, Credit Card",
  address: {
    "@type": "PostalAddress",
    streetAddress: "284 Route du Petit Bel Œuvre",
    addressLocality: "Ruaudin",
    postalCode: "72230",
    addressCountry: "FR",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Wednesday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Friday",
      opens: "15:00",
      closes: "19:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/ludykid/",
    "https://www.facebook.com/LUDYKIDPlainedejeuxcouverte/",
    "https://www.linkedin.com/company/ludykid/",
    "https://www.youtube.com/@ludykidparc6194/shorts",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        {/* Google Tag Manager */}
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-T3DDG8NL');` }} />
        {/* Preconnect para recursos de terceros críticos */}
        <link rel="preconnect" href="https://elfsightcdn.com" />
        <link rel="dns-prefetch" href="https://elfsightcdn.com" />
        <link rel="preconnect" href="https://storage.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${fredoka.variable} ${nunito.variable} font-nunito bg-white`}>
        {/* Google Tag Manager (noscript) */}
        <noscript dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T3DDG8NL" height="0" width="0" style="display:none;visibility:hidden"></iframe>` }} />
        <PromoBanner />
        {children}
      </body>
    </html>
  );
}
