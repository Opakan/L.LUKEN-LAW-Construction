import { useState } from "react";
import { motion } from "motion/react";
import { Award, Eye, ShieldCheck, Milestone, Compass } from "lucide-react";
import { COMPANY_STATS, CINEMATIC_IMAGES } from "../data";

export default function About() {
  const [activeTab, setActiveTab] = useState<"craft" | "quality" | "materials">("craft");

  const tabContent = {
    craft: {
      title: "Venerated Craftsmanship",
      headline: "The Art of Architectural Permanence",
      desc: "At L.LUKEN-LAW, we treat real estate not as basic layouts, but as complex volumetric sculpture. Every cantilever, shadow-gap baseboard, and ceiling trim is precision calibrated to deliver immediate emotional response and elite architectural elegance. We bring international standards comparable to Dubai and Miami to the heart of Ogun State.",
      icon: Award
    },
    quality: {
      title: "Uncompromising Quality",
      headline: "Engineered to Stand for Centuries",
      desc: "Our structural calculations run deeper than regulatory standard. From high-grade concrete casting to German-certified triple waterproofing membranes, we build physical security into your luxury sanctuary. Each construction stage undergoes multi-layered testing to safeguard your family and capital.",
      icon: ShieldCheck
    },
    materials: {
      title: "Impeccable Sourcing",
      headline: "The Symphony of Premium Slabs",
      desc: "We curate direct-imports of first-choice Bookmatch marble, acoustic structural American Walnut panels, and premium custom copper alloys. Our craftsmen shape these fine media by hand, ensuring each corner joints seamlessly and reflects daylight with perfect structural continuity.",
      icon: Compass
    }
  };

  const currentTab = tabContent[activeTab];

  return (
    <section id="about" className="relative py-32 px-4 sm:px-8 bg-luxury-charcoal overflow-hidden">
      {/* Visual Ambient Light glow */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-gold-450/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Column: Story, Interactive Tabs, stats */}
          <div className="lg:col-span-7 space-y-12 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-gold-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-400 font-bold">SOVEREIGN BRAND PROSE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white font-medium">
                The Legacy of <br />
                <span className="bg-gradient-to-r from-gold-100 to-gold-450 bg-clip-text text-transparent">L.LUKEN-LAW</span>
              </h2>
            </div>

            {/* Premium Selector Tabs */}
            <div className="flex flex-wrap gap-2 border-b border-white/5 pb-4">
              {(Object.keys(tabContent) as Array<keyof typeof tabContent>).map((tabKey) => (
                <button
                  key={tabKey}
                  onClick={() => setActiveTab(tabKey)}
                  className={`px-5 py-3 rounded-full text-xs font-serif uppercase tracking-widest cursor-pointer transition-all ${
                    activeTab === tabKey
                      ? "bg-gradient-to-r from-gold-600 to-gold-400 text-luxury-black font-semibold"
                      : "text-slate-400 border border-white/10 hover:border-gold-450/45 hover:text-white"
                  }`}
                >
                  {tabContent[tabKey].title}
                </button>
              ))}
            </div>

            {/* Tab content panel with transitions */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide flex items-center gap-3">
                <currentTab.icon className="h-6 w-6 text-gold-400" />
                <span>{currentTab.headline}</span>
              </h3>
              <p className="text-slate-300 font-sans font-light text-sm sm:text-base leading-relaxed tracking-wide">
                {currentTab.desc}
              </p>
            </motion.div>

            {/* Bold Premium Stats Row with Frosted Glass Theme stat-box design elements */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
              {COMPANY_STATS.map((stat, idx) => (
                <div key={idx} className="stat-box space-y-1">
                  <div className="text-2xl sm:text-3xl font-serif font-bold tracking-tight text-white bg-gradient-to-r from-gold-100 to-gold-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-[9px] uppercase font-mono tracking-widest text-slate-400 letter-spacing-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Multi-layer Architectural Collage and materials */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={CINEMATIC_IMAGES.finishing}
                alt="Luxury design drafts at architectural desk"
                className="w-full h-full object-cover brightness-[0.5] contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 to-transparent" />

              {/* Float decorative text block with gold corner wire-frame */}
              <div className="absolute right-6 top-6 h-28 w-28 border-t border-r border-gold-400/40 pointer-events-none" />
              <div className="absolute left-6 bottom-6 right-6 p-6 rounded-2xl bg-black/70 backdrop-blur-md border border-white/5 text-left">
                <div className="h-1.5 w-1.5 rounded-full bg-gold-400 mb-2" />
                <div className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-bold mb-1">
                  CORE PHILOSOPHY
                </div>
                <p className="text-[11px] font-sans text-slate-300 font-light leading-relaxed">
                  "Architecture is the physical testament to human potential. We build with stone, marble, and concrete, but our ultimate product is a secure state of mind."
                </p>
              </div>
            </div>

            {/* Small floating secondary material preview card */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="absolute -bottom-6 -left-6 hidden md:block rounded-2xl glass-card p-4 border border-gold-400/30 text-left max-w-[200px]"
            >
              <div className="text-[8px] uppercase tracking-widest text-gold-400 font-mono mb-1">MATERIAL SPEC</div>
              <div className="text-[11px] font-serif uppercase tracking-wider text-white">Statuario Marble Veins</div>
              <div className="text-[9px] text-slate-400 font-mono mt-1">Direct from Carrara, Italy</div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
