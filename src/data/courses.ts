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
    title: "Python for bioinformatics",
    level: "beginner",
    description:
      "From zero to functional scripts for biological data analysis. Covers pandas, biopython, and sequence manipulation.",
    tags: ["python", "bioinformatics", "data"],
    status: "available",
    url: "#",
  },
  {
    id: 2,
    title: "Building pipelines with Nextflow",
    level: "intermediate",
    description:
      "Scalable and reproducible bioinformatics workflows using Nextflow dsl2, containers, and hpc environments.",
    tags: ["nextflow", "bash", "docker"],
    status: "coming soon",
    url: "#",
  },
  {
    id: 3,
    title: "Web development for scientists",
    level: "intermediate",
    description:
      "Build tools and interactive dashboards to share your research. From API design to deployment.",
    tags: ["react", "python", "fastapi"],
    status: "available",
    url: "#",
  },
  {
    id: 4,
    title: "Linux and the command line",
    level: "beginner",
    description:
      "Practical unix skills for researchers: file systems, shell scripting, remote servers, and automation.",
    tags: ["bash", "linux", "hpc"],
    status: "available",
    url: "#",
  },
  {
    id: 5,
    title: "Data visualization with Python",
    level: "intermediate",
    description:
      "Turn raw data into clear, publication-ready figures using matplotlib, seaborn, and plotly.",
    tags: ["python", "plotly", "matplotlib"],
    status: "available",
    url: "#",
  },
  {
    id: 6,
    title: "Machine learning for omics",
    level: "advanced",
    description:
      "Apply classical and deep learning methods to genomics, transcriptomics, and proteomics data.",
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
