import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Phone, MessageSquare, Send, CheckCircle2, ChevronRight, Sparkles, AlertCircle } from "lucide-react";
import { ContactInquiry } from "../types";

export default function Contact() {
  const [form, setForm] = useState<ContactInquiry>({
    name: "",
    phone: "",
    projectType: "Hillside Smart Mansion",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      setErrorVisible(true);
      setTimeout(() => setErrorVisible(false), 4000);
      return;
    }

    setIsSubmitting(true);
    // Simulate high-trust secure backend server-side transmit
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setForm({
        name: "",
        phone: "",
        projectType: "Hillside Smart Mansion",
        message: ""
      });
    }, 2500);
  };

  const projectTypes = [
    "Hillside Smart Mansion",
    "High-Rise Construction Module",
    "Bespoke Architectural Finishing",
    "Masterplanned Sovereign Estate",
    "Commercial Real Estate"
  ];

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-8 bg-luxury-charcoal overflow-hidden border-t border-white/5">
      {/* Background Volumetric glowing spheres */}
      <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Direct Elite desk links */}
          <div className="lg:col-span-5 space-y-10 text-left">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="h-[1px] w-8 bg-gold-400" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-gold-400 font-bold">CLIENT COMMUNICATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-white font-medium">
                Initiate Your <br />
                <span className="bg-gradient-to-r from-gold-100 to-gold-450 bg-clip-text text-transparent text-glow-gold">Masterpiece</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-sans font-light mt-6 leading-relaxed">
                Connect directly with our luxury developments desk. Our directors will review your project parameters and respond with customized structural frameworks and pricing profiles.
              </p>
            </div>

            {/* Channels block */}
            <div className="space-y-4">
              {/* Call direct */}
              <a
                href="tel:08161161547"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-500/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] uppercase font-mono tracking-widest text-slate-400">DIRECT VOICE DIAL</h4>
                    <span className="text-sm sm:text-base font-serif text-white font-medium">0816 116 1547</span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-gold-405 group-hover:translate-x-1 transition-all" />
              </a>

              {/* WhatsApp click */}
              <a
                href="https://wa.me/2348161161547?text=Hello%20L.LUKEN-LAW%2520Construction%2520Company,%2520I%2520would%2520like%2520to%2520schedule%2520an%2520exclusive%2520consultation%2520regarding%2520real%2520estate%2520developments."
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-gold-400/40 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-gold-600/10 border border-gold-400/20 flex items-center justify-center text-gold-400">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="text-[9px] uppercase font-mono tracking-widest text-slate-400">SECURE WHATSAPP ACCESS</h4>
                    <span className="text-sm sm:text-base font-serif text-white font-medium">Connect on WhatsApp</span>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-500 group-hover:text-gold-405 group-hover:translate-x-1 transition-all" />
              </a>
            </div>

            {/* Sovereign statement */}
            <div className="text-[10px] uppercase font-mono tracking-[0.25em] text-slate-450 border-t border-white/5 pt-6 leading-relaxed">
              * Exclusive client communications remain fully confidential. All site assessments require scheduled appointments.
            </div>
          </div>

          {/* Right Column: Glassmorphism high-conversion inquiry form container */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-card p-8 sm:p-10 border border-gold-400/20 relative shadow-2xl">
              
              {/* Outer light bar highlight */}
              <div className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

              <h3 className="text-xl sm:text-2xl font-serif text-white tracking-wide mb-2 text-left">
                Architectural Inquiries Panel
              </h3>
              <p className="text-xs text-slate-350 font-light tracking-wide text-left mb-8">
                Please populate your layout request metrics to request bespoke developer consultation.
              </p>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="consultation-form"
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Error prompt */}
                    {errorVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-xs text-red-400 flex items-center gap-3"
                      >
                        <AlertCircle className="h-4 w-4" />
                        <span>All fields must be populated to transmit request securely.</span>
                      </motion.div>
                    )}

                    {/* Name input */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        COMMERCIAL OR PERSONAL NAME
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Aliko Dangote / Prime Properties LTD"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-gold-400 text-sm text-slate-200 placeholder-slate-650 focus:outline-none transition-all duration-300"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Dual fields: Phone & Project Type */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                          CONTACT PHONE NUMBER
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. +234 816 116 1547"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-gold-400 text-sm text-slate-200 placeholder-slate-650 focus:outline-none transition-all duration-300"
                          disabled={isSubmitting}
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                          REQUIRED CLOUD BLUEPRINT
                        </label>
                        <select
                          value={form.projectType}
                          onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                          className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-gold-400 text-sm text-slate-200 focus:outline-none transition-all duration-300"
                          disabled={isSubmitting}
                        >
                          {projectTypes.map((type, idx) => (
                            <option key={idx} value={type} className="bg-luxury-charcoal text-slate-200">
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Message Box */}
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono tracking-widest text-slate-400 uppercase font-bold">
                        BRIEF PROJECT SYNOPSIS (BUDGET AREA, SCHEDULE)
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Detail your luxury real estate goals at Isabo or elsewhere in details..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-5 py-4 rounded-xl bg-black/40 border border-white/10 hover:border-white/20 focus:border-gold-400 text-sm text-slate-200 placeholder-slate-650 focus:outline-none transition-all duration-300 resize-none"
                        disabled={isSubmitting}
                      />
                    </div>

                    {/* Interactive Submit Button with loader ring */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 text-xs font-serif uppercase tracking-[0.25em] rounded-xl bg-gradient-to-r from-gold-600 to-gold-400 font-bold text-luxury-black hover:from-gold-500 hover:to-gold-300 transition-all duration-350 shadow-xl shadow-gold-600/10 flex items-center justify-center gap-3 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          {/* Spinner ring */}
                          <svg className="animate-spin h-4 w-4 text-luxury-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>SECURELY TRANSMITTING METRICS...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-3.5 w-3.5 text-luxury-black" />
                          <span>TRANSMIT DEVELOPMENT BLUEPRINT</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 text-center space-y-5"
                  >
                    <div className="h-16 w-16 bg-gold-500/10 border border-gold-400/40 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                      <CheckCircle2 className="h-8 w-8 text-gold-400" />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-serif text-white font-medium tracking-wide">
                        Inquiry Received in Vault
                      </h4>
                      <p className="text-xs text-slate-300 max-w-sm mx-auto leading-relaxed">
                        Your development parameters have been successfully forwarded to L.LUKEN-LAW executive panel. An architectural partner will communicate with you in less than 24 hours.
                      </p>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-full border border-gold-400/30 text-gold-300 hover:border-gold-450 hover:text-white transition-all text-[10px] font-mono tracking-widest uppercase cursor-pointer"
                    >
                      SUBMIT NEW SYNOPSIS
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
