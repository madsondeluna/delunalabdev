"use client";

import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { label: "courses", href: "#courses" },
  { label: "apps", href: "#apps" },
  { label: "videos", href: "#videos" },
  { label: "opinions", href: "#opinions" },
  { label: "gallery", href: "#gallery" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "64px",
        padding: "0 2.5rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        transition: "background 0.4s ease, border-color 0.4s ease",
        backgroundColor: scrolled ? "rgba(8,8,8,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
      }}
    >
      <a
        href="#"
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.8125rem",
          color: "var(--text)",
          letterSpacing: "0.04em",
        }}
      >
        delunalab
      </a>

      <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {links.map((link) => (
          <NavLink key={link.href} href={link.href} label={link.label} />
        ))}
        <ThemeToggle />
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontSize: "0.8125rem",
        color: hovered ? "var(--text)" : "var(--muted)",
        transition: "color 0.2s ease",
      }}
    >
      {label}
    </a>
  );
}
