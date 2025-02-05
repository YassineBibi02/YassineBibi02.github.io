import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='backdrop-blur bg-[rgba(0,0,0,0.8)]'>
    <footer className="w-full  text-[rgba(255,255,255,0.8)] pb-3 pt-3 max-w-7xl px-[clamp(8px,10%,24px)] py-5 mx-auto ">
    <div className="flex items-center justify-start">
      <p className="text-sm">&copy; 2022 - {currentYear} Yassine Bibi</p>
    </div>
  </footer>
  </div>
  );
}

export default Footer;