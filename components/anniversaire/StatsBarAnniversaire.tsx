"use client";

import FadeInUp from "../ui/FadeInUp";

const ORANGE = "#E8731A";

const ACCENTS = [
  "#E8731A", // naranja
  "#7B35A0", // morado
  "#2E9E2E", // verde
  "#FFD600", // amarillo
  "#E8731A", // naranja (cycle)
];

function PngIcon({ src, size = 52 }: { src: string; size?: number }) {
  return (
    <div
      aria-hidden
      style={{
        width: size,
        height: size,
        backgroundColor: ORANGE,
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

const stats = [
  { src: "/images/iconos/faire-la-fete.png",      label: "4 formules au choix" },
  { src: "/images/iconos/yoga.png",               label: "100% fun 0% stress" },
  { src: "/images/iconos/etiquette-de-remise.png", label: "-20% sur les formules\nle mercredi" },
  { src: "/images/iconos/enfants.png",            label: "1 à 12 ans" },
  { src: "/images/iconos/pile-de-pieces.png",     label: "Dès 10,50€ /enfant" },
];

export default function StatsBarAnniversaire() {
  return (
    <div className="relative z-10 -mt-10 sm:-mt-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <FadeInUp key={s.label} delay={i * 0.08} y={32} className={i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""}>
              <div
                className={`group h-full flex flex-col items-center justify-center gap-2 text-center px-3 py-4 rounded-clay-lg bg-white border-[3px] shadow-clay transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                  i === stats.length - 1
                    ? "w-[calc(50%-0.5rem)] mx-auto sm:w-auto sm:mx-0"
                    : ""
                }`}
                style={{ borderColor: ACCENTS[i % ACCENTS.length] }}
              >
                <PngIcon src={s.src} />
                <p className="font-fredoka font-bold text-lk-orange text-base leading-snug whitespace-pre-line">
                  {s.label}
                </p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </div>
  );
}
