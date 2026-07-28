import { Nav } from "@/components/nav";
import { HeroCanvas } from "@/components/hero-canvas";
import { HeroContent } from "@/components/hero";
import { AppsGrid } from "@/components/apps";

export default function Page() {
  // static export: evaluated at build time
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />
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
              fontSize: "0.625rem",
              color: "var(--muted)",
            }}
          >
            &copy; {year} gromads
          </span>

          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
              pointerEvents: "auto",
            }}
          >
            {[
              { label: "portfolio", url: "https://madsondeluna.com" },
              { label: "github", url: "https://github.com/madsondeluna" },
              { label: "twitter", url: "https://x.com/madsondeluna" },
              { label: "linkedin", url: "https://www.linkedin.com/in/madsonaragao/" },
              { label: "mail", url: "mailto:madsondeluna@gmail.com" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.url}
                className="link-muted"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </footer>
      </section>
    </>
  );
}
