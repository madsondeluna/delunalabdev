"use client";

import { useState } from "react";
import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";
import { Modal } from "./modal";
import { videos, categoryColor, type Video } from "@/data/videos";

export function Videos() {
  const [selected, setSelected] = useState<Video | null>(null);

  return (
    <section id="videos" className="section-pad" style={{ padding: "100px 0" }}>
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
            gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
            gap: "1px",
            background: "var(--border)",
          }}
        >
          {videos.map((video, i) => (
            <FadeIn key={video.id} delay={i * 60}>
              <div
                className="hover-surface"
                onClick={() => setSelected(video)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  background: "var(--surface)",
                  cursor: "pointer",
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
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {selected && (
        <Modal onClose={() => setSelected(null)}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
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
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  border: "1px solid var(--border-hover)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span style={{ color: "var(--muted)", fontSize: "1rem", marginLeft: "3px" }}>
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
                {selected.duration}
              </span>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.5875rem",
                  color: "#fff",
                  background: categoryColor[selected.category] ?? "#333",
                  padding: "2px 8px",
                  borderRadius: "2px",
                  letterSpacing: "0.08em",
                }}
              >
                {selected.category}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.625rem",
                  color: "var(--muted)",
                }}
              >
                {selected.platform}
              </span>
            </div>

            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.4rem, 4vw, 2rem)",
                fontWeight: 300,
                lineHeight: 1.2,
                color: "var(--text)",
              }}
            >
              {selected.title}
            </h2>

            {selected.url !== "#" && (
              <a
                href={selected.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-cta"
                style={{ alignSelf: "flex-start" }}
              >
                watch on {selected.platform} &#8594;
              </a>
            )}
          </div>
        </Modal>
      )}
    </section>
  );
}
