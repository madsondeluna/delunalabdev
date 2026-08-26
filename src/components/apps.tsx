"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FadeIn } from "./fade-in";
import { useReducedMotion } from "./use-reduced-motion";
import { apps, statusStyle, type App } from "@/data/apps";

function CardBody({ app }: { app: App }) {
  return (
    <>
      {/* O ESTADO fica sozinho na primeira linha. Ele dividia a linha com
          as etiquetas de tipo por space-between, e bastavam tres tipos
          para ele cair sozinho numa segunda linha, alinhado a direita,
          orfao. Estado e a informacao que decide se vale clicar: ela nao
          disputa fileira com rotulo de tecnologia. */}
      <span className={`badge-tag badge-status-${app.status}`}>
        {statusStyle[app.status]?.label}
      </span>

      <h3
        style={{
          fontSize: "var(--text-15)",
          fontWeight: "var(--weight-medium)",
          lineHeight: "var(--leading-snug)",
          color: "var(--text)",
        }}
      >
        {app.title}
      </h3>

      <p
        style={{
          fontSize: "var(--text-13)",
          color: "var(--muted)",
          lineHeight: "var(--leading-normal)",
          flex: 1,
        }}
      >
        {app.description}
      </p>

      {/* Tipo e tecnologia num contentor SO. Eram dois, e cada um quebrava
          por conta propria: cada grupo terminava com uma etiqueta sozinha
          na ultima fileira. Juntos, cada linha se enche antes de quebrar,
          e os dois respondem a mesma pergunta: do que isto e feito. */}
      <div className="card-tags">
        {app.type.map((t) => (
          <span key={t} className="badge-tag">
            {t}
          </span>
        ))}
        {app.tags.map((tag) => (
          <span key={tag} className="badge-tag">
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
  const className = `app-card lit ${
    popping ? "card-pop" : ""
  }`.trim();

  const body = <CardBody app={app} />;

  let card: React.ReactNode;
  if (!isLive) {
    card = (
      <div className={className} data-lit aria-disabled="true">
        {body}
      </div>
    );
  } else if (isInternal) {
    card = (
      <Link href={app.url} className={className} data-lit>
        {body}
      </Link>
    );
  } else {
    card = (
      <a
        href={app.url}
        className={className}
        data-lit
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
