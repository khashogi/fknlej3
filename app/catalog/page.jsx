import PageHero from '@/components/PageHero';
import ProductGrid from '@/components/ProductGrid';
import RevealOnScroll from '@/components/RevealOnScroll';
import { products } from '@/lib/data';

const categories = ['hoodies', 'tees', 'crewnecks', 'sweatpants', 'shorts'];

export default function CatalogPage() {
  return (
    <>
      <PageHero eyebrow="shop" title="the collection" subtitle="built for legends who wear their story. every piece, every thread — intentional." bgText="catalog" />
      {categories.map((cat, i) => (
        <div key={cat}>
          {i > 0 && <hr className="border-t border-dark/[0.08] mx-5 md:mx-10" />}
          <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
            <RevealOnScroll>
              <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">{cat}</div>
              <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-6 lowercase">{cat}</h2>
            </RevealOnScroll>
            <ProductGrid products={products[cat]} />
          </section>
        </div>
      ))}
    </>
  );
}
