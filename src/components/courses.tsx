"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { Modal } from "./modal";
import { courses, levelColor, type Course } from "@/data/courses";

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
