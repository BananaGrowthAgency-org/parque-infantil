const TEXT =
  "🎂 Fêtez son anniversaire chez Ludykid le mercredi et profitez de -20 % sur toutes nos formules anniversaires ! 🎉";

export default function PromoBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] w-full overflow-hidden bg-lk-orange h-9 flex items-center"
      role="status"
      aria-label="Fêtez son anniversaire chez Ludykid le mercredi et profitez de -20 % sur toutes nos formules anniversaires"
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
    </div>
  );
}
