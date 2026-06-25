const ITEMS = [
  "☀️ Pass été 2026",
  "☀️ Accès au parc en illimité",
  "☀️ Juillet & Août",
  "☀️ 1 enfant + 1 adulte accompagnateur",
  "☀️",
];

const TEXT = ITEMS.join("   ·   ");

const URL = "https://ludykid.qweekle.com/shop/ludykid/ticketing?lang=fr&_gl=1*cvdwjz*_gcl_au*OTk0MDYwMTI2LjE3NzYxNTQ0ODQuMTIwMDYyMjU4NC4xNzgyMzk2MjU2LjE3ODIzOTg0NjE.";

export default function PromoBanner() {
  return (
    <a
      href={URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden bg-lk-orange h-9 flex items-center cursor-pointer"
      aria-label="Pass été 2026 — Accès au parc en illimité juillet & août"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        {[0, 1].map((n) => (
          <span key={n} className="flex items-center gap-10 pr-10 font-fredoka font-bold text-white text-sm tracking-wide">
            {Array.from({ length: 6 }).map((_, i) => (
              <span key={i} className="shrink-0">
                {TEXT}
                <span className="mx-6 opacity-60">★</span>
              </span>
            ))}
          </span>
        ))}
      </div>
    </a>
  );
}
