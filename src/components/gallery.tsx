"use client";

import { useEffect, useRef, useState } from "react";
import { FadeIn } from "./fade-in";
import { SectionHeader } from "./section-header";

const items = [
  { id: 1, label: "genomic variant browser", aspect: "16/9", shade: "var(--surface)" },
  { id: 2, label: "pipeline architecture diagram", aspect: "4/3", shade: "var(--dim)" },
  { id: 3, label: "rna-seq heatmap", aspect: "1/1", shade: "var(--surface)" },
  { id: 4, label: "sequence alignment view", aspect: "3/2", shade: "var(--dim)" },
  { id: 5, label: "lab dashboard ui", aspect: "16/10", shade: "var(--surface)" },
  { id: 6, label: "protein structure", aspect: "1/1", shade: "var(--dim)" },
  { id: 7, label: "phylogenetic tree", aspect: "4/5", shade: "var(--surface)" },
  { id: 8, label: "workflow diagram", aspect: "3/2", shade: "var(--dim)" },
];

const TARGET_HEIGHT = 240;
const GAP = 1;

function getAR(aspect: string) {
  const [w, h] = aspect.split("/").map(Number);
  return w / h;
}

interface Row {
  items: typeof items;
  height: number;
  widths: number[];
}

function buildLayout(containerWidth: number): Row[] {
  const rows: Row[] = [];
  let row: typeof items = [];
  let arSum = 0;

  for (const item of items) {
    const ar = getAR(item.aspect);
    const projected = (arSum + ar) * TARGET_HEIGHT + row.length * GAP;

    if (projected > containerWidth && row.length > 0) {
      const h = (containerWidth - (row.length - 1) * GAP) / arSum;
      rows.push({ items: row, height: h, widths: row.map((it) => getAR(it.aspect) * h) });
      row = [item];
      arSum = ar;
    } else {
      row.push(item);
      arSum += ar;
    }
  }

  if (row.length > 0) {
    const h = (containerWidth - (row.length - 1) * GAP) / arSum;
    rows.push({ items: row, height: h, widths: row.map((it) => getAR(it.aspect) * h) });
  }

  return rows;
}

export function Gallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rows, setRows] = useState<Row[]>([]);

  useEffect(() => {
    function compute() {
      if (containerRef.current) {
        setRows(buildLayout(containerRef.current.clientWidth));
      }
    }
    compute();
    const obs = new ResizeObserver(compute);
    if (containerRef.current) obs.observe(containerRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="gallery" className="section-pad" style={{ padding: "100px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2.5rem" }}>
        <SectionHeader
          number="05"
          title="gallery"
          description="screenshots, visualizations, diagrams, and artifacts from projects and research."
        />

        <div
          ref={containerRef}
          style={{ display: "flex", flexDirection: "column", gap: `${GAP}px` }}
        >
          {rows.map((row, ri) => (
            <div key={ri} style={{ display: "flex", gap: `${GAP}px`, height: row.height }}>
              {row.items.map((item, ii) => (
                <FadeIn key={item.id} delay={ii * 40}>
                  <div
                    className="hover-fade"
                    style={{
                      width: row.widths[ii],
                      height: row.height,
                      background: item.shade,
                      display: "flex",
                      alignItems: "flex-end",
                      padding: "0.75rem 1rem",
                      cursor: "zoom-in",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.6rem",
                        color: "#3a5a3c",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                </FadeIn>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
