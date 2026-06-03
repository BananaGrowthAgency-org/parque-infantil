"use client";

import { useState } from "react";

const IMG_STYLE: React.CSSProperties = {};

export default function MapaModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Miniatura clicable */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="shrink-0 rounded-clay overflow-hidden shadow-clay-sm hover:scale-105 transition-transform duration-300 focus:outline-none"
        aria-label="Agrandir le plan de la zone"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/mapa-ludykid.jpg"
          alt="Carte du quartier Ludykid"
          style={{ width: 160, height: 120, objectFit: "cover", ...IMG_STYLE }}
        />
      </button>

      {/* Modal / lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative rounded-clay-lg overflow-hidden shadow-clay-yellow border-4 border-lk-yellow bg-white max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/mapa-ludykid.jpg"
              alt="Plan d'accès Ludykid"
              className="w-full h-auto"
              style={IMG_STYLE}
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute top-3 right-3 w-9 h-9 rounded-full bg-lk-yellow text-[#3A2A00] font-extrabold text-lg flex items-center justify-center shadow-clay-yellow hover:scale-110 transition-transform"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
