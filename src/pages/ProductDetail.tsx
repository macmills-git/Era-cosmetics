import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Plus, Minus, Shield, Droplets, Sparkles, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === Number(id));
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-light text-slate-900 mb-4">Formula not found</h2>
          <Link to="/shop" className="text-sm font-bold tracking-widest uppercase underline underline-offset-4">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Link to="/shop" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-widest uppercase text-slate-400 hover:text-slate-900 transition-colors mb-12 group">
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back to Collection
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 md:space-y-8"
          >
            <div className="aspect-[4/5] bg-slate-50 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="aspect-square bg-slate-50 overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={product.image} 
                    alt={`${product.name} view ${i}`} 
                    className={`w-full h-full object-cover ${i === 2 ? 'scale-150' : i === 3 ? 'brightness-110' : ''}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-slate-400 uppercase">{product.category}</span>
                <div className="w-1 h-1 rounded-full bg-slate-200" />
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-slate-900 uppercase">Available</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-900 uppercase mb-4 leading-none">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl font-light text-slate-400">{product.price}</p>
            </div>

            <div className="space-y-8 mb-10 md:mb-12">
              <p className="text-slate-600 leading-relaxed font-light text-base md:text-lg">
                {product.description}
              </p>

              {/* Sizes */}
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 block mb-4">Select Volume</span>
                <div className="flex flex-wrap gap-3">
                  {product.sizes?.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-5 md:px-6 py-2.5 md:py-3 text-[10px] md:text-xs font-medium border transition-all duration-300 ${
                        selectedSize === size 
                          ? 'bg-slate-900 text-white border-slate-900' 
                          : 'bg-transparent text-slate-400 border-slate-200 hover:border-slate-900 hover:text-slate-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <span className="text-[10px] font-bold tracking-widest uppercase text-slate-900 block mb-4">Quantity</span>
                <div className="flex items-center w-28 md:w-32 border border-slate-200">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <Minus size={12} />
                  </button>
                  <span className="flex-1 text-center text-xs md:text-sm font-medium text-slate-900">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-slate-400 hover:text-slate-900 transition-colors"
                  >
                    <Plus size={12} />
                  </button>
                </div>
              </div>
            </div>

            <button 
              onClick={() => addToCart(product)}
              className="w-full bg-slate-900 text-white py-4 md:py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-slate-800 transition-colors flex items-center justify-center gap-3"
            >
              Add to Cart — {product.price}
            </button>

            {/* Technical Details */}
            <div className="mt-12 md:mt-16 pt-12 md:pt-16 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 text-slate-900">
                  <Shield size={16} className="text-slate-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Clinical Safety</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed font-light">
                  Dermatologically tested for sensitive skin. Non-comedogenic and hypoallergenic formula.
                </p>
              </div>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center gap-3 text-slate-900">
                  <Droplets size={16} className="text-slate-400" />
                  <span className="text-[10px] font-bold tracking-widest uppercase">Molecular Delivery</span>
                </div>
                <p className="text-[10px] md:text-xs text-slate-500 leading-relaxed font-light">
                  Advanced liposomal technology ensures deep penetration of active ingredients.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Detailed Info Tabs */}
        <div className="mt-32 border-t border-slate-100 pt-16">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-light text-slate-900 mb-8 uppercase tracking-tight">Formula Specifications</h2>
            <div className="space-y-12">
              <div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">Key Ingredients</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {product.details?.ingredients || 'Purified Water, Glycerin, Sodium Hyaluronate, Niacinamide, Panthenol, Phenoxyethanol, Ethylhexylglycerin.'}
                </p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold tracking-widest uppercase text-slate-400 mb-4">How to Use</h3>
                <p className="text-slate-600 font-light leading-relaxed">
                  {product.details?.usage || 'Apply 2-3 drops to clean, damp skin morning and night. Follow with your preferred moisturizer and SPF during the day.'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
