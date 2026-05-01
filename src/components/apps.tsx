"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FadeIn } from "./fade-in";
import { apps, statusStyle, type App } from "@/data/apps";

function AppCard({ app, index }: { app: App; index: number }) {
  const isLive = app.url !== "#";
  const [popping, setPopping] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handler = () => {
      setTimeout(() => {
        setPopping(true);
        setTimeout(() => setPopping(false), 500);
      }, index * 60);
    };
    window.addEventListener("pop-cards", handler);
    return () => window.removeEventListener("pop-cards", handler);
  }, [index]);

  const handleClick = () => {
    if (!isLive) return;
    if (app.url.startsWith("/")) {
      router.push(app.url);
    } else {
      window.open(app.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <FadeIn delay={index * 60}>
      <div
        className={`${isLive ? "hover-surface" : ""} ${popping ? "card-pop" : ""}`.trim()}
        onClick={handleClick}
        style={{
          background: "var(--surface)",
          padding: "1.5rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
          height: "100%",
          cursor: isLive ? "pointer" : "default",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div style={{ display: "flex", gap: "0.3rem" }}>
            {app.type.map((t) => (
              <span
                key={t}
                className={`badge-tag badge-type-${t}`}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  padding: "2px 8px",
                  borderRadius: "2px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={`badge-tag badge-status-${app.status}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              padding: "2px 8px",
              borderRadius: "2px",
            }}
          >
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
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.6rem",
                padding: "2px 7px",
                borderRadius: "2px",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}

export function AppsGrid() {
  return (
    <div id="apps">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "1px",
          background: "var(--border)",
        }}
      >
        {apps.map((app, i) => (
          <AppCard key={app.id} app={app} index={i} />
        ))}
      </div>
    </div>
  );
}
