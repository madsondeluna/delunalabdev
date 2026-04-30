import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";

const apps = [
  {
    id: 1,
    title: "sequence explorer",
    description:
      "interactive web application for dna and rna sequence analysis, annotation, and visualization.",
    url: "#",
    tags: ["react", "python", "fastapi"],
    status: "live",
  },
  {
    id: 2,
    title: "pipeline dashboard",
    description:
      "monitor and visualize nextflow pipeline runs in real time with logs, resource usage, and status tracking.",
    url: "#",
    tags: ["next.js", "nextflow", "websocket"],
    status: "beta",
  },
  {
    id: 3,
    title: "lab notebook",
    description:
      "a structured digital notebook for organizing experimental records, protocols, and observations.",
    url: "#",
    tags: ["next.js", "markdown", "sqlite"],
    status: "development",
  },
  {
    id: 4,
    title: "variant annotator",
    description:
      "upload vcf files and receive annotated variant reports with clinical and functional context.",
    url: "#",
    tags: ["python", "bcftools", "react"],
    status: "live",
  },
];

const statusStyle: Record<string, { color: string; label: string }> = {
  live: { color: "#4ade80", label: "live" },
  beta: { color: "#facc15", label: "beta" },
  development: { color: "#60a5fa", label: "in development" },
};

export function Apps() {
  return (
    <section id="apps" className="section-pad" style={{ padding: "100px 0" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <SectionHeader
          number="02"
          title="applications"
          description="tools built to solve real problems in research and software development."
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {apps.map((app, i) => (
            <FadeIn key={app.id} delay={i * 80}>
              <a
                href={app.url}
                className="hover-surface"
                style={{
                  display: "flex",
                  gap: "2rem",
                  padding: "2rem",
                  background: "var(--surface)",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "1rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <h3
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 400,
                        color: "var(--text)",
                      }}
                    >
                      {app.title}
                    </h3>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: statusStyle[app.status]?.color ?? "var(--muted)",
                        letterSpacing: "0.08em",
                      }}
                    >
                      {statusStyle[app.status]?.label}
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.8375rem",
                      color: "var(--muted)",
                      lineHeight: 1.65,
                      maxWidth: "600px",
                      marginBottom: "1rem",
                    }}
                  >
                    {app.description}
                  </p>

                  <div
                    style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}
                  >
                    {app.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.625rem",
                          color: "var(--muted)",
                          border: "1px solid var(--border)",
                          padding: "2px 8px",
                          borderRadius: "2px",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.875rem",
                    color: "var(--muted)",
                    flexShrink: 0,
                    marginTop: "0.2rem",
                  }}
                >
                  &#8594;
                </span>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
