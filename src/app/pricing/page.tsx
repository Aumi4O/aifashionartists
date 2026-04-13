import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title:
    "AI Fashion Creative That Looks Editorial and Sells Like Ads | AIFashionArtists",
  description:
    "Brand-safe AI fashion visuals, campaign creative, AI UGC, avatars, landing pages, and visual systems for brands that need premium content fast. Buy fixed packages or book a scoping call.",
  openGraph: {
    title: "AI Fashion Creative That Looks Editorial and Sells Like Ads",
    description:
      "Premium AI visuals, campaign systems, AI UGC, web design, and content automation for fashion, beauty, and lifestyle brands.",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
