"use client";

import { motion, useReducedMotion } from "framer-motion";
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
  const prefersReduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  // Paso 1: marcar montado (render separado del paso 2)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Paso 2: solo tras el montado, observar el motion.div real
  useEffect(() => {
    if (!mounted) return;
    const el = ref.current;
    if (!el) { setVisible(true); return; }

    // Ya en viewport al cargar → visible de inmediato (la animación parte de initial)
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
      setVisible(true);
      return;
    }

    // Fuera del viewport → observar scroll
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
  }, [mounted, once]);

  // SSR / reduced motion: div visible sin inline-style (sin riesgo de contenido invisible)
  if (!mounted || prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration, delay, ease: [0.34, 1.56, 0.64, 1] }}
    >
      {children}
    </motion.div>
  );
}
