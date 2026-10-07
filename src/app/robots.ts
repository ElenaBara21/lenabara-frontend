import type { MetadataRoute } from "next";
import { headers } from "next/headers";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host") || "www.lenabara.com";
  const isLenaShelepova = host.includes("lenashelepova.com");
  const baseUrl = isLenaShelepova ? "https://www.lenashelepova.com" : "https://www.lenabara.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/thank-you", "/start"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
