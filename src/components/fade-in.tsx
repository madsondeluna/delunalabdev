"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

/* a entrada e disparada por scroll, entao continua no observer em vez de
   .fade-up, que e uma animacao de carga. as curvas e as duracoes sao as
   nomeadas da linguagem; so transform e opacity animam. */
export function FadeIn({ children, delay = 0, className = "" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(var(--space-16))",
        transition: `opacity var(--duration-6) var(--ease-out-soft) ${delay}ms, transform var(--duration-6) var(--ease-out-soft) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
