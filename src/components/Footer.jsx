import React from 'react';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-400">© {year} Bharath Veggalam. All rights reserved.</p>
        <div className="text-sm text-slate-400">
          Built with React, Tailwind, and a 3D touch.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
