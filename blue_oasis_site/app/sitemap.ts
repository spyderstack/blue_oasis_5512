import { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml
 * Vercel automatically serves this at the correct URL.
 * Submit this URL to Google Search Console after deploying.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://blueoasis5512.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
