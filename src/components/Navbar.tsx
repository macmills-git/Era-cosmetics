import { useState, useEffect } from 'react';
import { Home, ShoppingBag, Fingerprint, HelpCircle, ShoppingCart, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const { cartCount } = useCart();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navElements = [
    { name: 'Home', icon: Home, href: '/' },
    { name: 'Shop', icon: ShoppingBag, href: '/shop' },
    { name: 'Quiz', icon: Fingerprint, href: '/quiz' },
    { name: 'About', icon: HelpCircle, href: '/about' },
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 h-16 md:h-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 flex items-center justify-between px-6 md:px-12">
      {/* Brand Name */}
      <Link to="/" className="text-xl font-bold tracking-[0.3em] text-slate-900 uppercase relative z-50">
        ERA
      </Link>

      {/* Desktop Nav Links - Middle */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-12">
        {navElements.map((item) => (
          <Link 
            key={item.name} 
            to={item.href} 
            className={`flex flex-col items-center gap-0.5 group transition-all duration-300 hover:scale-105 relative ${location.pathname === item.href ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
          >
            <item.icon className="w-4 h-4 text-slate-900 stroke-[1.5px]" />
            <span className="text-[8px] font-sans tracking-[0.15em] text-slate-900 uppercase font-bold">
              {item.name}
            </span>
            {location.pathname === item.href && (
              <motion.div 
                layoutId="nav-dot"
                className="absolute -bottom-2 w-1 h-1 bg-slate-900 rounded-full" 
              />
            )}
          </Link>
        ))}
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-6 relative z-50">
        <Link 
          to="/cart" 
          className={`flex flex-col items-center gap-0.5 group transition-all duration-300 hover:scale-105 relative ${location.pathname === '/cart' ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}
        >
          <div className="relative">
            <ShoppingCart className="w-5 h-5 text-slate-900 stroke-[1.5px]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-slate-900 text-white text-[8px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>
          <span className="hidden md:block text-[8px] font-sans tracking-[0.15em] text-slate-900 uppercase font-bold">
            Cart
          </span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-slate-900"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-white z-40 md:hidden pt-24 px-6"
          >
            <div className="flex flex-col gap-8">
              {navElements.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link 
                    to={item.href}
                    className="flex items-center gap-6 py-4 border-b border-slate-50"
                  >
                    <item.icon className="w-6 h-6 text-slate-900 stroke-[1.5px]" />
                    <span className="text-2xl font-light tracking-widest text-slate-900 uppercase">
                      {item.name}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-24 pt-12 border-t border-slate-100">
              <p className="text-[10px] font-bold tracking-[0.4em] text-slate-400 uppercase mb-8">Connect</p>
              <div className="flex gap-8">
                {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
                  <a key={social} href="#" className="text-[10px] font-bold tracking-widest uppercase text-slate-900">
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
