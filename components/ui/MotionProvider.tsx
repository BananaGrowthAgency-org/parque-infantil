"use client";
import { LazyMotion } from "framer-motion";

// Carga asíncrona — framer-motion no bloquea el hilo principal en el primer render
const loadFeatures = () => import("framer-motion").then((m) => m.domAnimation);

export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return <LazyMotion features={loadFeatures}>{children}</LazyMotion>;
}
