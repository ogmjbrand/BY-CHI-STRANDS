import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /*
   * The country words came out of the catalogue slugs as well as the copy, so
   * every old product and collection URL is redirected permanently to its new
   * one. Links already shared, anything indexed, and the paths stored against
   * past orders all keep resolving.
   *
   * 308 rather than 302: the move is permanent and search engines should
   * carry the ranking across rather than keep both.
   */
  async redirects() {
    const moved: Array<[string, string]> = [
      ["sdd-vietnam-bone-straight", "sdd-bone-straight"],
      ["sdd-vietnam-bone-straight-wine", "sdd-bone-straight-wine"],
      ["sdd-china-pixie-curls-burgundy", "sdd-pixie-curls-burgundy"],
      ["sdd-china-bold-pixie-curls", "sdd-bold-pixie-curls"],
      ["luxury-mexican-sdd-pixie", "luxury-sdd-pixie"],
    ];
    return [
      ...moved.map(([from, to]) => ({
        source: `/shop/${from}`,
        destination: `/shop/${to}`,
        permanent: true,
      })),
      {
        source: "/collections/vietnam-bone-straight",
        destination: "/collections/bone-straight",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
