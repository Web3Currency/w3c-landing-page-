import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SupportWidget from './components/SupportWidget';
import CommunityImpact from './components/CommunityImpact';
import { SERVICES, STEPS, P2P_BENEFITS, AIRDROP_PILLARS, PI_VISION_POINTS, TRUST_PILLARS, MEMBERSHIP_CRITERIA, SOCIAL_LINKS, FAQ_ITEMS, BRAND } from './constants';

const App: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const WHATSAPP_LINK = SOCIAL_LINKS.whatsapp;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <div className="min-h-screen selection:bg-white/20 bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen w-screen overflow-hidden -mx-[calc((100vw-100%)/2)]">
        {/* Full-bleed Video Background with Fallback */}
        <div className="absolute inset-0 w-full h-full">
          {/* Fallback Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-black to-slate-950" />

          {/* Video Element */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            preload="metadata"
          >
            <source src="/Chart.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 pointer-events-none" />
        </div>

        {/* Content Overlay - Centered and Absolutely Positioned */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pt-20 md:pt-0">
          <div className="max-w-7xl mx-auto px-4 text-center w-full">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 md:px-6 md:py-2.5 rounded-full glass border-white/20 mb-6 md:mb-10 animate-float">
              <span className="w-1.5 h-1.5 md:w-2.5 md:h-2.5 bg-white rounded-full animate-pulse shadow-[0_0_10px_white]" />
              <span className="text-[9px] md:text-xs font-bold tracking-[0.3em] text-white uppercase">{BRAND.tagline}</span>
            </div>

            <h1 className="font-sora text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tighter mb-6 md:mb-10 leading-[1.2] md:leading-[0.95]">
              The Standard for <br className="hidden sm:block" /> <span className="gradient-text">Web3 Navigation.</span>
            </h1>

            <p className="max-w-3xl mx-auto text-zinc-300 text-base md:text-xl lg:text-2xl leading-relaxed mb-10 md:mb-16 font-medium px-2">
              <span className="text-white">{BRAND.name}</span> is a free WhatsApp-based learning community focused on making Web3 easy, safe, and educational, especially for beginners.
            </p>

            <div className="flex flex-col items-center gap-6 md:gap-10">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full max-w-sm sm:max-w-none">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto glass-button px-6 py-4 md:px-14 md:py-6 rounded-xl md:rounded-3xl font-bold text-base md:text-xl active:scale-95 shadow-2xl flex items-center justify-center gap-3"
                >
                  JOIN W3C COMMUNITY
                </a>
                <a
                  href="#ecosystem"
                  className="w-full sm:w-auto glass-button bg-white/5 border-white/10 text-white px-6 py-4 md:px-14 md:py-6 rounded-xl md:rounded-3xl font-bold text-base md:text-xl active:scale-95 flex items-center justify-center"
                >
                  Explore Ecosystem
                </a>
              </div>

              <div className="flex items-center gap-6 md:gap-8 py-3 px-8 md:py-4 md:px-10 glass rounded-full border-white/10">
                <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all hover:scale-125">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </a>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-all hover:scale-125">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2 11 13" />
                  </svg>
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-500 hover:text-white transition-all hover:scale-125">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>

              <p className="text-zinc-400 text-[11px] font-bold uppercase tracking-[0.3em] mb-12">
                Access is 100% Free • Operations coordinated directly via WhatsApp
              </p>
            </div>
          </div>
        </div>

        {/* Scroll Fade Effect - Gradient overlay that transitions section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/30 to-black pointer-events-none z-20" />
      </section>

      {/* Grid Background Sections */}
      <div className="bg-grid bg-grid-fade">
        {/* Operational Integrity */}
        <section className="py-24 md:py-40 relative bg-zinc-950/20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
              <div className="lg:col-span-1 text-left">
                <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">Built on <span className="text-zinc-600">Core Principles.</span></h2>
                <p className="text-zinc-500 text-lg md:text-xl leading-relaxed font-medium">
                  Web3 Currency is established on the principle that digital asset navigation requires more than just information. It requires a vetted framework for execution and consistent education.
                </p>
              </div>

              <div className="lg:col-span-2 space-y-4">
                <style>{`
                  @keyframes reveal-principle {
                    0% { opacity: 0; transform: translateX(-20px); filter: blur(10px); }
                    100% { opacity: 1; transform: translateX(0); filter: blur(0); }
                  }
                  .animate-principle {
                    animation: reveal-principle 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                  }
                `}</style>
                {TRUST_PILLARS.map((pillar, idx) => (
                  <div
                    key={idx}
                    className="animate-principle opacity-0 group flex items-center gap-6 p-6 md:p-8 glass rounded-[2rem] border-white/5 hover:bg-white/[0.05] transition-all hover:scale-[1.02] duration-500 cursor-default"
                    style={{ animationDelay: `${idx * 150}ms` }}
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center font-sora font-black text-zinc-600 group-hover:text-white group-hover:bg-white/10 transition-all border border-white/5">
                      0{idx + 1}
                    </div>
                    <h3 className="font-sora font-bold text-xl md:text-2xl tracking-tight text-zinc-400 group-hover:text-white transition-colors">
                      {pillar.title}
                    </h3>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Impact Section */}
        <CommunityImpact />

        {/* Ecosystem Framework */}
        <section id="ecosystem" className="py-16 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-24 gap-6 md:gap-12 text-left">
              <div className="max-w-2xl">
                <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 tracking-tight leading-tight">Strategic <br className="hidden md:block" /><span className="text-zinc-600">Ecosystem Structure.</span></h2>
                <p className="text-zinc-500 text-base md:text-xl leading-relaxed font-medium">
                  We provide a structured environment for navigating the digital asset landscape, combining a free learning community with functional utility applications.
                </p>
              </div>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button px-6 py-3.5 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3 group"
              >
                Join Community
                <svg className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-left">
              {SERVICES.map((service, idx) => (
                <div key={idx} className="group glass-card p-6 md:p-10 rounded-2xl md:rounded-[3rem] flex flex-col">
                  <div className="w-12 h-12 md:w-16 md:h-16 glass rounded-xl md:rounded-[1.5rem] flex items-center justify-center text-white mb-6 md:mb-10 group-hover:scale-110 transition-transform shadow-inner border-white/30">
                    {service.icon}
                  </div>
                  <span className="inline-block px-3 py-1 glass rounded-full text-zinc-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] mb-4 md:mb-6 border-white/10">
                    {service.tag}
                  </span>
                  <h3 className="font-sora font-bold text-lg md:text-2xl mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-xs md:text-sm font-medium opacity-80">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* P2P Liquidity */}
        <section id="liquidity" className="py-24 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              <div className="text-left">
                <h2 className="font-sora text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8 tracking-tight leading-tight">Simplified <span className="text-zinc-600">P2P Desk.</span></h2>
                <p className="text-zinc-500 text-lg md:text-xl mb-10 md:mb-12 leading-relaxed font-medium">
                  A streamlined alternative to traditional exchanges, allowing members to convert digital assets to local currency securely. All coordination is handled directly via WhatsApp for maximum clarity and safety.
                </p>

                {/* Trade in 4 Simple Steps */}
                <div className="glass-card rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 border-white/5 bg-zinc-950/30">
                  <h3 className="font-sora text-xl md:text-2xl font-bold mb-6 tracking-tight text-white">Trade in 4 Simple Steps</h3>
                  <div className="space-y-6 mb-8">
                    {[
                      { step: "01", desc: "Send a direct message to buy or sell any publicly tradable cryptocurrency." },
                      { step: "02", desc: "Specify the cryptocurrency and the exact amount for the trade." },
                      { step: "03", desc: "The current exchange rate, inclusive of the service fee, will be provided." },
                      { step: "04", desc: "Upon agreement, the trade is processed promptly, typically within 10-15 minutes." }
                    ].map((item, idx) => (
                      <div key={idx} className="flex gap-4 group items-center">
                        <div className="flex-shrink-0 w-10 h-10 glass rounded-xl flex items-center justify-center text-white/50 font-sora font-bold border-white/10 group-hover:text-white group-hover:border-white/30 transition-all">
                          {item.step}
                        </div>
                        <div>
                          <p className="text-zinc-400 text-sm md:text-base leading-relaxed group-hover:text-white transition-colors">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="glass inline-block px-5 py-3 rounded-2xl border-white/10 bg-black/40">
                    <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">Single Transaction Limit</p>
                    <p className="text-white font-sora font-bold text-lg">₦1,600 - ₦5,000,000</p>
                  </div>
                </div>
              </div>

              {/* P2P Desk Card */}
              <div className="relative group">
                <div className="rounded-[3rem] p-12 relative z-10 border-t border-l border-white/10 border-b-4 border-r-4 border-black/60 bg-[#1a1c1e] shadow-[inset_0_1px_2px_rgba(255,255,255,0.1),0_30px_60px_-12px_rgba(0,0,0,0.5)] flex flex-col items-center hover:scale-[1.02] transition-all duration-700">

                  {/* Metallic Screws */}
                  <div className="absolute top-8 left-8 w-2 h-2 rounded-full bg-zinc-700 shadow-inner border border-black/20" />
                  <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-zinc-700 shadow-inner border border-black/20" />
                  <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-zinc-700 shadow-inner border border-black/20" />
                  <div className="absolute bottom-8 right-8 w-2 h-2 rounded-full bg-zinc-700 shadow-inner border border-black/20" />

                  <h3 className="font-sora font-black text-3xl mb-12 tracking-[0.15em] uppercase text-white drop-shadow-lg">
                    W3C P2P DESK
                  </h3>

                  {/* Calculator Style Display */}
                  <div className="w-full mb-12 p-6 rounded-2xl bg-[#1c1f18] border-2 border-zinc-800/50 shadow-[inset_0_4px_12px_rgba(0,0,0,0.8),0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden group/screen">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                    <div className="flex flex-col items-center justify-center relative z-10">
                      <div className="flex items-center gap-3 mb-2 px-4 py-2 rounded-lg bg-black/40 border border-white/5">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_#22c55e]" />
                        <span className="text-[11px] font-bold text-green-500/90 uppercase tracking-[0.3em] font-mono">System Online</span>
                      </div>
                      <span className="text-[10px] font-bold text-zinc-600 uppercase tracking-[0.4em] font-mono">Liquidity Active</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8 w-full mb-12">
                    <a
                      href={SOCIAL_LINKS.p2p_buy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/btn h-20 rounded-2xl bg-gradient-to-b from-green-500 to-green-700 border-t border-white/20 shadow-[0_8px_0_0_#15803d,0_12px_24px_rgba(0,0,0,0.4)] active:shadow-[0_2px_0_0_#15803d,0_4px_8px_rgba(0,0,0,0.4)] active:translate-y-[6px] transition-all flex items-center justify-center"
                    >
                      <span className="font-sora font-black text-2xl text-white tracking-widest drop-shadow-md">BUY</span>
                    </a>
                    <a
                      href={SOCIAL_LINKS.p2p_sell}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group/btn h-20 rounded-2xl bg-gradient-to-b from-red-500 to-red-700 border-t border-white/20 shadow-[0_8px_0_0_#b91c1c,0_12px_24px_rgba(0,0,0,0.4)] active:shadow-[0_2px_0_0_#b91c1c,0_4px_8px_rgba(0,0,0,0.4)] active:translate-y-[6px] transition-all flex items-center justify-center"
                    >
                      <span className="font-sora font-black text-2xl text-white tracking-widest drop-shadow-md">SELL</span>
                    </a>
                  </div>

                  {/* P2P Feature Icons */}
                  <div className="flex justify-between w-full mb-8 px-4 border-t border-white/5 pt-8">
                    <div className="flex flex-col items-center gap-3 group/feat">
                      <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 transition-all border-white/10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Fast</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group/feat">
                      <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 transition-all border-white/10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Fair Rate</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 group/feat">
                      <div className="w-10 h-10 glass rounded-full flex items-center justify-center text-white/60 group-hover/feat:text-white group-hover/feat:scale-110 transition-all border-white/10">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-500 group-hover/feat:text-zinc-300">Verified</span>
                    </div>
                  </div>

                  <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-[0.2em]">Secure Trading Desk for Beginners and Experts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Alpha Stream */}
        <section id="alpha" className="py-16 md:py-40 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-28">
              <div className="inline-block px-5 py-2 glass rounded-full text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 md:mb-8 border-white/10">
                Airdrop Guidance
              </div>
              <p className="max-w-3xl mx-auto text-zinc-500 text-base md:text-xl font-medium leading-relaxed mb-8 md:mb-16 px-2">
                Guided participation in high-potential Web3 protocols. We provide the research and structured steps to help you navigate early opportunities safely.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-20">
              {AIRDROP_PILLARS.map((pillar, idx) => (
                <div key={idx} className="glass rounded-2xl md:rounded-[2rem] p-6 md:p-8 border-white/5 text-left group hover:border-white/20 transition-all">
                  <h4 className="font-sora font-bold text-white mb-3 md:mb-4 tracking-tight leading-snug text-base md:text-lg">{pillar.title}</h4>
                  <p className="text-zinc-500 text-xs md:text-sm leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center">
              <a href={SOCIAL_LINKS.testnet_group} target="_blank" rel="noopener noreferrer" className="glass-button px-8 py-4 md:px-12 md:py-5 rounded-2xl md:rounded-3xl font-bold text-base md:text-lg flex items-center gap-4 group">
                Access Testnet Group
              </a>
            </div>
          </div>
        </section>

        {/* Pi Vision Section */}
        <section id="pi-vision" className="py-16 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-24">
              <div className="inline-block px-5 py-2 glass rounded-full text-zinc-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 md:mb-8 border-white/10">
                Pi Network App
              </div>
              <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 tracking-tight leading-tight">Web3 Currency <br className="hidden md:block" />& <span className="text-zinc-600">W3CAI App</span></h2>
              <p className="text-zinc-500 text-base md:text-xl max-w-3xl mx-auto font-medium leading-relaxed px-2">
                A dedicated utility application on the Pi Network testnet designed for project discovery and community engagement. Not a trading or investment platform. The ecosystem is evolving and in active development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
              {PI_VISION_POINTS.map((point, idx) => (
                <div key={idx} className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] text-left group hover:bg-white/[0.03] transition-colors flex flex-col">
                  <div className="w-10 h-10 md:w-12 md:h-12 glass rounded-xl md:rounded-2xl flex items-center justify-center text-zinc-500 mb-6 md:mb-8 border-white/10">
                    <span className="font-sora font-bold text-sm md:text-base">0{idx + 1}</span>
                  </div>
                  <h3 className="font-sora font-bold text-xl md:text-2xl mb-4 md:mb-6 tracking-tight group-hover:text-white transition-colors">{point.title}</h3>
                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">{point.description}</p>
                </div>
              ))}
            </div>

            {/* Standalone Development Progress Dashboard */}
            <div className="glass-card p-6 md:p-16 rounded-2xl md:rounded-[3rem] text-left mb-24 md:mb-32 border-white/10 bg-gradient-to-br from-zinc-900/40 to-black relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] -mr-32 -mt-32 rounded-full" />

              <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center relative z-10">
                <div className="lg:w-1/3">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-800/50 border border-white/10 mb-6">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Live Tracking</span>
                  </div>
                  <h3 className="font-sora font-bold text-3xl md:text-4xl mb-4 md:mb-6 tracking-tight text-white">Development <br />Progress.</h3>
                  <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium mb-8">
                    Real-time tracking of our ecosystem components as they move through the standard project lifecycle from concept to mainnet.
                  </p>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <div className="p-3 md:p-4 glass rounded-xl md:rounded-2xl border-white/5">
                      <p className="text-zinc-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Active Phase</p>
                      <p className="text-white font-sora font-bold text-sm md:text-base">Testnet</p>
                    </div>
                    <div className="p-3 md:p-4 glass rounded-xl md:rounded-2xl border-white/5">
                      <p className="text-zinc-600 text-[8px] md:text-[10px] font-bold uppercase tracking-widest mb-1">Next Milestone</p>
                      <p className="text-white font-sora font-bold text-sm md:text-base">Mainnet</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 w-full space-y-8 md:space-y-10">
                  {[
                    { name: "W3C Token", stage: "Testnet", progress: 60, color: "from-zinc-500 to-white" },
                    { name: "Web3Currency App", stage: "Dev", progress: 40, color: "from-zinc-700 to-zinc-300" },
                    { name: "W3CAI Assistant", stage: "Dev", progress: 40, color: "from-zinc-700 to-zinc-300" }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3 md:space-y-4 group/item">
                      <div className="flex justify-between items-end">
                        <div className="flex items-center gap-2 md:gap-3">
                          <div className="w-6 h-6 md:w-8 md:h-8 glass rounded-lg flex items-center justify-center text-[8px] md:text-[10px] font-bold text-zinc-500 border-white/10 group-hover/item:text-white transition-colors">
                            {i + 1}
                          </div>
                          <span className="text-white font-bold text-base md:text-lg tracking-tight">{item.name}</span>
                        </div>
                        <div className="text-right">
                          <span className="text-zinc-500 text-[8px] md:text-[10px] font-bold uppercase tracking-[0.2em] block mb-1">Current Stage</span>
                          <span className="text-white font-sora font-bold text-xs md:text-sm">{item.stage}</span>
                        </div>
                      </div>

                      <div className="relative h-2 md:h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/5 p-[1px] md:p-[2px]">
                        <div
                          className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(255,255,255,0.1)]`}
                          style={{ width: `${item.progress}%` }}
                        />
                      </div>

                      <div className="flex justify-between px-1">
                        {["Concept", "Dev", "Testnet", "Mainnet"].map((stage, sIdx) => {
                          const stages = ["Concept", "Dev", "Testnet", "Mainnet"];
                          const currentIdx = stages.indexOf(item.stage);
                          const isActive = sIdx <= currentIdx;
                          return (
                            <div key={stage} className="flex flex-col items-center gap-1.5 md:gap-2">
                              <div className={`w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-white scale-125 shadow-[0_0_8px_white]' : 'bg-zinc-800'}`} />
                              <span className={`text-[7px] md:text-[9px] font-bold uppercase tracking-tighter transition-colors duration-500 ${isActive ? 'text-zinc-300' : 'text-zinc-700'}`}>
                                {stage}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Live Utilities on Pi Browser */}
            <div className="text-center mb-12 md:mb-16">
              <h3 className="font-sora text-2xl md:text-4xl font-bold mb-4 md:mb-6 tracking-tight">Live Utilities on <span className="text-zinc-600">Pi Browser.</span></h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-10">
              {/* Utility 1: Web3Currency App */}
              <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] flex flex-col h-full text-left group hover:bg-white/[0.02] transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border-white/20">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                </div>
                <h4 className="font-sora font-bold text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-white transition-colors">Web3Currency App</h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 flex-grow font-medium">
                  A utility app built on the Pi Network testnet. It features a comprehensive W3C Explorer for discovering Pi tokens and a W3C Quest for community engagement. Must be accessed through the Pi Browser. This is a utility tool, not an investment platform.
                </p>
                <a
                  href="https://webcurrency3064.pinet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3"
                >
                  Open Web3Currency App
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Utility 2: W3C AI */}
              <div className="glass-card p-6 md:p-10 rounded-2xl md:rounded-[2.5rem] flex flex-col h-full text-left group hover:bg-white/[0.02] transition-colors">
                <div className="w-12 h-12 md:w-14 md:h-14 glass rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-6 md:mb-8 border-white/20">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-sora font-bold text-xl md:text-2xl mb-3 md:mb-4 group-hover:text-white transition-colors">W3C AI</h4>
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-8 md:mb-10 flex-grow font-medium">
                  A fully operational functional assistant inside the Pi ecosystem. Ask questions specific to the Web3 Currency community, the Web3Currency app, W3C token utility, and our ecosystem structure. Must be accessed through the Pi Browser.
                </p>
                <a
                  href="https://wcaicbafeac5245.pinet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button w-full py-3.5 md:py-4 rounded-xl md:rounded-2xl font-bold text-xs md:text-sm tracking-widest uppercase flex items-center justify-center gap-3"
                >
                  Open W3C AI
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center">
              <p className="text-zinc-600 text-[11px] font-bold uppercase tracking-[0.2em]">
                Accessible via Pi Browser. Install Pi Browser to access these utilities.
              </p>
            </div>
          </div>
        </section>

        {/* Join Process Section */}
        <section id="process" className="py-16 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-24">
              <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 tracking-tight leading-tight">How to <span className="text-zinc-600">Start.</span></h2>
              <p className="text-zinc-500 text-base md:text-xl max-w-2xl mx-auto font-medium px-2">A simplified onboarding journey into our free learning community.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {STEPS.map((step, idx) => (
                <div key={idx} className="glass-card p-8 md:p-10 rounded-2xl md:rounded-[2.5rem] h-full flex flex-col items-start text-left">
                  <span className="text-4xl md:text-5xl font-sora font-black text-white/10 mb-6 md:mb-8">{step.number}</span>
                  <h3 className="font-sora font-bold text-lg md:text-xl mb-3 md:mb-4 tracking-tight">{step.title}</h3>
                  <span className="text-zinc-500 text-xs md:text-sm leading-relaxed font-medium">{step.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-40 relative">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-12 md:mb-20">
              <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 tracking-tight leading-tight">Framework <span className="text-zinc-600">Q&A.</span></h2>
              <p className="text-zinc-500 text-base md:text-xl font-medium leading-relaxed px-2">Addressing common inquiries regarding community access and operational standards.</p>
            </div>
            <div className="space-y-3 md:space-y-4">
              {FAQ_ITEMS.map((faq, idx) => (
                <div key={idx} className="glass rounded-2xl md:rounded-[2rem] border-white/5 overflow-hidden transition-all duration-500">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/[0.02] transition-colors group"
                  >
                    <span className="font-sora font-bold text-lg md:text-2xl tracking-tight text-white/90 group-hover:text-white">{faq.question}</span>
                    <div className={`w-8 h-8 md:w-10 md:h-10 glass rounded-full flex items-center justify-center transition-transform duration-500 border-white/10 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      <svg className="w-4 h-4 md:w-5 md:h-5 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={openFaq === idx ? "M20 12H4" : "M12 4v16m8-8H4"} />
                      </svg>
                    </div>
                  </button>
                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-[500px] opacity-100 py-6 px-6 md:py-8 md:px-8 border-t border-white/5 bg-white/[0.01]' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <p className="text-zinc-500 text-base md:text-lg leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Criteria */}
        <section className="py-24 md:py-40 relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-left mb-12 md:mb-20 max-w-3xl">
              <h2 className="font-sora text-3xl md:text-6xl font-bold mb-4 md:mb-8 tracking-tight">Strategic <span className="text-zinc-600">Alignment.</span></h2>
              <p className="text-zinc-500 text-base md:text-xl leading-relaxed font-medium px-1">
                Web3 Currency is designed for individuals who value education, technical discipline, and long-term development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="glass-card p-8 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-white/[0.01]">
                <h3 className="font-sora font-bold text-xl md:text-2xl mb-6 md:mb-10 flex items-center gap-4 text-green-500">This Community Is For</h3>
                <ul className="space-y-4 md:space-y-6">
                  {MEMBERSHIP_CRITERIA.isFor.map((item, idx) => (
                    <li key={idx} className="flex gap-4 md:gap-5 text-zinc-400 font-medium leading-relaxed text-sm md:text-base">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/20 mt-2 md:mt-2.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="glass-card p-8 md:p-12 rounded-2xl md:rounded-[3.5rem] bg-black">
                <h3 className="font-sora font-bold text-xl md:text-2xl mb-6 md:mb-10 flex items-center gap-4 text-red-500">This Community Is Not For</h3>
                <ul className="space-y-4 md:space-y-6">
                  {MEMBERSHIP_CRITERIA.isNotFor.map((item, idx) => (
                    <li key={idx} className="flex gap-4 md:gap-5 text-zinc-500 font-medium leading-relaxed italic opacity-70 text-sm md:text-base">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-white/10 mt-2 md:mt-2.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-40">
          <div className="max-w-7xl mx-auto px-4">
            <div className="glass-card rounded-[2rem] md:rounded-[4rem] p-10 md:p-32 text-center">
              <h2 className="font-sora text-3xl md:text-6xl lg:text-8xl font-bold mb-8 md:mb-12 tracking-tighter">Start <span className="text-zinc-600">Learning.</span></h2>
              <p className="max-w-2xl mx-auto text-zinc-500 text-base md:text-lg font-medium leading-relaxed mb-10 md:mb-12 relative z-10 px-2">
                Join a free community designed for the future of Web3 navigation. Learn consistently, explore the Pi app, and participate responsibly.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 md:gap-8">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto glass-button bg-white text-black px-10 py-5 md:px-16 md:py-7 rounded-2xl md:rounded-3xl font-bold text-lg md:text-2xl flex items-center justify-center gap-4">
                  Join Free Community
                </a>
                <p className="text-zinc-600 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em]">Direct WhatsApp Coordination Hub</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-10 left-10 z-[100] w-14 h-14 glass-button rounded-full flex items-center justify-center transition-all duration-500 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
          } border-white/20 active:scale-90 hover:scale-110 shadow-2xl`}
        aria-label="Back to top"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Support Widget */}
      <SupportWidget />

      {/* Footer */}
      <footer className="py-20 md:py-32 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-20 mb-16 md:mb-24 text-left">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-8 md:mb-10">
                <img
                  src="/Logo2.png"
                  alt={`${BRAND.name} Logo`}
                  className="w-10 h-10 md:w-14 md:h-14 object-contain"
                />
                <span className="font-sora font-bold text-2xl md:text-3xl tracking-tighter">{BRAND.name}</span>
              </div>
              <p className="text-zinc-500 max-w-sm mb-4 leading-relaxed text-base md:text-lg font-medium">{BRAND.positioning}</p>
              <p className="text-zinc-600 text-xs md:text-sm mb-8 md:mb-12 font-medium italic">
                Founded by <a href={BRAND.founder_link} target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline underline-offset-4 decoration-zinc-800 hover:decoration-white">{BRAND.founder}</a>
              </p>

              <div className="flex items-center gap-5 md:gap-6 mt-8 md:mt-12">
                <a href={SOCIAL_LINKS.x} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-zinc-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m22 2-7 20-4-9-9-4Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M22 2 11 13" />
                  </svg>
                </a>
                <a href={`mailto:${SOCIAL_LINKS.email}`} className="text-zinc-600 hover:text-white transition-all">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 md:mb-8 tracking-widest uppercase text-[10px] md:text-xs">Navigation</h4>
              <ul className="space-y-4 md:space-y-6 text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
                <li><a href="#alpha" className="hover:text-white transition-colors">Airdrops</a></li>
                <li><a href="#liquidity" className="hover:text-white transition-colors">P2P Desk</a></li>
                <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Direct Access</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6 md:mb-8 tracking-widest uppercase text-[10px] md:text-xs">Ecosystem</h4>
              <ul className="space-y-4 md:space-y-6 text-zinc-500 text-[10px] md:text-sm font-bold uppercase tracking-widest">
                <li><a href="#pi-vision" className="hover:text-white transition-colors">Pi App</a></li>
                <li><a href="#ecosystem" className="hover:text-white transition-colors">Framework</a></li>
                <li><a href="#process" className="hover:text-white transition-colors">Onboarding</a></li>
              </ul>
            </div>
          </div>
          <div className="mb-12 md:mb-16 py-8 md:py-10 border-t border-white/5 text-left text-zinc-600 text-xs md:text-sm leading-relaxed max-w-4xl font-medium">
            <span className="text-zinc-400 font-bold uppercase tracking-widest text-[9px] md:text-[10px] block mb-3">Professional Disclaimer</span>
            Web3 Currency operates exclusively as an educational framework. All participation is at the member's discretion. We do not provide financial or investment advice. The Web3Currency app is currently in testnet and is not a trading platform.
          </div>
          <div className="pt-12 md:pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10 text-zinc-600 text-[9px] md:text-[10px] font-bold tracking-[0.4em] uppercase">
            <div className="text-center md:text-left">
              <p>© 2025 {BRAND.name}.</p>
              <p className="mt-2 text-zinc-700 normal-case font-medium tracking-normal">Built with love for the community</p>
            </div>
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="flex gap-8 md:gap-12">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
              </div>
              <div className="border-l border-zinc-700 pl-8 md:pl-12">
                <a href="#" className="hover:text-white transition-colors">Resources</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
