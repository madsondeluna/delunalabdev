export interface Course {
  id: number;
  title: string;
  level: "beginner" | "intermediate" | "advanced";
  description: string;
  tags: string[];
  status: "available" | "coming soon";
  url: string;
}

export const courses: Course[] = [
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

export const levelColor: Record<Course["level"], string> = {
  beginner: "#2d6a4f",
  intermediate: "#4a3f6b",
  advanced: "#7a2e2e",
};
