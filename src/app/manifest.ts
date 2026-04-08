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
        src: "/images/logo/taylors-tacos-chicago-logo-stacked.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
