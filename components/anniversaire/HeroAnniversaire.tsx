"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "../ui/ClayButton";

export default function HeroAnniversaire() {
  const reduce = useReducedMotion();

  return (
    <section className="relative pt-16 bg-[#FFF8EC]">
      <div className="relative h-[68vh] min-h-[560px] sm:min-h-[500px]">
        {/* Capa vídeo con su propio overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Poster optimizado → LCP rápido en WebP */}
          <Image
            src="/images/home/cumple.png"
            alt="Anniversaire enfant chez Ludykid"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          {/* Vídeo encima — cubre el poster en cuanto arranca */}
          <video
            src="/images/anniversaire/hero-anniversaire.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(123,53,160,0.35) 60%, rgba(255,255,255,0) 100%)",
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#FFF8EC]/0 to-[#FFF8EC] pointer-events-none" />
        </div>

        {/* Capa contenido — sin overflow-hidden para que nunca se recorte */}
        <div className="absolute inset-0 flex items-center justify-center pt-8 sm:pt-0">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid Le Mans | Anniversaire enfant inoubliable dès{" "}
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                10,50€
              </span>
            </motion.h1>
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
              className="font-nunito text-white/90 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-7"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              Organisez un anniversaire enfant au Mans sans stress. Aire de jeux intérieure couverte. Formules clés en main. Gâteau &amp; fun garantis.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <ClayButton href="#formules" tone="purple" size="lg" className="w-full sm:w-auto">
                Choisissez votre formule
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
