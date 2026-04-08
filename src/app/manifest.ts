import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Taylor's Tacos Chicago",
    short_name: "Taylor's Tacos",
    description: "Premium taco catering & food truck in Chicago — Building CommuniTAY one taco at a time.",
    start_url: "/",
    display: "standalone",
    background_color: "#0E0A08",
    theme_color: "#BB2423",
    icons: [
      {
        src: "/images/logo/pwa-icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/images/logo/pwa-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
