"use client";

import { useState } from "react";
import { m, AnimatePresence, useReducedMotion } from "framer-motion";

const VIDEOS = [
  "/images/restauration/resto-video-1.mp4",
  "/images/restauration/resto-video-2.mp4",
  "/images/restauration/resto-video-3.mp4",
];

export default function HeroRestauracion() {
  const reduce = useReducedMotion();
  const [vidIdx, setVidIdx] = useState(0);

  return (
    <section className="relative bg-[#F4FBF4]">
      {/* El vídeo cubre también los 64 px del navbar (pt-16) para evitar la franja oscura en móvil */}
      <div className="relative overflow-hidden" style={{ height: "calc(72vh + 64px)", minHeight: "calc(500px + 64px)" }}>

        {/* Crossfade entre vídeos — initial={false} evita el flash oscuro del primer mount */}
        <AnimatePresence mode="sync" initial={false}>
          <m.video
            key={vidIdx}
            src={VIDEOS[vidIdx]}
            autoPlay
            muted
            playsInline
            preload="metadata"
            onEnded={() => setVidIdx((i) => (i + 1) % VIDEOS.length)}
            aria-label="Ludy'cafet chez Ludykid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            }}
          />
        </AnimatePresence>

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(46,158,46,0.28) 60%, rgba(255,255,255,0) 100%)",
          }}
        />

        {/* pt-16 centra el texto en la zona visible (debajo del navbar) */}
        <div className="absolute inset-0 pt-16 flex items-center justify-center">
          <div className="text-center px-6 max-w-3xl">
            <m.h1
              initial={reduce ? false : { opacity: 0, y: 24 }}
              animate={reduce ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
              className="font-fredoka text-4xl md:text-6xl font-extrabold text-white leading-tight"
              style={{ textShadow: "0 0 6px rgba(0,0,0,0.9), 1px 1px 4px rgba(0,0,0,0.7)" }}
            >
              Savourez la pause au{" "}
              <span className="inline-block px-3 py-1 rounded-clay bg-lk-yellow text-[#3A2A00] -rotate-2 shadow-clay-yellow" style={{ textShadow: "none" }}>
                Ludy&apos;cafet
              </span>{" "}
              ☕
            </m.h1>
          </div>
        </div>
      </div>

      {/* Gradiente FUERA del overflow-hidden: siempre visible en los 3 vídeos y sin recorte.
          Usa rgba(244,251,244,0) —transparente exacto de #F4FBF4— para evitar tonos grises en la interpolación CSS. */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0"
        style={{
          height: "min(220px, 36vh)",
          background: "linear-gradient(to bottom, rgba(244,251,244,0), #F4FBF4 70%)",
        }}
      />
    </section>
  );
}
