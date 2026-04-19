import type { Metadata } from "next";
import TacoCursor         from "@/components/ui/TacoCursor";
import Navbar             from "@/components/ui/Navbar";
import Footer             from "@/components/ui/Footer";
import FloatingBookButton from "@/components/ui/FloatingBookButton";
import CateringMenu       from "@/components/sections/CateringMenu";

export const metadata: Metadata = {
  title: "Full Catering Menu | Taylor's Tacos Chicago",
  description:
    "Explore the full Taylor's Tacos Chicago catering menu — staffed events, delivery & pick-up, self-serve taco bars, food truck rental, sides, extras, desserts, and pricing. Building CommuniTAY one taco at a time.",
  keywords: [
    "Taylor's Tacos Chicago catering menu",
    "taco catering menu Chicago",
    "staffed taco event menu",
    "delivery pick-up taco menu Chicago",
    "self serve taco bar Chicago",
    "taco catering pricing Chicago",
    "food truck menu Chicago",
    "birria tacos catering",
    "taco bar catering menu",
    "Chicago taco catering prices",
  ],
  alternates: {
    canonical: "https://www.taylorstacoschicago.com/catering-menu",
  },
  openGraph: {
    title: "Full Catering Menu | Taylor's Tacos Chicago",
    description:
      "Staffed events, delivery & pick-up, self-serve taco bars, food truck rental — see every option and price from Chicago's #1 taco caterer.",
    url: "https://www.taylorstacoschicago.com/catering-menu",
    siteName: "Taylor's Tacos Chicago",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/banners/taylors-tacos-chicago-catering-booking-banner.webp",
        width: 1200,
        height: 630,
        alt: "Taylor's Tacos Chicago full catering menu — staffed events and delivery options",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taylorstacoschicago",
    title: "Full Catering Menu | Taylor's Tacos Chicago",
    description:
      "Staffed events, delivery & pick-up, self-serve taco bars, food truck rental — see every option and price.",
    images: ["/images/banners/taylors-tacos-chicago-catering-booking-banner.webp"],
  },
};

export default function CateringMenuPage() {
  return (
    <>
      <TacoCursor />
      <FloatingBookButton />
      <Navbar />
      <main className="flex flex-col">
        <CateringMenu />
      </main>
      <Footer />
    </>
  );
}
