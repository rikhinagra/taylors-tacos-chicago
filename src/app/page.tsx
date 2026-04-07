import TacoCursor           from "@/components/ui/TacoCursor";
import Navbar               from "@/components/ui/Navbar";
import Footer               from "@/components/ui/Footer";
import FloatingBookButton   from "@/components/ui/FloatingBookButton";
import Hero             from "@/components/sections/Hero";
import Marquee          from "@/components/sections/Marquee";
import About            from "@/components/sections/About";
import CTABand          from "@/components/sections/CTABand";
import Services         from "@/components/sections/Services";
import Menu             from "@/components/sections/Menu";
import Gallery          from "@/components/sections/Gallery";
import CharacterSection from "@/components/sections/CharacterSection";
import Contact          from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <TacoCursor />
      <FloatingBookButton />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Marquee />
        <CTABand />
        <About />
        <CharacterSection />
        <Services />
        <Gallery />
        <Menu />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
