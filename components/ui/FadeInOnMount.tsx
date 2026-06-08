"use client";

import { useState, useEffect, ReactNode } from "react";

type FadeInOnMountProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
};

export default function FadeInOnMount({
  children,
  delay = 0,
  y = 20,
  duration = 0.55,
  className = "",
}: FadeInOnMountProps) {
  const [ready, setReady] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setReady(true);
    requestAnimationFrame(() => setMounted(true));
  }, []);

  // SSR: fully visible
  if (!ready) return <div className={className}>{children}</div>;

  return (
    <div
      className={className}
      style={{
        opacity: mounted ? 1 : 0,
        transform: mounted ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, transform ${duration}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
