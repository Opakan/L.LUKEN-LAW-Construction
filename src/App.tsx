import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import About from "./components/About";
import LocationMap from "./components/LocationMap";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "developments", "services", "about", "location", "contact"];
      const scrollPosition = window.scrollY + 250; // offset for detection

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // If id is "location" but not in standard Navbar links, we still support scrolling to it
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  return (
    <div className="relative min-h-screen bg-luxury-black luxury-gradient text-slate-100 font-sans selection:bg-gold-400 selection:text-luxury-black overflow-x-hidden custom-scrollbar">
      
      {/* Dynamic Gilded Noise Backdrop Overlay for organic texture */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-40" />

      {/* Grid dots backdrop layer from Frosted Glass theme */}
      <div className="absolute inset-0 opacity-20 grid-dots pointer-events-none z-10" />

      {/* Luxury Navigation Menu */}
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />

      {/* Main Storyflow */}
      <main>
        {/* 1. Cinematic Wideangle Opacity Cover Hero */}
        <Hero scrollToSection={scrollToSection} />

        {/* 2. Developments Cinematic Portfolio Theater */}
        <Projects />

        {/* 3. Luxury Construction and Craftsmanship Architectures */}
        <Services />

        {/* 4. Emotional Brand Story & Expertise Statistics */}
        <About />

        {/* 5. Regional Map Geography Postcode */}
        <LocationMap />

        {/* 6. High-Conversion Glassmorphism Inquiries Terminal */}
        <Contact />
      </main>

      {/* Footer System coords */}
      <Footer scrollToSection={scrollToSection} />
      
    </div>
  );
}
