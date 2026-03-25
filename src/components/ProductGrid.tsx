import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { ArrowUpRight, Plus } from 'lucide-react';

export default function ProductGrid() {
  const { addToCart } = useCart();

  return (
    <section id="shop" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-px bg-slate-900" />
              <span className="text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">The Collection</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-light tracking-tighter text-slate-900 leading-none">
              Molecular <br />
              <span className="italic font-serif text-slate-400">Formulas</span>
            </h2>
          </div>
          <Link to="/shop" className="group flex items-center gap-3 text-[10px] font-bold tracking-[0.3em] uppercase text-slate-900">
            Explore All
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-20">
          {products.slice(0, 10).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50 mb-8">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    addToCart(product);
                  }}
                  className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-slate-900 hover:text-white"
                >
                  <Plus size={18} />
                </button>
              </Link>
              
              <div className="space-y-1">
                <div className="flex justify-between items-start">
                  <span className="text-[8px] font-bold tracking-[0.2em] text-slate-400 uppercase">{product.category}</span>
                  <span className="text-xs font-medium text-slate-900">{product.price}</span>
                </div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-base font-light tracking-tight text-slate-900 hover:text-slate-500 transition-colors uppercase">{product.name}</h3>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
