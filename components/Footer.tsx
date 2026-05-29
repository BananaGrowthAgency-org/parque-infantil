import Image from "next/image";
import Logo from "./Logo";
import Wave from "./Wave";

const NAV = [
  { label: "Accueil", href: "/" },
  { label: "Attractions", href: "/#atracciones" },
  { label: "Anniversaire", href: "/anniversaire" },
  { label: "Tarifs", href: "/tarifs" },
  { label: "Infos pratiques", href: "/#infos" },
];

const NAV_ACTIVITES = [
  { label: "Restauration", href: "/restauration" },
  { label: "Garderie", href: "/garderie" },
  { label: "Trampoline Parc", href: "/trampoline-park-le-mans" },
  { label: "Escape Game", href: "/escape-game-le-mans" },
  { label: "Laser Game", href: "/laser-game-le-mans" },
  { label: "Accrobranche", href: "/accrobranche-le-mans" },
];

const LEGAL = [
  { label: "Mentions légales", href: "/mentions-legales" },
];

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ludykid/",
    color: "#E8731A",
    shadow: "shadow-clay-orange",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/ludykid/",
    color: "#0A66C2",
    shadow: "shadow-clay-blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@ludykidparc6194/shorts",
    color: "#FF0033",
    shadow: "shadow-clay-red",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/LUDYKIDPlainedejeuxcouverte/",
    color: "#1877F2",
    shadow: "shadow-clay-blue",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function Footer({ waveBg = "#F9FAFB" }: { waveBg?: string }) {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden" style={{ marginTop: -2 }}>
      <Wave fill="#111827" bg={waveBg} flip />

      <div className="pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-10">
            <div>
              <Logo size="sm" />
              <p className="mt-5 text-sm text-gray-300 font-nunito leading-relaxed max-w-xs">
                Le parc de jeux indoor préféré des enfants. 1 200 m² de fun couvert pour toute la famille, ouvert du mercredi au dimanche.
              </p>
              <div className="mt-6 flex gap-3">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{ backgroundColor: s.color }}
                    className={`h-11 w-11 rounded-full inline-flex items-center justify-center text-white ${s.shadow} hover:scale-110 transition-transform`}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-fredoka text-xl font-extrabold text-[#E8731A] mb-5">
                Navigation
              </h3>
              <ul className="space-y-3 text-gray-200 text-sm font-nunito">
                {NAV.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-fredoka text-xl font-extrabold text-[#2E9E2E] mb-5">
                Activités
              </h3>
              <ul className="space-y-3 text-gray-200 text-sm font-nunito">
                {NAV_ACTIVITES.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="hover:text-white transition-colors">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-fredoka text-xl font-extrabold text-[#7B35A0] mb-5">
                Contact
              </h3>
              <ul className="space-y-3 text-gray-200 text-sm font-nunito">
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">📍</span>
                  <span>ZAC des Hunaudières, Rte du Petit Bel Oeuvre, 72230 Ruaudin, France</span>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">📞</span>
                  <a href="tel:+33243414869" className="hover:text-white transition-colors">
                    +33 2 43 41 48 69
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span aria-hidden="true">✉️</span>
                  <a href="mailto:contact@ludykid.com" className="hover:text-white transition-colors">
                    contact@ludykid.com
                  </a>
                </li>
                <li className="pt-2">
                  <span className="text-[#E8731A] font-bold">Mer, Sam, Dim</span> 10h–19h
                </li>
                <li>
                  <span className="text-[#7B35A0] font-bold">Vendredi</span> 15h–19h
                </li>
              </ul>
            </div>
          </div>

          <div className="h-1.5 rounded-full mb-6 overflow-hidden">
            <div className="h-full flex">
              {["#E8731A", "#7B35A0", "#2E9E2E", "#FFD600", "#E8731A", "#2E9E2E", "#7B35A0"].map((c, i) => (
                <div key={i} className="flex-1" style={{ backgroundColor: c }} />
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-400 text-sm font-nunito">
            <p>© 2026 Ludykid · Tous droits réservés.</p>

            <a
              href="https://www.banana-growth.agency/accompagnement-marketing-digital-parc-de-loisir"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1"
            >
              <span className="text-xs text-gray-500 font-nunito tracking-wide">réalisé par</span>
              <Image
                src="/images/iconos/bga-logo.png"
                alt="Banana Growth Agency"
                width={120}
                height={42}
                className="object-contain"
              />
            </a>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 justify-center">
              {LEGAL.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
