import { SITE_RESOURCES } from "@/data/site-resources";
import type { SiteResource } from "@/types/resource";

export function getAllSiteResources(): SiteResource[] {
  return Object.values(SITE_RESOURCES);
}

export function searchSiteResources(query: string): SiteResource[] {
  const q = query.trim().toLowerCase();
  const all = getAllSiteResources();
  if (!q) return all;
  return all.filter((r) => {
    const hay = [
      r.title,
      r.description,
      r.longDescription,
      r.category,
      ...r.tags,
    ]
      .join(" ")
      .toLowerCase();
    return hay.includes(q);
  });
}
