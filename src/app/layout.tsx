import type { Metadata, Viewport } from "next";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";

// Font: HANNIK — client-specified brand font, loaded via @font-face in globals.css

export const viewport: Viewport = {
  themeColor: "#BB2423",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Taylor's Tacos Chicago | Taco Catering & Food Truck",
  description:
    "Taylor's Tacos Chicago — Building CommuniTAY one taco at a time. Premium taco catering for corporate events, weddings, parties & more. Self-serve bars, staffed events, food truck rentals across Chicagoland.",
  keywords: [
    "Taylor's Tacos Chicago",
    "taco catering Chicago",
    "food truck Chicago",
    "taco bar catering",
    "corporate catering Chicago",
    "wedding catering Chicago",
    "staffed taco event",
    "Chicago taco caterer",
    "birria tacos Chicago",
    "taco Tuesday Chicago",
    "Mexican food catering Chicago",
    "food truck rental Chicago",
    "taco catering near me",
    "Chicago catering company",
    "135 N Kedzie Chicago",
    "Chicagoland taco catering",
  ],
  authors: [{ name: "Taylor's Tacos Chicago" }],
  alternates: {
    canonical: "https://www.taylorstacoschicago.com",
  },
  openGraph: {
    title: "Taylor's Tacos Chicago | Taco Catering & Food Truck",
    description:
      "Premium taco catering for any event — self-serve bars, staffed events & food truck rentals across Chicagoland. Book the #1 taco caterer in Chicago.",
    url: "https://www.taylorstacoschicago.com",
    siteName: "Taylor's Tacos Chicago",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/banners/taylors-tacos-chicago-catering-booking-banner.webp",
        width: 1200,
        height: 630,
        alt: "Taylor's Tacos Chicago — premium taco catering and food truck for events in Chicagoland",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@taylorstacoschicago",
    creator: "@taylorstacoschicago",
    title: "Taylor's Tacos Chicago | Taco Catering & Food Truck",
    description:
      "Building CommuniTAY one taco at a time. Book Chicago's #1 taco catering for your corporate event, wedding, or party.",
    images: [
      {
        url: "/images/banners/taylors-tacos-chicago-catering-booking-banner.webp",
        alt: "Taylor's Tacos Chicago — taco catering and food truck for events in Chicagoland",
      },
    ],
  },
  other: {
    "geo.region":    "US-IL",
    "geo.placename": "Chicago, Illinois",
    "geo.position":  "41.8781;-87.6298",
    "ICBM":          "41.8781, -87.6298",
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.taylorstacoschicago.com"
  ),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
