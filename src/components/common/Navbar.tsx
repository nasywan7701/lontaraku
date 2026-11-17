import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, BookOpen, Grid, Sparkles, Home } from 'lucide-react';

export const NAV_ITEMS = [
  { name: 'Beranda', path: '/', icon: Home, lontara: 'ᨅᨑᨊ' },
  { name: 'Aksara', path: '/aksara', icon: Grid, lontara: 'ᨕᨀᨔᨑ' },
  { name: 'Kosa Kata', path: '/kosakata', icon: Sparkles, lontara: 'ᨀᨚᨔ ᨀᨈ' },
  { name: 'Bacaan', path: '/bacaan', icon: BookOpen, lontara: 'ᨅᨌᨕ' },
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-salaka-light/90 backdrop-blur-md border-b border-bulaeng/40 shadow-sm transition-all duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Brand LONTARAKU */}
          <NavLink to="/" className="flex items-center gap-3 group select-none">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-eja to-eja-dark flex items-center justify-center text-bulaeng-light font-display text-2xl font-bold shadow-md border border-bulaeng/50 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300">
              ᨒ
            </div>
            <div>
              <div className="font-display font-black text-2xl tracking-wider text-eja flex items-center gap-0.5">
                <span>LONTARA</span>
                <span className="text-bulaeng drop-shadow-sm">KU</span>
              </div>
              <span className="block text-[11px] font-semibold tracking-tight text-leleng-slate -mt-1 group-hover:text-eja transition-colors">
                Bahasa & Budaya Makassar
              </span>
            </div>
          </NavLink>

          {/* Navigasi Desktop */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  relative px-4 py-2 rounded-xl text-sm font-bold transition-all duration-200 flex items-center gap-2
                  ${isActive 
                    ? 'text-eja bg-eja/8 shadow-sm after:content-[""] after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-bulaeng' 
                    : 'text-leleng-slate hover:text-eja hover:bg-salaka-base/60'
                  }
                `}
              >
                <item.icon size={17} className="transition-transform group-hover:scale-110" />
                <span>{item.name}</span>
                <span className="font-lontara text-xs opacity-50 hidden lg:inline">
                  {item.lontara}
                </span>
              </NavLink>
            ))}
          </nav>

          {/* Tombol Hamburger Menu Mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-leleng hover:text-eja hover:bg-salaka-base/80 focus:outline-none focus:ring-2 focus:ring-bulaeng transition-colors"
              aria-label="Toggle Menu Navigasi"
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={26} className="text-eja" /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden bg-lontar-cream/95 backdrop-blur-lg border-b-2 border-bulaeng px-4 pt-3 pb-5 space-y-1.5 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-bulaeng-dark">
            Menu Pembelajaran
          </div>
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
                flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all
                ${isActive 
                  ? 'bg-eja text-white shadow-md' 
                  : 'text-leleng-slate hover:bg-salaka-light hover:text-eja'
                }
              `}
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} />
                <span>{item.name}</span>
              </div>
              <span className="font-lontara text-lg opacity-80">
                {item.lontara}
              </span>
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
};

