"use client";

import Image from "next/image";

export default function HeroLaser() {

  return (
    <section id="hero-laser" className="relative pt-16 bg-[#F5EEFF]">
      <div className="relative h-[55vh] min-h-[400px] sm:h-[68vh] sm:min-h-[460px]">
        {/* Capa vídeo — sube 64px para que el navbar tape la franja negra inicial */}
        <div className="absolute -top-16 bottom-0 inset-x-0 overflow-hidden">
          {/* Móvil: imagen estática para LCP rápido */}
          <div className="sm:hidden absolute inset-0">
            <Image
              src="/images/laser-game/laserSection1.jpg"
              alt="Laser game enfant chez Ludykid"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
          {/* Desktop: vídeo */}
          <video
            src="/images/laser-game/anniv-laser.mp4"
            poster="/images/laser-game/laserSection1.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-label="Laser game enfant chez Ludykid"
            className="hidden sm:block absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/40 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 h-20 sm:h-28 bg-gradient-to-b from-[#F5EEFF]/0 via-[#F5EEFF]/85 to-[#F5EEFF] pointer-events-none" />
        </div>

        {/* Capa contenido — sin overflow-hidden para que nunca se recorte */}
        <div className="absolute inset-0 flex items-start justify-center pt-10 pb-0 sm:items-center sm:py-0">
          <div className="text-center px-4 sm:px-6 max-w-3xl w-full">
            <h1
              className="hero-anim-1 font-fredoka text-3xl sm:text-4xl md:text-6xl font-extrabold text-white leading-tight mb-3 sm:mb-5"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Ludykid |{" "}
              <span className="inline-block px-2 sm:px-3 py-0.5 sm:py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Laser Game
              </span>{" "}
              Enfant Le Mans
            </h1>

            <p
              className="hero-anim-2 font-nunito text-white/95 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-5 sm:mb-7 leading-relaxed"
              style={{ textShadow: "0 0 5px rgba(0,0,0,0.8), 1px 1px 3px rgba(0,0,0,0.6)" }}
            >
              À la recherche d&apos;un laser game pour votre enfant au Mans ? Offrez-lui une activité ludique qui développe esprit d&apos;équipe et coordination chez Ludykid.
            </p>

            <div
              className="hero-anim-3 flex items-center justify-center"
            >
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-fredoka font-bold text-white text-sm shadow-clay-sm animate-float" style={{ backgroundColor: "#7B35A0" }}>
                📍 Disponible uniquement sur place
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
