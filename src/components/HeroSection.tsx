import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Play } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden">
      {/* Main Split Content */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-2">
        {/* Left Pane: Typography & Narrative */}
        <div className="p-8 md:p-16 lg:p-24 flex flex-col justify-center relative bg-[#f8f8f8] min-h-[60vh] lg:min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: "circOut" }}
            className="space-y-6 md:space-y-8 relative z-10"
          >
            <div className="flex items-center gap-4 mb-2 md:mb-4">
              <div className="w-8 md:w-12 h-px bg-slate-900" />
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">The New Standard</span>
            </div>

            <h1 className="text-[18vw] md:text-[12vw] lg:text-[10vw] font-light leading-[0.8] tracking-tighter text-slate-900">
              ERA <br />
              <span className="italic font-serif text-slate-400">Skin</span>
            </h1>
            
            <div className="max-w-md space-y-6 md:space-y-10">
              <p className="text-base md:text-lg lg:text-xl font-light text-slate-600 leading-relaxed tracking-tight">
                Architectural skincare for the modern era. Precision-engineered formulas that respect your biological integrity.
              </p>
              
              <div className="flex items-center gap-8">
                <Link to="/shop" className="group flex items-center gap-4 text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-slate-900">
                  Shop Collection
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Background Text Accent */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-24 opacity-[0.03] select-none pointer-events-none">
            <span className="text-[30vw] lg:text-[20vw] font-bold tracking-tighter uppercase leading-none">ERA</span>
          </div>
        </div>

        {/* Right Pane: Immersive Visual (Product) */}
        <div className="relative overflow-hidden bg-slate-100 min-h-[60vh] lg:min-h-0">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "circOut" }}
            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200" 
            alt="ERA Product Formula" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent" />
          
          {/* Floating Feature Bubble */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-6 right-6 md:bottom-12 md:right-12 p-6 md:p-10 bg-white/80 backdrop-blur-2xl border border-white/40 shadow-2xl max-w-[200px] md:max-w-xs"
          >
            <span className="text-[8px] md:text-[9px] font-bold tracking-[0.3em] text-slate-400 mb-2 md:mb-4 block uppercase underline underline-offset-8">Clinical Grade</span>
            <h3 className="text-lg md:text-xl font-light tracking-tight mb-2 md:mb-3 text-slate-900">Molecular Harmony</h3>
            <p className="text-[10px] md:text-xs font-light text-slate-500 leading-relaxed">
              Our formulas utilize bio-mimetic structures to ensure deep penetration and sustained release.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
