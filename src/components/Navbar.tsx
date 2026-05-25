import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Landmark, PhoneCall } from "lucide-react";

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Developments", id: "developments" },
    { name: "Services", id: "services" },
    { name: "About", id: "about" },
    { name: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "py-4 px-4 sm:px-8" : "py-6 px-4 sm:px-12"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className={`max-w-7xl mx-auto rounded-full transition-all duration-500 px-6 py-3 sm:px-8 glass ${
        isScrolled
          ? "shadow-2xl border-white/20 bg-black/40"
          : "bg-white/5 border-white/10"
      }`}>
        <div className="flex items-center justify-between">
          {/* Logo Brand Title */}
          <div 
            className="flex items-center gap-3.5 cursor-pointer group"
            onClick={() => scrollToSection("home")}
          >
            <div className="h-9 w-9 bg-white/15 backdrop-blur-md rounded-md flex items-center justify-center font-serif font-bold text-white text-[11px] tracking-tighter border border-white/20 transition-transform group-hover:rotate-6 duration-300">
              L-L
            </div>
            <div>
              <div className="font-serif tracking-[0.2em] text-sm sm:text-base font-bold text-white group-hover:text-gold-300 transition-colors duration-300">
                L.LUKEN-LAW
              </div>
              <div className="text-[9px] uppercase tracking-[0.3em] text-gold-400 font-mono font-semibold">
                CONSTRUCTION COMPANY
              </div>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                className={`text-xs uppercase tracking-[0.2em] hover:text-gold-200 transition-all cursor-pointer font-serif relative py-1 ${
                  activeSection === item.id 
                    ? "text-gold-400 font-semibold" 
                    : "text-slate-300"
                }`}
              >
                {item.name}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-gold-600 to-gold-300"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Consultation CTA button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="group relative flex items-center justify-center gap-2 px-5 py-2 rounded-full border border-gold-400/30 hover:border-gold-400 hover:shadow-lg hover:shadow-gold-500/10 transition-all duration-300 bg-luxury-black/30 text-xs font-serif uppercase tracking-widest text-gold-300 overflow-hidden cursor-pointer"
            >
              <div className="absolute inset-0 bg-gold-400/10 scale-0 group-hover:scale-100 transition-transform duration-500 rounded-full" />
              <PhoneCall className="h-3 w-3 text-gold-400 group-hover:scale-110 transition-transform" />
              <span>Contact Elite desk</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-gold-400 transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-2 max-w-7xl mx-auto rounded-2xl glass-card overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5 bg-black/90">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className={`text-left text-sm uppercase tracking-[0.2em] font-serif py-1 ${
                    activeSection === item.id ? "text-gold-450 border-l border-gold-500 pl-3 font-semibold" : "text-slate-300"
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <hr className="border-white/5 my-2" />
              <button
                onClick={() => {
                  scrollToSection("contact");
                  setIsOpen(false);
                }}
                className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-black font-serif text-xs uppercase tracking-widest font-bold"
              >
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
