import React, { useEffect, useRef, useState } from 'react';

interface MetricProps {
  target: number;
  label: string;
  suffix?: string;
  tooltip: string;
}

const AnimatedCounter: React.FC<MetricProps> = ({ target, label, suffix = "+", tooltip }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true);
          hasAnimated.current = true;
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // 2 seconds

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing function: easeOutExpo
      const easedProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      setCount(Math.floor(easedProgress * target));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, target]);

  return (
    <div ref={elementRef} className="group relative flex flex-col items-center p-6 md:p-8 glass rounded-2xl md:rounded-[2.5rem] border-white/5 bg-zinc-950/20 hover:bg-zinc-900/30 transition-colors duration-500 cursor-help">
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-3 bg-black/90 backdrop-blur-xl border border-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center shadow-2xl">
        <p className="text-[10px] leading-relaxed text-zinc-300 font-medium">{tooltip}</p>
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black/90" />
      </div>

      <div className="font-sora font-bold text-4xl md:text-6xl mb-3 md:mb-4 tracking-tighter text-white">
        {count}{suffix}
      </div>
      <div className="text-zinc-500 text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-center">
        {label}
      </div>
    </div>
  );
};

const CommunityImpact: React.FC = () => {
  return (
    <section id="impact" className="py-16 md:py-40 relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12 md:mb-24">
          <h2 className="font-sora text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-8 tracking-tight leading-tight">
            Community <span className="text-zinc-600">Impact.</span>
          </h2>
          <p className="text-zinc-500 text-base md:text-xl max-w-2xl mx-auto font-medium leading-relaxed px-2">
            Building confidence and navigating Web3 together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-5xl mx-auto">
          <AnimatedCounter 
            target={200} 
            label="Community Members" 
            tooltip="Verified members active in our WhatsApp learning community."
          />
          <AnimatedCounter 
            target={50} 
            label="Web3 Projects Explored" 
            tooltip="Protocols and projects researched and shared with the community."
          />
          <AnimatedCounter 
            target={100} 
            label="Users Supported" 
            tooltip="Individuals assisted with technical queries and Web3 navigation."
          />
        </div>
      </div>
    </section>
  );
};

export default CommunityImpact;
