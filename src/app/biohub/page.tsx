import { Nav } from "@/components/nav";
import { FadeIn } from "@/components/fade-in";

const tools = [
  {
    id: "viewer",
    title: "pdbviewer",
    description: "lightweight 3d viewer for pdb structures with multiple representation modes and color schemes.",
    href: "/biohub/viewer/index.html",
    status: "launched",
    type: "web",
  },
  {
    id: "pdb2fasta",
    title: "pdb2fasta",
    description: "convert protein structures in pdb format to fasta sequences quickly and efficiently.",
    href: "/biohub/pdb2fasta/index.html",
    status: "launched",
    type: "web",
  },
  {
    id: "csv2fasta",
    title: "csv2fasta",
    description: "convert csv files containing protein sequences to fasta format with customizable column selection.",
    href: "/biohub/csv2fasta/index.html",
    status: "launched",
    type: "web",
  },
  {
    id: "hydrop",
    title: "hydrophscale",
    description: "analyze protein hydrophobicity using the kyte-doolittle scale and generate structural plots.",
    href: "/biohub/hydrop/index.html",
    status: "launched",
    type: "web",
  },
  {
    id: "bioparam",
    title: "seqparam",
    description: "calculate physicochemical parameters from protein sequences: molecular weight, pi, and more.",
    href: "/biohub/bioparam/index.html",
    status: "launched",
    type: "web",
  },
  {
    id: "contactmap",
    title: "contactmapgen",
    description: "generate and visualize protein contact maps from pdb structural data.",
    href: "/biohub/contactmap/index.html",
    status: "launched",
    type: "web",
  },
];

const statusStyle: Record<string, { color: string; bg: string; border: string }> = {
  launched: { color: "#16a34a", bg: "rgba(34,197,94,0.10)",  border: "rgba(34,197,94,0.3)" },
  beta:     { color: "#d97706", bg: "rgba(245,158,11,0.10)", border: "rgba(245,158,11,0.3)" },
};

export default function BiohubPage() {
  const year = new Date().getFullYear();

  return (
    <>
      <Nav />
      <div
        style={{
          minHeight: "100svh",
          padding: "64px 3rem 4rem",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <FadeIn>
          <div style={{ marginBottom: "2.5rem", display: "flex", alignItems: "baseline", gap: "3rem" }}>
            <div style={{ flexShrink: 0 }}>
              <a href="/" className="btn-glass" style={{ marginBottom: "1.5rem", display: "inline-flex" }}>
                <span>&#8592;</span> home
              </a>
              <p
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted)",
                  letterSpacing: "0.18em",
                  marginBottom: "1.25rem",
                }}
              >
                bioinformatics tools
              </p>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 0.92,
                  letterSpacing: "-0.03em",
                  color: "var(--text)",
                  margin: 0,
                  whiteSpace: "nowrap",
                }}
              >
                biohub
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "clamp(0.875rem, 1.5vw, 1.5rem)",
                    fontWeight: 300,
                    color: "var(--muted)",
                    letterSpacing: "0.02em",
                  }}
                >
                  .web
                </span>
              </h1>
            </div>

          </div>
        </FadeIn>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "var(--border)",
            marginTop: "2rem",
            marginBottom: "auto",
          }}
        >
          {tools.map((tool, i) => (
            <FadeIn key={tool.id} delay={i * 50}>
              <a
                href={tool.href}
                className="hover-surface"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.5rem",
                  padding: "1.25rem",
                  background: "var(--surface)",
                  height: "100%",
                  minHeight: "160px",
                }}
              >
                <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      color: statusStyle[tool.status]?.color,
                      background: statusStyle[tool.status]?.bg,
                      border: `1px solid ${statusStyle[tool.status]?.border}`,
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {tool.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "var(--text)",
                    margin: 0,
                  }}
                >
                  {tool.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.775rem",
                    color: "var(--muted)",
                    lineHeight: 1.5,
                    margin: 0,
                  }}
                >
                  {tool.description}
                </p>

                <span className="btn-glass" style={{ alignSelf: "flex-start", marginTop: "auto" }}>
                  open <span>&#8594;</span>
                </span>
              </a>
            </FadeIn>
          ))}
        </div>

        <footer
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "20%",
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

      </div>
    </>
  );
}
