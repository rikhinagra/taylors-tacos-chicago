import type { Metadata } from "next";
import TacoCursor         from "@/components/ui/TacoCursor";
import FloatingBookButton from "@/components/ui/FloatingBookButton";
import Navbar             from "@/components/ui/Navbar";
import Footer             from "@/components/ui/Footer";
import About              from "@/components/sections/About";

export const metadata: Metadata = {
  title: "Our Story | Taylor's Tacos Chicago",
  description:
    "From LA streets to Chicago neighborhoods — the story behind Taylor's Tacos Chicago. 10+ years, 500+ events, and over 1 million tacos served.",
  keywords: [
    "Taylor's Tacos Chicago story",
    "Taylor Mason Chicago",
    "taco catering Chicago history",
    "about Taylor's Tacos",
    "Chicago taco brand",
  ],
  alternates: {
    canonical: "https://www.taylorstacoschicago.com/our-story",
  },
  openGraph: {
    title: "Our Story | Taylor's Tacos Chicago",
    description:
      "From LA streets to Chicago neighborhoods — 10+ years, 500+ events, 1M+ tacos served.",
    url: "https://www.taylorstacoschicago.com/our-story",
    siteName: "Taylor's Tacos Chicago",
    type: "website",
  },
};

export default function OurStoryPage() {
  return (
    <>
      <TacoCursor />
      <FloatingBookButton />
      <Navbar />
      <main>
        {/* ── Page Header ── */}
        <div
          style={{
            background: "linear-gradient(90deg, #E41D75 0%, #E52D5D 50%, #EA3B48 100%)",
            padding: "clamp(40px, 6vw, 72px) clamp(20px, 4vw, 52px)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "12px",
              letterSpacing: "5px",
              textTransform: "uppercase",
              color: "#BCDC9A",
              fontWeight: 700,
              marginBottom: "12px",
            }}
          >
            Who We Are
          </p>
          <h1
            style={{
              fontSize: "clamp(36px, 6vw, 80px)",
              fontWeight: 900,
              color: "white",
              fontFamily: "Hannik, sans-serif",
              lineHeight: 1,
              letterSpacing: "clamp(1px, 0.3vw, 4px)",
              textTransform: "uppercase",
            }}
          >
            Our Story
          </h1>
        </div>

        {/* ── About Section (full content) ── */}
        <About />
      </main>
      <Footer />
    </>
  );
}
