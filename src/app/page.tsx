import { Nav } from "@/components/nav";
import { HeroCanvas } from "@/components/hero-canvas";
import { HeroContent } from "@/components/hero";
import { AppsGrid } from "@/components/apps";

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />
      <section
        style={{
          height: "100svh",
          overflow: "hidden",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 0,
          }}
        >
          <HeroCanvas />
        </div>

        <div
          style={{
            flex: 1,
            width: "100%",
            padding: "56px 3rem 0 3rem",
            position: "relative",
            zIndex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ flex: "0 0 360px", maxWidth: "360px", position: "relative", zIndex: 2 }}>
            <HeroContent />
          </div>

          <div style={{ flex: "0 0 50%", maxWidth: "50%" }}>
            <AppsGrid />
          </div>
        </div>

        <footer
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "30%",
            zIndex: 2,
            background: "linear-gradient(to top, var(--bg) 30%, transparent 100%)",
            pointerEvents: "none",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            padding: "0 3rem 1.25rem",
            gap: "0.5rem",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.625rem",
              color: "var(--muted)",
            }}
          >
            &copy; {year} gromads
          </span>

          <div style={{ display: "flex", gap: "1.5rem", pointerEvents: "auto" }}>
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
