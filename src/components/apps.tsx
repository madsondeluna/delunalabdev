"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { useReducedMotion } from "./use-reduced-motion";
import { apps, statusStyle, type App } from "@/data/apps";

const badgeBase: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "0.625rem",
  letterSpacing: "0.1em",
  padding: "2px 8px",
  borderRadius: "2px",
  whiteSpace: "nowrap",
};

function CardBody({ app }: { app: App }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "0.3rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.3rem" }}>
          {app.type.map((t) => (
            <span key={t} className={`badge-tag badge-type-${t}`} style={badgeBase}>
              {t}
            </span>
          ))}
        </div>
        <span className={`badge-tag badge-status-${app.status}`} style={badgeBase}>
          {statusStyle[app.status]?.label}
        </span>
      </div>

      <h3
        style={{
          fontSize: "0.95rem",
          fontWeight: 400,
          lineHeight: 1.3,
          color: "var(--text)",
        }}
      >
        {app.title}
      </h3>

      <p
        style={{
          fontSize: "0.775rem",
          color: "var(--muted)",
          lineHeight: 1.6,
          flex: 1,
        }}
      >
        {app.description}
      </p>

      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
        {app.tags.map((tag) => (
          <span
            key={tag}
            className={`badge-tag badge-${tag}`}
            style={{ ...badgeBase, fontSize: "0.6rem", padding: "2px 7px" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function AppCard({ app, index }: { app: App; index: number }) {
  const isLive = app.url !== "#";
  const isInternal = app.url.startsWith("/");
  const [popping, setPopping] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;
    const handler = () => {
      setTimeout(() => {
        setPopping(true);
        setTimeout(() => setPopping(false), 500);
      }, index * 60);
    };
    window.addEventListener("pop-cards", handler);
    return () => window.removeEventListener("pop-cards", handler);
  }, [index, reducedMotion]);

  // os cartoes do hero ficam sobre o canvas, entao o vidro tem o que
  // refratar; abaixo de 900px o canvas sai e o CSS devolve a superficie solida
  const className = `app-card card-glass ${isLive ? "glass-lift" : ""} ${
    popping ? "card-pop" : ""
  }`.trim();

  const body = <CardBody app={app} />;

  let card: React.ReactNode;
  if (!isLive) {
    card = (
      <div className={className} aria-disabled="true">
        {body}
      </div>
    );
  } else if (isInternal) {
    card = (
      <Link href={app.url} className={className}>
        {body}
      </Link>
    );
  } else {
    card = (
      <a
        href={app.url}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    );
  }

  return <FadeIn delay={index * 60}>{card}</FadeIn>;
}

export function AppsGrid() {
  return (
    <div id="apps">
      <div className="apps-grid">
        {apps.map((app, i) => (
          <AppCard key={app.id} app={app} index={i} />
        ))}
      </div>
    </div>
  );
}
