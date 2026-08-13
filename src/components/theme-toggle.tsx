"use client";

import { useEffect, useState } from "react";

/* a linguagem chama de deep-blue o escuro azul da identidade; dark, no
   pure, e o grafite neutro. o valor guardado continua "dark" para nao
   zerar a preferencia de quem ja visitou o site. */
const MODE_CLASS = "deep-blue";

export function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains(MODE_CLASS));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle(MODE_CLASS, next);
    localStorage.setItem("theme", next ? "dark" : "light");
  }

  return (
    <button
      className="pill pill-sm glass-lift"
      onClick={toggle}
      title={dark ? "switch to light" : "switch to dark"}
      aria-label={dark ? "switch to light theme" : "switch to dark theme"}
      aria-pressed={dark}
    >
      <svg
        width="13"
        height="13"
        viewBox="0 0 13 13"
        fill="none"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="6.5"
          cy="6.5"
          r="5.5"
          stroke="currentColor"
          strokeWidth="1.2"
          fill={dark ? "currentColor" : "none"}
          style={{
            transition: "fill var(--duration-4) var(--ease-out-soft)",
          }}
        />
      </svg>
      <span style={{ letterSpacing: "var(--tracking-wide)" }}>
        {dark ? "dark" : "light"}
      </span>
    </button>
  );
}
