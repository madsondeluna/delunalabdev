export interface GalleryItem {
  id: number;
  label: string;
  aspect: string;
  shade: string;
  image?: string;
}

export const galleryItems: GalleryItem[] = [
  { id: 1, label: "genomic variant browser", aspect: "16/9", shade: "var(--surface)" },
  { id: 2, label: "pipeline architecture diagram", aspect: "4/3", shade: "var(--dim)" },
  { id: 3, label: "rna-seq heatmap", aspect: "1/1", shade: "var(--surface)" },
  { id: 4, label: "sequence alignment view", aspect: "3/2", shade: "var(--dim)" },
  { id: 5, label: "lab dashboard ui", aspect: "16/10", shade: "var(--surface)" },
  { id: 6, label: "protein structure", aspect: "1/1", shade: "var(--dim)" },
  { id: 7, label: "phylogenetic tree", aspect: "4/5", shade: "var(--surface)" },
  { id: 8, label: "workflow diagram", aspect: "3/2", shade: "var(--dim)" },
];
