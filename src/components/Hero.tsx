import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Sparkles, Shield, Award } from "lucide-react";
import { CINEMATIC_IMAGES } from "../data";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  const { scrollY } = useScroll();
  
  // Parallax parallax shifts for cinematic depth
  const backgroundY = useTransform(scrollY, [0, 800], [0, 150]);
  const textY = useTransform(scrollY, [0, 800], [0, -80]);
  const opacityY = useTransform(scrollY, [0, 600], [1, 0]);

  // Simulated atmospheric ambient particles (simulating gold dust in volumetric sunset lighting)
  const particles = Array.from({ length: 22 });

  return (
    <section 
      id="home" 
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black"
    >
      {/* 1. Cinematic Background Media Wrapper */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-103 object-cover origin-center"
      >
        <img
          src={CINEMATIC_IMAGES.hero}
          alt="L.LUKEN-LAW Majestic Real Estate Development at Golden Hour"
          className="w-full h-full object-cover brightness-[0.7] contrast-[1.1]"
          referrerPolicy="no-referrer"
        />
        
        {/* Cinematic sun flare/volumetric lighting shine */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold-400/10 rounded-full blur-[140px] pointer-events-none mix-blend-screen" />
        <div className="absolute top-12 left-10 w-[700px] h-[300px] bg-gold-600/5 rounded-full blur-[160px] pointer-events-none mix-blend-color-dodge" />
        
        {/* Dark architectural gradients for readability and premium tone */}
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/40 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/90 via-transparent to-luxury-black/30 pointer-events-none" />
      </motion.div>

      {/* 2. Volumetric Dust Particles (Simulating Sun/Light rays and Haze) */}
      <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
        {particles.map((_, i) => {
          const size = Math.random() * 4 + 2; 
          const duration = Math.random() * 20 + 20;
          const delay = Math.random() * -20;
          return (
            <motion.div
              key={i}
              className="absolute bg-gold-250/30 rounded-full backdrop-blur-[1px] shadow-[0_0_10px_rgba(212,175,55,0.4)]"
              style={{
                width: size,
                height: size,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, Math.random() * -100 - 50, 0],
                x: [0, Math.random() * 60 - 30, 0],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration,
                repeat: Infinity,
                delay,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </div>

      {/* 3. Immersive Interactive Horizon Compass / HUD indicator */}
      <div className="absolute bottom-10 left-8 sm:left-14 z-20 hidden md:flex items-center gap-6 text-slate-400/80 font-mono text-[10px] uppercase tracking-[0.25em]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400 animate-pulse" />
          <span>ISABO HQ COORDS</span>
        </div>
        <span className="text-white/10">|</span>
        <div>7.1517° N, 3.3516° E</div>
        <span className="text-white/10">|</span>
        <div className="flex items-center gap-1.5 text-gold-450">
          <Sparkles className="h-3 w-3 text-gold-400 animate-spin" style={{ animationDuration: "12s" }} />
          <span>UNREAL RENDER v5.4</span>
        </div>
      </div>

      {/* 4. Core Typography content overlay with staggering motion */}
      <motion.div
        style={{ y: textY, opacity: opacityY }}
        className="relative z-25 max-w-5xl mx-auto px-6 text-center text-white mt-12"
      >
        {/* Upper Accent Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-600/10 border border-gold-400/20 backdrop-blur-md mb-8"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold-400" />
          <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.4em] text-gold-300 font-mono font-semibold">
            The Pinnacle of Elite Real Estate Development
          </span>
        </motion.div>

        {/* Breathtaking Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif tracking-tight leading-[1.05] font-medium"
        >
          Crafting Luxury <br />
          <span className="bg-gradient-to-r from-gold-100 via-gold-300 to-gold-500 bg-clip-text text-transparent text-glow-gold">
            Living Experiences
          </span>
        </motion.h1>

        {/* Premium Subheadline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="mt-6 text-sm sm:text-lg md:text-xl text-slate-350 max-w-2xl mx-auto tracking-wide font-sans font-light"
        >
          High-Quality Real Estate Built With Precision, Sophisticated Architectural Elegance, and Legacy Craftsmanship.
        </motion.p>

        {/* Interactive CTA Buttons with fine golden glowing edges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
        >
          <button
            onClick={() => scrollToSection("developments")}
            className="group w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-gold-600 to-gold-400 font-serif text-xs uppercase tracking-[0.2em] font-bold text-luxury-black flex items-center justify-center gap-2 hover:from-gold-500 hover:to-gold-300 transition-all duration-300 shadow-xl shadow-gold-600/10 hover:scale-103 cursor-pointer"
          >
            <span>Explore Developments</span>
            <ArrowRight className="h-4 w-4 text-luxury-black group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group w-full sm:w-auto px-8 py-4 rounded-full border border-gold-400/30 hover:border-gold-400/80 backdrop-blur-md bg-white/5 font-serif text-xs uppercase tracking-[0.2em] text-slate-100 flex items-center justify-center gap-2 transition-all duration-300 hover:scale-103 cursor-pointer"
          >
            <span>Schedule Consultation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-ping group-hover:bg-gold-200" />
          </button>
        </motion.div>
      </motion.div>

      {/* 5. Minimal scrolling signal at the center bottom */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => scrollToSection("developments")}
      >
        <span className="text-[9px] font-mono tracking-[0.3em] text-gold-500/80 uppercase">VIEW MANIFOLD</span>
        <div className="w-[1.5px] h-8 bg-gradient-to-b from-gold-400/80 to-transparent" />
      </motion.div>

      {/* Decorative vertical golden accents mirroring elite glass building structural frames */}
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/10 to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold-400/10 to-transparent pointer-events-none" />
    </section>
  );
}
