import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { opinions } from "@/data/opinions";

export function Opinions() {
  return (
    <section id="opinions" className="section-pad" style={{ padding: "100px 0" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <SectionHeader
          number="04"
          title="opinions"
          description="essays and perspectives on software development, science, and technology."
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          {opinions.map((post, i) => (
            <FadeIn key={post.id} delay={i * 80}>
              <a
                href={`/opinions/${post.slug}`}
                className="hover-fade"
                style={{
                  display: "block",
                  padding: "2.25rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
                  className="opinions-row"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: "2rem",
                    marginBottom: "0.875rem",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
                      fontWeight: 400,
                      lineHeight: 1.2,
                      color: "var(--text)",
                      maxWidth: "680px",
                    }}
                  >
                    {post.title}
                  </h3>
                  <div
                    className="opinions-meta"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-end",
                      gap: "0.25rem",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: "var(--muted)",
                      }}
                    >
                      {post.date}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6875rem",
                        color: "var(--muted)",
                      }}
                    >
                      {post.readTime} read
                    </span>
                  </div>
                </div>

                <p
                  style={{
                    fontSize: "0.8375rem",
                    color: "var(--muted)",
                    lineHeight: 1.7,
                    maxWidth: "640px",
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  {post.tags.map((tag) => (
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
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
