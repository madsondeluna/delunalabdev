import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";

const opinions = [
  {
    id: 1,
    title: "why reproducibility matters more than novelty in science",
    date: "2025-03-10",
    readTime: "5 min",
    excerpt:
      "the most impactful scientific contribution i have seen is a well-documented pipeline anyone can reproduce. here is why i now optimize for that first.",
    tags: ["science", "open-source"],
  },
  {
    id: 2,
    title: "python is not slow. your code is slow.",
    date: "2025-02-18",
    readTime: "4 min",
    excerpt:
      "most performance complaints about python come from not using numpy, pandas, or polars correctly. profiling before rewriting in rust is always the right move.",
    tags: ["python", "performance"],
  },
  {
    id: 3,
    title: "the real cost of complexity in research software",
    date: "2025-01-30",
    readTime: "6 min",
    excerpt:
      "a script that three people can understand beats an architecture that one person designed. in research, software outlives the people who wrote it.",
    tags: ["software", "research"],
  },
  {
    id: 4,
    title: "how i stopped dreading the terminal and started building with it",
    date: "2024-12-05",
    readTime: "7 min",
    excerpt:
      "the command line is not for power users only. it is the fastest path from idea to prototype for anyone working with data or systems.",
    tags: ["unix", "workflow"],
  },
];

export function Opinions() {
  return (
    <section id="opinions" style={{ padding: "100px 0" }}>
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
                href="#"
                className="hover-fade"
                style={{
                  display: "block",
                  padding: "2.25rem 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div
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
