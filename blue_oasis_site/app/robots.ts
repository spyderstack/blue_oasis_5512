import { MetadataRoute } from "next";

/**
 * Generates /robots.txt
 * Allows all crawlers, points them to the sitemap.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://blueoasis5512.vercel.app/sitemap.xml",
    host: "https://blueoasis5512.vercel.app",
  };
}
