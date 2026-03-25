import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden bg-charcoal">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=2000" 
          alt="ERA Cosmetic Formula" 
          className="w-full h-full object-cover opacity-40 grayscale hover:grayscale-0 transition-all duration-1000"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8 md:space-y-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4 md:mb-8">
            <div className="w-8 md:w-12 h-px bg-white/30" />
            <span className="text-[10px] md:text-[11px] font-bold tracking-[0.3em] text-white/70 uppercase">Bespoke Consultation</span>
            <div className="w-8 md:w-12 h-px bg-white/30" />
          </div>

          <h2 className="text-4xl md:text-8xl font-light leading-[1.1] tracking-tight text-balance">
            Formulated for <span className="italic font-serif text-slate-300">Biological Harmony</span>.
          </h2>
          
          <div className="flex flex-col items-center gap-8 md:gap-10">
            <p className="text-lg md:text-2xl font-light text-white/60 max-w-2xl mx-auto leading-relaxed px-4">
              Our diagnostic protocol identifies your skin's unique molecular requirements, delivering a bespoke formula designed to restore clarity.
            </p>

            <Link 
              to="/quiz" 
              className="px-12 md:px-16 py-5 md:py-6 bg-white text-slate-900 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase transition-all duration-500 hover:bg-slate-200 hover:scale-105 flex items-center gap-4 group shadow-2xl"
            >
              Begin Consultation <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* "Formula Active" Badge Style */}
      <div className="absolute bottom-12 right-12 hidden md:block">
        <div className="px-8 py-4 bg-white/10 backdrop-blur-2xl rounded-3xl flex items-center gap-5 border border-white/20 shadow-2xl">
          <div className="w-3 h-3 rounded-full bg-gold animate-pulse shadow-[0_0_15px_rgba(200,169,106,1)]" />
          <span className="text-[12px] text-ivory font-bold uppercase tracking-[0.3em]">Formula Active // 001</span>
        </div>
      </div>
    </section>
  );
}
