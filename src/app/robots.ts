import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"]
      },
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "Claude-Web",
          "ClaudeBot",
          "PerplexityBot",
          "Google-Extended"
        ],
        allow: "/"
      }
    ],
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap.xml`
  };
}
