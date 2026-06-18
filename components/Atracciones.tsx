"use client";

import Image from "next/image";
import Doodle from "./Doodle";
import FadeInUp from "./ui/FadeInUp";
import ClayCard from "./ui/ClayCard";
import ClayButton from "./ui/ClayButton";

type Tone = "orange" | "purple" | "green" | "yellow" | "blue";

const secciones = [
  {
    titulo: "Une aire de jeux intérieure pour les petits (1–3 ans)",
    descripcion:
      "Vos enfants découvrent le parc intérieur, explorent et s'amusent en toute sécurité, à leur rythme…\nEt vous profitez d'un moment de tranquillité.",
    items: [
      { icon: "🧩", label: "Motricité", desc: "parcours adapté, jeux de construction" },
      { icon: "🟡", label: "Éveil sensoriel", desc: "piscine à balles" },
      { icon: "🛝", label: "Glisse douce", desc: "toboggans" },
      { icon: "🛵", label: "Jeux mobiles", desc: "petites motos" },
      { icon: "🔒", label: "Exploration sécurisée", desc: "parcours aventures adapté" },
    ],
    precio: "Dès 3,50€ / enfant",
    imagen: "/images/home/seccion1.jpg",
    alt: "Bébé dans la piscine à balles",
    invertida: false,
    color: "#E8731A",
    bgLight: "#FFF4EC",
    doodle: { type: "star" as const, color: "#E8731A" },
    objectPosition: "center 35%",
    cta: "Réserver maintenant",
    ctaHref: "https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr",
    claySh: "shadow-clay-orange",
    tone: "orange" as Tone,
  },
  {
    titulo: "Un parc de jeux indoor pour les plus grands (4–12 ans)",
    descripcion:
      "Une aire de jeux intérieure géante pour se défouler : vos enfants grimpent, sautent, courent et relèvent des défis… sans jamais s'ennuyer.\nIci, ils dépensent toute leur énergie et ressortent avec des étoiles plein les yeux.",
    items: [
      { icon: "🏋️", label: "Aventure", desc: "parcours, accrobranche, pont de singe" },
      { icon: "⚡", label: "Fun & sensations", desc: "trampolines, toboggans, bouées" },
      { icon: "🧠", label: "Jeux & défis", desc: "laser game, escape game" },
      { icon: "🎮", label: "Interactif", desc: "aire de jeux digitale" },
    ],
    precio: "Dès 4,50€ / enfant",
    imagen: "/images/home/seccion2.jpg",
    alt: "Fille sur la structure multi-jeux",
    invertida: true,
    color: "#7B35A0",
    bgLight: "#F5EEFF",
    doodle: { type: "swirl" as const, color: "#7B35A0" },
    objectPosition: "center center",
    cta: "Réserver maintenant",
    ctaHref: "https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr",
    claySh: "shadow-clay-purple",
    tone: "purple" as Tone,
  },
  {
    titulo: "Restauration sur place pour une vraie pause gourmande",
    descripcion:
      "Installez-vous, profitez d'une pause gourmande… pendant que vos enfants s'amusent en toute sécurité.\n👉 Sur place, tout est prévu pour passer un vrai moment agréable en famille.",
    items: [
      { icon: "☕", label: "Café & boissons chaudes", desc: "thés, infusions" },
      { icon: "🧃", label: "Boissons fraîches", desc: "& gourmandises" },
      { icon: "🍟", label: "Snack", desc: "sur place" },
      { icon: "🍰", label: "Pause goûter", desc: "idéale en famille" },
      { icon: "👀", label: "Vue sur les enfants", desc: "depuis la cafétéria" },
    ],
    precio: "",
    imagen: "/images/home/bar.jpg",
    alt: "Espace restauration Ludykid",
    invertida: true,
    color: "#FFD600",
    bgLight: "#FFF9E0",
    doodle: { type: "dots" as const, color: "#FFD600" },
    objectPosition: "center center",
    cta: "En savoir plus",
    ctaHref: "/restauration",
    claySh: "shadow-clay-yellow",
    tone: "yellow" as Tone,
  },
  {
    titulo: "Un espace trampoline au Mans",
    descripcion:
      "Sauts, rebonds, figures… les enfants adorent notre espace trampoline park.\n👉 Un terrain de jeu dynamique pour se dépenser à fond, en toute sécurité.",
    items: [
      { icon: "⚡", label: "2 Grands trampolines", desc: "" },
      { icon: "🎂", label: "Activité idéale pour anniversaire", desc: "" },
      { icon: "🐣", label: "À partir de 4 ans", desc: "" },
      { icon: "🔒", label: "Fun et sécurisé", desc: "" },
    ],
    precio: "inclus dans l'entrée au parc",
    imagen: "/images/home/seccion3.jpg",
    alt: "Enfant qui saute sur un trampoline",
    invertida: true,
    color: "#E8731A",
    bgLight: "#FFF4EC",
    doodle: { type: "zigzag" as const, color: "#E8731A" },
    objectPosition: "center 20%",
    cta: "En savoir plus",
    ctaHref: "/trampoline-park-le-mans",
    claySh: "shadow-clay-orange",
    tone: "orange" as Tone,
  },
  {
    titulo: "Laser game enfant au Mans",
    descripcion:
      "Un jeu d'action fun et sans danger où les enfants visent, esquivent et marquent des points en équipe.\nParfait pour se défouler et passer un super moment !",
    items: [
      { icon: "🎯", label: "Accessible dès 5 ans", desc: "" },
      { icon: "👥", label: "Minimum 2 joueurs", desc: "" },
      { icon: "⏱️", label: "Session de 10 minutes", desc: "" },
      { icon: "💰", label: "Prix par joueur", desc: "" },
    ],
    pricing: [
      { label: "1 partie", price: "3€" },
      { label: "5 parties", price: "14€" },
      { label: "8 parties", price: "20€" },
    ],
    precio: "",
    imagen: "/images/laser-game/laser-game.jpg",
    alt: "Laser game enfant Ludykid",
    invertida: false,
    color: "#7B35A0",
    bgLight: "#F5EEFF",
    doodle: { type: "zigzag" as const, color: "#7B35A0" },
    objectPosition: "center center",
    cta: "En savoir plus",
    ctaHref: "/laser-game-le-mans",
    claySh: "shadow-clay-purple",
    tone: "purple" as Tone,
  },
  {
    titulo: "Escape game enfant en réalité augmentée",
    descripcion:
      "Résolvez des énigmes en équipe avec une tablette et vivez une aventure immersive pleine de défis !",
    items: [
      { icon: "🥽", label: "Escape game en réalité augmentée", desc: "" },
      { icon: "🎂", label: "Accessible dès 9 ans", desc: "" },
      { icon: "👥", label: "À faire en équipe", desc: "min. 2 joueurs" },
      { icon: "🎉", label: "Idéal anniversaire", desc: "" },
      { icon: "💰", label: "3€ la partie par enfant", desc: "" },
    ],
    precio: "",
    imagen: "/images/escape-game/escape-game.png",
    alt: "Escape game en réalité augmentée Ludykid",
    invertida: true,
    color: "#2E9E2E",
    bgLight: "#E8FAE8",
    doodle: { type: "swirl" as const, color: "#2E9E2E" },
    objectPosition: "center center",
    cta: "En savoir plus",
    ctaHref: "/escape-game-le-mans",
    claySh: "shadow-clay-green",
    tone: "green" as Tone,
  },
  {
    titulo: "Accrobranche enfant",
    descripcion:
      "Prenez de la hauteur et faites le tour de la piste de bumpers ! Un parcours ludique avec ponts, passerelles et obstacles d'équilibre pour se dépasser en toute sécurité.",
    items: [
      { icon: "🧒", label: "De 4 à 12 ans", desc: "" },
      { icon: "🔄", label: "Fait le tour de la piste de bumpers", desc: "" },
      { icon: "⚖️", label: "Plusieurs éléments d'équilibre", desc: "" },
      { icon: "🔒", label: "Sécurité ++", desc: "" },
      { icon: "🎮", label: "Inclus dans la structure de jeux 4-12 ans", desc: "" },
    ],
    precio: "",
    imagen: "/images/accrobranche.jpg",
    alt: "Accrobranche enfant Ludykid",
    invertida: false,
    color: "#FFD600",
    bgLight: "#FFF6E0",
    doodle: { type: "star" as const, color: "#FFD600" },
    objectPosition: "center center",
    cta: "En savoir plus",
    ctaHref: "/accrobranche-le-mans",
    claySh: "shadow-clay-yellow",
    tone: "yellow" as Tone,
  },
];

type Props = {
  from?: number;
  to?: number;
  lastBg?: string;
  sectionId?: string;
};

export default function Atracciones({ from = 0, to = secciones.length, lastBg = "#FFF0FA", sectionId }: Props) {
  const slice = secciones.slice(from, to);
  return (
    <section id={sectionId}>
      {slice.map((s, i) => (
        <div key={s.titulo} id={`seccion-${from + i}`} className="relative py-16" style={{ backgroundColor: s.bgLight }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-6 left-4 opacity-20 animate-float">
              <Doodle type={s.doodle.type} color={s.doodle.color} size={64} />
            </div>
            <div className="absolute top-10 right-8 opacity-15 animate-wiggle">
              <Doodle type="star" color={s.color} size={52} />
            </div>
            <div className="absolute bottom-6 left-20 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
              <Doodle type="circle" color={s.color} size={44} />
            </div>
            <div className="absolute bottom-8 right-16 opacity-20 animate-wiggle" style={{ animationDelay: "0.6s" }}>
              <Doodle type={s.doodle.type} color={s.doodle.color} size={50} />
            </div>
          </div>

          <div className="max-w-6xl mx-auto px-6 relative">
            <div className={`flex flex-col ${s.invertida ? "md:flex-row-reverse" : "md:flex-row"} gap-8 items-stretch`}>
              {/* Imagen — clay frame */}
              <FadeInUp className="w-full md:w-1/2" delay={0} y={28}>
                <div className={`group relative h-full min-h-[340px] rounded-clay-lg overflow-hidden ${s.claySh} transition-transform duration-500 hover:-translate-y-1`}>
                  <Image
                    src={s.imagen}
                    alt={s.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    style={{ objectPosition: s.objectPosition }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {s.precio && (
                    <div className="absolute bottom-5 left-5">
                      <span
                        className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                        style={{ backgroundColor: s.color }}
                      >
                        👉 {s.precio}
                      </span>
                    </div>
                  )}
                </div>
              </FadeInUp>

              {/* Texto — clay card */}
              <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
                <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
                  <div className="absolute top-5 right-5 opacity-25">
                    <Doodle type={s.doodle.type} color={s.doodle.color} size={56} />
                  </div>

                  <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                    {s.titulo}
                  </h2>
                  <p className="font-nunito text-gray-500 leading-relaxed mb-6 text-sm whitespace-pre-line">
                    {s.descripcion}
                  </p>

                  <ul className="space-y-3 mb-7">
                    {s.items.map((item, idx) => (
                      <FadeInUp key={item.label} delay={0.2 + idx * 0.05} y={12}>
                        <li className="flex items-center gap-3">
                          <span
                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                            style={{ backgroundColor: s.color + "1F" }}
                          >
                            {item.icon}
                          </span>
                          <span className="font-nunito text-sm text-gray-700">
                            <span className="font-bold" style={{ color: s.color }}>{item.label}</span>
                            {item.desc && <span className="text-gray-500"> — {item.desc}</span>}
                          </span>
                        </li>
                      </FadeInUp>
                    ))}
                  </ul>

                  {"pricing" in s && Array.isArray(s.pricing) && s.pricing.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {(s.pricing as { label: string; price: string }[]).map((p) => (
                        <span
                          key={p.label}
                          className="font-fredoka font-bold text-sm px-4 py-1.5 rounded-full shadow-clay-inset"
                          style={{ backgroundColor: s.color + "22", color: s.color }}
                        >
                          {p.label} : {p.price}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3">
                    <ClayButton href={s.ctaHref} tone={s.tone} size="md" {...(s.ctaHref.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
                      {s.cta}
                    </ClayButton>
                    {"cta2" in s && (s as unknown as { cta2: string; ctaHref2: string }).cta2 && (
                      <ClayButton href={(s as unknown as { cta2: string; ctaHref2: string }).ctaHref2} tone="orange-outline" size="md">
                        {(s as unknown as { cta2: string; ctaHref2: string }).cta2}
                      </ClayButton>
                    )}
                  </div>
                </ClayCard>
              </FadeInUp>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 leading-none">
            <svg
              viewBox="0 0 1440 80"
              preserveAspectRatio="none"
              className="w-full h-16 block"
              fill={i < slice.length - 1 ? slice[i + 1].bgLight : lastBg}
            >
              <path d="M0,40 C180,80 360,0 540,50 C720,80 900,0 1080,45 C1260,80 1380,10 1440,35 L1440,80 L0,80 Z" />
            </svg>
          </div>
        </div>
      ))}
    </section>
  );
}
