'use client';
import { useState, useEffect, useCallback, useRef } from 'react';

export default function Lightbox({ product, initialIdx = 0, onClose }) {
  const [idx, setIdx] = useState(initialIdx);
  const touchRef = useRef({ startX: 0 });

  const nav = useCallback((dir) => {
    if (!product) return;
    setIdx(prev => {
      let next = prev + dir;
      if (next < 0) next = product.images.length - 1;
      if (next >= product.images.length) next = 0;
      return next;
    });
  }, [product]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose?.();
      if (e.key === 'ArrowLeft') nav(-1);
      if (e.key === 'ArrowRight') nav(1);
    };
    document.addEventListener('keydown', handler);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handler);
      document.body.style.overflow = '';
    };
  }, [nav, onClose]);

  useEffect(() => { setIdx(initialIdx); }, [initialIdx]);

  // Swipe handlers
  const onTouchStart = (e) => { touchRef.current.startX = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    const delta = e.changedTouches[0].clientX - touchRef.current.startX;
    if (Math.abs(delta) > 50) {
      if (delta < 0) nav(1);
      else nav(-1);
    }
  };

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-white flex items-center justify-center" onClick={onClose}>
      {/* Close button — larger, visible */}
      <button
        className="absolute top-5 right-5 z-10 w-10 h-10 flex items-center justify-center text-dark/60 hover:text-dark transition-colors rounded-full hover:bg-dark/[0.05]"
        onClick={onClose}
        aria-label="close"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>

      <div
        className="max-w-[550px] w-[92%] relative"
        onClick={e => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="w-full aspect-[3/4] bg-bg-alt rounded-sm overflow-hidden">
          <img
            src={product.images[idx]}
            alt={product.name}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* Nav arrows */}
        <button onClick={() => nav(-1)} className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-5 w-9 h-9 bg-white rounded-full flex items-center justify-center border border-dark/[0.1] hover:bg-accent hover:border-accent transition-all text-dark hover:text-white shadow-sm">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4l-4 4 4 4"/></svg>
        </button>
        <button onClick={() => nav(1)} className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-5 w-9 h-9 bg-white rounded-full flex items-center justify-center border border-dark/[0.1] hover:bg-accent hover:border-accent transition-all text-dark hover:text-white shadow-sm">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"/></svg>
        </button>

        {/* Dots */}
        <div className="flex gap-1.5 justify-center mt-4">
          {product.images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-[6px] h-[6px] rounded-full transition-all ${i === idx ? 'bg-accent scale-110' : 'bg-dark/15'}`} />
          ))}
        </div>

        {/* Product info */}
        <div className="text-center mt-3 text-text-light text-[0.78rem] lowercase">
          <span className="text-dark font-semibold">{product.name}</span> — {product.price}
        </div>
      </div>
    </div>
  );
}
