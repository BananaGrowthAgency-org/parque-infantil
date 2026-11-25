"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";

// Elfsight Popup | Popup Loterie Ludykid
export default function ElfsightPopup() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <>
      <div
        className="elfsight-app-fde8d5e7-6f31-40aa-afe7-b556030072ff"
        data-elfsight-app-lazy
      />
      <Script src="https://elfsightcdn.com/platform.js" strategy="afterInteractive" />
    </>
  );
}
