import React, { useState, useRef, useEffect } from 'react';
import { askNavigator } from '../services/geminiService';
import { BotState } from '../types';

const W3CNavigator: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [state, setState] = useState<BotState>(BotState.IDLE);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || state !== BotState.IDLE) return;

    setState(BotState.THINKING);
    setResponse(null);
    
    const result = await askNavigator(input);
    setResponse(result);
    setState(BotState.RESPONDING);
    setInput('');
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [response]);

  return (
    <div className="max-w-3xl mx-auto mt-24 px-4">
      <div className="glass-card rounded-[3rem] p-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        
        <div className="flex items-center gap-5 mb-8 relative z-10">
          <div className="w-14 h-14 glass rounded-2xl flex items-center justify-center animate-pulse border-white/30 shadow-inner">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="font-sora font-bold text-2xl tracking-tight">W3C Navigator</h3>
            <p className="text-zinc-500 text-sm font-medium uppercase tracking-widest">Neural Advisory Hub</p>
          </div>
        </div>

        <div className="min-h-[160px] mb-8 space-y-6 relative z-10">
          {state === BotState.IDLE && !response && (
            <p className="text-zinc-500 italic text-left text-lg leading-relaxed opacity-60">
              "How can W3C help me secure institutional-grade airdrop alpha?"
            </p>
          )}
          
          {state === BotState.THINKING && (
            <div className="flex gap-3 justify-start items-center h-12">
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce" />
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:0.2s]" />
              <div className="w-2.5 h-2.5 bg-white rounded-full animate-bounce [animation-delay:0.4s]" />
            </div>
          )}

          {response && (
            <div className="glass rounded-3xl p-8 border-white/10 animate-in fade-in slide-in-from-bottom-4 duration-700 text-left bg-white/5">
              <p className="text-zinc-100 text-lg leading-relaxed font-medium">
                {response}
              </p>
            </div>
          )}
          <div ref={scrollRef} />
        </div>

        <form onSubmit={handleAsk} className="relative z-10">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Query the Navigator..."
            className="w-full glass-input rounded-2xl py-5 px-8 focus:outline-none text-white text-base tracking-wide pr-20"
          />
          <button 
            type="submit"
            disabled={state === BotState.THINKING}
            className="absolute right-2.5 top-2.5 bottom-2.5 glass-button px-5 rounded-xl transition-all border-white/20 active:scale-90 flex items-center justify-center"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default W3CNavigator;