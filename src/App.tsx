import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Showcase from "@/components/Showcase";
import Contact from "@/components/Contact";

function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      <section id="home" className="scroll-mt-24">
        <Hero />
      </section>

      <Marquee />

      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      <section id="showcase" className="scroll-mt-24">
        <Showcase />
      </section>

<section id="contact" className="scroll-mt-24">
        <Contact />
      </section>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}