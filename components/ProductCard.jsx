'use client';
import { useState, useCallback } from 'react';

export default function ProductCard({ product, onOpenLightbox }) {
  const [imgIdx, setImgIdx] = useState(0);

  const nav = useCallback((dir, e) => {
    e.stopPropagation();
    setImgIdx(prev => {
      let next = prev + dir;
      if (next < 0) next = product.images.length - 1;
      if (next >= product.images.length) next = 0;
      return next;
    });
  }, [product.images.length]);

  return (
    <div className="group relative cursor-pointer" onClick={() => onOpenLightbox?.(product, imgIdx)}>
      <div className="relative aspect-[3/4] bg-bg-alt overflow-hidden rounded-sm">
        <img
          src={product.images[imgIdx]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
          loading="lazy"
        />
        {product.tag && (
          <span className="absolute top-3 left-3 z-[2] text-[0.52rem] font-semibold tracking-wider text-white bg-accent px-2 py-0.5 rounded-sm lowercase">
            {product.tag}
          </span>
        )}

        {/* Arrows */}
        <button onClick={(e) => nav(-1, e)} className="absolute left-2 top-1/2 -translate-y-1/2 z-[3] w-7 h-7 bg-bg/[0.9] backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-dark/[0.08] hover:bg-dark hover:text-white text-dark">
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4l-4 4 4 4"/></svg>
        </button>
        <button onClick={(e) => nav(1, e)} className="absolute right-2 top-1/2 -translate-y-1/2 z-[3] w-7 h-7 bg-bg/[0.9] backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-dark/[0.08] hover:bg-dark hover:text-white text-dark">
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-[2] opacity-0 group-hover:opacity-100 transition-opacity">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
              className={`w-[5px] h-[5px] rounded-full transition-colors ${i === imgIdx ? 'bg-accent' : 'bg-dark/20'}`}
            />
          ))}
        </div>

        {/* Quick View Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-bg/95 to-transparent opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <button
            onClick={(e) => { e.stopPropagation(); onOpenLightbox?.(product, imgIdx); }}
            className="w-full py-2 text-[0.65rem] font-semibold tracking-wide text-white bg-dark rounded-sm hover:bg-accent transition-colors lowercase"
          >
            quick view →
          </button>
        </div>
      </div>
      <div className="py-3 flex justify-between items-baseline">
        <span className="text-[0.78rem] font-medium text-dark lowercase">{product.name}</span>
        <span className="text-[0.75rem] font-medium text-text-light">{product.price}</span>
      </div>
    </div>
  );
}
