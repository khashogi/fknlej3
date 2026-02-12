'use client';
import { useState } from 'react';
import ProductCard from './ProductCard';
import Lightbox from './Lightbox';
import RevealOnScroll from './RevealOnScroll';

export default function ProductGrid({ products }) {
  const [lbProduct, setLbProduct] = useState(null);
  const [lbIdx, setLbIdx] = useState(0);

  const openLb = (product, idx) => {
    setLbProduct(product);
    setLbIdx(idx);
  };

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
        {products.map((p, i) => (
          <RevealOnScroll key={p.slug || i} delay={i * 40}>
            <ProductCard product={p} onOpenLightbox={openLb} />
          </RevealOnScroll>
        ))}
      </div>
      {lbProduct && (
        <Lightbox product={lbProduct} initialIdx={lbIdx} onClose={() => setLbProduct(null)} />
      )}
    </>
  );
}
