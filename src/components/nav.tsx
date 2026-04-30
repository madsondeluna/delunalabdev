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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = () => setMenuOpen(false);
    window.addEventListener("scroll", handler, { passive: true, once: true });
  }, [menuOpen]);

  const bg =
    scrolled || menuOpen ? "rgba(8,8,8,0.95)" : "transparent";
  const blur =
    scrolled || menuOpen ? "blur(16px)" : "none";
  const border =
    scrolled ? "var(--border)" : "transparent";

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
          justifyContent: "space-between",
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

        <nav
          className="nav-desktop"
          style={{ display: "flex", gap: "2rem", alignItems: "center" }}
        >
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <ThemeToggle />
        </nav>

        <div
          className="nav-mobile-controls"
          style={{ display: "none", alignItems: "center", gap: "1rem" }}
        >
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "close menu" : "open menu"}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1px",
                background: "var(--text)",
                transition: "transform 0.2s ease",
                transform: menuOpen ? "translateY(6px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1px",
                background: "var(--text)",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1px",
                background: "var(--text)",
                transition: "transform 0.2s ease",
                transform: menuOpen
                  ? "translateY(-6px) rotate(-45deg)"
                  : "none",
              }}
            />
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          style={{
            padding: "0.5rem 2.5rem 1.5rem",
            display: "flex",
            flexDirection: "column",
            borderTop: "1px solid var(--border)",
          }}
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.875rem",
                color: "var(--muted)",
                padding: "0.875rem 0",
                borderBottom: "1px solid var(--border)",
                transition: "color 0.2s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
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
