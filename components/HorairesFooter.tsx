"use client";

export default function HorairesFooter() {
  const now = new Date();
  const isEte = now >= new Date("2026-07-01") && now < new Date("2026-09-01");

  if (isEte) {
    return (
      <li className="pt-2">
        <div className="rounded-lg border border-[#FFD600]/30 bg-[#FFD600]/10 px-3 py-2.5 space-y-1.5">
          <p className="font-fredoka font-bold text-[#FFD600] text-sm flex items-center gap-2 tracking-wide">
            ☀️ Horaires d&apos;été
          </p>
          <p className="text-gray-200 text-xs font-nunito leading-relaxed">
            <span className="text-[#FFD600] font-bold">Lun → Sam</span> 10h–18h
          </p>
          <p className="text-gray-400 text-xs font-nunito italic">
            Fermé le dimanche
          </p>
        </div>
      </li>
    );
  }

  return (
    <>
      <li className="pt-2">
        <span className="text-[#E8731A] font-bold">Mer, Sam, Dim</span> 10h–19h
      </li>
      <li>
        <span className="text-[#7B35A0] font-bold">Vendredi</span> 15h–19h
      </li>
    </>
  );
}
