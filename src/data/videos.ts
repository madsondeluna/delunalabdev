export interface Video {
  id: number;
  title: string;
  duration: string;
  platform: string;
  url: string;
  category: "tutorial" | "project" | "concept" | "workflow";
}

export const videos: Video[] = [
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

export const categoryColor: Record<Video["category"], string> = {
  tutorial: "#4a3f6b",
  project: "#2d5a7a",
  concept: "#4a5a2d",
  workflow: "#7a4a2d",
};
