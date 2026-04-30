"use client";

import { useEffect, useState } from "react";
import { HeroCanvas } from "./hero-canvas";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
  });

  return (
    <section
      style={{
        minHeight: "100svh",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {/* canvas — absoluto, cobre a metade direita + invade pra esquerda */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          width: "70%",
          zIndex: 0,
        }}
      >
        <HeroCanvas />
      </div>

      {/* conteúdo — layout original */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "120px 2.5rem 80px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div style={{ maxWidth: "620px" }}>
          <p
            style={{
              ...fade(0),
              fontFamily: "var(--font-mono)",
              fontSize: "0.6875rem",
              color: "var(--muted)",
              letterSpacing: "0.14em",
              marginBottom: "2.5rem",
            }}
          >
            madson de luna / lab of solutions development
          </p>

          <h1
            style={{
              ...fade(80),
              fontFamily: "var(--font-display)",
              fontSize: "clamp(4rem, 10vw, 8.5rem)",
              fontWeight: 300,
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "var(--text)",
              marginBottom: "3rem",
            }}
          >
            delunalab
          </h1>

          <p
            style={{
              ...fade(160),
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
              maxWidth: "520px",
              marginBottom: "3.5rem",
            }}
          >
            a virtual lab for building, teaching, and exploring software
            solutions. courses, applications, videos, and opinions on
            development and bioinformatics.
          </p>

          <div
            style={{
              ...fade(240),
              display: "flex",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            <a href="#courses" className="link-cta">
              explore work <span style={{ fontSize: "0.75rem" }}>&#8594;</span>
            </a>
            <a href="#footer" className="link-secondary">
              contact
            </a>
          </div>
        </div>
      </div>

      {/* scroll indicator — posição original */}
      <div
        style={{
          ...fade(400),
          position: "absolute",
          bottom: "2.5rem",
          right: "2.5rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.6875rem",
            color: "var(--muted)",
            letterSpacing: "0.08em",
            writingMode: "vertical-rl",
          }}
        >
          scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "48px",
            background: "linear-gradient(to bottom, var(--muted), transparent)",
          }}
        />
      </div>
    </section>
  );
}
