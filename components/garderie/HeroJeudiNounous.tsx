"use client";

import Image from "next/image";

export default function HeroJeudiNounous() {

  return (
    <section className="relative bg-[#FFF8EC]">
      <div className="relative" style={{ height: "calc(72vh + 64px)", minHeight: "calc(560px + 64px)" }}>
        {/* Capa imagen */}
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src="/images/img_4094.jpg"
            alt="Jeudi des nounous chez Ludykid Le Mans"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: "center 30%" }}
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.25) 55%, rgba(245,238,255,0) 100%)",
            }}
          />
          <div
            className="pointer-events-none absolute bottom-0 inset-x-0"
            style={{
              height: "min(200px, 30vh)",
              background: "linear-gradient(to bottom, rgba(245,238,255,0), #FFF8EC 85%)",
            }}
          />
        </div>

        {/* Capa contenido */}
        <div className="absolute inset-0 pt-16 flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <h1
              className="hero-anim-1 font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-4"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Le jeudi des nounous{" "}
              <span
                className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow"
                style={{ textShadow: "none" }}
              >
                chez Ludykid
              </span>
            </h1>

            <p
              className="hero-anim-2 font-nunito text-white/90 text-sm sm:text-base md:text-lg leading-relaxed mb-5 sm:mb-8"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              Un jeudi matin par mois réservé aux assistantes maternelles et leurs enfants.
              Jeux, découvertes et partage dans un espace sécurisé au Mans.
            </p>

            <div
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-fredoka font-bold text-white text-sm shadow-clay-sm animate-float" style={{ backgroundColor: "#E8731A" }}>
                💛 6,00 € / enfant
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
