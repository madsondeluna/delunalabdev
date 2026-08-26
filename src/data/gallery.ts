export interface GalleryItem {
  id: number;
  label: string;
  aspect: string;
  shade: string;
  image?: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, label: "Genomic variant browser", aspect: "16/9", shade: "var(--surface)" },
  { id: 2, label: "Pipeline architecture diagram", aspect: "4/3", shade: "var(--dim)" },
  { id: 3, label: "RNA-seq heatmap", aspect: "1/1", shade: "var(--surface)" },
  { id: 4, label: "Sequence alignment view", aspect: "3/2", shade: "var(--dim)" },
  { id: 5, label: "Lab dashboard ui", aspect: "16/10", shade: "var(--surface)" },
  { id: 6, label: "Protein structure", aspect: "1/1", shade: "var(--dim)" },
  { id: 7, label: "Phylogenetic tree", aspect: "4/5", shade: "var(--surface)" },
  { id: 8, label: "Workflow diagram", aspect: "3/2", shade: "var(--dim)" },
];
