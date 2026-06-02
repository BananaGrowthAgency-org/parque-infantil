import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";
import ClayCard from "../ui/ClayCard";
import ClayButton from "../ui/ClayButton";
import Wave from "../Wave";

const FEATURES = [
  {
    icon: "👦",
    label: "Pour les enfants dès 9 ans",
    desc: "Une activité conçue spécialement pour eux.",
  },
  {
    icon: "🧩",
    label: "Des énigmes à résoudre en équipe",
    desc: "Coopération, réflexion et esprit d'équipe.",
  },
  {
    icon: "🙌",
    label: "Sans les parents",
    desc: "Les enfants vivent l'expérience entre eux, en toute autonomie.",
  },
  {
    icon: "🎂",
    label: "Idéal pour un anniversaire",
    desc: "Une activité originale dont ils se souviendront !",
  },
  {
    icon: "🛡️",
    label: "Sécurité et encadrement",
    desc: "Un espace sécurisé et des animateurs attentifs.",
  },
];

export default function EscapeIntro({ nextBg = "#F4FBF4" }: { nextBg?: string }) {
  return (
    <section className="relative pt-16 overflow-hidden" style={{ backgroundColor: "#F4FBF4" }}>
      <div className="absolute top-6 left-4 opacity-25 animate-float pointer-events-none">
        <Doodle type="star" color="#2E9E2E" size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-20 animate-wiggle pointer-events-none">
        <Doodle type="swirl" color="#2E9E2E" size={70} />
      </div>
      <div className="absolute bottom-8 left-20 opacity-20 animate-float pointer-events-none" style={{ animationDelay: "1s" }}>
        <Doodle type="circle" color="#2E9E2E" size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-10 sm:pb-16 relative">
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 items-stretch">
          {/* Image gauche */}
          <FadeInUp className="w-full md:w-1/2" y={28}>
            <div className="group relative h-full min-h-[240px] sm:min-h-[380px] rounded-clay-lg overflow-hidden shadow-clay-green transition-transform duration-500 hover:-translate-y-1">
              <Image
                src="/images/escape-game/section1.jpg"
                alt="Escape Game enfant chez Ludykid Le Mans"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: "center 10%" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Badge prix */}
              <div className="absolute bottom-5 left-5">
                <span
                  className="font-fredoka font-bold text-white text-sm px-5 py-2.5 rounded-full shadow-clay-sm animate-float inline-flex items-center gap-2"
                  style={{ backgroundColor: "#2E9E2E" }}
                >
                  💰 3 € la partie par enfant
                </span>
              </div>
            </div>
          </FadeInUp>

          {/* Contenu droit */}
          <FadeInUp className="w-full md:w-1/2" delay={0.15} y={28}>
            <ClayCard size="lg" tone="white" className="relative h-full overflow-hidden">
              <div className="absolute top-5 right-5 opacity-25">
                <Doodle type="star" color="#2E9E2E" size={56} />
              </div>

              <h2 className="font-fredoka text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-3 leading-snug">
                Offrez à votre enfant
                <br />
                une aventure inoubliable !
              </h2>
              <p className="font-nunito text-gray-600 leading-relaxed mb-6 text-sm">
                Chez Ludykid au Mans, vos enfants dès 9 ans plongent dans un escape game en réalité augmentée.
                <br />
                Ils résolvent des énigmes, collaborent et s&apos;amusent pour accomplir leur mission.
                <br />
                Une activité originale et ludique, pensée pour eux.
              </p>

              <ul className="space-y-3 mb-7">
                {FEATURES.map((f, i) => (
                  <FadeInUp key={f.label} delay={0.2 + i * 0.05} y={12}>
                    <li className="flex items-start gap-3">
                      <span
                        className="w-10 h-10 rounded-2xl flex items-center justify-center text-lg flex-shrink-0 shadow-clay-inset"
                        style={{ backgroundColor: "#2E9E2E1F" }}
                      >
                        {f.icon}
                      </span>
                      <span className="font-nunito text-sm text-gray-700 leading-snug">
                        <span className="font-bold block text-gray-800">{f.label}</span>
                        <span className="text-gray-500">{f.desc}</span>
                      </span>
                    </li>
                  </FadeInUp>
                ))}
              </ul>

              <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="green" size="md" target="_blank" rel="noopener noreferrer">
                Réserver
              </ClayButton>
            </ClayCard>
          </FadeInUp>
        </div>
      </div>
      <Wave fill={nextBg} bg="#F4FBF4" />
    </section>
  );
}
