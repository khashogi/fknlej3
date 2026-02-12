'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Lightbox from '@/components/Lightbox';
import JamCard from '@/components/JamCard';
import EmailCTA from '@/components/EmailCTA';
import RevealOnScroll from '@/components/RevealOnScroll';
import { getFeatured, getBestsellers, jams, philanthropy } from '@/lib/data';

export default function Home() {
  const [lbProduct, setLbProduct] = useState(null);
  const [lbIdx, setLbIdx] = useState(0);
  const heroRef = useRef(null);
  const featured = getFeatured();
  const bestsellers = getBestsellers().slice(0, 3);

  useEffect(() => {
    const handler = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      heroRef.current.querySelectorAll('[data-speed]').forEach(el => {
        el.style.transform = `translateY(${y * parseFloat(el.dataset.speed)}px)`;
      });
    };
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const openLb = (p, idx) => { setLbProduct(p); setLbIdx(idx); };

  return (
    <>
      {/* HERO */}
      <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-24 pb-16">
        <div className="absolute top-[8%] right-[-4%] w-[clamp(180px,28vw,380px)] h-[clamp(180px,28vw,380px)] rounded-full border border-dark/[0.08] opacity-30 pointer-events-none" data-speed="0.03" />
        <div className="absolute bottom-[12%] left-[-6%] w-[clamp(180px,28vw,380px)] h-[clamp(180px,28vw,380px)] rounded-full border border-dark/[0.08] opacity-30 pointer-events-none" data-speed="-0.02" />
        <div className="absolute top-[48%] left-[-8%] font-display text-[clamp(5rem,14vw,12rem)] font-extrabold text-dark opacity-[0.02] whitespace-nowrap tracking-tight pointer-events-none select-none" data-speed="0.05">fknlej</div>
        <div className="absolute top-[18%] right-[18%] w-px h-[clamp(80px,15vh,160px)] bg-dark/[0.12] pointer-events-none" data-speed="-0.03" />

        <div className="text-center max-w-[700px] relative z-[2]">
          <div className="inline-flex items-center gap-3 text-[0.66rem] font-semibold tracking-[0.15em] text-text-light mb-7 animate-fade-up lowercase" style={{ animationDelay: '0.8s' }}>
            <span className="w-[18px] h-px bg-dark/[0.12]" />est. 2026 — for the relentless<span className="w-[18px] h-px bg-dark/[0.12]" />
          </div>
          <h1 className="font-display text-[clamp(3rem,10vw,6.5rem)] font-extrabold tracking-[-0.05em] leading-[0.88] text-dark mb-5 animate-fade-up lowercase" style={{ animationDelay: '1s', fontStretch: 'normal' }}>
            fknlej<span className="text-accent">.</span>
          </h1>
          <p className="text-[clamp(0.88rem,1.5vw,1rem)] text-text-light max-w-[420px] mx-auto mb-8 leading-relaxed animate-fade-up lowercase" style={{ animationDelay: '1.2s' }}>
            clothing for those who show up when nobody&apos;s watching. for the ones who grind, build, survive, and become unbreakable.
          </p>
          <div className="flex gap-3 justify-center flex-wrap animate-fade-up" style={{ animationDelay: '1.4s' }}>
            <Link href="/catalog" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-wide py-3 px-7 bg-dark text-white hover:bg-accent hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(196,98,58,0.15)] transition-all lowercase">
              shop the drop
              <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
            </Link>
            <Link href="/about" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-wide py-3 px-7 text-dark border-[1.5px] border-dark/[0.12] hover:border-dark hover:-translate-y-0.5 transition-all lowercase">
              our story
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up" style={{ animationDelay: '1.8s' }}>
          <span className="text-[0.52rem] tracking-[0.2em] text-text-light lowercase">scroll</span>
          <div className="w-px h-9 bg-gradient-to-b from-text-light to-transparent animate-scroll-pulse" />
        </div>
      </section>

      {/* FEATURED */}
      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <RevealOnScroll>
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">new arrivals</div>
          <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-2 lowercase">just dropped</h2>
          <p className="text-[0.88rem] text-text-light max-w-[420px] leading-relaxed mb-8 lowercase">the latest from the legend factory.</p>
        </RevealOnScroll>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {featured.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 40}>
              <ProductCard product={p} onOpenLightbox={openLb} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="text-center mt-8">
          <Link href="/catalog" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-wide py-3 px-7 text-dark border-[1.5px] border-dark/[0.12] hover:border-dark hover:-translate-y-0.5 transition-all lowercase">
            view full catalog
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </RevealOnScroll>
      </section>

      {/* ETHOS */}
      <section className="py-[clamp(4.5rem,11vw,8rem)] px-5 md:px-10 relative">
        <div className="absolute top-[clamp(1rem,3vw,2.5rem)] left-[clamp(0.5rem,2vw,2rem)] font-display text-[clamp(5rem,14vw,10rem)] font-extrabold text-accent opacity-[0.05] leading-none select-none">&ldquo;</div>
        <RevealOnScroll className="max-w-[680px] relative z-[1]">
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">the ethos</div>
          <blockquote className="font-display text-[clamp(1.2rem,2.8vw,2rem)] font-bold tracking-tight leading-snug text-dark mb-4 lowercase">
            a fknlej isn&apos;t someone who never fell. it&apos;s someone who <span className="text-accent">got back up every single time</span> — and made the world watch.
          </blockquote>
          <div className="flex items-center gap-2 text-[0.7rem] text-text-light lowercase">
            <span className="w-[18px] h-px bg-accent" />the fknlej manifesto
          </div>
        </RevealOnScroll>
      </section>

      {/* BEST SELLERS */}
      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10 bg-bg-alt">
        <RevealOnScroll>
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">best sellers</div>
          <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-2 lowercase">most wanted</h2>
          <p className="text-[0.88rem] text-text-light max-w-[420px] leading-relaxed mb-8 lowercase">the pieces legends reach for first.</p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {bestsellers.map((p, i) => (
            <RevealOnScroll key={p.slug} delay={i * 60}>
              <div className="font-display text-[0.52rem] font-bold tracking-[0.15em] text-text-light mb-2 opacity-30 lowercase">0{i + 1}</div>
              <ProductCard product={p} onOpenLightbox={openLb} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="text-center mt-8">
          <Link href="/bestsellers" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-wide py-3 px-7 text-dark border-[1.5px] border-dark/[0.12] hover:border-dark hover:-translate-y-0.5 transition-all lowercase">
            see all best sellers
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </RevealOnScroll>
      </section>

      {/* JAMS */}
      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <RevealOnScroll>
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">jams</div>
          <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-2 lowercase">the soundtrack</h2>
          <p className="text-[0.88rem] text-text-light max-w-[420px] leading-relaxed mb-8 lowercase">every legend has a playlist. these are ours.</p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {jams.map((j, i) => (
            <RevealOnScroll key={j.title} delay={i * 50}>
              <JamCard jam={j} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-7">
          <a href="https://open.spotify.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold text-accent hover:gap-3 transition-all lowercase">
            find your jam on spotify
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </RevealOnScroll>
      </section>

      {/* GIVING BACK */}
      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10 bg-bg-alt">
        <RevealOnScroll>
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">giving back</div>
          <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-2 lowercase">legends lift others</h2>
          <p className="text-[0.88rem] text-text-light max-w-[420px] leading-relaxed mb-8 lowercase">every purchase fuels these initiatives. because being a legend means building more legends.</p>
        </RevealOnScroll>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {philanthropy.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 50}>
              <div className="bg-bg p-6 rounded-sm border border-dark/[0.08] hover:border-accent hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="text-xl mb-2">{p.icon}</div>
                <div className="font-display text-[0.88rem] font-bold text-dark mb-1.5 lowercase">{p.title}</div>
                <div className="text-[0.78rem] text-text-light leading-relaxed lowercase">{p.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-7">
          <Link href="/philanthropy" className="inline-flex items-center gap-2 text-[0.76rem] font-semibold text-accent hover:gap-3 transition-all lowercase">
            learn more about our initiatives
            <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </Link>
        </RevealOnScroll>
      </section>

      <EmailCTA />

      {lbProduct && <Lightbox product={lbProduct} initialIdx={lbIdx} onClose={() => setLbProduct(null)} />}
    </>
  );
}
