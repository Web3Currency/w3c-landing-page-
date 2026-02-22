import React, { useState } from 'react';
import { SOCIAL_LINKS, BRAND } from '../constants';
import { trackCommunityJoin, trackSocialClick } from '../utils/analytics';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const WHATSAPP_LINK = SOCIAL_LINKS.whatsapp;

  const navItems = [
    { label: 'Framework', href: '#ecosystem' },
    { label: 'Impact', href: '#impact' },
    { label: 'P2P Desk', href: '#liquidity' },
    { label: 'Airdrops', href: '#alpha' },
    { label: 'Pi App', href: '#pi-vision' },
    { label: 'Onboarding', href: '#process' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img 
              src="/Logo2.png" 
              alt={`${BRAND.name} Logo`}
              className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
            />
            <span className="font-sora font-bold text-xl sm:text-2xl tracking-tight hidden sm:block">{BRAND.name}</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-8 mr-4 border-r border-white/10 pr-8">
              {navItems.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href}
                  className="text-zinc-400 hover:text-white transition-colors text-[11px] font-bold tracking-[0.2em] uppercase"
                >
                  {item.label}
                </a>
              ))}
            </div>
            
            <div className="flex items-center gap-5">
              <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all hover:scale-110" aria-label="Follow Web3 Currency on X (Twitter)" onClick={() => trackSocialClick('twitter')}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button text-white px-8 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase active:scale-95 border-white/20"
                onClick={() => trackCommunityJoin()}
              >
                Join Community
              </a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-400 p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden glass animate-in slide-in-from-top duration-300 overflow-hidden">
          <div className="px-4 pt-2 pb-12 space-y-1 sm:px-6 text-center border-t border-white/10 bg-black/95 backdrop-blur-3xl">
            {navItems.map((item) => (
              <a 
                key={item.label} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-6 text-zinc-400 hover:text-white text-sm font-bold tracking-[0.3em] uppercase transition-colors border-b border-white/5 last:border-0"
              >
                {item.label}
              </a>
            ))}

            <div className="px-4 mt-2">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full glass-button text-white py-6 rounded-2xl font-bold text-sm tracking-[0.2em] uppercase border-white/20 shadow-xl"
                onClick={() => trackCommunityJoin()}
              >
                Join Community
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
