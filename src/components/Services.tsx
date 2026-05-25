import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, CheckCircle, Sparkles, Building2 } from "lucide-react";
import { SERVICES_DATA } from "../data";
import { Service } from "../types";

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="relative py-28 px-4 sm:px-8 bg-luxury-black overflow-hidden border-t border-white/5">
      {/* Structural ambient details */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-gold-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-[1px] w-8 bg-gold-400/60" />
              <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-400">EXPERTISES DESK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white font-medium">
              Architectural <span className="bg-gradient-to-r from-gold-100 to-gold-400 bg-clip-text text-transparent">Craftsmanship</span>
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-sm tracking-wide font-sans font-light leading-relaxed">
            Executing residential structures and luxury stone finishing with elite levels of precision and timeless architectural aesthetics.
          </p>
        </div>

        {/* Cinematic 3D Hover Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => setSelectedService(service)}
              className="group relative h-[420px] rounded-3xl overflow-hidden glass-card cursor-pointer border border-white/10 hover:border-gold-400/50 transition-all duration-500 shadow-2xl flex flex-col justify-end"
            >
              {/* Media layer with zoom transition */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 brightness-[0.45] group-hover:brightness-[0.3]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/30 to-transparent" />
                
                {/* Simulated Warm Beam Swipe Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute -inset-x-40 top-0 bottom-0 bg-gradient-to-r from-transparent via-gold-400/10 to-transparent skew-x-12 animate-sweep" />
                </div>
              </div>

              {/* Dynamic Gilded Edge lights (Top and corners) */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" />

              {/* Corner Indicators */}
              <div className="absolute top-5 right-5 h-8 w-8 rounded-full bg-white/5 backdrop-blur-md border border-white/10 flex items-center justify-center text-white group-hover:bg-gold-400 group-hover:text-luxury-black group-hover:border-gold-500 transition-all duration-300">
                <Plus className="h-4 w-4 transform group-hover:rotate-90 transition-transform duration-300" />
              </div>

              {/* Content text */}
              <div className="relative z-10 p-8 sm:p-10 text-left">
                <span className="text-[10px] font-mono tracking-[0.25em] text-gold-405 block mb-2 font-medium">
                  {service.subtitle}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide mb-3 group-hover:text-gold-250 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-300/90 text-xs sm:text-sm tracking-wide font-sans font-light line-clamp-2 mb-4">
                  {service.description}
                </p>
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-gold-400 hover:text-gold-200 uppercase tracking-widest font-serif transition-colors">
                  <span>Deconstruct Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Luxury Detailed Overlay Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-3xl rounded-3xl overflow-hidden bg-luxury-charcoal border border-gold-400/30 shadow-2xl shadow-gold-600/10"
            >
              {/* Image banner details */}
              <div className="h-64 sm:h-80 relative">
                <img
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover brightness-[0.5]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal to-transparent" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-5 right-5 px-4 py-2 rounded-full glass-floating border border-white/10 hover:border-gold-400 text-xs text-slate-300 transition-all cursor-pointer font-serif uppercase tracking-widest"
                >
                  Close
                </button>

                <div className="absolute bottom-6 left-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] text-gold-400 font-mono font-bold block mb-1">
                    {selectedService.subtitle}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif tracking-wide text-white font-medium">
                    {selectedService.title}
                  </h3>
                </div>
              </div>

              {/* Description & specs */}
              <div className="p-8 sm:p-10">
                <p className="text-slate-300 font-light text-sm sm:text-base leading-relaxed tracking-wide mb-8">
                  {selectedService.description}
                </p>

                <div className="border-t border-white/5 pt-6">
                  <h4 className="text-[11px] font-mono tracking-widest uppercase text-gold-450 mb-4 flex items-center gap-2 font-bold">
                    <Building2 className="h-3.5 w-3.5" />
                    <span>PRECISION SPECIFICATIONS</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center gap-3 py-2 px-3 rounded-lg bg-white/5 border border-white/5">
                        <CheckCircle className="h-4 w-4 text-gold-400 shrink-0" />
                        <span className="text-xs text-slate-200 tracking-wide font-medium">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
