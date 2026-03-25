import { motion } from 'motion/react';
import { Shield, Zap, Droplets, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
        <div className="mb-32">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px bg-slate-900" />
            <span className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Our Story</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-light tracking-tighter text-slate-900 mb-12 leading-none">
            Molecular <br />
            <span className="italic font-serif text-slate-400">Radiance</span>
          </h1>
          <p className="text-2xl font-light text-slate-500 leading-relaxed max-w-3xl">
            ERA Cosmetics was born from a singular vision: to bridge the gap between clinical molecular science and pure aesthetic luxury.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32">
          <div className="aspect-[4/5] bg-slate-50 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=1200" 
              alt="Laboratory" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-1000" />
          </div>
          <div className="flex flex-col justify-center space-y-12 py-8 lg:py-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-light tracking-tight text-slate-900 uppercase leading-tight">Biological <br /> Integrity</h2>
              <p className="text-slate-500 font-light leading-relaxed text-lg">
                Our formulas are engineered to respect the skin's natural architecture while delivering high-potency active components. We source only the purest bioactive components from around the globe.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-10">
              {[
                { icon: Shield, title: 'Barrier Defense', desc: 'Strengthening the dermal shield through molecular alignment.' },
                { icon: Zap, title: 'Active Potency', desc: 'Clinical-grade concentrations delivered through advanced systems.' },
                { icon: Droplets, title: 'Deep Saturation', desc: 'Optimal hydration levels achieved through multi-weight complexes.' }
              ].map((item, i) => (
                <div key={i} className="flex gap-8 items-start group">
                  <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all duration-500 shrink-0">
                    <item.icon size={18} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold tracking-widest uppercase text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy Section with Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-32 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <h2 className="text-4xl md:text-6xl font-light text-slate-900 leading-tight tracking-tight">
              Beauty is the <br />
              <span className="italic font-serif text-slate-400">Ultimate Function</span>
            </h2>
            <p className="text-xl text-slate-500 font-light leading-relaxed">
              We believe that true radiance is not a surface-level attribute, but a biological result of structural health and molecular balance.
            </p>
            <Link to="/shop" className="inline-flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900 group">
              Explore the Collection <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          <div className="order-1 lg:order-2 aspect-square bg-slate-50 overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=1200" 
              alt="Philosophy" 
              className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
