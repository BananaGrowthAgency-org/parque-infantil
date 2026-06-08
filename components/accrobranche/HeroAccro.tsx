"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import ClayButton from "../ui/ClayButton";

export default function HeroAccro() {
  const reduce = useReducedMotion();

  return (
    <section id="hero-accro" className="relative pt-16 bg-[#FFF8CC]">
      <div className="relative h-[68vh] min-h-[540px] sm:min-h-[460px]">
        {/* Capa imagen con su propio overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/accrobranche-hero.jpg"
            alt="Accrobranche indoor enfant chez Ludykid Le Mans"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#FFF8CC]/0 to-[#FFF8CC] pointer-events-none" />
        </div>

        {/* Capa contenido — sin overflow-hidden para que nunca se recorte */}
        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-0">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-5"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid | Parc{" "}
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Accrobranche
              </span>{" "}
              Indoor Le Mans
            </motion.h1>

            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-nunito text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-5 sm:mb-7 leading-relaxed"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un accrobranche pour votre enfant au Mans ? Offrez-lui un parcours ludique et sécurisé pour développer agilité et confiance chez Ludykid.
            </motion.p>

            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/anniversaires?lang=fr" tone="orange" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="purple" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Billetterie
              </ClayButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
