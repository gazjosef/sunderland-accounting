import Hero from "@/articles/Hero";
import Services from "@/articles/Services";
import About from "@/articles/About";
import Contact from "@/articles/Contact";
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
