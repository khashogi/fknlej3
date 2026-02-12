'use client';
import { useState } from 'react';
import RevealOnScroll from './RevealOnScroll';

export default function EmailCTA() {
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;

    // TODO: Connect to Resend API
    // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });

    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <div className="py-[clamp(3.5rem,8vw,6rem)] px-5 md:px-10 bg-dark text-white text-center relative overflow-hidden lowercase">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[clamp(4rem,13vw,10rem)] font-extrabold tracking-tight text-white/[0.015] whitespace-nowrap pointer-events-none select-none">
        fknlej
      </div>
      <RevealOnScroll>
        <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2">stay in the loop</div>
      </RevealOnScroll>
      <RevealOnScroll delay={50}>
        <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.6rem)] font-extrabold tracking-tight leading-tight mb-2 relative z-[1]">
          become a fknlej<span className="text-accent">.</span>
        </h2>
      </RevealOnScroll>
      <RevealOnScroll delay={100}>
        <p className="text-[0.82rem] text-white/[0.35] mb-7 relative z-[1]">first access to drops and legend stories. no spam. ever.</p>
      </RevealOnScroll>
      <RevealOnScroll delay={150}>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-[400px] mx-auto relative z-[1] rounded-sm overflow-hidden">
          <input
            type="email"
            name="email"
            placeholder="your email"
            required
            className="flex-1 font-body text-[0.8rem] py-3 px-4 bg-white/[0.06] border border-white/10 sm:border-r-0 text-white outline-none lowercase placeholder:text-white/[0.22] focus:border-accent transition-colors"
          />
          <button type="submit" className="text-[0.7rem] font-semibold tracking-wide py-3 px-5 bg-accent text-white border border-accent hover:bg-accent-hover transition-all lowercase">
            {sent ? 'legend ✓' : 'join'}
          </button>
        </form>
      </RevealOnScroll>
    </div>
  );
}
