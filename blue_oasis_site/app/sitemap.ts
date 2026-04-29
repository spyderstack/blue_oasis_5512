import { MetadataRoute } from "next";

/**
 * Generates /sitemap.xml
 * Vercel automatically serves this at the correct URL.
 * Submit this URL to Google Search Console after deploying.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://blueoasis5512.vercel.app";
  
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
