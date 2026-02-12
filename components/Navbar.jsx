'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './CartProvider';

const links = [
  { href: '/catalog', label: 'catalog' },
  { href: '/bestsellers', label: 'best sellers' },
  { href: '/about', label: 'about' },
  { href: '/jams', label: 'jams' },
  { href: '/philanthropy', label: 'giving back' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { cartCount, setCartOpen } = useCart();

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[1000] px-5 md:px-10 py-4 flex items-center justify-between bg-bg/[0.88] backdrop-blur-[24px] border-b border-dark/[0.08]">
        <Link href="/" className="font-display text-[1.3rem] font-extrabold tracking-tight text-dark lowercase">
          fknlej<span className="text-accent">.</span>
        </Link>
        <ul className="hidden md:flex gap-8 list-none">
          {links.map(l => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`relative text-[0.76rem] font-medium tracking-wide lowercase transition-colors
                  after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300
                  ${pathname === l.href
                    ? 'text-dark after:w-full'
                    : 'text-text-light hover:text-dark after:w-0 hover:after:w-full'
                  }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          {/* Cart icon */}
          <button onClick={() => setCartOpen(true)} className="relative p-1.5 text-dark hover:text-accent transition-colors" aria-label="cart">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-accent text-white text-[0.5rem] font-bold rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col gap-[5px] p-2" aria-label="menu">
            <span className={`block w-[22px] h-[1.5px] bg-dark transition-all origin-center ${open ? 'rotate-45 translate-y-[3.25px]' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-dark transition-all ${open ? 'opacity-0' : ''}`} />
            <span className={`block w-[22px] h-[1.5px] bg-dark transition-all origin-center ${open ? '-rotate-45 -translate-y-[3.25px]' : ''}`} />
          </button>
        </div>
      </nav>

      <div className={`fixed inset-0 z-[999] bg-bg flex flex-col items-start justify-center px-6 gap-4 transition-all duration-500 ${open ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        {[{ href: '/', label: 'home' }, ...links].map(l => (
          <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
            className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold tracking-tight text-text-light hover:text-accent transition-colors lowercase">
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}
