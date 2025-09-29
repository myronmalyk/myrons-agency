// app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://myrons.agency";
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // si tienes páginas que no quieres que indexen, agrégalas aquí
        disallow: ["/drafts", "/api/private", "/preview"]
      }
    ],
    sitemap: `${base}/sitemap.xml`,
    // host es opcional, puede definirse si deseas especificar dominio
    host: base,
  };
}
