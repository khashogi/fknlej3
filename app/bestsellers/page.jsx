import PageHero from '@/components/PageHero';
import ProductGrid from '@/components/ProductGrid';
import { getBestsellers, getAllProducts } from '@/lib/data';

export default function BestsellersPage() {
  const bs = getBestsellers();
  const rest = getAllProducts().filter(p => !p.bestseller).slice(0, 4);

  return (
    <>
      <PageHero eyebrow="best sellers" title="most wanted" subtitle="the pieces legends reach for first. tried, tested, worn to death." bgText="legends" />
      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <ProductGrid products={[...bs, ...rest]} />
      </section>
    </>
  );
}
