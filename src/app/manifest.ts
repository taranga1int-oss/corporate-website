import type { MetadataRoute } from "next";
import { SITE_NAME } from "@/lib/seo";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description:
      "Corporate food delivery, meal benefits, rewards and gifting by Swiggy.",
    start_url: "/",
    display: "standalone",
    background_color: "#ed520f",
    theme_color: "#ed520f",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
