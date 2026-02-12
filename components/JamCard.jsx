export default function JamCard({ jam }) {
  return (
    <a href={jam.url} target="_blank" rel="noopener noreferrer"
      className="block bg-bg-alt p-5 rounded-sm border border-dark/[0.08] relative transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(196,98,58,0.06)] group lowercase">
      <div className="w-9 h-9 rounded-lg bg-dark flex items-center justify-center mb-4">
        <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </div>
      <svg className="absolute top-5 right-5 w-4 h-4 text-text-light opacity-20 transition-all group-hover:opacity-100 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M7 17L17 7M17 7H7M17 7v10"/>
      </svg>
      <div className="font-display text-[0.85rem] font-bold text-dark mb-1">{jam.title}</div>
      <div className="text-[0.73rem] text-text-light leading-relaxed">{jam.desc}</div>
    </a>
  );
}
