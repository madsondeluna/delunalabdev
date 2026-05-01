"use client";

import { useEffect, useState } from "react";

function GlassButton() {
  const handleClick = () => {
    window.dispatchEvent(new CustomEvent("pop-cards"));
  };

  return (
    <button className="btn-glass" onClick={handleClick}>
      explore the applications <span>&#8594;</span>
    </button>
  );
}

const cyclingWords = [
  "building tools",
  "testing hypotheses",
  "designing systems",
  "exploring ai",
  "automating workflows",
  "training models",
  "shipping software",
  "prototyping ideas",
  "writing algorithms",
  "solving hard problems",
];

const cyclingSuffixes = [".dev", ".sh", ".io", ".ai", ".md", ".py", ".txt", ".env", ".yml"];

export function HeroContent() {
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
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % cyclingWords.length);
        setVisible(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSuffixVisible(false);
      setTimeout(() => {
        setSuffixIndex((i) => (i + 1) % cyclingSuffixes.length);
        setSuffixVisible(true);
      }, 400);
    }, 3600);
    return () => clearInterval(interval);
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    transition: `opacity 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 1s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(16px)",
  });

  return (
    <div style={{ position: "relative" }}>
      <div
        style={{
          position: "absolute",
          inset: "-18rem -20rem",
          backdropFilter: "blur(5px)",
          WebkitBackdropFilter: "blur(5px)",
          WebkitMaskImage: "radial-gradient(ellipse at 40% 50%, black 0%, black 45%, transparent 100%)",
          maskImage: "radial-gradient(ellipse at 40% 50%, black 0%, black 45%, transparent 100%)",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      <p
        style={{
          ...fade(0),
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          color: "var(--muted)",
          letterSpacing: "0.18em",
          marginBottom: "2rem",
        }}
      >
        madson de luna / virtual development lab
      </p>

      <h1
        style={{
          ...fade(80),
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.5rem, 7vw, 7rem)",
          fontWeight: 300,
          lineHeight: 0.92,
          letterSpacing: "-0.03em",
          color: "var(--text)",
          marginBottom: "2.25rem",
          whiteSpace: "nowrap",
        }}
      >
        delunalab
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(1.25rem, 2vw, 2rem)",
            fontWeight: 300,
            color: "var(--muted)",
            letterSpacing: "0.02em",
            display: "inline-block",
            minWidth: "2.8rem",
            transition: "opacity 0.4s ease, filter 0.4s ease",
            opacity: suffixVisible ? 1 : 0,
            filter: suffixVisible ? "blur(0px)" : "blur(8px)",
          }}
        >
          {cyclingSuffixes[suffixIndex]}
        </span>
      </h1>


      <p
        style={{
          ...fade(160),
          fontSize: "0.875rem",
          color: "var(--muted)",
          lineHeight: 1.8,
          maxWidth: "380px",
          marginBottom: "2.25rem",
          textAlign: "justify",
        }}
      >
        a virtual lab dedicated to{" "}
        <span
          style={{
            display: "inline-block",
            minWidth: "10rem",
            textAlign: "center",
            color: "var(--muted)",
            fontWeight: 300,
            transition: "opacity 0.4s ease, filter 0.4s ease",
            opacity: visible ? 1 : 0,
            filter: visible ? "blur(0px)" : "blur(8px)",
          }}
        >
          {cyclingWords[wordIndex]}
        </span>
        each project here is an experiment at the boundary of artificial
        intelligence, autonomous systems, bioinformatics, and
        production software.
      </p>

      <div style={{ ...fade(240) }}>
        <GlassButton />
      </div>
    </div>
  );

}
