"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { Modal } from "./modal";

const courses = [
  {
    id: 1,
    title: "python for bioinformatics",
    level: "beginner",
    description:
      "from zero to functional scripts for biological data analysis. covers pandas, biopython, and sequence manipulation.",
    tags: ["python", "bioinformatics", "data"],
    status: "available",
    url: "#",
  },
  {
    id: 2,
    title: "building pipelines with nextflow",
    level: "intermediate",
    description:
      "scalable and reproducible bioinformatics workflows using nextflow dsl2, containers, and hpc environments.",
    tags: ["nextflow", "bash", "docker"],
    status: "coming soon",
    url: "#",
  },
  {
    id: 3,
    title: "web development for scientists",
    level: "intermediate",
    description:
      "build tools and interactive dashboards to share your research. from api design to deployment.",
    tags: ["react", "python", "fastapi"],
    status: "available",
    url: "#",
  },
  {
    id: 4,
    title: "linux and the command line",
    level: "beginner",
    description:
      "practical unix skills for researchers: file systems, shell scripting, remote servers, and automation.",
    tags: ["bash", "linux", "hpc"],
    status: "available",
    url: "#",
  },
  {
    id: 5,
    title: "data visualization with python",
    level: "intermediate",
    description:
      "turn raw data into clear, publication-ready figures using matplotlib, seaborn, and plotly.",
    tags: ["python", "plotly", "matplotlib"],
    status: "available",
    url: "#",
  },
  {
    id: 6,
    title: "machine learning for omics",
    level: "advanced",
    description:
      "apply classical and deep learning methods to genomics, transcriptomics, and proteomics data.",
    tags: ["python", "scikit-learn", "pytorch"],
    status: "coming soon",
    url: "#",
  },
];

const levelColor: Record<string, string> = {
  beginner: "#2d6a4f",
  intermediate: "#4a3f6b",
  advanced: "#7a2e2e",
};

type Course = (typeof courses)[number];

export function Courses() {
  const [selected, setSelected] = useState<Course | null>(null);

  return (
    <section id="courses" className="section-pad" style={{ padding: "100px 0" }}>
      <div
        style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}
      >
        <SectionHeader
          number="01"
          title="courses & classes"
          description="structured learning paths on software development, bioinformatics, and data science."
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {courses.map((course, i) => (
            <FadeIn key={course.id} delay={i * 60}>
              <div
                className="hover-surface"
                onClick={() => setSelected(course)}
                style={{
                  background: "var(--surface)",
                  padding: "2rem",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  height: "100%",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      letterSpacing: "0.1em",
                      color: "#fff",
                      background: levelColor[course.level] ?? "#333",
                      padding: "2px 8px",
                      borderRadius: "2px",
                    }}
                  >
                    {course.level}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "0.625rem",
                      color:
                        course.status === "available"
                          ? "#4ade80"
                          : "var(--muted)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {course.status}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 400,
                    lineHeight: 1.3,
                    color: "var(--text)",
                  }}
                >
                  {course.title}
                </h3>

                <p
                  style={{
                    fontSize: "0.8375rem",
                    color: "var(--muted)",
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {course.description}
                </p>

                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                  {course.tags.map((tag) => (
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
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.5rem, 4vw, 2.25rem)",
                  fontWeight: 300,
                  lineHeight: 1.1,
                  color: "var(--text)",
                }}
              >
                {selected.title}
              </h2>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: selected.status === "available" ? "#4ade80" : "var(--muted)",
                  letterSpacing: "0.06em",
                  flexShrink: 0,
                  marginTop: "0.5rem",
                }}
              >
                {selected.status}
              </span>
            </div>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.625rem",
                letterSpacing: "0.1em",
                color: "#fff",
                background: levelColor[selected.level] ?? "#333",
                padding: "2px 8px",
                borderRadius: "2px",
                alignSelf: "flex-start",
              }}
            >
              {selected.level}
            </span>

            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--muted)",
                lineHeight: 1.7,
              }}
            >
              {selected.description}
            </p>

            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {selected.tags.map((tag) => (
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

            {selected.url !== "#" && (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta"
                style={{ alignSelf: "flex-start" }}
              >
                access course &#8594;
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
