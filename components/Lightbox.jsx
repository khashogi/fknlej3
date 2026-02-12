'use client';
import { useState, useEffect, useCallback } from 'react';

export default function Lightbox({ product, initialIdx = 0, onClose }) {
  const [idx, setIdx] = useState(initialIdx);

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

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-[10000] bg-dark/[0.92] backdrop-blur-[12px] flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center text-white text-xl z-10 hover:rotate-90 transition-transform" onClick={onClose}>
        ×
      </button>
      <div className="max-w-[550px] w-[90%] relative" onClick={e => e.stopPropagation()}>
        <div className="w-full aspect-[3/4] bg-bg-alt rounded-sm overflow-hidden">
          <img src={product.images[idx]} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <button onClick={() => nav(-1)} className="absolute top-1/2 -translate-y-1/2 left-2 md:-left-5 w-9 h-9 bg-bg/90 rounded-full flex items-center justify-center border border-dark/[0.08] hover:bg-accent hover:border-accent transition-all text-dark hover:text-white">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4l-4 4 4 4"/></svg>
        </button>
        <button onClick={() => nav(1)} className="absolute top-1/2 -translate-y-1/2 right-2 md:-right-5 w-9 h-9 bg-bg/90 rounded-full flex items-center justify-center border border-dark/[0.08] hover:bg-accent hover:border-accent transition-all text-dark hover:text-white">
          <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"/></svg>
        </button>

        <div className="flex gap-1.5 justify-center mt-4">
          {product.images.map((_, i) => (
            <button key={i} onClick={() => setIdx(i)} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === idx ? 'bg-accent' : 'bg-white/20'}`} />
          ))}
        </div>
        <div className="text-center mt-3 text-white/50 text-[0.78rem] lowercase">
          <span className="text-white font-semibold">{product.name}</span> — {product.price}
        </div>
      </div>
    </div>
  );
}
