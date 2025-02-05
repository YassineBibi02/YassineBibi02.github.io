import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[rgba(0,0,0,0.8)] text-[rgba(255,255,255,0.8)] pb-3 pt-3 px-80">
    <div className="flex items-center justify-start">
      <p className="text-sm">&copy; 2022 - {currentYear} Yassine Bibi</p>
    </div>
  </footer>
  );
}

export default Footer;