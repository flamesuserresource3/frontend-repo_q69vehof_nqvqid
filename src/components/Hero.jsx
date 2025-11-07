import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlays to increase contrast without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/60" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950/80 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs sm:text-sm text-slate-200 backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to full‑time roles & freelance projects
        </p>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Hi, I’m <span className="bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">Your Name</span>
        </h1>
        <p className="mt-4 text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed">
          A modern, playful portfolio showcasing my work in web, product, and creative tech. Explore interactive 3D, smooth animations, and thoughtfully crafted projects.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="#projects" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-5 py-2.5 transition-colors">
            View Projects
          </a>
          <a href="#contact" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-5 py-2.5 transition-colors">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
