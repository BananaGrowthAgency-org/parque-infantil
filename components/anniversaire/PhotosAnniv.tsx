"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import SquiggleTitle from "../ui/SquiggleTitle";

type Slide =
  | { type?: "image"; src: string; alt: string }
  | { type: "video"; src: string; alt: string };

const photos: Slide[] = [
  { type: "video", src: "/images/anniversaire/anniv-fiesta-1.mp4", alt: "Moment de fête chez Ludykid" },
  { type: "video", src: "/images/anniversaire/anniv-toboggan.mp4", alt: "Toboggan Ludykid" },
  { type: "video", src: "/images/anniversaire/anniv-fiesta-2.mp4", alt: "Soufflage des bougies" },
  { type: "video", src: "/images/anniversaire/anniv-autos.mp4",    alt: "Autos tamponneuses" },
  { type: "video", src: "/images/anniversaire/anniv-fiesta-3.mp4", alt: "Les enfants fêtent ensemble" },
  { type: "video", src: "/images/laser-game/anniv-laser.mp4",      alt: "Laser game" },
];

const BRAND = "#2E9E2E";
const DOT_INACTIVE = "#CFE9CF";
const AUTOPLAY_MS = 4000;
const SWIPE_THRESHOLD = 60;

// Dimensiones paisaje (16:9 aprox)
const CARD_W = 580;
const CARD_H = 340;

export default function PhotosAnniv() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [drag, setDrag] = useState<{ startX: number; dx: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map());
  const total = photos.length;

  const go = useCallback(
    (delta: number) => setIndex((i) => (i + delta + total) % total),
    [total]
  );
  const goTo = useCallback((i: number) => setIndex(((i % total) + total) % total), [total]);

  useEffect(() => {
    if (paused || drag) return;
    const id = setInterval(() => go(1), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, drag, go]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") go(-1);
      else if (e.key === "ArrowRight") go(1);
    };
    el.addEventListener("keydown", onKey);
    return () => el.removeEventListener("keydown", onKey);
  }, [go]);

  const onPointerDown = (e: React.PointerEvent) => {
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
    setDrag({ startX: e.clientX, dx: 0 });
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag) return;
    setDrag({ ...drag, dx: e.clientX - drag.startX });
  };
  const onPointerUp = () => {
    if (!drag) return;
    if (drag.dx > SWIPE_THRESHOLD) go(-1);
    else if (drag.dx < -SWIPE_THRESHOLD) go(1);
    setDrag(null);
  };

  useEffect(() => {
    videoRefs.current.forEach((vid, i) => {
      if (i === index) {
        vid.currentTime = 0;
        vid.play().catch(() => {});
      } else {
        vid.pause();
      }
    });
  }, [index]);

  const offsetOf = (i: number) => {
    let d = i - index;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  return (
    <section className="relative py-16 overflow-hidden bg-white">
      {/* Doodles amarillos/naranjas decorativos */}
      <div className="absolute top-8 left-6 opacity-25 animate-float pointer-events-none">
        <Doodle type="star" color="#FFD600" size={70} />
      </div>
      <div className="absolute top-16 right-10 opacity-20 animate-wiggle pointer-events-none">
        <Doodle type="circle" color="#E8731A" size={56} />
      </div>
      <div className="absolute bottom-12 right-16 opacity-25 animate-wiggle pointer-events-none">
        <Doodle type="star2" color="#FFD600" size={52} />
      </div>

      {/* Halo amarillo suave detrás del carrusel */}
      <div
        aria-hidden
        className="absolute inset-x-0 pointer-events-none"
        style={{
          top: "120px",
          bottom: "60px",
          background:
            "radial-gradient(ellipse 70% 80% at 50% 50%, #EAF8EA 0%, transparent 70%)",
        }}
      />

      <FadeInUp className="relative z-10 mb-10 px-6">
        <SquiggleTitle color="#2E9E2E">
          Anniversaire Ludykid en photos 📸
        </SquiggleTitle>
      </FadeInUp>

      {/* Carrusel */}
      <div
        ref={containerRef}
        tabIndex={0}
        aria-roledescription="carousel"
        aria-label="Galerie Anniversaire Ludykid"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="relative outline-none select-none touch-pan-y w-full"
        style={{ height: CARD_H + 80, perspective: "1800px" }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ transformStyle: "preserve-3d" }}
        >
          {photos.map((photo, i) => {
            const off = offsetOf(i);
            const abs = Math.abs(off);
            if (abs > 2) return null;

            const dragShift = drag ? drag.dx * 0.35 : 0;
            const translateX = off * (CARD_W * 0.72) + dragShift;
            const rotateY = off * -18;
            const scale = abs === 0 ? 1 : abs === 1 ? 0.84 : 0.68;
            const translateZ = abs === 0 ? 0 : -180 * abs;
            const opacity = abs === 0 ? 1 : abs === 1 ? 0.72 : 0.38;
            const zIndex = 10 - abs;
            const isCenter = off === 0;

            return (
              <button
                key={photo.src}
                type="button"
                onClick={() => (isCenter ? undefined : goTo(i))}
                aria-label={photo.alt}
                aria-current={isCenter}
                tabIndex={isCenter ? 0 : -1}
                className="absolute rounded-clay-lg overflow-hidden bg-black cursor-pointer group"
                style={{
                  width: CARD_W,
                  height: CARD_H,
                  zIndex,
                  opacity,
                  transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  transition: drag
                    ? "none"
                    : "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease",
                  boxShadow: isCenter
                    ? "0 36px 72px -18px rgba(46,158,46,0.45), 0 16px 32px -12px rgba(0,0,0,0.32), inset 0 -8px 0 0 rgba(0,0,0,0.18), inset 0 4px 0 0 rgba(255,255,255,0.25)"
                    : "0 18px 40px -16px rgba(0,0,0,0.45)",
                }}
              >
                {photo.type === "video" ? (
                  <video
                    ref={(el) => {
                      if (el) videoRefs.current.set(i, el);
                      else videoRefs.current.delete(i);
                    }}
                    src={photo.src}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    draggable={false}
                  />
                ) : (
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 580px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={i === 0}
                    draggable={false}
                  />
                )}

                {photo.type === "video" && !isCenter && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-6 h-6 text-white translate-x-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                <div
                  className={`absolute inset-x-0 bottom-0 px-6 py-4 text-white font-fredoka text-base transition-opacity duration-500 ${
                    isCenter ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 100%)",
                  }}
                >
                  {photo.alt}
                </div>

                {isCenter && (
                  <div
                    className="absolute inset-0 rounded-clay-lg pointer-events-none ring-4 ring-white/50"
                    aria-hidden
                  />
                )}
              </button>
            );
          })}
        </div>

      </div>

      {/* Dots */}
      <FadeInUp delay={0.1} y={12}>
        <div className="flex justify-center gap-2 mt-6 px-6" role="tablist" aria-label="Sélection photo">
          {photos.map((_, i) => {
            const active = i === index;
            return (
              <button
                key={i}
                role="tab"
                aria-selected={active}
                aria-label={`Aller à la photo ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: active ? 28 : 8,
                  backgroundColor: active ? BRAND : DOT_INACTIVE,
                }}
              />
            );
          })}
        </div>

        {/* Contador */}
        <div className="text-center mt-3 font-fredoka text-sm text-gray-500">
          {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
        </div>
      </FadeInUp>
    </section>
  );
}
