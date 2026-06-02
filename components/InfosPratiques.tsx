"use client";

import { useState } from "react";
import Doodle from "./Doodle";
import FadeInUp from "./ui/FadeInUp";
import SquiggleTitle from "./ui/SquiggleTitle";
import Wave from "./Wave";

const HORARIOS = [
  {
    dia: "PERIODE SCOLAIRE",
    hora: "Mercredi, Samedi, Dimanche 10h–19h\nVendredi 15h–19h",
  },
  {
    dia: "VACANCES SCOLAIRES",
    hora:
      "Tous les jours 10h–19h\n(Fermé le 25 décembre et le 1er janvier)\nJuillet et août : 10h–18h, fermé le dimanche",
  },
  { dia: "JOURS FÉRIÉS", hora: "Nous consulter" },
];

const ASABER = [
  { icon: "🧦", text: "Chaussettes obligatoires" },
  { icon: "👨‍👩‍👧", text: "Un adulte accompagnant obligatoire" },
  { icon: "🍰", text: "Goûter autorisé uniquement pour les anniversaires" },
  { icon: "🚫", text: "Pas de nourriture extérieure (hors formules autorisées)" },
];

const FAQS = [
  {
    q: "À partir de quel âge les enfants peuvent venir ?",
    a: "Notre parc accueille les enfants de 1 à 12 ans. Un espace dédié aux 1–3 ans permet aux plus petits de jouer en toute sécurité, séparé des attractions des plus grands.",
  },
  {
    q: "Faut-il réserver à l'avance ?",
    a: "Non, l'accès au parc se fait sans réservation. Nous la recommandons toutefois le weekend et pendant les vacances scolaires pour garantir votre place.",
  },
  {
    q: "Peut-on organiser un anniversaire chez Ludykid ?",
    a: "Oui ! Nous proposons 4 formules d'anniversaires clé en main dès 10,50€ / enfant. Toutes les infos sur la page Anniversaire.",
  },
  {
    q: "Les parents doivent-ils rester sur place ?",
    a: "Oui, un adulte accompagnant est obligatoire. L'entrée est gratuite pour les adultes, qui ont accès à l'espace restauration. L'accès aux attractions est en supplément (5 €).",
  },
  {
    q: "Y a-t-il de quoi manger sur place ?",
    a: "Oui, notre espace restauration propose café et boissons chaudes, boissons fraîches, snacks et goûters — avec vue directe sur les enfants depuis la cafétéria.",
  },
];

export default function InfosPratiques({ showTopWave = true }: { showTopWave?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="infos" className="pb-20 bg-gray-50 relative overflow-hidden">
      {showTopWave && <Wave fill="white" bg="#F9FAFB" flipY />}
      <div className="absolute top-8 right-8 opacity-15 animate-float">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute bottom-10 left-6 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#7B35A0" size={56} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <FadeInUp className="mb-8 sm:mb-12">
          <SquiggleTitle color="#E8731A">Infos pratiques</SquiggleTitle>
        </FadeInUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <FadeInUp delay={0.05}>
            <div
              className="h-full rounded-clay-lg p-4 sm:p-7 shadow-clay-orange transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF4EC" }}
            >
              <h3 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-clay-inset bg-white/70">
                  🕐
                </span>
                <span style={{ color: "#E8731A" }}>Horaires</span>
              </h3>
              <ul className="space-y-4">
                {HORARIOS.map((h) => (
                  <li key={h.dia}>
                    <p className="font-fredoka font-extrabold text-sm" style={{ color: "#E8731A" }}>
                      {h.dia}
                    </p>
                    <p className="font-nunito text-sm text-gray-600">
                      {h.hora.split("\n").map((line, j) => {
                        const BOLD = "Juillet et août :";
                        const node = line.startsWith(BOLD) ? (
                          <span key={j}><strong>{BOLD}</strong>{line.slice(BOLD.length)}</span>
                        ) : (
                          <span key={j}>{line}</span>
                        );
                        return j === 0 ? node : <span key={j}><br />{node.props.children}</span>;
                      })}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.1}>
            <div
              className="h-full rounded-clay-lg p-4 sm:p-7 shadow-clay-purple transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#F5EEFF" }}
            >
              <h3 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-clay-inset bg-white/70">
                  💡
                </span>
                <span style={{ color: "#7B35A0" }}>À savoir</span>
              </h3>
              <ul className="space-y-3">
                {ASABER.map((it) => (
                  <li
                    key={it.text}
                    className="flex items-start gap-3 font-nunito text-sm text-gray-700"
                  >
                    <span
                      className="w-9 h-9 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-clay-inset"
                      style={{ backgroundColor: "#7B35A01F" }}
                    >
                      {it.icon}
                    </span>
                    {it.text}
                  </li>
                ))}
              </ul>
            </div>
          </FadeInUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FadeInUp delay={0.15}>
            <div
              className="h-full flex flex-col rounded-clay-lg p-7 shadow-clay-green transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#EDFAED" }}
            >
              <h3 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-clay-inset bg-white/70">
                  📍
                </span>
                <span style={{ color: "#2E9E2E" }}>Adresse</span>
              </h3>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Ludykid+Ruaudin+72230"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ouvrir l'adresse Ludykid dans Google Maps"
                className="group relative block flex-1 min-h-[220px] rounded-clay overflow-hidden shadow-clay-sm bg-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02]"
              >
                <iframe
                  title="Carte Ludykid Ruaudin"
                  src="https://maps.google.com/maps?q=Ludykid+Ruaudin+72230&z=15&output=embed"
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  style={{ pointerEvents: "none" }}
                />
                <span className="absolute inset-0 ring-2 ring-transparent group-hover:ring-lk-green/40 rounded-clay transition-shadow" />
              </a>

              <p className="mt-5 font-nunito text-sm text-gray-700 leading-relaxed">
                <span className="font-fredoka font-extrabold text-gray-800 text-base">📍 Ruaudin, 72230</span>
                <br />
                Rte du Petit Bel Oeuvre
                <br />
                ZAC des Hunaudières
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div
              className="h-full rounded-clay-lg p-7 shadow-clay-yellow transition-transform duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#FFF8DB" }}
            >
              <h3 className="font-fredoka text-xl font-bold mb-5 flex items-center gap-2">
                <span className="w-10 h-10 rounded-full flex items-center justify-center text-xl shadow-clay-inset bg-white/70">
                  ❓
                </span>
                <span style={{ color: "#E8731A" }}>Questions ?</span>
              </h3>
              <div className="space-y-2">
                {FAQS.map((f, i) => (
                  <div
                    key={f.q}
                    className="rounded-clay overflow-hidden bg-white shadow-clay-sm"
                  >
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-orange-50 transition-colors"
                      aria-expanded={open === i}
                    >
                      <span className="font-fredoka text-sm font-semibold text-gray-800 leading-snug">
                        {f.q}
                      </span>
                      <span
                        className="font-fredoka font-extrabold flex-shrink-0 text-lg transition-transform duration-300"
                        style={{
                          color: "#E8731A",
                          transform: open === i ? "rotate(45deg)" : "none",
                        }}
                      >
                        +
                      </span>
                    </button>
                    <div
                      className="overflow-hidden transition-[max-height] duration-300 ease-out"
                      style={{ maxHeight: open === i ? 240 : 0 }}
                    >
                      <div className="px-4 pb-4 pt-3 font-nunito text-sm text-gray-500 leading-relaxed border-t" style={{ borderColor: "#E8731A25" }}>
                        {f.a}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
