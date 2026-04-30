export interface App {
  id: number;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  tags: string[];
  status: "live" | "beta" | "development";
}

export const apps: App[] = [
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

export const statusStyle: Record<App["status"], { color: string; label: string }> = {
  live: { color: "#4ade80", label: "live" },
  beta: { color: "#facc15", label: "beta" },
  development: { color: "#60a5fa", label: "in development" },
};
