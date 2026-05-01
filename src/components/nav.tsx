"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const check = () =>
      setIsDark(document.documentElement.classList.contains("dark"));
    check();
    const obs = new MutationObserver(check);
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    return () => obs.disconnect();
  }, []);

  const activeBg = isDark
    ? "rgba(13, 19, 33, 0.88)"
    : "rgba(244, 246, 249, 0.88)";
  const bg = scrolled ? activeBg : "transparent";
  const blur = scrolled ? "blur(20px)" : "none";
  const border = scrolled ? "var(--border)" : "transparent";

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background 0.4s ease, border-color 0.4s ease",
        backgroundColor: bg,
        backdropFilter: blur,
        WebkitBackdropFilter: blur,
        borderBottom: `1px solid ${border}`,
      }}
    >
      <div
        style={{
          height: "64px",
          padding: "0 2.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <nav style={{ display: "flex", alignItems: "center" }}>
          <ThemeToggle />
        </nav>
      </div>

    </header>
  );
}

