import { motion } from 'motion/react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ChevronRight, ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, cartTotal, cartCount } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-48 pb-24 bg-white min-h-screen flex items-center justify-center text-center"
      >
        <div className="max-w-md px-6">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-10">
            <ShoppingBag className="text-slate-900" size={24} />
          </div>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-slate-900">
            Cart <br />
            <span className="italic font-serif text-slate-400">Empty</span>
          </h1>
          <p className="text-sm text-slate-500 font-light mb-10 leading-relaxed text-balance">
            Your current selection contains no active formulas. Begin your molecular 
            skin analysis to find your bespoke protocol.
          </p>
          <Link 
            to="/shop"
            className="px-10 py-4 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-slate-700 transition-all duration-500 flex items-center justify-center gap-3 group mx-auto w-fit"
          >
            Explore Collection <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-40 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 md:mb-16 border-b border-slate-100 pb-8 md:pb-10 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-3 md:mb-4">
              <div className="w-8 md:w-12 h-px bg-slate-900" />
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Order Selection</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-light tracking-tight text-slate-900">
              Your <span className="italic font-serif text-slate-400">Selection</span>
            </h1>
          </div>
          <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-slate-300 font-bold">
            [{cartCount.toString().padStart(2, '0')}] FORMULAS
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-8 flex flex-col gap-0 border-t border-slate-100">
            {cart.map((item) => (
              <motion.div 
                key={item.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="flex flex-col sm:flex-row gap-6 md:gap-10 py-8 md:py-10 border-b border-slate-100 group"
              >
                <div className="w-full sm:w-32 md:w-40 aspect-square overflow-hidden bg-slate-50 flex-shrink-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" 
                    referrerPolicy="no-referrer" 
                  />
                </div>
                
                <div className="flex-1 flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <p className="text-[8px] font-bold tracking-[0.3em] text-slate-400 mb-2 uppercase">{item.category}</p>
                        <h3 className="text-lg md:text-2xl font-light tracking-tight text-slate-900 uppercase">{item.name}</h3>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-300 hover:text-slate-900 transition-colors p-2"
                      >
                        <Trash2 size={16} strokeWidth={1.5} />
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center gap-4 md:gap-6 border border-slate-100 rounded-full px-4 md:px-5 py-1.5 md:py-2">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        <Minus size={10} strokeWidth={2} />
                      </button>
                      <span className="text-[10px] md:text-xs font-mono w-4 text-center font-bold">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        <Plus size={10} strokeWidth={2} />
                      </button>
                    </div>
                    <div className="text-right">
                      <p className="text-[8px] font-bold tracking-[0.2em] text-slate-300 mb-1 uppercase">Unit Price</p>
                      <span className="text-base md:text-lg font-medium text-slate-900">{item.price}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            <button 
              onClick={() => navigate('/shop')}
              className="flex items-center gap-3 text-[10px] font-bold tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-all mt-8 md:mt-10 group uppercase"
            >
              <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
              Return to Collection
            </button>
          </div>

          {/* Summary */}
          <div className="lg:col-span-4">
            <div className="bg-slate-50 p-8 md:p-10 sticky top-32">
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="w-8 h-px bg-slate-900" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-slate-900 uppercase">Order Summary</span>
              </div>
              
              <h2 className="text-xl md:text-2xl font-light tracking-tight mb-6 md:mb-8 text-slate-900">Total <span className="italic font-serif text-slate-400">Value</span></h2>
              
              <div className="flex flex-col gap-4 md:gap-6 mb-6 md:mb-8 pb-6 md:pb-8 border-b border-slate-200">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Subtotal</span>
                  <span className="text-sm md:text-base font-medium text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase">Logistics</span>
                  <span className="text-[8px] md:text-[9px] font-mono tracking-widest text-slate-300 font-bold">CALCULATED AT NEXT STEP</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8 md:mb-10">
                <div>
                  <p className="text-[10px] font-bold tracking-[0.2em] text-slate-400 mb-1 uppercase">Final Amount</p>
                  <span className="text-2xl md:text-3xl font-medium tracking-tighter text-slate-900">${cartTotal.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 md:py-5 bg-slate-900 text-white rounded-full text-[10px] font-bold tracking-widest uppercase hover:bg-slate-700 transition-all duration-500 flex items-center justify-center gap-3 group">
                Proceed to Checkout
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="mt-8 md:mt-10 pt-6 border-t border-slate-200 flex items-center justify-between opacity-30">
                <span className="text-[7px] font-mono tracking-[0.3em] font-bold">SECURE TRANSACTION // ERA COSMETICS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
