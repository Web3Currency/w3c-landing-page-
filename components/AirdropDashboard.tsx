import React, { useState, useMemo } from 'react';
import { AIRDROPS, Airdrop, SOCIAL_LINKS } from '../constants';

const AirdropDashboard: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [search, setSearch] = useState<string>('');
  const WHATSAPP_LINK = SOCIAL_LINKS.whatsapp;

  const filteredAirdrops = useMemo(() => {
    return AIRDROPS.filter(item => {
      const matchesFilter = filter === 'All' || item.status === filter;
      const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                            item.chain.toLowerCase().includes(search.toLowerCase());
      return matchesFilter && matchesSearch;
    });
  }, [filter, search]);

  const stats = useMemo(() => {
    return {
      active: AIRDROPS.filter(a => a.status === 'Active').length,
      potential: AIRDROPS.filter(a => a.status === 'Potential').length,
      confirmed: AIRDROPS.filter(a => a.status === 'Confirmed').length,
    };
  }, []);

  return (
    <div className="w-full">
      {/* Dashboard Header Stats - Using Glass Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: 'Live Alpha', value: stats.active, sub: 'Active now' },
          { label: 'Potential', value: stats.potential, sub: 'Next wave' },
          { label: 'Confirmed', value: stats.confirmed, sub: 'Ready to claim' },
          { label: 'Total Tracked', value: AIRDROPS.length, sub: 'Verified list' },
        ].map((stat, i) => (
          <div key={i} className="glass rounded-3xl p-6 border-white/10 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-12 -mt-12 blur-2xl group-hover:bg-white/10 transition-all" />
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mb-1">{stat.label}</p>
            <p className="text-3xl font-sora font-bold text-white mb-1">{stat.value}</p>
            <p className="text-zinc-600 text-[10px] uppercase font-medium">{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Filters & Search - Glass Input and Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex gap-2 p-1.5 glass rounded-2xl border-white/10 w-fit">
          {['All', 'Active', 'Confirmed', 'Potential'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                filter === f ? 'bg-white text-black shadow-lg scale-[1.02]' : 'text-zinc-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        
        <div className="relative flex-1 md:max-w-md">
          <input
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass-input rounded-2xl py-4 px-14 focus:outline-none text-white text-sm tracking-wide"
          />
          <svg className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Airdrop Grid - High Fidelity Glass Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredAirdrops.map((project) => (
          <div 
            key={project.id}
            className="group glass-card rounded-[2.5rem] p-8 relative overflow-hidden flex flex-col"
          >
            {/* Glossy Reflection Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
            
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center font-bold text-xl text-white border-white/30 shadow-inner">
                  {project.name.charAt(0)}
                </div>
                <div className="text-left">
                  <h3 className="font-sora font-bold text-xl tracking-tight">{project.name}</h3>
                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">{project.chain}</span>
                </div>
              </div>
              <span className="px-3 py-1.5 glass rounded-full text-[9px] font-bold uppercase tracking-widest border-white/20 text-zinc-300">
                {project.status}
              </span>
            </div>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 font-medium">Potential</span>
                <span className="text-white font-bold font-sora">{project.rewardPotential}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-zinc-500 font-medium">Network Cost</span>
                <span className="font-bold text-white uppercase text-xs tracking-wider">{project.cost}</span>
              </div>
              <div className="w-full h-px bg-white/10" />
            </div>

            <div className="glass rounded-2xl p-5 border-white/5 mb-8 text-left bg-black/20 flex-grow relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-3 h-3 text-white/40" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500">Alpha Strategy</span>
              </div>
              <p className="text-[13px] text-zinc-300 leading-relaxed italic opacity-80">
                "{project.strategy}"
              </p>
            </div>

            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 glass-button rounded-2xl text-[11px] font-bold uppercase tracking-[0.2em] border-white/10 group-hover:border-white/40 active:scale-[0.98] relative z-10 flex items-center justify-center gap-2"
            >
              Access Roadmap Portal
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.246 2.248 3.484 5.232 3.484 8.412-.003 6.557-5.338 11.892-11.893 11.892-1.997-.001-3.951-.5-5.688-1.448l-6.309 1.656zm6.29-4.143c1.589.943 3.385 1.44 5.215 1.441 5.441 0 9.865-4.424 9.868-9.864 0-2.635-1.026-5.112-2.889-6.975s-4.34-2.887-6.974-2.887c-5.442 0-9.866 4.426-9.869 9.866 0 1.93.56 3.805 1.618 5.41l-.999 3.646 3.73-.978z"/></svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AirdropDashboard;