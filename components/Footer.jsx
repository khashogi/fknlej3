import Link from 'next/link';

const socials = [
  { name: 'instagram', href: 'https://instagram.com/fknlej', icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg> },
  { name: 'tiktok', href: 'https://tiktok.com/@fknlej', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.14V11.7a4.83 4.83 0 01-3.77-1.24V6.69h3.77z"/></svg> },
  { name: 'facebook', href: 'https://facebook.com/fknlej', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg> },
  { name: 'x', href: 'https://x.com/fknlej', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg> },
  { name: 'pinterest', href: 'https://pinterest.com/fknlej', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg> },
  { name: 'youtube', href: 'https://youtube.com/@fknlej', icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg> },
];

export default function Footer() {
  return (
    <footer className="py-10 px-5 md:px-10 border-t border-dark/[0.08] lowercase">
      <div className="flex justify-between items-start flex-wrap gap-6 mb-8">
        <Link href="/" className="font-display text-[1.3rem] font-extrabold tracking-tight text-dark">
          fknlej<span className="text-accent">.</span>
        </Link>
        <div className="flex gap-8 md:gap-14 flex-wrap">
          <div>
            <h4 className="text-[0.52rem] font-semibold tracking-[0.15em] text-text-light mb-2">shop</h4>
            <Link href="/catalog" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">catalog</Link>
            <Link href="/bestsellers" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">best sellers</Link>
          </div>
          <div>
            <h4 className="text-[0.52rem] font-semibold tracking-[0.15em] text-text-light mb-2">brand</h4>
            <Link href="/about" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">about</Link>
            <Link href="/jams" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">jams</Link>
            <Link href="/philanthropy" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">giving back</Link>
          </div>
          <div>
            <h4 className="text-[0.52rem] font-semibold tracking-[0.15em] text-text-light mb-2">support</h4>
            <a href="#" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">shipping</a>
            <a href="#" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">returns</a>
            <a href="#" className="block text-[0.75rem] text-text-light mb-1 hover:text-accent transition-colors">contact</a>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center flex-wrap gap-4 pt-5 border-t border-dark/[0.08]">
        <div className="text-[0.58rem] text-text-light">© 2026 fknlej. all rights reserved.</div>
        <div className="flex gap-2.5 items-center">
          {socials.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.name}
              className="flex items-center justify-center w-[30px] h-[30px] rounded-full border border-dark/[0.08] text-text-light hover:text-accent hover:border-accent hover:-translate-y-0.5 transition-all">
              <span className="w-[13px] h-[13px]">{s.icon}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
