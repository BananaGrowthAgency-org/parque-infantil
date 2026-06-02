"use client";

import Image from "next/image";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import SquiggleTitle from "./ui/SquiggleTitle";
import ClayButton from "./ui/ClayButton";

const BRAND = "#E8731A";

const FEATURES = [
  { icon: "🧩", label: "Parcours de motricité",           desc: "adapté aux tout-petits" },
  { icon: "🟡", label: "Piscine à balles",                desc: "éveil sensoriel" },
  { icon: "🛝", label: "Toboggan",                        desc: "glisse douce et sécurisée" },
  { icon: "🧱", label: "Blocs de construction",           desc: "créativité & imagination" },
  { icon: "🛵", label: "Petites motos",                   desc: "jeux mobiles encadrés" },
  { icon: "🔒", label: "Parcours aventures sécurisé",     desc: "en toute sérénité" },
];

const GALLERY = [
  { src: "/images/home/seccion1.jpg",     alt: "Bébé dans la piscine à balles" },
  { src: "/images/pelotas2.jpg",     alt: "Piscine à balles interactive" },
  { src: "/images/tunel.jpg",        alt: "Tunnel d'exploration" },
  { src: "/images/home/tobogan-azul.jpg", alt: "Toboggans bleus" },
  { src: "/images/tobogan-tubo.jpg", alt: "Toboggan tube" },
  { src: "/images/img_4095.jpg",     alt: "Espace famille" },
];

export default function EspacePetits() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-[#FFF4EC] pb-0">
        {/* Doodles */}
        <div className="absolute top-4 left-4 opacity-20 animate-float pointer-events-none">
          <Doodle type="star" color={BRAND} size={64} />
        </div>
        <div className="absolute top-16 right-10 opacity-15 animate-wiggle pointer-events-none">
          <Doodle type="circle" color="#7B35A0" size={52} />
        </div>
        <div className="absolute bottom-20 left-20 opacity-15 animate-float-slow pointer-events-none">
          <Doodle type="swirl" color="#2E9E2E" size={50} />
        </div>
        <div className="absolute bottom-10 right-16 opacity-20 animate-wiggle pointer-events-none" style={{ animationDelay: "0.5s" }}>
          <Doodle type="star2" color={BRAND} size={46} />
        </div>

        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16">

          {/* Título */}
          <FadeInUp y={18} className="text-center mb-4">
            <SquiggleTitle color={BRAND}>Espace 1–3 ans 🧸</SquiggleTitle>
          </FadeInUp>

          {/* Accroche */}
          <FadeInUp y={14} delay={0.1} className="text-center mb-10 max-w-2xl mx-auto">
            <p className="font-nunito text-gray-500 text-base leading-relaxed">
              Un espace intérieur entièrement dédié aux tout-petits, pensé pour explorer, jouer et s&apos;éveiller
              en toute sécurité… pendant que vous soufflez tranquillement.
            </p>
          </FadeInUp>

          {/* Hero image + features */}
          <div className="flex flex-col md:flex-row gap-8 items-stretch mb-12">
            {/* Image principale */}
            <FadeInUp className="w-full md:w-1/2" y={24}>
              <div className="group relative h-full min-h-[360px] rounded-clay-lg overflow-hidden shadow-clay-orange">
                <Image
                  src="/images/home/seccion1.jpg"
                  alt="Bébé dans la piscine à balles chez Ludykid"
                  fill
                  className="object-cover object-[center_35%] transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute bottom-5 left-5">
                  <span
                    className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                    style={{ backgroundColor: BRAND }}
                  >
                    👶 Dès 3,50 € / enfant
                  </span>
                </div>
              </div>
            </FadeInUp>

            {/* Features */}
            <FadeInUp className="w-full md:w-1/2" delay={0.12} y={24}>
              <div className="rounded-clay-lg border-[3px] border-lk-orange/30 bg-white shadow-clay-orange p-6 h-full">
                <h2 className="font-fredoka font-extrabold text-2xl text-gray-800 mb-2">
                  Un monde de jeux taillé pour eux
                </h2>
                <p className="font-nunito text-sm text-gray-500 mb-6 leading-relaxed">
                  Vos enfants découvrent le parc intérieur, explorent et s&apos;amusent en toute sécurité, à leur rythme.
                  Et vous profitez d&apos;un moment de tranquillité.
                </p>
                <ul className="space-y-3">
                  {FEATURES.map((f, i) => (
                    <FadeInUp key={f.label} y={10} delay={0.16 + i * 0.05}>
                      <li className="flex items-center gap-3">
                        <span
                          className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                          style={{ backgroundColor: BRAND + "1F" }}
                        >
                          {f.icon}
                        </span>
                        <span className="font-nunito text-sm text-gray-700">
                          <span className="font-bold" style={{ color: BRAND }}>{f.label}</span>
                          {f.desc && <span className="text-gray-500"> — {f.desc}</span>}
                        </span>
                      </li>
                    </FadeInUp>
                  ))}
                </ul>
              </div>
            </FadeInUp>
          </div>

          {/* Encart sécurité */}
          <FadeInUp y={16} delay={0.2} className="mb-12">
            <div className="rounded-clay-lg border-[3px] border-[#2E9E2E]/30 bg-[#EDFAED] p-6 flex flex-col sm:flex-row gap-5 items-start">
              <span className="text-4xl shrink-0">🛡️</span>
              <div>
                <h3 className="font-fredoka font-extrabold text-[#2E9E2E] text-lg mb-1">
                  Sécurité avant tout
                </h3>
                <p className="font-nunito text-sm text-gray-600 leading-relaxed">
                  Notre espace 1–3 ans est entièrement cloisonné et surveillé. Les structures sont adaptées
                  à la taille et aux capacités des tout-petits. Nos animateurs sont présents en permanence
                  pour garantir un environnement sûr et bienveillant.
                </p>
              </div>
            </div>
          </FadeInUp>

          {/* Galerie */}
          <FadeInUp y={14} delay={0.24} className="mb-12">
            <h2 className="font-fredoka font-extrabold text-2xl text-gray-800 mb-6 text-center">
              Découvrez l&apos;espace en photos 📸
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {GALLERY.map((img, i) => (
                <FadeInUp key={img.src} y={12} delay={0.28 + i * 0.06}>
                  <div className="group relative aspect-[4/3] rounded-clay-lg overflow-hidden shadow-clay">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                </FadeInUp>
              ))}
            </div>
          </FadeInUp>

          {/* CTA */}
          <FadeInUp y={12} delay={0.3} className="flex flex-wrap justify-center gap-4">
            <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="orange" size="lg" target="_blank" rel="noopener noreferrer">
              Réserver maintenant
            </ClayButton>
            <ClayButton href="/tarifs" tone="yellow" size="lg">
              Voir les tarifs
            </ClayButton>
          </FadeInUp>
        </div>
      </section>

      <Wave fill="#F9FAFB" bg="#FFF4EC" />
    </>
  );
}
