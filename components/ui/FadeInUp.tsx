"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type FadeInUpProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
};

export default function FadeInUp({
  children,
  delay = 0,
  y = 24,
  duration = 0.6,
  className = "",
  once = true,
}: FadeInUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  // SSR-safe: starts visible, animates only after hydration
  const [ready, setReady] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setReady(true);
    const el = ref.current;
    if (!el) { setVisible(true); return; }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        }
      },
      { rootMargin: "50px 0px 50px 0px", threshold: 0 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  // SSR + before hydration: fully visible, no animation
  if (!ready) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : `translateY(${y}px)`,
        transition: `opacity ${duration}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s, transform ${duration}s cubic-bezier(0.34,1.56,0.64,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
