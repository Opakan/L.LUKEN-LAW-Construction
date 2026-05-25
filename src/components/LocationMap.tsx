import { useState } from "react";
import { motion } from "motion/react";
import { Compass, MapPin, Eye, Mountain, Navigation, ShieldCheck } from "lucide-react";
import { CINEMATIC_IMAGES } from "../data";

export default function LocationMap() {
  const [hoveredOverlay, setHoveredOverlay] = useState<string | null>(null);

  const localHighlights = [
    {
      id: "altitude",
      title: "Isabo Heights Elevation",
      value: "148m Above Sea Level",
      desc: "Providing breathtaking panoramic horizons above the historic rocky terrain of Abeokuta, offering high winds and cooler temperatures.",
      icon: Mountain
    },
    {
      id: "access",
      title: "Prestigious Hub Access",
      value: "Uncompromising Security",
      desc: "Strategically located core close to judicial quarters and legislative enclaves, securing absolute safety and premium surrounding infrastructure.",
      icon: ShieldCheck
    },
    {
      id: "capital",
      title: "Appreciation Margin",
      value: "₦220% Growth Profile",
      desc: "Isabo is recognized as Ogun State's ultimate prestigious postcode, housing regional decision makers and premium real estate assets.",
      icon: Navigation
    }
  ];

  return (
    <section id="location" className="relative py-28 px-4 sm:px-8 bg-luxury-black overflow-hidden border-t border-white/5">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl text-left">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-gold-400" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-400 font-bold">REGIONAL POSTCODE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white font-medium">
              Elite Geography: <span className="bg-gradient-to-r from-gold-100 to-gold-400 bg-clip-text text-transparent">Isabo, Abeokuta</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm tracking-wide font-sans font-light leading-relaxed text-left">
            L.LUKEN-LAW develops signature estates inside the most secure, elevated, and capital-appreciating node of Abeokuta, Ogun State.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Architectural spec details */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6 order-2 lg:order-1">
            <div className="space-y-6">
              {localHighlights.map((hl) => (
                <motion.div
                  key={hl.id}
                  className="rounded-2xl glass-card p-6 border border-white/5 hover:border-gold-400/40 transition-all duration-300 text-left cursor-pointer"
                  onMouseEnter={() => setHoveredOverlay(hl.id)}
                  onMouseLeave={() => setHoveredOverlay(null)}
                  whileHover={{ x: 6 }}
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-10 w-10 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                      <hl.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-mono tracking-widest text-slate-400">
                        {hl.title}
                      </h4>
                      <div className="text-sm sm:text-base font-serif text-white font-medium">
                        {hl.value}
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 font-sans font-light leading-relaxed">
                    {hl.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Geographical Summary Indicator */}
            <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-left flex items-start gap-4">
              <Compass className="h-5 w-5 text-gold-400 shrink-0 mt-0.5 animate-spin" style={{ animationDuration: "20s" }} />
              <div>
                <span className="text-[9px] font-mono tracking-widest text-gold-400 uppercase font-bold">ISABO ADVANTAGE</span>
                <p className="text-xs text-slate-300 font-light mt-1">
                  Secure surrounding residential assets, heavy basalt bedrock ensuring flawless physical foundations, and immediate connection to core state infrastructure arteries.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: High-tech 3D glow map simulation */}
          <div className="lg:col-span-7 relative h-[450px] lg:h-auto rounded-3xl overflow-hidden border border-gold-400/20 shadow-2xl bg-neutral-950 order-1 lg:order-2 flex flex-col">
            
            {/* Map Imagery screen */}
            <div className="relative w-full h-full flex-grow">
              <img
                src={CINEMATIC_IMAGES.landscape}
                alt="Isabo Abeokuta high ground luxury estate map representation"
                className="w-full h-full object-cover brightness-[0.45] contrast-[1.1] saturate-[0.8]"
                referrerPolicy="no-referrer"
              />
              
              {/* Topological Overlay pattern (SVG vectors) */}
              <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-screen">
                <svg className="w-full h-full text-gold-400/25" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M 0,10 Q 25,12 50,8 T 100,15" fill="none" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 0,30 Q 35,42 60,35 T 100,50" fill="none" stroke="currentColor" strokeWidth="0.15" />
                  <path d="M 0,60 Q 15,58 45,70 T 100,65" fill="none" stroke="currentColor" strokeWidth="0.15" strokeDasharray="1 1" />
                  <path d="M 0,80 Q 50,78 70,88 T 100,90" fill="none" stroke="currentColor" strokeWidth="0.1" />
                  
                  {/* Grid Lines */}
                  <line x1="20" y1="0" x2="20" y2="100" stroke="currentColor" strokeWidth="0.05" />
                  <line x1="40" y1="0" x2="40" y2="100" stroke="currentColor" strokeWidth="0.05" />
                  <line x1="60" y1="0" x2="60" y2="100" stroke="currentColor" strokeWidth="0.05" />
                  <line x1="80" y1="0" x2="80" y2="100" stroke="currentColor" strokeWidth="0.05" />
                </svg>
              </div>

              {/* Radar glowing ring from coordinate peak */}
              <div className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2">
                <div className="h-16 w-16 rounded-full border border-gold-400/30 animate-ping" />
                <div className="absolute h-32 w-32 rounded-full border border-gold-400/10 animate-ping -translate-x-[25%] -translate-y-[25%]" style={{ animationDelay: "1s" }} />
              </div>

              {/* Glowing Luxury Location Marker */}
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: [1, 1.15, 1], y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-12 z-20 flex flex-col items-center cursor-pointer"
              >
                {/* Embedded GPS HUD flag */}
                <div className="px-3.5 py-1.5 rounded-lg bg-black border border-gold-400 text-[10px] font-mono tracking-widest text-gold-300 font-bold whitespace-nowrap shadow-xl">
                  L.LUKEN-LAW SITE CORE
                </div>
                <div className="h-3 w-[1px] bg-gold-400" />
                <div className="h-6 w-6 rounded-full bg-gold-450 border border-white p-1.5 shadow-[0_0_15px_rgba(197,134,34,0.8)] flex items-center justify-center">
                  <MapPin className="h-3.5 w-3.5 text-luxury-black fill-luxury-black" />
                </div>
              </motion.div>

              {/* HUD interface elements inside Map framing */}
              <div className="absolute bottom-4 left-4 right-4 glass-floating p-3 sm:px-4 sm:py-3.5 rounded-xl flex items-center justify-between text-[10px] font-mono text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gold-500 animate-pulse" />
                  <span>PRECISE LOCATOR ACTIVE</span>
                </div>
                <div>Abeokuta, Ogun State</div>
              </div>

              <div className="absolute top-4 left-4 glass-floating px-3 py-1.5 rounded-lg text-[9px] font-mono text-gold-400 flex items-center gap-1.5">
                <Eye className="h-3.5 w-3.5" />
                <span>MAP ZOOM SCALE: 1:3500</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
