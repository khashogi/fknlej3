'use client';
import { useEffect, useRef } from 'react';

export default function PageHero({ eyebrow, title, subtitle, bgText }) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = () => {
      if (!ref.current) return;
      const y = window.scrollY;
      ref.current.querySelectorAll('[data-speed]').forEach(el => {
        const speed = parseFloat(el.dataset.speed) || 0.02;
        el.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <div ref={ref} className="min-h-[45vh] flex flex-col justify-end px-5 md:px-10 pt-[clamp(8rem,14vw,11rem)] pb-[clamp(3rem,5vw,4.5rem)] relative overflow-hidden">
      <div className="absolute inset-0 bg-bg-alt" />

      {/* Parallax elements */}
      <div className="absolute top-[5%] right-[8%] w-[clamp(180px,28vw,380px)] h-[clamp(180px,28vw,380px)] rounded-full border border-dark/[0.08] opacity-30 pointer-events-none" data-speed="0.03" />
      <div className="absolute bottom-[8%] left-[-4%] font-display text-[clamp(5rem,14vw,12rem)] font-extrabold text-dark opacity-[0.02] whitespace-nowrap tracking-tight pointer-events-none lowercase" data-speed="0.04">
        {bgText || title}
      </div>
      <div className="absolute top-[22%] left-[18%] w-1.5 h-1.5 rounded-full bg-accent opacity-25 pointer-events-none" data-speed="-0.04" />
      <div className="absolute top-[60%] right-[10%] w-px h-[clamp(80px,12vh,140px)] bg-dark/[0.1] pointer-events-none" data-speed="-0.02" />

      <div className="relative z-[2] max-w-[650px]">
        <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">{eyebrow}</div>
        <h1 className="font-display text-[clamp(2.2rem,6vw,4.5rem)] font-extrabold tracking-tight leading-[0.95] text-dark mb-3 lowercase">
          {title}<span className="text-accent">.</span>
        </h1>
        {subtitle && (
          <p className="text-[clamp(0.88rem,1.4vw,1rem)] text-text-light leading-relaxed max-w-[480px] lowercase">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
