import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';
import { philanthropy } from '@/lib/data';

export default function PhilanthropyPage() {
  return (
    <>
      <PageHero eyebrow="giving back" title="legends lift others" subtitle="real legends don't just win — they pull others up with them." bgText="give" />

      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <RevealOnScroll>
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">our pillars</div>
          <h2 className="font-display text-[clamp(1.7rem,3.8vw,2.4rem)] font-extrabold tracking-tight leading-tight text-dark mb-2 lowercase">where we show up</h2>
          <p className="text-[0.88rem] text-text-light max-w-[420px] leading-relaxed mb-8 lowercase">
            every purchase fuels these initiatives. because being a legend means building more legends.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {philanthropy.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 60}>
              <div className="bg-bg-alt p-7 rounded-sm border border-dark/[0.08] hover:border-accent hover:-translate-y-0.5 transition-all relative overflow-hidden group">
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                <div className="text-2xl mb-3">{p.icon}</div>
                <div className="font-display text-[0.92rem] font-bold text-dark mb-2 lowercase">{p.title}</div>
                <div className="text-[0.8rem] text-text-light leading-relaxed lowercase">{p.desc}</div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10 bg-bg-alt">
        <RevealOnScroll className="max-w-[680px]">
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">the commitment</div>
          <blockquote className="font-display text-[clamp(1.2rem,2.8vw,2rem)] font-bold tracking-tight leading-snug text-dark mb-4 lowercase">
            we&apos;re building this part out. if you run an initiative that&apos;s <span className="text-accent">fknlej worthy</span>, reach out. we want to hear your story.
          </blockquote>
          <div className="flex items-center gap-2 text-[0.7rem] text-text-light lowercase">
            <span className="w-[18px] h-px bg-accent" />more coming soon
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
