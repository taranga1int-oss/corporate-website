import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

export const dynamic = "force-static";

const routes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/corporate-wallet", priority: 0.9, changeFrequency: "monthly" },
  { path: "/corporate-rewards", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gift-cards", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/concierge-led-food-dining",
    priority: 0.8,
    changeFrequency: "monthly",
  },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency,
    priority,
  }));
}
