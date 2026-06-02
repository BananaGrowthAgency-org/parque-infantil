"use client";

import Image from "next/image";
import Doodle from "./Doodle";
import Wave from "./Wave";
import FadeInUp from "./ui/FadeInUp";
import ClayCard from "./ui/ClayCard";
import ClayButton from "./ui/ClayButton";

type CumpleTone = "green" | "purple";

const TONES: Record<CumpleTone, {
  sectionBg: string; color: string; imageShadow: string; badgeBg: string; iconBg: string; buttonTone: "green" | "purple";
}> = {
  green:  { sectionBg: "#EDFAED", color: "#2E9E2E", imageShadow: "shadow-clay-green",  badgeBg: "#2E9E2E", iconBg: "#2E9E2E1F", buttonTone: "green"  },
  purple: { sectionBg: "#F5EEFF", color: "#7B35A0", imageShadow: "shadow-clay-purple", badgeBg: "#7B35A0", iconBg: "#7B35A01F", buttonTone: "purple" },
};

export default function Cumple({ nextBg = "#FFF9E0", tone = "green", reverse = false }: { nextBg?: string; tone?: CumpleTone; reverse?: boolean }) {
  const t = TONES[tone];
  return (
    <section id="cumple" className="relative overflow-hidden" style={{ backgroundColor: t.sectionBg }}>
      <div className="absolute top-6 left-4 opacity-25 animate-float">
        <Doodle type="star" color={t.color} size={60} />
      </div>
      <div className="absolute top-16 right-10 opacity-20 animate-wiggle">
        <Doodle type="heart" color={t.color} size={55} />
      </div>
      <div className="absolute bottom-8 left-16 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
        <Doodle type="star2" color="#E8731A" size={48} />
      </div>
      <div className="absolute bottom-4 right-24 opacity-20 animate-wiggle" style={{ animationDelay: "0.6s" }}>
        <Doodle type="swirl" color={t.color} size={52} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className={`flex flex-col ${reverse ? "md:flex-row-reverse" : "md:flex-row"} gap-4 sm:gap-8 items-stretch`}>
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className={`group relative h-full min-h-[240px] sm:min-h-[380px] rounded-clay-lg overflow-hidden ${t.imageShadow} transition-transform duration-500 hover:-translate-y-1`}>
              <Image
                src="/images/home/cumple.png"
                alt="Anniversaire enfant chez Ludykid"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                  style={{ backgroundColor: t.badgeBg }}
                >
                  👉 Dès 10,50€ / enfant
                </span>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
              <div className="absolute top-5 right-5 opacity-25">
                <Doodle type="heart" color={t.color} size={56} />
              </div>

              <h2 className="font-fredoka text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                L&apos;anniversaire préféré des enfants au Mans
              </h2>
              <p className="font-nunito text-gray-500 leading-relaxed mb-4 text-sm">
                Un moment inoubliable entre copains… sans rien avoir à organiser.
              </p>
              <p className="font-nunito text-gray-500 leading-relaxed mb-6 text-sm">
                On s&apos;occupe de tout, vous profitez.
              </p>

              <ul className="space-y-3 mb-4">
                {[
                  { icon: "🎂", text: "Goûter inclus" },
                  { icon: "🐣", text: "Animations encadrées" },
                  { icon: "🎁", text: "Surprises & cadeaux" },
                  { icon: "🎈", text: "Accès illimité au parc" },
                ].map((item, i) => (
                  <FadeInUp key={item.text} delay={0.2 + i * 0.06} y={12}>
                    <li className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                        style={{ backgroundColor: t.iconBg }}
                      >
                        {item.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700">
                        {item.text}
                        {item.icon === "🎂" && (
                          <span className="text-gray-500"> (Selon la formule choisie)</span>
                        )}
                      </span>
                    </li>
                  </FadeInUp>
                ))}
              </ul>

              <p className="font-nunito text-gray-500 text-sm mb-6">
                Ils s&apos;amusent, vous soufflez ❤️
              </p>

              <div className="flex items-center gap-4 flex-wrap">
                <ClayButton href="/anniversaire" tone={t.buttonTone} size="md">
                  Découvrir nos formules
                </ClayButton>
              </div>
            </ClayCard>
          </FadeInUp>
        </div>
      </div>

      <Wave fill={nextBg} bg={t.sectionBg} flip />
    </section>
  );
}
