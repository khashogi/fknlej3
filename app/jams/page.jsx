import PageHero from '@/components/PageHero';
import JamCard from '@/components/JamCard';
import RevealOnScroll from '@/components/RevealOnScroll';
import { jams } from '@/lib/data';

export default function JamsPage() {
  return (
    <>
      <PageHero eyebrow="jams" title="the soundtrack" subtitle="every legend has a playlist. plug in, lock in, go." bgText="jams" />

      <section className="py-[clamp(4rem,9vw,6.5rem)] px-5 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {jams.map((j, i) => (
            <RevealOnScroll key={j.title} delay={i * 50}>
              <JamCard jam={j} />
            </RevealOnScroll>
          ))}
        </div>
        <RevealOnScroll className="mt-8 text-center">
          <a
            href="https://open.spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[0.76rem] font-semibold tracking-wide py-3 px-7 bg-accent text-white hover:bg-accent-hover hover:-translate-y-0.5 transition-all lowercase"
          >
            find your jam on spotify
            <svg className="w-3 h-3" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
          </a>
        </RevealOnScroll>
      </section>
    </>
  );
}
