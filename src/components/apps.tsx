"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FadeIn } from "./fade-in";
import { apps, statusStyle, tagStyle, typeStyle, type App } from "@/data/apps";

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
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  letterSpacing: "0.1em",
                  color: typeStyle[t]?.color ?? "var(--muted)",
                  background: typeStyle[t]?.bg ?? "transparent",
                  border: `1px solid ${typeStyle[t]?.color ?? "var(--border)"}40`,
                  padding: "2px 8px",
                  borderRadius: "2px",
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              letterSpacing: "0.1em",
              color: statusStyle[app.status]?.color ?? "var(--muted)",
              background: statusStyle[app.status]?.bg ?? "transparent",
              border: `1px solid ${statusStyle[app.status]?.border ?? "var(--border)"}`,
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
          {app.tags.map((tag) => {
            const ts = tagStyle[tag];
            return (
              <span
                key={tag}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.6rem",
                  color: ts?.color ?? "var(--muted)",
                  background: ts?.bg ?? "transparent",
                  border: `1px solid ${ts?.border ?? "var(--border)"}`,
                  padding: "2px 7px",
                  borderRadius: "2px",
                }}
              >
                {tag}
              </span>
            );
          })}
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
