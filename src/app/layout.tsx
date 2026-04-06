import type { Metadata } from "next";
import "./globals.css";
import StructuredData from "@/components/ui/StructuredData";

// Font: HANNIK — client-specified brand font, loaded via @font-face in globals.css

export const metadata: Metadata = {
  title: "Taylor's Tacos Chicago | Catering & Food Truck",
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
  ],
  authors: [{ name: "Taylor's Tacos Chicago" }],
  openGraph: {
    title: "Taylor's Tacos Chicago | Catering & Food Truck",
    description:
      "Premium taco catering for any event — self-serve bars, staffed events & food truck rentals across Chicagoland.",
    url: "https://www.taylorstacoschicago.com",
    siteName: "Taylor's Tacos Chicago",
    type: "website",
    images: [
      {
        url: "/images/banners/taylor's_tacos_banner.webp",
        width: 1200,
        height: 630,
        alt: "Taylor's Tacos Chicago",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taylor's Tacos Chicago | Catering & Food Truck",
    description:
      "Building CommuniTAY one taco at a time. Book your next event with Taylor's Tacos.",
    images: ["/images/banners/taylor's_tacos_banner.webp"],
  },
  metadataBase: new URL("https://www.taylorstacoschicago.com"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
