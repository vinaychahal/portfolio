'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6 pointer-events-none">
      <nav className="bg-white/70 backdrop-blur-xl border border-neutral-200/50 p-1.5 rounded-full flex items-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] pointer-events-auto">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 ${
                isActive ? 'text-white' : 'text-neutral-500 hover:text-neutral-900'
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="active-nav-pill"
                  className="absolute inset-0 bg-neutral-900 rounded-full"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative z-10">{link.label}</span>
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
