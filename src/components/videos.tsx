import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";

const videos = [
  {
    id: 1,
    title: "setting up a bioinformatics environment on macos",
    duration: "22:14",
    platform: "youtube",
    url: "#",
    category: "tutorial",
  },
  {
    id: 2,
    title: "nextflow from scratch: your first pipeline",
    duration: "38:07",
    platform: "youtube",
    url: "#",
    category: "tutorial",
  },
  {
    id: 3,
    title: "deploying a python api with docker and railway",
    duration: "19:42",
    platform: "youtube",
    url: "#",
    category: "tutorial",
  },
  {
    id: 4,
    title: "building a variant browser with react and fastapi",
    duration: "51:33",
    platform: "youtube",
    url: "#",
    category: "project",
  },
  {
    id: 5,
    title: "understanding vcf files for clinical genomics",
    duration: "27:18",
    platform: "youtube",
    url: "#",
    category: "concept",
  },
  {
    id: 6,
    title: "how i structure my python bioinformatics projects",
    duration: "14:55",
    platform: "youtube",
    url: "#",
    category: "workflow",
  },
];

const categoryColor: Record<string, string> = {
  tutorial: "#4a3f6b",
  project: "#2d5a7a",
  concept: "#4a5a2d",
  workflow: "#7a4a2d",
};

export function Videos() {
  return (
    <section id="videos" style={{ padding: "100px 0" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <SectionHeader
          number="03"
          title="videos"
          description="walkthroughs, tutorials, and project builds. practical content for hands-on learners."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 60}>
              <a
                href={video.url}
                className="hover-surface"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: "var(--surface)",
                }}
              >
                <div
                  style={{
                    aspectRatio: "16/9",
                    background: "var(--dim)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "1px solid var(--border-hover)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        color: "var(--muted)",
                        fontSize: "0.75rem",
                        marginLeft: "2px",
                      }}
                    >
                      &#9654;
                    </span>
                  </div>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "0.75rem",
                      right: "0.75rem",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.6875rem",
                      color: "var(--muted)",
                      background: "var(--bg)",
                      padding: "2px 6px",
                    }}
                  >
                    {video.duration}
                  </span>
                </div>

                <div style={{ padding: "1.25rem 1.5rem", flex: 1 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.5875rem",
                      color: "#fff",
                      background: categoryColor[video.category] ?? "#333",
                      padding: "2px 8px",
                      borderRadius: "2px",
                      marginBottom: "0.75rem",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {video.category}
                  </span>
                  <h3
                    style={{
                      fontSize: "0.9rem",
                      fontWeight: 400,
                      lineHeight: 1.45,
                      color: "var(--text)",
                    }}
                  >
                    {video.title}
                  </h3>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
