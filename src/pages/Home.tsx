import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import CTASection from '../components/CTASection';
import TestimonialSection from '../components/TestimonialSection';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-ivory"
    >
      <HeroSection />
      
      {/* Structural Divider */}
      <div className="h-px w-full bg-line" />
      
      <ProductGrid />
      
      {/* Immersive CTA */}
      <CTASection />
      
      {/* Social Proof Grid */}
      <TestimonialSection />
      
      {/* Final Brand Statement */}
      <section className="py-40 bg-charcoal text-ivory overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--color-gold)_0%,_transparent_70%)] blur-3xl transform scale-150" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="space-y-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-12 h-px bg-gold" />
              <span className="micro-label text-gold">ERA Architectural // Final Statement</span>
              <div className="w-12 h-px bg-gold" />
            </div>
            
            <h2 className="text-5xl md:text-9xl font-light tracking-tighter leading-[0.85] text-balance">
              The <br />
              <span className="italic font-serif">Future</span> <br />
              of Skin
            </h2>
            
            <p className="text-xl md:text-2xl font-light opacity-60 max-w-2xl mx-auto leading-relaxed text-balance">
              We do not decorate. We engineer for resilience, clarity, and structural biological integrity.
            </p>
            
            <div className="pt-12">
              <div className="w-px h-24 bg-gold mx-auto animate-pulse" />
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
