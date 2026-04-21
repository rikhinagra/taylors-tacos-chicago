import type { Metadata } from "next";
import TacoCursor         from "@/components/ui/TacoCursor";
import FloatingBookButton from "@/components/ui/FloatingBookButton";
import Navbar             from "@/components/ui/Navbar";
import Footer             from "@/components/ui/Footer";
import TacoTuesdayPage    from "@/components/sections/TacoTuesdayPage";

export const metadata: Metadata = {
  title: "Taco Tuesday Chicago | Order Online | Taylor's Tacos Chicago",
  description:
    "Order Taylor's Tacos Chicago every Tuesday on Grubhub, UberEats, or Cash Drop. Delivery, pickup, or dine in at 135 N. Kedzie — Chicago's #1 Taco Tuesday.",
  keywords: [
    "Taco Tuesday Chicago",
    "order tacos online Chicago",
    "Taylor's Tacos Chicago Grubhub",
    "Taylor's Tacos UberEats",
    "Cash Drop tacos Chicago",
    "taco delivery Chicago",
    "taco pickup Chicago",
    "135 N Kedzie tacos",
  ],
  alternates: {
    canonical: "https://www.taylorstacoschicago.com/taco-tuesday",
  },
  openGraph: {
    title: "Taco Tuesday | Taylor's Tacos Chicago",
    description:
      "Every Tuesday at 135 N. Kedzie — order fresh tacos online via Grubhub, UberEats, or Cash Drop.",
    url: "https://www.taylorstacoschicago.com/taco-tuesday",
    siteName: "Taylor's Tacos Chicago",
    images: [
      {
        url: "https://www.taylorstacoschicago.com/images/food/taylors-tacos-chicago-birria-tacos-basket-hot-sauce.webp",
        width: 1200,
        height: 630,
        alt: "Taylor's Tacos Chicago birria tacos — Taco Tuesday",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Taco Tuesday | Taylor's Tacos Chicago",
    description:
      "Every Tuesday at 135 N. Kedzie — order fresh tacos on Grubhub, UberEats, or Cash Drop.",
    images: [
      "https://www.taylorstacoschicago.com/images/food/taylors-tacos-chicago-birria-tacos-basket-hot-sauce.webp",
    ],
  },
};

export default function TacoTuesdayRoute() {
  return (
    <>
      <TacoCursor />
      <FloatingBookButton />
      <Navbar />
      <main className="flex flex-col">
        <TacoTuesdayPage />
      </main>
      <Footer />
    </>
  );
}
