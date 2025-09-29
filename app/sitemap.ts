// app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/posts"; // ajusta import según tu proyecto

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://myrons.agency";

  // rutas estáticas
  const staticRoutes = [
    { url: base + "/", lastModified: new Date() },
    { url: base + "/services", lastModified: new Date() },
    { url: base + "/about", lastModified: new Date() },
    { url: base + "/contact", lastModified: new Date() },
    { url: base + "/blog", lastModified: new Date() },
  ];

  // rutas de posts dinámicos
  const slugs = await getAllSlugs();
  const postRoutes = slugs.map((slug: string) => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(), // podrías usar fecha de post si la tienes
  }));

  return [...staticRoutes, ...postRoutes];
}
