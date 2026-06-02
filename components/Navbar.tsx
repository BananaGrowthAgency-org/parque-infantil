"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import ClayButton from "./ui/ClayButton";

const ACTIVITE_ITEMS = [
  { label: "Escape Game",        href: "/escape-game-le-mans",    hover: "hover:text-lk-green",  hoverBg: "hover:bg-[#E8F7E8]", active: "text-lk-green",  softBg: "#E8F7E8" },
  { label: "Accrobranche",       href: "/accrobranche-le-mans",   hover: "hover:text-lk-yellow", hoverBg: "hover:bg-[#FFF9E0]", active: "text-lk-yellow", softBg: "#FFF9E0" },
  { label: "Laser Game",         href: "/laser-game-le-mans",     hover: "hover:text-lk-purple", hoverBg: "hover:bg-[#F5EEFF]", active: "text-lk-purple", softBg: "#F5EEFF" },
  { label: "Trampoline Parc",    href: "/trampoline-park-le-mans",hover: "hover:text-lk-orange", hoverBg: "hover:bg-[#FFEFE2]", active: "text-lk-orange", softBg: "#FFEFE2" },
];

const PHONE_COLORS: Record<string, { bg: string; icon: string }> = {
  "/":                { bg: "#FFF3E6", icon: "#E8731A" },
  "/escape-game-le-mans":     { bg: "#E8F7E8", icon: "#2E9E2E" },
  "/accrobranche-le-mans":    { bg: "#FFF8CC", icon: "#B8940A" },
  "/laser-game-le-mans":      { bg: "#F5EEFF", icon: "#7B35A0" },
  "/trampoline-park-le-mans": { bg: "#FFF3E6", icon: "#E8731A" },
  "/anniversaire":    { bg: "#F5EEFF", icon: "#7B35A0" },
  "/restauration/boissons-chaudes": { bg: "#FFF3E6", icon: "#E8731A" },
  "/restauration/boissons-fraiches": { bg: "#FFF9E0", icon: "#FFD600" },
  "/restauration/plaisirs-sales":    { bg: "#E8F7E8", icon: "#2E9E2E" },
  "/restauration/plaisirs-sucres":   { bg: "#F5EEFF", icon: "#7B35A0" },
  "/restauration/infos-utiles":      { bg: "#E8F0FF", icon: "#1877F2" },
  "/restauration":    { bg: "#E8F7E8", icon: "#2E9E2E" },
  "/tarifs":          { bg: "#FFF8CC", icon: "#B8940A" },
  "/garderie":        { bg: "#FFF3E6", icon: "#E8731A" },
  "/contact":         { bg: "#F5EEFF", icon: "#7B35A0" },
};

const CLAY_SCROLLED =
  "top-9 left-3 right-3 rounded-2xl bg-white shadow-clay md:top-12 md:left-3 md:right-3 lg:left-6 lg:right-6 md:rounded-full";

const links = [
  { label: "Anniversaire",     href: "/anniversaire", hover: "hover:text-lk-purple", active: "text-lk-purple", softBg: "#F5EEFF" },
  { label: "Restauration",     href: "/restauration", hover: "hover:text-lk-green",  active: "text-lk-green",  softBg: "#E8F7E8" },
  { label: "Tarifs & Horaires",href: "/tarifs",       hover: "hover:text-lk-yellow", active: "text-lk-yellow", softBg: "#FFF8CC" },
  { label: "Garderie",         href: "/garderie",     hover: "hover:text-lk-orange", active: "text-lk-orange", softBg: "#FFEFE2" },
  { label: "Contact",          href: "/contact",      hover: "hover:text-lk-purple", active: "text-lk-purple", softBg: "#F5EEFF" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen]               = useState(false);
  const [activiteOpen, setActiviteOpen]       = useState(false);
  const [activiteMobile, setActiviteMobile]   = useState(false);
  const [scrolled, setScrolled]               = useState(false);
  const pathname  = usePathname();
  const dropRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setActiviteOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isActive = (href: string) =>
    href.startsWith("/") &&
    !href.includes("#") &&
    (pathname === href || pathname.startsWith(href + "/"));

  const activiteIsActive = ACTIVITE_ITEMS.some((i) => isActive(i.href));

  const phoneColor =
    PHONE_COLORS[Object.keys(PHONE_COLORS).find((k) => k !== "/" && pathname.startsWith(k)) ?? "/"] ??
    PHONE_COLORS["/"];

  const navClass = `fixed z-50 transition-[top,left,right,border-radius,box-shadow,background-color] duration-300 ${
    scrolled ? CLAY_SCROLLED : "top-9 left-0 right-0 bg-white"
  }`;

  const phoneIcon = (size: number) => (
    <span
      aria-hidden
      style={{
        width: size, height: size,
        display: "inline-block",
        backgroundColor: phoneColor.icon,
        WebkitMaskImage: "url(/images/iconos/phone-icon.png)",
        maskImage: "url(/images/iconos/phone-icon.png)",
        WebkitMaskRepeat: "no-repeat", maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",  maskPosition: "center",
        WebkitMaskSize: "contain",     maskSize: "contain",
        transition: "background-color 0.3s",
      }}
    />
  );

  return (
    <nav className={navClass}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-2">
          <a href="/"><Logo size="sm" /></a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">

            {/* Activité dropdown */}
            <div className="relative" ref={dropRef}>
              <button
                onClick={() => setActiviteOpen((v) => !v)}
                className={`font-fredoka font-semibold text-base transition-colors px-3 py-1.5 rounded-full flex items-center gap-1 ${
                  activiteIsActive || activiteOpen
                    ? "text-lk-orange bg-[#FFEFE2]"
                    : "text-gray-600 hover:text-lk-orange"
                }`}
              >
                Activités
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activiteOpen ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {activiteOpen && (
                <div className="absolute top-full mt-2 left-0 bg-white rounded-2xl shadow-clay py-2 min-w-[200px] z-50 overflow-hidden">
                  {ACTIVITE_ITEMS.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiviteOpen(false)}
                      className={`block px-5 py-2.5 font-fredoka text-sm transition-colors ${
                        isActive(item.href)
                          ? item.active
                          : `text-gray-700 ${item.hover} ${item.hoverBg}`
                      }`}
                      style={isActive(item.href) ? { backgroundColor: item.softBg } : undefined}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {links.map((link) => {
              const active = isActive(link.href);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`font-fredoka font-semibold text-base transition-colors px-3 py-1.5 rounded-full ${
                    active ? link.active : `text-gray-600 ${link.hover}`
                  }`}
                  style={active ? { backgroundColor: link.softBg } : undefined}
                >
                  {link.label}
                </a>
              );
            })}

            <a
              href="tel:+33243414869"
              className="flex items-center p-2.5 rounded-full shadow-clay-inset transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{ backgroundColor: phoneColor.bg }}
              aria-label="Appeler Ludykid"
            >
              {phoneIcon(20)}
            </a>
            <a
              href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center pl-3 pr-4 py-2 rounded-full shadow-clay-inset transition-all duration-300 hover:scale-105 hover:-translate-y-0.5"
              style={{ backgroundColor: phoneColor.icon, transition: "background-color 0.3s, transform 0.3s" }}
              aria-label="Réserver en ligne"
            >
              <span className="font-fredoka font-bold text-sm text-white">
                Réserver
              </span>
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="tel:+33243414869"
              className="flex items-center p-2 rounded-full shadow-clay-inset transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: phoneColor.bg }}
              aria-label="Appeler Ludykid"
            >
              {phoneIcon(16)}
            </a>
            <a
              href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-1.5 px-3 rounded-full shadow-clay-inset transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: phoneColor.icon, transition: "background-color 0.3s, transform 0.3s" }}
              aria-label="Réserver en ligne"
            >
              <span className="font-fredoka font-bold text-xs text-white">
                Réserver
              </span>
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-3 text-gray-700 cursor-pointer touch-manipulation"
              aria-label="Menu"
              aria-expanded={menuOpen}
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-[32rem]" : "max-h-0"}`}>
        <div className="bg-white border-t-2 border-dashed border-gray-100 px-4 pb-4 pt-2 flex flex-col gap-1">

          {/* Activité item with submenu */}
          <div>
            <button
              onClick={() => setActiviteMobile((v) => !v)}
              className="font-fredoka py-2.5 border-b border-gray-50 text-lg flex w-full items-center justify-between"
            >
              <span className={`rounded-full px-3 py-1 flex items-center gap-1 ${activiteIsActive ? "text-lk-orange bg-[#FFEFE2]" : "text-gray-700"}`}>
                Activités
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${activiteMobile ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${activiteMobile ? "max-h-60" : "max-h-0"}`}>
              {ACTIVITE_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => { setMenuOpen(false); setActiviteMobile(false); }}
                  className={`block pl-6 py-2 font-fredoka text-base border-b border-gray-50 transition-colors ${
                    isActive(item.href) ? item.active : `text-gray-600 ${item.hover}`
                  }`}
                >
                  — {item.label}
                </a>
              ))}
            </div>
          </div>

          {links.map((link) => {
            const active = isActive(link.href);
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? "page" : undefined}
                className="font-fredoka py-2.5 border-b border-gray-50 text-lg flex"
              >
                <span
                  className={`rounded-full px-3 py-1 ${active ? link.active : "text-gray-700"}`}
                  style={active ? { backgroundColor: link.softBg } : undefined}
                >
                  {link.label}
                </span>
              </a>
            );
          })}

          <div className="mt-3 self-stretch flex justify-center">
            <ClayButton href="https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr" tone="orange" size="md" onClick={() => setMenuOpen(false)} target="_blank" rel="noopener noreferrer" style={{ backgroundColor: phoneColor.icon, transition: "background-color 0.3s" }}>
              🎟️ Réserver
            </ClayButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
