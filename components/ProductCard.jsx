'use client';
import { useState, useCallback, useRef } from 'react';

export default function ProductCard({ product, onOpenLightbox }) {
  const [imgIdx, setImgIdx] = useState(0);
  const touchRef = useRef({ startX: 0, startY: 0, isDragging: false });

  const nav = useCallback((dir, e) => {
    if (e) e.stopPropagation();
    setImgIdx(prev => {
      let next = prev + dir;
      if (next < 0) next = product.images.length - 1;
      if (next >= product.images.length) next = 0;
      return next;
    });
  }, [product.images.length]);

  // Touch/swipe handlers
  const onTouchStart = (e) => {
    touchRef.current.startX = e.touches[0].clientX;
    touchRef.current.startY = e.touches[0].clientY;
    touchRef.current.isDragging = true;
  };

  const onTouchEnd = (e) => {
    if (!touchRef.current.isDragging) return;
    const deltaX = e.changedTouches[0].clientX - touchRef.current.startX;
    const deltaY = e.changedTouches[0].clientY - touchRef.current.startY;
    touchRef.current.isDragging = false;

    // Only swipe if horizontal movement > vertical (prevents scroll hijack)
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX < 0) nav(1);  // swipe left = next
      else nav(-1);             // swipe right = prev
    }
  };

  // Mouse drag handlers (desktop swipe)
  const onMouseDown = (e) => {
    touchRef.current.startX = e.clientX;
    touchRef.current.isDragging = true;
  };

  const onMouseUp = (e) => {
    if (!touchRef.current.isDragging) return;
    const deltaX = e.clientX - touchRef.current.startX;
    touchRef.current.isDragging = false;
    if (Math.abs(deltaX) > 40) {
      e.preventDefault();
      e.stopPropagation();
      if (deltaX < 0) nav(1);
      else nav(-1);
    }
  };

  const handleClick = (e) => {
    // Don't open lightbox if user was swiping
    if (Math.abs(e.clientX - touchRef.current.startX) > 10) return;
    onOpenLightbox?.(product, imgIdx);
  };

  return (
    <div className="group relative">
      <div
        className="relative aspect-[3/4] bg-bg-alt overflow-hidden rounded-sm cursor-pointer select-none"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onClick={handleClick}
      >
        <img
          src={product.images[imgIdx]}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] pointer-events-none"
          loading="lazy"
          draggable={false}
        />
        {product.tag && (
          <span className="absolute top-3 left-3 z-[2] text-[0.52rem] font-semibold tracking-wider text-white bg-accent px-2 py-0.5 rounded-sm lowercase">
            {product.tag}
          </span>
        )}

        {/* + Quick Add Button (top right) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            // TODO: Wire to Shopify addToCart(variantId)
            // For now, opens lightbox as quick view
            onOpenLightbox?.(product, imgIdx);
          }}
          className="absolute top-3 right-3 z-[3] w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 md:opacity-0 transition-all duration-200 border border-dark/[0.06] hover:bg-accent hover:text-white hover:border-accent text-dark shadow-sm"
          aria-label="quick add"
        >
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M8 3v10M3 8h10" />
          </svg>
        </button>

        {/* Carousel Arrows (desktop) */}
        <button onClick={(e) => nav(-1, e)} className="absolute left-2 top-1/2 -translate-y-1/2 z-[3] w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-dark/[0.06] hover:bg-dark hover:text-white text-dark hidden md:flex">
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 4l-4 4 4 4"/></svg>
        </button>
        <button onClick={(e) => nav(1, e)} className="absolute right-2 top-1/2 -translate-y-1/2 z-[3] w-7 h-7 bg-white/90 backdrop-blur-sm rounded-full items-center justify-center opacity-0 group-hover:opacity-100 transition-all border border-dark/[0.06] hover:bg-dark hover:text-white text-dark hidden md:flex">
          <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 4l4 4-4 4"/></svg>
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-[2]">
          {product.images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setImgIdx(i); }}
              className={`w-[6px] h-[6px] rounded-full transition-all ${i === imgIdx ? 'bg-accent scale-110' : 'bg-dark/20 group-hover:bg-dark/40'}`}
            />
          ))}
        </div>
      </div>
      <div className="py-3 flex justify-between items-baseline">
        <span className="text-[0.78rem] font-medium text-dark lowercase">{product.name}</span>
        <span className="text-[0.75rem] font-medium text-text-light">{product.price}</span>
      </div>
    </div>
  );
}
