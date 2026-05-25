import { Landmark, ArrowUp, Instagram, Linkedin, MessageSquare } from "lucide-react";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const years = new Date().getFullYear();

  return (
    <footer className="relative bg-luxury-black border-t border-white/5 pt-20 pb-12 px-4 sm:px-8 overflow-hidden">
      
      {/* Visual top border light flare */}
      <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-gold-400/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/5 items-start text-left">
          
          {/* Column 1: Brand details */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection("home")}>
              <div className="h-9 w-9 rounded-full bg-gold-600/10 border border-gold-400/30 flex items-center justify-center">
                <Landmark className="h-4.5 w-4.5 text-gold-400 animate-pulse" />
              </div>
              <div>
                <div className="font-serif tracking-[0.2em] text-sm font-bold text-white">
                  L.LUKEN-LAW
                </div>
                <div className="text-[8px] uppercase tracking-[0.3em] text-gold-500 font-mono font-medium">
                  CONSTRUCTION COMPANY
                </div>
              </div>
            </div>
            
            <p className="text-xs text-slate-400 font-sans font-light leading-relaxed max-w-sm">
              Elite real estate developers and master general contractors. Specialists in casting high-end residential concrete structures and delivering international-grade stone craftsmanship in Nigeria.
            </p>

            {/* Social linkages */}
            <div className="flex items-center gap-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all cursor-pointer"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer" 
                className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all cursor-pointer"
                aria-label="Instagram Profile"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/2348161161547" 
                target="_blank" 
                rel="noreferrer" 
                className="h-8 w-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-gold-400 hover:border-gold-400 transition-all cursor-pointer"
                aria-label="WhatsApp Hotline"
              >
                <MessageSquare className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick navigation */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold">
              NAVIGATION CHANNELS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-serif">
              {[
                { name: "Home Portfolio", id: "home" },
                { name: "Developments", id: "developments" },
                { name: "Technical Services", id: "services" },
                { name: "Our Story", id: "about" },
                { name: "Elite Consultant Portal", id: "contact" }
              ].map((link, idx) => (
                <li key={idx}>
                  <button 
                    onClick={() => scrollToSection(link.id)}
                    className="hover:text-gold-300 transition-colors cursor-pointer text-left block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Regional Postcode */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold">
              REGIONAL HQ COORDS
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-sans font-light">
              <li className="leading-relaxed">
                <span className="text-white block font-medium">Headquarters Desk</span>
                Isabo Court Area, Abeokuta, <br />Ogun State, Nigeria
              </li>
              <li>
                <span className="text-white block font-medium">Core Coordinates</span>
                7.1517° N, 3.3516° E — Isabo Heights
              </li>
            </ul>
          </div>

          {/* Column 4: Hotline Direct */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="text-[10px] font-mono tracking-widest uppercase text-gold-400 font-bold">
              DIRECT ACCESS
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-sans font-light">
              <li>
                <a href="tel:08161161547" className="hover:text-gold-300 font-medium text-white transition-colors block">
                  📞 0816 116 1547
                </a>
              </li>
              <li>
                <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase block">Mon - Sat: 8:00am - 6:00pm</span>
              </li>
              <li className="pt-2">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-[9px] font-serif uppercase tracking-widest text-gold-400 hover:border-gold-400 transition-colors cursor-pointer"
                >
                  Schedule Site Tour
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar - Copy and button to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-slate-500 gap-4">
          <div>
            © {years} L.LUKEN-LAW Construction Company. All Sovereign Rights Reserved. Sourced under Global Architectural Framework.
          </div>
          
          <button
            onClick={() => scrollToSection("home")}
            className="group flex items-center gap-2 text-slate-400 hover:text-gold-400 transition-colors uppercase tracking-widest cursor-pointer"
          >
            <span>Ascend to Zenith</span>
            <div className="h-6 w-6 rounded-full bg-white/5 border border-white/10 group-hover:border-gold-400/60 flex items-center justify-center transition-all">
              <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
