import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Work from "@/components/Work";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorGlow from "@/components/CursorGlow";

export default function Page() {
  return (
    <>
      <CursorGlow />
      <Nav />
      <main id="top">
        <Hero />
        <Ticker />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
