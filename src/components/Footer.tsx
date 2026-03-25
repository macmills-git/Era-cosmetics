import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-8 mb-12 md:mb-20">
          {/* Brand Info */}
          <div className="flex flex-col">
            <Link to="/" className="flex flex-col mb-4 group">
              <span className="text-xl font-bold tracking-[0.4em] uppercase text-slate-900 group-hover:text-slate-500 transition-colors">ERA</span>
              <span className="text-[7px] tracking-[0.6em] uppercase font-bold text-slate-400 -mt-1">Cosmetics</span>
            </Link>
            <p className="text-[10px] text-slate-400 font-light tracking-tight max-w-[200px]">
              Molecular skincare engineered for the modern human.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-8 md:gap-12">
            {['Shop', 'Quiz', 'About'].map((link) => (
              <Link 
                key={link} 
                to={`/${link.toLowerCase()}`} 
                className="text-[10px] font-bold tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase"
              >
                {link}
              </Link>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            {['Instagram', 'Twitter'].map((social) => (
              <a 
                key={social} 
                href="#" 
                className="text-[10px] font-bold tracking-[0.2em] text-slate-400 hover:text-slate-900 transition-colors uppercase"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-[8px] font-mono tracking-widest text-slate-300 font-bold uppercase">© 2024 ERA COSMETICS — EST. 2024</span>
          <div className="flex gap-6">
            {['Privacy', 'Terms'].map((link) => (
              <Link key={link} to="#" className="text-[8px] font-bold tracking-[0.2em] text-slate-300 hover:text-slate-900 transition-colors uppercase">
                {link}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
