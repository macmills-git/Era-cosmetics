import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The architectural approach to skincare is revolutionary. My skin feels structurally different.",
    author: "Elena V.",
    role: "Architect",
    metric: "94% Improvement"
  },
  {
    quote: "Minimalism that actually works. ERA has simplified my life and my skin.",
    author: "Marcus T.",
    role: "Product Designer",
    metric: "2.4x Hydration"
  },
  {
    quote: "Every detail is considered. From the packaging to the formula, it's pure precision.",
    author: "Sophia L.",
    role: "Creative Director",
    metric: "100% Satisfaction"
  }
];

export default function TestimonialSection() {
  return (
    <section className="py-32 bg-ivory border-t border-line">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-line">
          {testimonials.map((t, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`p-12 flex flex-col justify-between min-h-[400px] ${index !== testimonials.length - 1 ? 'md:border-r border-line' : ''} ${index !== 0 ? 'border-t md:border-t-0 border-line' : ''}`}
            >
              <div>
                <Quote className="w-8 h-8 text-gold mb-8 opacity-40" />
                <p className="text-xl font-light leading-relaxed text-charcoal/80 italic">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="mt-12 space-y-4">
                <div className="h-px w-8 bg-gold" />
                <div>
                  <h4 className="text-sm font-bold tracking-tight">{t.author}</h4>
                  <p className="micro-label opacity-60">{t.role}</p>
                </div>
                <div className="pt-4">
                  <span className="text-[10px] font-mono tracking-widest text-gold uppercase">{t.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
