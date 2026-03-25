import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { ChevronLeft, ShoppingBag, ArrowUpRight, Shield, Zap, Droplets } from 'lucide-react';

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="pt-40 pb-24 text-center min-h-screen bg-ivory">
        <h1 className="text-4xl font-light mb-6 text-charcoal">Formula Not Found</h1>
        <button onClick={() => navigate('/shop')} className="text-[11px] font-bold tracking-widest text-gold hover:text-charcoal transition-colors uppercase">Return to Collection</button>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24 bg-ivory min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-charcoal/40 hover:text-charcoal transition-colors mb-12 text-[10px] font-bold tracking-widest uppercase"
        >
          <ChevronLeft size={14} />
          Back to Collection
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Product Image Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="aspect-[4/5] bg-nude rounded-4xl overflow-hidden relative card-shadow group"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-8 left-8">
              <span className="text-[10px] font-bold tracking-widest bg-white/90 backdrop-blur-md px-6 py-3 rounded-full uppercase text-gold shadow-sm border border-line">
                Formula // {product.category}
              </span>
            </div>
          </motion.div>

          {/* Product Info */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-px bg-gold" />
                <span className="text-[11px] font-bold tracking-[0.2em] text-gold uppercase">Clinical Grade Formula</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-light tracking-tight leading-[1.1] mb-8 text-charcoal">
                {product.name}
              </h1>
              
              <div className="flex justify-between items-end mb-12 pb-8 border-b border-line">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase">Unit Price</p>
                  <p className="text-4xl font-light text-charcoal">{product.price}</p>
                </div>
                <div className="text-right space-y-1">
                  <p className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase">Availability</p>
                  <p className="text-xs font-bold tracking-widest uppercase text-green-600">In Stock // Ready for Dispatch</p>
                </div>
              </div>

              <p className="text-xl text-charcoal/60 font-light leading-relaxed mb-12 text-balance">
                {product.description}
                <br /><br />
                Engineered for high-performance biological response. This formula utilizes 
                molecular structures to ensure deep penetration and sustained 
                release of active botanical components.
              </p>

              {/* Technical Specs Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
                {[
                  { icon: Shield, label: 'Barrier Support', value: '98% Efficiency' },
                  { icon: Zap, label: 'Active Potency', value: 'High Concentration' },
                  { icon: Droplets, label: 'Hydration Index', value: 'Optimal Saturation' },
                ].map((spec, i) => (
                  <div key={i} className="p-8 border border-line rounded-3xl flex flex-col gap-6 bg-white hover:border-gold transition-colors duration-500">
                    <spec.icon className="w-6 h-6 text-gold" />
                    <div>
                      <p className="text-[10px] font-bold tracking-widest text-charcoal/40 uppercase mb-1">{spec.label}</p>
                      <p className="text-sm font-bold tracking-tight text-charcoal uppercase">{spec.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => addToCart(product)}
                  className="flex-1 py-6 bg-gold text-ivory rounded-full text-sm font-bold tracking-widest uppercase hover:bg-charcoal transition-all duration-500 flex items-center justify-center gap-3 group shadow-xl"
                >
                  <ShoppingBag size={20} />
                  Add to Collection <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <button className="px-10 py-6 border border-line rounded-full text-sm font-bold tracking-widest uppercase hover:border-charcoal transition-all duration-500 text-charcoal">
                  Save to Profile
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Detailed Specs Section */}
        <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-0 border border-line bg-white rounded-4xl overflow-hidden card-shadow">
          {[
            { title: 'Composition', content: 'Technical blend of peptides, ceramides, and stabilized antioxidants for biological harmony.' },
            { title: 'Application', content: 'Apply 2-3 drops to clean surface. Massage until fully integrated into the dermal layer.' },
            { title: 'Results', content: 'Visible structural alignment and clarity within 14 days of consistent daily use.' }
          ].map((item, i) => (
            <div key={i} className={`p-12 ${i !== 2 ? 'md:border-r border-line' : ''} ${i !== 0 ? 'border-t md:border-t-0 border-line' : ''} hover:bg-ivory transition-colors duration-500`}>
              <h4 className="text-[10px] font-bold tracking-widest text-gold uppercase mb-8">{item.title}</h4>
              <p className="text-base font-light leading-relaxed text-charcoal/80">{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
