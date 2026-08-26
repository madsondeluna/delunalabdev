import { ThemeToggle } from "@/components/theme-toggle";
import { HeroCanvas } from "@/components/hero-canvas";
import { HeroContent } from "@/components/hero";
import { AppsGrid } from "@/components/apps";

const SOCIAL = [
  { label: "Portfolio", url: "https://madsondeluna.com", icon: "user" },
  { label: "GitHub", url: "https://github.com/madsondeluna", icon: "branch" },
  { label: "Twitter", url: "https://x.com/madsondeluna", icon: "send" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/madsonaragao/", icon: "users" },
  { label: "Mail", url: "mailto:madsondeluna@gmail.com", icon: "mail" },
];

export default function Page() {
  // static export: evaluated at build time
  const year = new Date().getFullYear();

  return (
    <>
      <div className="mode-switch">
        <ThemeToggle />
      </div>
      <section className="hero-section">
        <div className="hero-canvas-wrap" aria-hidden="true">
          <HeroCanvas />
        </div>

        <div className="hero-layout">
          <div className="hero-text">
            <HeroContent />
          </div>

          <div className="hero-apps">
            <AppsGrid />
          </div>
        </div>

        <footer className="hero-footer">
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-11)",
              color: "var(--muted)",
            }}
          >
            &copy; {year} gromads
          </span>

          {/* Aglomerado liquido: cinco gotas de tamanho fixo que se fundem
              pelo filtro goo. Os rotulos viram icone e aria-label, porque
              a unidade do aglomerado precisa ter largura fixa e um rotulo
              de texto nao tem. */}
          <div className="liquid liquid-tight social" style={{ pointerEvents: "auto" }}>
            <div className="liquid-sheet" aria-hidden="true">
              {SOCIAL.map((l) => (
                <span key={l.label} className="liquid-blob" />
              ))}
            </div>
            <div className="liquid-content">
              {SOCIAL.map((l) => (
                <a
                  key={l.label}
                  className="liquid-item"
                  href={l.url}
                  aria-label={l.label}
                  title={l.label}
                  target={l.url.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                >
                  <svg className="icon icon-sm" aria-hidden="true">
                    <use href={`/pure/icons.svg#${l.icon}`} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}
