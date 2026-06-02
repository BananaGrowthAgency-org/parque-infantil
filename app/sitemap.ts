import { MetadataRoute } from "next";

const BASE = "https://www.ludykid.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    { url: `${BASE}/`,                                   lastModified: now, changeFrequency: "weekly",  priority: 1.0 },
    { url: `${BASE}/escape-game-le-mans`,                lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/accrobranche-le-mans`,               lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/laser-game-le-mans`,                 lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/trampoline-park-le-mans`,            lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/anniversaire`,                       lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE}/restauration`,                       lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/restauration/boissons-chaudes`,      lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/restauration/boissons-fraiches`,     lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/restauration/plaisirs-sales`,        lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/restauration/plaisirs-sucres`,       lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/restauration/infos-utiles`,          lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/tarifs`,                             lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE}/garderie`,                           lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/contact`,                            lastModified: now, changeFrequency: "yearly",  priority: 0.6 },
    { url: `${BASE}/mentions-legales`,                   lastModified: now, changeFrequency: "yearly",  priority: 0.2 },
  ];
}
