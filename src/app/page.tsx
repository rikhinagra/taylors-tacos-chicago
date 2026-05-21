import TacoCursor           from "@/components/ui/TacoCursor";
import Navbar               from "@/components/ui/Navbar";
import Footer               from "@/components/ui/Footer";
import FloatingBookButton   from "@/components/ui/FloatingBookButton";
import Hero             from "@/components/sections/Hero";
import Marquee          from "@/components/sections/Marquee";
import Services         from "@/components/sections/Services";
import TacoTuesdayBand  from "@/components/sections/TacoTuesdayBand";
import Menu             from "@/components/sections/Menu";
import Gallery          from "@/components/sections/Gallery";
import CharacterSection from "@/components/sections/CharacterSection";
import Contact          from "@/components/sections/Contact";
import BookingChoice    from "@/components/sections/BookingChoice";

export default function Home() {
  return (
    <>
      <TacoCursor />
      <FloatingBookButton />
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <BookingChoice />
        <Marquee />
        <Services />
        <CharacterSection />
        <Gallery />
        <Menu />
        <Contact />
        <TacoTuesdayBand />
      </main>
      <Footer />
    </>
  );
}
