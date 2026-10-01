import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://mellab.vercel.app",
      // Fecha fija: último cambio de contenido conocido (ver git log).
      // Actualizar manualmente cuando el contenido cambie.
      lastModified: new Date("2026-10-01"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
