import Image from "next/image";
import Doodle from "../Doodle";
import FadeInUp from "../ui/FadeInUp";

const ACCENT = "#E8731A";

type Activity = {
  title: string;
  desc: string;
  image: string;
  alt: string;
  href: string;
  iconSrc: string;
  mobilePos?: string;
};

const ACTIVITIES: Activity[] = [
  {
    title: "Escape game",
    desc: "Résoudre des énigmes, coopérer et faire preuve de logique pour réussir à sortir avant la fin du temps !",
    image: "/images/escape-game/section1.jpg",
    alt: "Escape game enfant chez Ludykid",
    href: "/escape-game-le-mans",
    iconSrc: "/images/iconos/icones-services/escapeGame.png",
    mobilePos: "object-top sm:object-center",
  },
  {
    title: "Accrobranche",
    desc: "Un parcours indoor en hauteur pour se dépenser et gagner en confiance entre amis !",
    image: "/images/accrobranche.jpg",
    alt: "Accrobranche indoor chez Ludykid",
    href: "/accrobranche-le-mans",
    iconSrc: "/images/iconos/icones-services/accrobranche.png",
  },
  {
    title: "Laser game",
    desc: "Vos enfants s'éclatent en équipe dans un jeu d'aventure 100% fun et immersif !",
    image: "/images/laser-game/laserSection1.jpg",
    alt: "Laser game enfant chez Ludykid",
    href: "/laser-game-le-mans",
    iconSrc: "/images/iconos/icones-services/laserGame.png",
    mobilePos: "object-[center_25%] sm:object-center",
  },
  {
    title: "Restauration",
    desc: "Une pause gourmande bien méritée pour reprendre des forces entre deux activités !",
    image: "/images/home/bar.jpg",
    alt: "Ludy'cafet chez Ludykid",
    href: "/restauration",
    iconSrc: "/images/iconos/icones-services/cafet.png",
  },
];

export default function ActivitiesGrid() {
  return (
    <section className="py-10 sm:py-20 relative overflow-hidden bg-white">
      <div className="absolute top-10 left-6 opacity-30 pointer-events-none">
        <Doodle type="zigzag" color={ACCENT} size={64} />
      </div>
      <div className="absolute top-12 right-8 opacity-25 pointer-events-none">
        <Doodle type="star" color={ACCENT} size={48} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <FadeInUp>
          <h2 className="text-center font-fredoka font-extrabold text-2xl sm:text-3xl md:text-5xl tracking-tight">
            <span className="text-[#0F1B5C]">Ludykid </span>
            <span className="text-lk-orange">c&apos;est aussi :</span>
          </h2>
        </FadeInUp>

        <div className="relative mt-6 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACTIVITIES.map((a, i) => (
              <FadeInUp key={a.title} delay={0.08 + i * 0.07}>
                <div className="h-full flex flex-col">
                  <div className="relative bg-white rounded-clay-lg shadow-clay flex flex-col h-full overflow-hidden">
                    <div className="relative h-44 sm:h-64 w-full overflow-hidden">
                      <Image
                        src={a.image}
                        alt={a.alt}
                        fill
                        className={`object-cover ${a.mobilePos ?? "object-center"}`}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>

                    <div className="relative -mt-9 mx-auto z-10">
                      <div className="w-[72px] h-[72px] rounded-full bg-white shadow-clay-sm flex items-center justify-center">
                        <div
                          aria-hidden="true"
                          style={{
                            width: 40, height: 40,
                            backgroundColor: ACCENT,
                            WebkitMaskImage: `url(${a.iconSrc})`,
                            maskImage: `url(${a.iconSrc})`,
                            WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
                            WebkitMaskPosition: "center", maskPosition: "center",
                            WebkitMaskSize: "contain", maskSize: "contain",
                          }}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col flex-1 px-5 pt-3 pb-6 text-center">
                      <h3 className="font-fredoka font-extrabold text-[#0F1B5C] text-xl mb-3 leading-tight">
                        {a.title}
                      </h3>
                      <p className="font-nunito text-sm text-gray-500 leading-relaxed mb-6 flex-1">
                        {a.desc}
                      </p>
                      <div className="flex justify-center">
                        <a
                          href={a.href}
                          className="group inline-flex items-center gap-3 pl-6 pr-2 py-2.5 rounded-full bg-lk-orange text-white font-fredoka font-extrabold text-sm shadow-clay-orange transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95"
                        >
                          Découvrir
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white text-lk-orange shadow-clay-inset transition-transform duration-300 group-hover:-rotate-45">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <path d="M5 12h14M13 6l6 6-6 6" />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeInUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
