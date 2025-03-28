"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(true);

  useEffect(() => {
    // Check scroll position on component mount
    const checkScrollPosition = () => {
      setIsScrolled(window.scrollY > 0);
    };

    // Run it immediately to set initial state
    checkScrollPosition();

    // Listen for scroll events
    window.addEventListener("scroll", checkScrollPosition);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", checkScrollPosition);
  }, []);

  return (
    <header
      className={`${
        isScrolled
          ? "bg-[#1b1b1b] shadow-md border-b-2 border-[#141414]"
          : "bg-transparent border-b-2 border-transparent"
      } p-4 fixed top-0 left-0 w-full flex items-center justify-between transition-all duration-300`}
    >
      {/* Left Section: Logo and Website Name */}
      <div className="flex items-center gap-4">
        <Image
          src="/images/YBlogoWhite.png"
          alt="Logo"
          width={32}
          height={32}
          className=" ml-2"
        />
        <Link href="/" className="ml-4 text-xl font-bold text-[#e5e5e5]">
          Yassine Bibi
        </Link>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex items-center gap-4 text-white">
        <Link href="/" className="hover:underline font-semibold mr-4">
          Home
        </Link>
        <a
          href="/Lebenslauf 2025 - DE.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline font-semibold mr-4"
        >
          CV
        </a>
      </div>
    </header>
  );
};

export default Header;
