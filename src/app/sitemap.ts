import type { MetadataRoute } from "next";

export const dynamic = "force-static";
import { opinions } from "@/data/opinions";

const BASE_URL = "https://delunalab.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const opinionEntries: MetadataRoute.Sitemap = opinions.map((o) => ({
    url: `${BASE_URL}/opinions/${o.slug}/`,
    lastModified: new Date(o.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/biohub/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...opinionEntries,
  ];
}
