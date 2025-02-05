'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${isScrolled ? 'bg-[#1b1b1b] shadow-md border-b-2 border-[#141414]' : 'bg-transparent border-b-2 border-transparent'} p-4 fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300`}>
      {/* Left Section: Logo and Website Name */}
      <div className="flex items-center gap-4">
        <img src="/YBIconWhite.png" alt="Logo" className="w-8 h-8 ml-2" />
        <Link href="/" className="ml-4 text-xl font-bold text-[#e5e5e5]">
          Yassine Bibi
        </Link>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex items-center gap-4 text-white">
        <Link href="/" className="hover:underline font-semibold mr-4">
          Home
        </Link>
        <Link href="/cv" className="hover:underline font-semibold mr-4">
          CV
        </Link>
      </div>
    </header>
  );
};

export default Header;
