import Hero from "@/components/Section/Hero";
import Services from "@/components/Section/Services";
import About from "@/components/Section/About";
import Contact from "@/components/Section/Contact";
import ScrollToTop from "@/components/UI/ScrollButton";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <Contact />
      <ScrollToTop />
    </>
  );
}
