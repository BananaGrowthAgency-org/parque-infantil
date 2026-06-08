"use client";

import Image from "next/image";
import ClayButton from "../ui/ClayButton";

export default function HeroEscape() {

  return (
    <section id="hero-escape" className="relative pt-16 bg-[#F4FBF4]">
      <div className="relative h-[68vh] min-h-[540px] sm:min-h-[460px]">
        {/* Capa imagen con su propio overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/escape-game/hero.png"
            alt="Escape Game enfant chez Ludykid Le Mans"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
            style={{
              WebkitMaskImage:
                "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 88%, rgba(0,0,0,0.55) 96%, transparent 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#F4FBF4]/0 to-[#F4FBF4] pointer-events-none" />
        </div>

        {/* Capa contenido — sin overflow-hidden para que nunca se recorte */}
        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-0">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <h1
              className="hero-anim-1 font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-5"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid |{" "}
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Escape Game
              </span>{" "}
              Enfant Le Mans
            </h1>

            <p
              className="hero-anim-2 font-nunito text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-5 sm:mb-7 leading-relaxed"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un escape game pour votre enfant au Mans ? Offrez-lui une aventure ludique en réalité augmentée qui stimule logique et esprit d&apos;équipe.
            </p>

            <div
              className="hero-anim-3 flex flex-col sm:flex-row items-center justify-center gap-3"
            >
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/anniversaires?lang=fr" tone="orange" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Réserver votre anniversaire
              </ClayButton>
              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="purple" size="lg" className="w-full sm:w-auto" target="_blank" rel="noopener noreferrer">
                Billetterie
              </ClayButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
