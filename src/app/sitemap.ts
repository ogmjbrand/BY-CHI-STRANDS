import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { products } from "@/lib/products";
import { collections } from "@/lib/collections";
import { articles } from "@/lib/journal";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPaths = [
    "",
    "/shop",
    "/collections",
    "/services",
    "/book",
    "/academy",
    "/about",
    "/gallery",
    "/journal",
    "/faqs",
    "/contact",
    "/shipping",
    "/returns",
    "/privacy",
    "/terms",
  ].map((p) => ({
    url: `${site.url}${p}`,
    changeFrequency: "weekly" as const,
    priority: p === "" ? 1 : 0.7,
  }));

  return [
    ...staticPaths,
    ...products.map((p) => ({
      url: `${site.url}/shop/${p.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...collections.map((c) => ({
      url: `${site.url}/collections/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...articles.map((a) => ({
      url: `${site.url}/journal/${a.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
