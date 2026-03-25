import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Quiz from './pages/Quiz';
import Cart from './pages/Cart';
import { AnimatePresence } from 'motion/react';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="relative min-h-screen bg-white selection:bg-slate-900 selection:text-white">
          <Navbar />
          
          <main className="relative z-10">
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/about" element={<About />} />
                <Route path="/quiz" element={<Quiz />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </AnimatePresence>
          </main>

          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}
