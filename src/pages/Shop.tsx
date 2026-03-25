import { useState } from 'react';
import { motion } from 'motion/react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { Search, ArrowUpRight, Plus } from 'lucide-react';

export default function Shop() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Serum', 'Cream', 'Oil', 'SPF', 'Cleanser', 'Toner', 'Balm', 'Recovery'];

  const filteredProducts = products.filter((product) => {
    const matchesCategory = activeCategory === 'All' || product.category.includes(activeCategory);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-24 bg-white min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8 md:gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-px bg-slate-900" />
              <span className="text-[8px] md:text-[10px] font-bold tracking-[0.4em] text-slate-900 uppercase">Technical Collection</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-slate-900 leading-none">
              The <br />
              <span className="italic font-serif text-slate-400">Collection</span>
            </h1>
          </div>
          <div className="w-full md:w-80">
            <div className="relative group">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-slate-900 transition-colors" size={16} />
              <input 
                type="text" 
                placeholder="Search formulas..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-slate-200 py-3 pl-8 text-sm focus:outline-none focus:border-slate-900 transition-colors text-slate-900 placeholder:text-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-20 border-b border-slate-100 pb-8 overflow-x-auto no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`text-[10px] font-bold tracking-[0.2em] transition-all duration-300 uppercase whitespace-nowrap ${
                activeCategory === category 
                  ? 'text-slate-900 underline underline-offset-8' 
                  : 'text-slate-400 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-20">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <Link to={`/product/${product.id}`} className="block relative aspect-[4/5] overflow-hidden bg-slate-50 mb-6">
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

        {filteredProducts.length === 0 && (
          <div className="text-center py-40">
            <p className="text-lg text-slate-400 font-light italic">No matching formulas found.</p>
            <button 
              onClick={() => {setActiveCategory('All'); setSearchQuery('');}}
              className="mt-6 text-[10px] font-bold tracking-widest uppercase text-slate-900 underline underline-offset-4"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
