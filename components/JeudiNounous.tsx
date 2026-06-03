"use client";

import { ReactNode } from "react";
import Image from "next/image";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import ClayButton from "./ui/ClayButton";

const BLUE = "#1877F2";

/* ── Section helper ─────────────────────────────────── */
function SectionIntro({
  title,
  desc,
  features,
  cta,
  ctaHref,
  ctaTone,
  image,
  imageAlt,
  reverse = false,
  bg = "white",
  accent = BLUE,
  iconBg = "#E8F4FF",
  shadow = "shadow-clay-blue",
  nextBg,
  tarifBlock,
  ctaDotContent,
  badge,
}: {
  title: ReactNode;
  desc?: string;
  features: { icon: string; label: string; desc?: string }[];
  cta?: string;
  ctaHref?: string;
  ctaTone?: "blue" | "orange" | "purple" | "green" | "yellow";
  image: string;
  imageAlt: string;
  reverse?: boolean;
  bg?: string;
  accent?: string;
  iconBg?: string;
  shadow?: string;
  nextBg?: string;
  tarifBlock?: ReactNode;
  ctaDotContent?: ReactNode;
  badge?: { text: string; bg: string };
}) {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: bg }}>
      <div className="max-w-6xl mx-auto px-6 pb-16 relative">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}>

          {/* Image */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className={`group relative h-full min-h-[380px] rounded-clay-lg overflow-hidden ${shadow} transition-transform duration-500 hover:-translate-y-1`}>
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {badge && (
                <div className="absolute bottom-5 left-5">
                  <span
                    className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                    style={{ backgroundColor: badge.bg }}
                  >
                    {badge.text}
                  </span>
                </div>
              )}
            </div>
          </FadeInUp>

          {/* Card */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <div className="bg-white rounded-clay-lg shadow-clay p-7 h-full flex flex-col">
              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                {title}
              </h2>
              {desc && (
                <p className="font-nunito text-gray-500 text-sm leading-relaxed mb-5">{desc}</p>
              )}
              <ul className="space-y-3 mb-4 flex-1">
                {features.map((f) => (
                  <li key={f.label} className={`flex gap-3 ${f.desc?.startsWith("—") ? "items-center" : "items-start"}`}>
                    <span
                      className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                      style={{ backgroundColor: iconBg }}
                    >
                      {f.icon}
                    </span>
                    <span className="font-nunito text-sm text-gray-700 leading-snug">
                      {f.desc?.startsWith("—") ? (
                        <span>
                          <span className="font-bold text-gray-800">{f.label}</span>
                          {" "}
                          <span className="text-gray-500">{f.desc}</span>
                        </span>
                      ) : (
                        <>
                          <span className="font-bold block text-gray-800">{f.label}</span>
                          {f.desc && <span className="text-gray-500">{f.desc}</span>}
                        </>
                      )}
                    </span>
                  </li>
                ))}
              </ul>
              {tarifBlock && (
                <div className="mb-5">{tarifBlock}</div>
              )}
              {cta && ctaHref && ctaTone && (
                <div>
                  <ClayButton href={ctaHref} tone={ctaTone} size="md" dotContent={ctaDotContent}>
                    {cta}
                  </ClayButton>
                </div>
              )}
            </div>
          </FadeInUp>
        </div>
      </div>
      {nextBg && <Wave fill={nextBg} bg={bg} />}
    </section>
  );
}

/* ── Main component ─────────────────────────────────── */
export default function JeudiNounous() {
  return (
    <>
      {/* 1. Nounous */}
      <SectionIntro
        title={<>Le rendez-vous mensuel <span style={{ color: "#E8731A" }}>des Nounous</span> 👩‍🍼</>}
        desc="Nous proposons aux assistantes maternelles un jeudi matin par mois l'accès à notre parc sur un temps qui leur est réservé, au tarif de 6€ par enfant de plus d'un an."
        features={[
          { icon: "📅", label: "Un jeudi matin par mois",  desc: "Un moment dédié rien que pour vous et les enfants." },
          { icon: "👫", label: "De 0 à 12 ans",            desc: "Une activité adaptée à tous les âges pour s'amuser en toute sécurité." },
          { icon: "🎟️", label: "Tarif",                    desc: "6,00 € par enfant de plus d'un an." },
          { icon: "🎁", label: "Un temps privilégié",      desc: "Pour jouer, se dépenser et partager de bons moments." },
        ]}
        cta="Contactez-nous pour plus d'infos !"
        ctaHref="tel:+33243414869"
        ctaTone="orange"
        ctaDotContent={<span className="text-base leading-none">📞</span>}
        image="/images/img_4094.jpg"
        imageAlt="Enfants s'amusant à Ludykid lors du jeudi des nounous"
        badge={{ text: "💛 6,00 € / enfant", bg: "#E8731A" }}
        bg="#FFF8EC"
        accent="#E8731A"
        iconBg="#FFF0E0"
        shadow="shadow-clay-orange"
        nextBg="#EDFAED"
      />

      {/* 2. Grands */}
      <SectionIntro
        title="Un parc de jeux indoor pour les plus grands (4–12 ans)"
        desc="Une aire de jeux intérieure géante pour se défouler : vos enfants grimpent, sautent, courent et relèvent des défis… sans jamais s'ennuyer. Ici, ils dépensent toute leur énergie et ressortent avec des étoiles plein les yeux."
        features={[
          { icon: "🤸", label: "Aventure",          desc: "— parcours, accrobranche, pont de singe" },
          { icon: "⚡", label: "Fun & sensations",   desc: "— trampolines, toboggans, bouées" },
          { icon: "🧠", label: "Jeux & défis",       desc: "— laser game, escape game" },
          { icon: "🎮", label: "Interactif",         desc: "— aire de jeux digitale" },
        ]}
        image="/images/home/accrobranche-hero.jpg"
        imageAlt="Parc de jeux indoor pour les grands chez Ludykid"
        badge={{ text: "🧗 4–12 ans", bg: "#2E9E2E" }}
        bg="#EDFAED"
        accent="#2E9E2E"
        iconBg="#E0F5E0"
        shadow="shadow-clay-green"
        nextBg="#FFF8DB"
      />

      {/* 3. Petits */}
      <SectionIntro
        title="Une aire de jeux intérieur pour les petits (1–3 ans)"
        desc="Vos enfants découvrent le parc intérieur, explorent et s'amusent en toute sécurité, à leur rythme… Et vous profitez d'un moment de tranquillité."
        features={[
          { icon: "🌿", label: "Motricité",              desc: "— parcours adapté, jeux de construction" },
          { icon: "🟡", label: "Éveil sensoriel",        desc: "— piscine à balles" },
          { icon: "🛝", label: "Glisse douce",           desc: "— toboggans" },
          { icon: "🛵", label: "Jeux mobiles",           desc: "— petites motos" },
          { icon: "🔒", label: "Exploration sécurisée",  desc: "— parcours aventures adapté" },
        ]}
        image="/images/pelotas2.jpg"
        imageAlt="Aire de jeux pour les petits chez Ludykid"
        badge={{ text: "🎈 1–3 ans", bg: "#B8940A" }}
        reverse
        bg="#FFF8DB"
        accent="#E8731A"
        iconBg="#FFF5C0"
        shadow="shadow-clay-yellow"
        nextBg="white"
      />
    </>
  );
}
