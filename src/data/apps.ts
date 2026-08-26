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
    title: "BioHub",
    description:
      "Centralized portal for biological data integration, search, and exploration across multiple omics layers.",
    url: "/biohub",
    tags: ["python", "javascript", "html", "css"],
    status: "live",
    type: ["web"],
  },
  {
    id: 2,
    title: "AMPidentifier",
    description:
      "Machine learning classifier for antimicrobial peptide identification from amino acid sequences.",
    url: "https://www.ampidentifier.com/",
    tags: ["python", "scikit-learn", "bash", "html", "javascript", "css", "docker"],
    status: "live",
    type: ["cli", "web", "pip"],
  },
  {
    id: 3,
    title: "decryptAMP",
    description:
      "Computational pipeline to mine proteomes for encrypted antimicrobial peptides that exist latently within larger protein sequences.",
    url: "#",
    tags: ["python", "scikit-learn", "bash", "docker"],
    status: "development",
    type: ["cli", "pip"],
  },
  {
    id: 4,
    title: "AMPcraft",
    description:
      "AI-guided AMP discovery pipeline with ESM-2 classifiers, sequence generation, and ESMFold structure prediction.",
    url: "#",
    tags: ["python", "tensorflow", "bash", "docker"],
    status: "development",
    type: ["cli"],
  },
  {
    id: 5,
    title: "BILBO",
    description:
      "Builds flat lipid bilayer membranes from all-atom PDB templates and places proteins or peptides on or inside them for MD preparation.",
    url: "https://bilbo.delunalab.dev/",
    tags: ["python", "bash", "docker"],
    status: "beta",
    type: ["cli", "web"],
  },
  {
    id: 6,
    title: "More projects on GitHub",
    description:
      "All public repositories, scripts, and tools developed for bioinformatics research and software projects.",
    url: "https://github.com/madsondeluna",
    tags: ["python", "r", "bash", "nextflow", "typescript", "tensorflow", "docker"],
    status: "portfolio",
    type: ["cli", "api", "web"],
  },
];

/* Cor NAO mora mais aqui. Estado sai de --status-*, que e cor de
   significado reservado, e o rotulo em texto vai junto sempre: quem nao
   separa verde de laranja continua lendo o estado. Tipo e tecnologia nao
   sao estado nem serie de dado, entao vao em tinta neutra e nao tem
   entrada de cor nenhuma. */
export const statusStyle: Record<App["status"], { label: string }> = {
  live:        { label: "Launched" },
  beta:        { label: "Beta testing" },
  development: { label: "Under development" },
  portfolio:   { label: "Portfolio" },
};
