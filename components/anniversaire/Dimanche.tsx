"use client";

import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import ClayCard from "../ui/ClayCard";
import ClayButton from "../ui/ClayButton";

const BULLETS = [
  { icon: "🎁", text: "Remise appliquée directement en caisse" },
  { icon: "📅", text: "Offre valable uniquement le mercredi (hors options)" },
  { icon: "🎈", text: "Réserve ta date dès maintenant en ligne" },
];

export default function Dimanche() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#F5EEFF" }}
    >
      <div className="absolute top-10 right-10 opacity-15 animate-wiggle">
        <Doodle type="heart" color="#E8731A" size={60} />
      </div>
      <div className="absolute bottom-12 left-8 opacity-15 animate-float">
        <Doodle type="star" color="#7B35A0" size={56} />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16 relative">
        <div className="flex flex-col md:flex-row gap-8 items-stretch">
          {/* Card promo — imagen banner full bleed */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div
              className="group relative h-full rounded-clay-lg overflow-hidden shadow-clay-purple transition-transform duration-500 hover:-translate-y-1"
              style={{ minHeight: 380 }}
            >
              <Image
                src="/images/anniversaire/mercredi-banner.png"
                alt="Fête ton anniv' chez Ludykid -20% sur les formules le mercredi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                  style={{ backgroundColor: "#7B35A0" }}
                >
                  🎈 -20% le mercredi
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Card texto */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
              <h2
                className="font-fredoka text-3xl md:text-4xl font-extrabold leading-tight mb-3"
                style={{ color: "#7B35A0" }}
              >
                🎈 Mercredi malin
              </h2>
              <h3 className="font-fredoka text-xl md:text-2xl font-bold text-gray-800 mb-4 leading-snug">
                -20% sur les anniversaires
              </h3>
              <p className="font-nunito font-extrabold text-gray-900 leading-relaxed mb-3 text-base">
                🎉 Et si le meilleur jour pour fêter un anniversaire… c&apos;était le mercredi ?
              </p>
              <p className="font-nunito text-gray-500 leading-relaxed mb-3 text-sm">
                Chez Ludykid, on rend ce moment encore plus sympa :
              </p>
              <p className="font-nunito font-extrabold text-gray-900 leading-relaxed mb-5 text-base">
                👉 -20 % sur toutes les formules anniversaires, chaque mercredi
              </p>
              <p className="font-nunito text-gray-500 leading-relaxed mb-5 text-sm">
                De quoi offrir une fête mémorable, sans se poser de questions ✨
              </p>
              <ul className="space-y-3 mb-6">
                {BULLETS.map((b, i) => (
                  <FadeInUp key={b.text} delay={0.25 + i * 0.06} y={12}>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                        style={{ backgroundColor: "#F5EEFF" }}
                      >
                        {b.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700">{b.text}</span>
                    </li>
                  </FadeInUp>
                ))}
              </ul>
              <ClayButton href="#formules" tone="purple" size="md">
                Choisir ma formule
              </ClayButton>
            </ClayCard>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
}
