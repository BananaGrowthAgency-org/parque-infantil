"use client";

import Image from "next/image";
import ClayButton from "../ui/ClayButton";

export default function HeroTrampoline() {

  return (
    <section className="relative pt-16">
      <div className="relative h-[68vh] min-h-[540px] sm:min-h-[460px]">
        {/* Capa imagen con su propio overflow-hidden */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/home/trampoline.jpg"
            alt="Espace trampoline chez Ludykid Le Mans"
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(232,115,26,0.28) 60%, rgba(255,248,236,0) 100%)",
            }}
          />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#FFF8EC]/0 to-[#FFF8EC] pointer-events-none" />
        </div>

        {/* Capa contenido — sin overflow-hidden para que nunca se recorte */}
        <div className="absolute inset-0 flex items-center justify-center py-10 sm:py-0">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <h1
              className="hero-anim-1 font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-5"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid | Espace{" "}
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Trampoline
              </span>{" "}
              Enfant Le Mans
            </h1>

            <p
              className="hero-anim-2 font-nunito text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-5 sm:mb-7 leading-relaxed"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un espace trampoline pour votre enfant au Mans ? Offrez-lui un espace ludique et sécurisé pour se dépenser et s&apos;amuser chez Ludykid.
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
