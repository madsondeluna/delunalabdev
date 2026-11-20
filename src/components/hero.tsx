"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "./use-reduced-motion";

function GlassButton() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    /* o percurso da seta dura o percurso e some: nao e estado do botao */
    setOpen(true);
    setTimeout(() => setOpen(false), 600);
    window.dispatchEvent(new CustomEvent("pop-cards"));
    // only on the stacked layout: on desktop the grid sits inside an
    // overflow:hidden section with no scrollbar to get back
    if (window.matchMedia("(max-width: 900px)").matches) {
      document.getElementById("apps")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    /* Um rotulo de largura variavel mora em .pill, nao numa unidade de
       aglomerado: a unidade liquida tem tamanho FIXO porque as duas
       camadas do material sao espelhos, e uma largura que depende do
       texto so se espelha medindo texto.

       Entao o botao engloba o rotulo inteiro, como vidro, e quem se move
       e a seta: ela sai pela direita e volta pela esquerda. O botao fica
       parado, do mesmo tamanho, do inicio ao fim. */
    <button
      className={`pill glass lit lit-swell explore ${open ? "is-go" : ""}`}
      data-lit
      onClick={handleClick}
    >
      Explore the applications
      <svg className="icon icon-sm" aria-hidden="true">
        <use href="/pure/icons.svg#arrow-right" />
      </svg>
    </button>
  );
}

const cyclingWords = [
  "building tools",
  "testing hypotheses",
  "designing systems",
  "exploring AI",
  "automating workflows",
  "training models",
  "shipping software",
  "prototyping ideas",
  "writing algorithms",
  "solving hard problems",
];

const cyclingSuffixes = [".dev", ".sh", ".io", ".ai", ".md", ".py", ".txt", ".env", ".yml"];

export function HeroContent() {
  const reducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [suffixIndex, setSuffixIndex] = useState(0);
  const [suffixVisible, setSuffixVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cyclingWords.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  useEffect(() => {
    if (reducedMotion) return;
    const interval = setInterval(() => {
      setSuffixVisible(false);
      setTimeout(() => {
        setSuffixIndex((i) => (i + 1) % cyclingSuffixes.length);
        setSuffixVisible(true);
      }, 400);
    }, 3600);
    return () => clearInterval(interval);
  }, [reducedMotion]);

  const fade = (delay: number): React.CSSProperties => ({
    transition: `opacity var(--duration-6) var(--ease-out-expo) ${delay}ms, transform var(--duration-6) var(--ease-out-expo) ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(var(--space-16))",
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        className="hero-blur"
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "-18rem -20rem",
          WebkitBackdropFilter: "blur(var(--glass-blur-frost))",
          backdropFilter: "blur(var(--glass-blur-frost))",
          WebkitMaskImage: "radial-gradient(ellipse at 40% 50%, black 0%, black 45%, transparent 100%)",
          maskImage: "radial-gradient(ellipse at 40% 50%, black 0%, black 45%, transparent 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <div className="byline" style={{ ...fade(0), marginBottom: "var(--space-24)" }}>
        <span className="byline-photo">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile/me.jpeg"
            alt="Madson A. de Luna-Aragão"
            width={160}
            height={160}
          />
        </span>
        <span className="byline-text">
          <span className="byline-name">Madson A. de Luna-Aragão</span>
          <span className="byline-role">Virtual development lab</span>
        </span>
      </div>

      <h1
        className="hero-nowrap"
        style={{
          ...fade(80),
          fontFamily: "var(--font-display)",
          fontStretch: "var(--font-display-stretch)",
          fontSize: "clamp(3.5rem, 7vw, 7rem)",
          fontWeight: "var(--weight-light)",
          lineHeight: "var(--leading-none)",
          letterSpacing: "var(--tracking-display)",
          color: "var(--text)",
          marginBottom: "var(--space-32)",
        }}
      >
        delunalab
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
            fontWeight: "var(--weight-light)",
            color: "var(--muted)",
            letterSpacing: "var(--tracking-normal)",
            display: "inline-block",
            minWidth: "2.8rem",
            transition:
              "opacity var(--duration-5) var(--ease-out-soft), filter var(--duration-5) var(--ease-out-soft)",
            opacity: suffixVisible ? 1 : 0,
            filter: suffixVisible ? "blur(0px)" : "blur(var(--motion-blur-3))",
          }}
        >
          {cyclingSuffixes[suffixIndex]}
        </span>
      </h1>

      <p
        className="hero-body"
        style={{
          ...fade(160),
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.8,
          marginBottom: "2.25rem",
        }}
      >
        A virtual lab dedicated to{" "}
        <span
          style={{
            display: "inline-block",
            minWidth: "10rem",
            textAlign: "center",
            color: "var(--muted)",
            fontWeight: 300,
            transition:
              "opacity var(--duration-5) var(--ease-out-soft), filter var(--duration-5) var(--ease-out-soft)",
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(var(--motion-blur-3))",
          }}
        >
          {cyclingWords[wordIndex]}
        </span>
        Each project here is an experiment at the boundary of artificial
        intelligence, autonomous systems, bioinformatics, and
        production software.
      </p>

      <div style={{ ...fade(240) }}>
        <GlassButton />
      </div>
    </div>
  );
}
