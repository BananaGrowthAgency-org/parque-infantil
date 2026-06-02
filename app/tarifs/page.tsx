import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Doodle from "@/components/Doodle";
import FadeInUp from "@/components/ui/FadeInUp";
import SquiggleTitle from "@/components/ui/SquiggleTitle";
import ClayButton from "@/components/ui/ClayButton";
import MapaModal from "@/components/tarifs/MapaModal";

export const metadata = {
  title: "Tarifs & Horaires · Ludykid Le Mans",
  description:
    "Découvrez les tarifs et horaires du parc Ludykid au Mans. Entrées pour enfants de 1 à 12 ans, cartes 10 entrées, tarifs groupes et accompagnateurs.",
  openGraph: {
    title: "Tarifs & Horaires · Ludykid Le Mans",
    description: "Découvrez les tarifs et horaires du parc Ludykid au Mans. Entrées pour enfants de 1 à 12 ans, cartes 10 entrées, tarifs groupes et accompagnateurs.",
    url: "https://www.ludykid.com/tarifs",
    images: [{ url: "/images/home/tobogan-azul.jpg", alt: "Tarifs Ludykid Le Mans" }],
  },
  alternates: { canonical: "https://www.ludykid.com/tarifs" },
};

const HORARIOS = [
  {
    dia: "PÉRIODE SCOLAIRE",
    hora: "Mercredi, Samedi, Dimanche 10h–19h\nVendredi 15h–19h",
  },
  {
    dia: "VACANCES SCOLAIRES",
    hora: "Tous les jours 10h–19h\n(Fermé le 25 décembre et le 1er janvier)\nJuillet et août : 10h–18h, fermé le dimanche",
  },
  {
    dia: "JOURS FÉRIÉS",
    hora: "Nous consulter\nFermé Noël, jour de l'an, jours fériés selon météo et événements",
  },
];

const TARIFS_1_3 = [
  { label: "30 minutes",      prix: "3,50 €" },
  { label: "1 heure",         prix: "6 €" },
  { label: "Durée illimitée", prix: "7,50 €" },
  { label: "Carte 10 entrées", prix: "65 €" },
];

const TARIFS_4_12 = [
  { label: "30 minutes",      prix: "4,50 €" },
  { label: "1 heure",         prix: "7,50 €" },
  { label: "Durée illimitée", prix: "10,50 €" },
  { label: "Carte 10 entrées", prix: "90 €" },
];

const BOLD_PREFIX = "Juillet et août :";

function HoraireText({ text }: { text: string }) {
  return (
    <p className="font-nunito text-sm text-gray-600">
      {text.split("\n").map((line, j) => {
        const node = line.startsWith(BOLD_PREFIX) ? (
          <span key={j}><strong>{BOLD_PREFIX}</strong>{line.slice(BOLD_PREFIX.length)}</span>
        ) : (
          <span key={j}>{line}</span>
        );
        return j === 0 ? node : <span key={`br-${j}`}><br />{node.props.children}</span>;
      })}
    </p>
  );
}

function PriceRow({
  label,
  prix,
  accent,
  even,
}: {
  label: string;
  prix: string;
  accent: string;
  even: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between px-5 py-3 rounded-clay"
      style={{ backgroundColor: even ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.3)" }}
    >
      <span className="font-nunito text-sm text-gray-700">{label}</span>
      <span className="font-fredoka font-extrabold text-base" style={{ color: accent }}>
        {prix}
      </span>
    </div>
  );
}

export default function TarifsPage() {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-4 px-6 overflow-hidden">
        <div className="absolute top-16 left-8 opacity-20 animate-float pointer-events-none">
          <Doodle type="star" color="#FFD600" size={70} />
        </div>
        <div className="absolute top-28 right-10 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="circle" color="#E8731A" size={60} />
        </div>
        <div className="absolute bottom-0 right-1/4 opacity-10 animate-float-slow pointer-events-none">
          <Doodle type="star2" color="#7B35A0" size={50} />
        </div>
        <FadeInUp>
          <SquiggleTitle color="#E8731A">Tarifs &amp; Horaires</SquiggleTitle>
        </FadeInUp>
      </section>

      {/* Horaires + notes */}
      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Carte horaires */}
          <FadeInUp delay={0.05}>
            <div className="h-full rounded-clay-lg p-7 shadow-clay-orange border-[3px] border-lk-orange bg-[#FFF4EC]">
              <h2 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-white/70 shadow-clay-inset flex items-center justify-center text-xl">
                  🕐
                </span>
                <span className="text-lk-orange">Nos horaires</span>
              </h2>
              <ul className="space-y-4">
                {HORARIOS.map((h) => (
                  <li key={h.dia}>
                    <p className="font-fredoka font-extrabold text-sm text-lk-orange mb-0.5">
                      {h.dia}
                    </p>
                    <HoraireText text={h.hora} />
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          {/* Carte infos utiles */}
          <FadeInUp delay={0.1}>
            <div className="h-full rounded-clay-lg p-7 shadow-clay-purple border-[3px] border-lk-purple bg-[#F5EEFF]">
              <h2 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full bg-white/70 shadow-clay-inset flex items-center justify-center text-xl">
                  💡
                </span>
                <span className="text-lk-purple">Bon à savoir</span>
              </h2>
              <ul className="space-y-4 font-nunito text-sm text-gray-700">
                <li className="flex gap-3">
                  <span className="text-lg">🎟️</span>
                  <span><strong className="text-lk-purple">6,50 € les vendredis de 15h à 19h</strong> (hors vacances scolaires et week-ends de pont)</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg">👦</span>
                  <span>Tarif identique aux 4–12 ans pour les <strong>ados accompagnateurs jusqu'à 14 ans</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg">👨‍👩‍👧</span>
                  <span><strong>Accompagnateurs : 1 € par personne</strong></span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg">⭐</span>
                  <span>Pensez à demander la <strong>carte de fidélité</strong> — cadeau offert à 50 pts, une entrée offerte à 120 pts</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lg">💳</span>
                  <span>Paiements acceptés : <strong>carte bancaire, espèces, chèques vacances</strong></span>
                </li>
              </ul>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* Tarifs */}
      <section className="px-6 pb-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Fila gratuita — ocupa las 2 columnas */}
            <FadeInUp delay={0.05} className="md:col-span-2">
              <div className="flex items-center justify-between gap-4 rounded-clay-lg bg-[#FFF8CC] border-[3px] border-lk-yellow px-6 py-4 shadow-clay-yellow">
                <div className="flex items-center gap-4">
                  <span className="text-3xl">🎉</span>
                  <div>
                    <p className="font-fredoka font-extrabold text-[#3A2A00] text-lg leading-tight">Moins de 1 an</p>
                    <p className="font-nunito text-sm text-[#3A2A00]/70">Entrée totalement gratuite</p>
                  </div>
                </div>
                <span className="font-fredoka font-extrabold text-2xl text-[#3A2A00]">Gratuit</span>
              </div>
            </FadeInUp>

            {/* 1–3 ans */}
            <FadeInUp delay={0.08}>
              <div className="rounded-clay-lg overflow-hidden shadow-clay-purple border-[3px] border-lk-purple">
                <div className="bg-lk-purple px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">🧒</span>
                  <h3 className="font-fredoka text-lg font-extrabold text-white">
                    Enfants de 1 à 3 ans
                  </h3>
                </div>
                <div className="bg-[#F5EEFF] p-3 space-y-2">
                  {TARIFS_1_3.map((row, i) => (
                    <PriceRow key={row.label} {...row} accent="#7B35A0" even={i % 2 === 0} />
                  ))}
                </div>
              </div>
            </FadeInUp>

            {/* 4–12 ans */}
            <FadeInUp delay={0.13}>
              <div className="rounded-clay-lg overflow-hidden shadow-clay-green border-[3px] border-lk-green">
                <div className="bg-lk-green px-6 py-4 flex items-center gap-3">
                  <span className="text-2xl">🧗</span>
                  <h3 className="font-fredoka text-lg font-extrabold text-white">
                    Enfants de 4 à 12 ans
                  </h3>
                </div>
                <div className="bg-[#EAF8EA] p-3 space-y-2">
                  {TARIFS_4_12.map((row, i) => (
                    <PriceRow key={row.label} {...row} accent="#2E9E2E" even={i % 2 === 0} />
                  ))}
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* Plan d'accès */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">
          <FadeInUp>
            <div className="rounded-clay-lg overflow-hidden shadow-clay border-[3px] border-lk-yellow">
              <div className="bg-lk-yellow px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">📍</span>
                <h2 className="font-fredoka text-xl font-extrabold text-[#3A2A00]">
                  Plan d&apos;accès
                </h2>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Ludykid+Ruaudin+72230"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir Ludykid dans Google Maps"
                className="group relative block w-full overflow-hidden"
                style={{ height: 340 }}
              >
                <iframe
                  src="https://maps.google.com/maps?q=Ludykid+Ruaudin+72230&z=15&output=embed"
                  className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                  loading="lazy"
                  title="Plan d'accès Ludykid"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="absolute inset-0 flex items-end justify-center pb-5 bg-transparent group-hover:bg-black/10 transition-colors duration-300">
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-fredoka font-bold text-sm text-[#3A2A00] px-4 py-2 rounded-clay shadow-clay-yellow flex items-center gap-2" style={{ backgroundColor: "#FFD600" }}>
                    📍 Ouvrir dans Google Maps
                  </span>
                </div>
              </a>

              {/* Carte de la zone */}
              <div className="bg-white border-t border-gray-100 px-6 py-5 flex flex-col sm:flex-row items-center gap-5">
                <MapaModal />
                <p className="font-nunito text-gray-600 text-sm leading-relaxed">
                  <strong className="text-gray-900 block mb-1">Ludykid</strong>
                  Ruaudin, 72230 Le Mans<br />
                  <span className="text-xs text-gray-400">À côté de Décathlon et Antarès</span>
                </p>
              </div>
            </div>
          </FadeInUp>
        </div>
      </section>

      <Footer waveBg="#F9FAFB" />
    </main>
  );
}
