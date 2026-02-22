import React, { useState, useEffect, useRef } from 'react';

const SupportWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Drag state
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  const handlePointerDown = (e: React.PointerEvent) => {
    setIsDragging(true);
    dragStart.current = { x: e.clientX, y: e.clientY };
    initialPos.current = { ...position };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStart.current.x;
    const dy = e.clientY - dragStart.current.y;
    setPosition({
      x: initialPos.current.x + dx,
      y: initialPos.current.y + dy,
    });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging) return;
    setIsDragging(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
    
    // If it didn't move much, treat as click
    const dx = Math.abs(e.clientX - dragStart.current.x);
    const dy = Math.abs(e.clientY - dragStart.current.y);
    if (dx < 5 && dy < 5) {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <style>{`
        @keyframes attention-ping {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4); }
          70% { transform: scale(1.05); box-shadow: 0 0 0 15px rgba(255, 255, 255, 0); }
          100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(255, 255, 255, 0); }
        }
        .animate-attention {
          animation: attention-ping 3s infinite cubic-bezier(0.66, 0, 0, 1);
        }
        .support-tooltip {
          visibility: hidden;
          opacity: 0;
          transition: opacity 0.3s, visibility 0.3s;
        }
        .group:hover .support-tooltip {
          visibility: visible;
          opacity: 1;
        }
      `}</style>

      {/* Floating Button */}
      <div 
        className={`fixed right-8 top-1/2 -translate-y-1/2 z-50 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ 
          transform: `translate3d(${position.x}px, ${position.y - (typeof window !== 'undefined' ? 0 : 0)}px, 0) translateY(-50%)`,
          touchAction: 'none'
        }}
      >
        <div className="relative animate-attention group">
          {/* Tooltip */}
          <div className="support-tooltip absolute right-full mr-4 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl whitespace-nowrap pointer-events-none">
            <span className="text-white text-xs font-bold tracking-wide">Get Human Assistance</span>
            {/* Tooltip Arrow */}
            <div className="absolute top-1/2 -translate-y-1/2 left-full w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-black/90" />
          </div>

          {/* Active Green Dot - Outside */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_12px_#22c55e] z-10 border-2 border-black" />
          
          <button
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            className={`glass-button relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl border-white/20 hover:scale-110 active:scale-95 transition-transform bg-black/90 backdrop-blur-2xl overflow-hidden ${isDragging ? 'cursor-grabbing scale-110' : 'cursor-grab'}`}
            aria-label="Get Human Assistance"
          >
            <img 
              src="/support-avatar.png" 
              alt="Support Agent"
              className="w-full h-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="glass-card w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[2rem] border-white/10 bg-zinc-950/95 shadow-2xl relative animate-in zoom-in-95 duration-300 custom-scrollbar">
            
            {/* Close Button */}
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors p-2 bg-white/5 rounded-full hover:bg-white/10"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="p-8 md:p-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h2 className="font-sora text-2xl font-bold text-white tracking-tight">SAFETY FIRST</h2>
              </div>

              <div className="space-y-8 text-left">
                {/* Section 1 */}
                <div>
                  <h3 className="text-red-400 font-bold text-xs uppercase tracking-widest mb-4">We will NEVER ask for:</h3>
                  <ul className="space-y-2.5">
                    {['Seed Phrase or Recovery Phrase', 'Private Keys', 'Wallet Password', '2FA Codes', 'Exchange login details', 'Remote access to your device', 'Crypto payments for "verification"'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                        <span className="text-red-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 2 */}
                <div>
                  <h3 className="text-green-400 font-bold text-xs uppercase tracking-widest mb-4">We ONLY provide support through:</h3>
                  <ul className="space-y-2.5">
                    {['This official website', 'Verified number: +234 703 275 4611'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                        <span className="text-green-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Section 3 */}
                <div>
                  <h3 className="text-orange-400 font-bold text-xs uppercase tracking-widest mb-4">We do NOT provide support via:</h3>
                  <ul className="space-y-2.5">
                    {['Random DMs', 'Unofficial Telegram accounts', 'Unknown WhatsApp numbers'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                        <span className="text-orange-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Warning */}
                <div className="p-5 rounded-xl bg-red-500/10 border border-red-500/20">
                  <p className="text-red-200 text-sm font-bold leading-relaxed">
                    If anyone asks for sensitive information, stop immediately. It is a scam.
                  </p>
                </div>

                {/* Section 4 */}
                <div>
                  <h3 className="text-blue-400 font-bold text-xs uppercase tracking-widest mb-4">What you can safely share:</h3>
                  <ul className="space-y-2.5">
                    {['Screenshots (hide seed phrase)', 'Transaction ID / Hash', 'Wallet type', 'Network used', 'Short issue description'].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-zinc-300 text-sm font-medium">
                        <span className="text-blue-500 mt-0.5">•</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.2em] mb-8">
                  Real support will never ask for your private keys.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-4 rounded-xl font-bold text-xs text-zinc-400 hover:text-white hover:bg-white/5 transition-colors uppercase tracking-widest"
                  >
                    Cancel
                  </button>
                  <a 
                    href="https://wa.me/2347032754611?text=Hello%20I%20need%20crypto%20support"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsModalOpen(false)}
                    className="glass-button bg-white text-black px-8 py-4 rounded-xl font-bold text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
                  >
                    Proceed to WhatsApp Support
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SupportWidget;
