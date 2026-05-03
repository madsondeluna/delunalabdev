export interface App {
  id: number;
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  tags: string[];
  status: "live" | "beta" | "development" | "portfolio";
  type: string[];
}

export const apps: App[] = [
  {
    id: 1,
    title: "biohub",
    description:
      "centralized portal for biological data integration, search, and exploration across multiple omics layers.",
    url: "/biohub",
    tags: ["python", "javascript", "html", "css"],
    status: "live",
    type: ["web"],
  },
  {
    id: 2,
    title: "ampidentifier",
    description:
      "machine learning classifier for antimicrobial peptide identification from amino acid sequences.",
    url: "https://www.ampidentifier.com/",
    tags: ["python", "scikit-learn", "bash", "html", "javascript", "css", "docker"],
    status: "live",
    type: ["cli", "web", "pip"],
  },
  {
    id: 3,
    title: "decryptamp",
    description:
      "computational pipeline to mine proteomes for encrypted antimicrobial peptides that exist latently within larger protein sequences.",
    url: "#",
    tags: ["python", "scikit-learn", "bash", "docker"],
    status: "development",
    type: ["cli", "pip"],
  },
  {
    id: 4,
    title: "ampcraft",
    description:
      "AI-guided AMP discovery pipeline with ESM-2 classifiers, sequence generation, and ESMFold structure prediction.",
    url: "#",
    tags: ["python", "tensorflow", "bash", "docker"],
    status: "development",
    type: ["cli"],
  },
  {
    id: 5,
    title: "bilbo",
    description:
      "builds flat lipid bilayer membranes from all-atom PDB templates and places proteins or peptides on or inside them for MD preparation.",
    url: "https://bilbo.delunalab.dev/",
    tags: ["python", "bash", "docker"],
    status: "beta",
    type: ["cli", "web"],
  },
  {
    id: 6,
    title: "more projects on github",
    description:
      "all public repositories, scripts, and tools developed for bioinformatics research and software projects.",
    url: "https://github.com/madsondeluna",
    tags: ["python", "r", "bash", "nextflow", "typescript", "tensorflow", "docker"],
    status: "portfolio",
    type: ["cli", "api", "web"],
  },
];

export const statusStyle: Record<App["status"], { color: string; bg: string; border: string; label: string }> = {
  live:        { color: "#16a34a", bg: "rgba(34,197,94,0.12)",   border: "rgba(34,197,94,0.35)",   label: "launched" },
  beta:        { color: "#d97706", bg: "rgba(245,158,11,0.12)",  border: "rgba(245,158,11,0.35)",  label: "beta testing" },
  development: { color: "#2563eb", bg: "rgba(59,130,246,0.12)",  border: "rgba(59,130,246,0.35)",  label: "under development" },
  portfolio:   { color: "#6b7280", bg: "rgba(107,114,128,0.1)",  border: "rgba(107,114,128,0.3)",  label: "portfolio" },
};

export const typeStyle: Record<string, { color: string; bg: string }> = {
  web: { color: "#7c3aed", bg: "rgba(124,58,237,0.08)" },
  cli: { color: "#ea580c", bg: "rgba(234,88,12,0.08)" },
  pip: { color: "#0891b2", bg: "rgba(8,145,178,0.08)" },
  api: { color: "#0d9488", bg: "rgba(13,148,136,0.08)" },
};

export const tagStyle: Record<string, { color: string; bg: string; border: string }> = {
  python:         { color: "#a16207", bg: "rgba(161,98,7,0.08)",     border: "rgba(161,98,7,0.25)" },
  react:          { color: "#0891b2", bg: "rgba(8,145,178,0.08)",    border: "rgba(8,145,178,0.25)" },
  "next.js":      { color: "var(--text)", bg: "rgba(120,120,120,0.08)", border: "rgba(120,120,120,0.25)" },
  fastapi:        { color: "#047857", bg: "rgba(4,120,87,0.08)",     border: "rgba(4,120,87,0.25)" },
  streamlit:      { color: "#b91c1c", bg: "rgba(185,28,28,0.08)",    border: "rgba(185,28,28,0.25)" },
  "scikit-learn": { color: "#c2410c", bg: "rgba(194,65,12,0.08)",    border: "rgba(194,65,12,0.25)" },
  biopython:      { color: "#1d4ed8", bg: "rgba(29,78,216,0.08)",    border: "rgba(29,78,216,0.25)" },
  nextflow:       { color: "#065f46", bg: "rgba(6,95,70,0.08)",      border: "rgba(6,95,70,0.25)" },
  docker:         { color: "#1d4ed8", bg: "rgba(29,78,216,0.08)",    border: "rgba(29,78,216,0.25)" },
  javascript:     { color: "#b45309", bg: "rgba(180,83,9,0.08)",     border: "rgba(180,83,9,0.25)" },
  bash:           { color: "#4d7c0f", bg: "rgba(77,124,15,0.08)",    border: "rgba(77,124,15,0.25)" },
  html:           { color: "#c2410c", bg: "rgba(194,65,12,0.08)",    border: "rgba(194,65,12,0.25)" },
  css:            { color: "#4338ca", bg: "rgba(67,56,202,0.08)",    border: "rgba(67,56,202,0.25)" },
};
