"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  const color = hovered ? "var(--text)" : "var(--muted)";

  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      title={dark ? "switch to light" : "switch to dark"}
      style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        padding: "2px",
        display: "flex",
        alignItems: "center",
        gap: "0.4rem",
        transition: "color 0.2s ease",
      }}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="6.5"
          cy="6.5"
          r="5.5"
          stroke={color}
          strokeWidth="1.2"
          fill={dark ? color : "none"}
          style={{ transition: "fill 0.25s ease, stroke 0.2s ease" }}
        />
      </svg>
      <span
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.625rem",
          letterSpacing: "0.08em",
          color,
          transition: "color 0.2s ease",
        }}
      >
        {dark ? "dark" : "light"}
      </span>
    </button>
  );
}
