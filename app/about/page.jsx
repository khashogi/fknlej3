import PageHero from '@/components/PageHero';
import RevealOnScroll from '@/components/RevealOnScroll';

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="about" title="the story" subtitle="how a phrase between friends became a movement." bgText="about" />

      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <RevealOnScroll>
            <div className="aspect-[4/5] bg-bg-alt rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80"
                alt="fknlej brand"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 text-[0.52rem] font-semibold tracking-[0.1em] text-text-light bg-bg/[0.85] backdrop-blur-sm px-2.5 py-1.5 rounded-sm lowercase">
                brand image
              </div>
            </div>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <h3 className="font-display text-[clamp(1.2rem,2.2vw,1.6rem)] font-bold tracking-tight leading-snug text-dark mb-5 lowercase">
              born from a phrase.<br />built for a movement.
            </h3>
            <p className="text-[0.86rem] text-text-light leading-relaxed mb-3 lowercase">
              it started as a shorthand—a raw, unfiltered recognition of someone doing the impossible. it became a belief system. a standard. a way of life.
            </p>
            <p className="text-[0.86rem] text-text-light leading-relaxed mb-3 lowercase">
              We don’t design for the podium-dwellers. We design for the quiet grinders, the late-night visionaries, for those who turned their no into a not yet. 
            </p>
            <p className="text-[0.86rem] text-text-light leading-relaxed mb-5 lowercase">
              fknlej isn&apos;t just a label; it&apos;s a lifestyle for the relentless. it&apos;s a recognition. it&apos;s you telling the world: i earned this.
            </p>
            <div className="flex gap-6 pt-5 border-t border-dark/[0.08] flex-wrap">
              <div>
                <div className="font-display text-[1.3rem] font-extrabold text-accent">2023</div>
                <div className="text-[0.58rem] font-medium tracking-[0.1em] text-text-light lowercase">established</div>
              </div>
              <div>
                <div className="font-display text-[1.3rem] font-extrabold text-accent">6</div>
                <div className="text-[0.58rem] font-medium tracking-[0.1em] text-text-light lowercase">categories</div>
              </div>
              <div>
                <div className="font-display text-[1.3rem] font-extrabold text-accent">∞</div>
                <div className="text-[0.58rem] font-medium tracking-[0.1em] text-text-light lowercase">legends</div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      <section className="py-[clamp(4.5rem,11vw,8rem)] px-5 md:px-10 bg-bg-alt relative">
        <div className="absolute top-[clamp(1rem,3vw,2.5rem)] left-[clamp(0.5rem,2vw,2rem)] font-display text-[clamp(5rem,14vw,10rem)] font-extrabold text-accent opacity-[0.05] leading-none select-none">&ldquo;</div>
        <RevealOnScroll className="max-w-[680px] relative z-[1]">
          <div className="text-[0.56rem] font-semibold tracking-[0.2em] text-accent mb-2 lowercase">what it means</div>
          <blockquote className="font-display text-[clamp(1.2rem,2.8vw,2rem)] font-bold tracking-tight leading-snug text-dark mb-4 lowercase">
            this is for the grit that goes unrecorded. this is for the resilience of the underdog. this is not for the applause you receive, but the refusal to quit when no one is watching. <span className="text-accent">be a fknlej.</span>
          </blockquote>
          <div className="flex items-center gap-2 text-[0.7rem] text-text-light lowercase">
            <span className="w-[18px] h-px bg-accent" />the definition
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
