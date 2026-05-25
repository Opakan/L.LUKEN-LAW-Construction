import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Eye, Milestone, Compass, Sliders } from "lucide-react";
import { PROJECTS_DATA } from "../data";

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(true);

  // Auto transition effects to loop like a documentary display
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = PROJECTS_DATA[currentIndex];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS_DATA.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev ? prev - 1 : PROJECTS_DATA.length - 1));
  };

  return (
    <section id="developments" className="relative h-[850px] sm:h-screen bg-black overflow-hidden flex items-center">
      {/* 1. Immersive Full-screen Background Video/Image Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.15 }}
            animate={{ opacity: 1, scale: 1.02 }}
            exit={{ opacity: 0, scale: 1.18 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={currentProject.image}
              alt={currentProject.name}
              className="w-full h-full object-cover brightness-[0.4] contrast-[1.1]"
              referrerPolicy="no-referrer"
            />
            {/* Immersive lens flare effect overlay */}
            <div className="absolute top-1/4 left-1/3 w-[350px] h-[350px] bg-amber-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-gold-400/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />
            
            {/* Visual sweep lines mimicking cinematic anamorphic lens flares */}
            <div className="absolute top-1/2 left-0 right-0 h-[1.2px] bg-gradient-to-r from-transparent via-gold-400/25 to-transparent pointer-events-none mix-blend-color-dodge blur-[0.6px]" />
            <div className="absolute top-[48%] left-[15%] w-16 h-16 bg-blue-400/20 rounded-full blur-[15px] pointer-events-none mix-blend-screen" />
            <div className="absolute top-[52%] left-[40%] w-24 h-24 bg-gold-400/15 rounded-full blur-[25px] pointer-events-none mix-blend-screen" />
          </motion.div>
        </AnimatePresence>

        {/* Ambient reflection overlay and frame shading */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/20 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/90 pointer-events-none" />
      </div>

      {/* 2. Unified Content Overlay - Left Sided Film Details */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col justify-between h-full py-24">
        {/* Section Heading */}
        <div className="flex items-center gap-3">
          <span className="h-[2px] w-12 bg-gold-450" />
          <span className="text-xs uppercase tracking-[0.4em] font-mono text-gold-400 font-bold">
            CINEMATIC property SHOWCASES
          </span>
        </div>

        {/* Dynamic Project Specs Text Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-4 text-xs font-mono tracking-widest text-gold-400">
                  <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 uppercase">
                    {currentProject.type}
                  </span>
                  <span>•</span>
                  <span>EST. COMPLETED: {currentProject.completionYear}</span>
                </div>
                
                <h3 className="text-3xl sm:text-5xl md:text-6xl font-serif font-medium tracking-tight text-white uppercase leading-tight text-glow-gold">
                  {currentProject.name}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 font-sans font-light max-w-xl leading-relaxed">
                  {currentProject.description}
                </p>

                <p className="text-xs text-slate-400 font-sans font-light hidden sm:block max-w-lg italic border-l-2 border-gold-400/40 pl-4">
                  {currentProject.longDescription}
                </p>

                {/* Simulated trailer action "View Project Details" */}
                <div className="pt-4">
                  <span className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gold-400/10 hover:bg-gold-400/20 border border-gold-400/40 text-xs font-serif uppercase tracking-widest text-gold-300 transition-all cursor-pointer group">
                    <Eye className="h-4 w-4 text-gold-400 group-hover:scale-110" />
                    <span>View Project Blueprint</span>
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Sided Specs Box */}
          <div className="lg:col-span-5 h-full flex flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="rounded-3xl glass-card p-6 sm:p-8 border border-gold-400/25 relative overflow-hidden"
              >
                {/* Micro Ambient light lines inside box */}
                <div className="absolute top-0 right-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
                <h4 className="text-[10px] uppercase font-mono tracking-[0.3em] text-gold-400 font-bold mb-5 flex items-center gap-2">
                  <Compass className="h-3.5 w-3.5 animate-spin" style={{ animationDuration: "16s" }} />
                  <span>TECHNICAL ARCHITECTURE MATRIX</span>
                </h4>
                <div className="divide-y divide-white/5 space-y-3.5">
                  {currentProject.specs.map((spec, sIdx) => (
                    <div key={sIdx} className="flex justify-between items-start pt-3.5 text-left">
                      <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                        {spec.label}
                      </span>
                      <span className="text-xs font-sans text-slate-100 max-w-[200px] text-right font-medium tracking-wide">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* 3. Controls and Staggered Progress Meter bar */}
        <div className="flex items-center justify-between border-t border-white/10 pt-8 mt-10">
          {/* Index Counter */}
          <div className="text-xs font-mono text-slate-400">
            <span className="text-gold-400 text-sm font-semibold">
              {(currentIndex + 1).toString().padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/20">/</span>
            {PROJECTS_DATA.length.toString().padStart(2, "0")}
          </div>

          {/* Project progress nodes */}
          <div className="hidden sm:flex items-center gap-3">
            {PROJECTS_DATA.map((_, pIdx) => (
              <button
                key={pIdx}
                onClick={() => setCurrentIndex(pIdx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  currentIndex === pIdx 
                    ? "w-12 bg-gradient-to-r from-gold-600 to-gold-400" 
                    : "w-2.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${pIdx + 1}`}
              />
            ))}
          </div>

          {/* Navigation Control Buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevProject}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-405 hover:border-gold-400/60 glass-floating cursor-pointer transition-all"
              aria-label="Previous Project"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextProject}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center text-slate-300 hover:text-gold-405 hover:border-gold-400/60 glass-floating cursor-pointer transition-all"
              aria-label="Next Project"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Frame borders */}
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/10 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/10 to-transparent pointer-events-none" />
    </section>
  );
}
