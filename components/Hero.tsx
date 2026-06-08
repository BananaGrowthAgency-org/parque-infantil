"use client";

import Image from "next/image";
import { m, useReducedMotion } from "framer-motion";
import ClayButton from "./ui/ClayButton";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="inicio" className="relative pt-16 bg-[#FFF4EC]">
      <div className="relative h-[68vh] min-h-[560px] sm:min-h-[520px]">

        {/* Capa media con su propio overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden">

          {/* Poster optimizado via Next.js Image → se convierte a WebP, prioridad alta → fix LCP */}
          <Image
            src="/images/autos.jpg"
            alt="Enfants qui s'amusent à Ludykid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />

          {/* Vídeo encima — cubre el poster en cuanto arranca el autoplay */}
          <video
            src="/images/hero-header.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/25 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#FFF4EC]/0 to-[#FFF4EC] pointer-events-none" />
        </div>

        {/* Capa contenido */}
        <div className="absolute inset-0 flex items-center justify-center pt-8 sm:pt-0">
          <div className="text-center px-4 sm:px-6 w-full max-w-4xl">

            <m.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 sm:mb-4"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid Le Mans | Parc de jeux indoor{" "}
              <span
                className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow"
                style={{ textShadow: "none" }}
              >
                enfants
              </span>{" "}
              (1–12 ans)
            </m.h1>

            <m.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
              className="font-nunito text-sm sm:text-base md:text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-6"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              Plaine de jeux intérieure au Mans : Ludykid accueille les enfants de 1 à 12 ans avec 1200 m² d&apos;activités, anniversaires clé en main et espace restauration
            </m.p>

            <m.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <ClayButton href="/anniversaire" tone="purple" size="lg" className="w-full sm:w-auto">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton
                href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr"
                tone="orange"
                size="lg"
                className="w-full sm:w-auto"
                target="_blank"
                rel="noopener noreferrer"
              >
                Billetterie
              </ClayButton>
            </m.div>

          </div>
        </div>
      </div>
    </section>
  );
}
