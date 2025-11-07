import React from 'react';
import { Rocket, Github, Linkedin, Download } from 'lucide-react';

const NavBar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-900/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex h-14 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 text-white font-semibold">
            <Rocket className="h-5 w-5 text-emerald-400" />
            <span>Bharath Veggalam</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-slate-200">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://github.com/BharathVeggalam19" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-md hover:bg-white/10 text-slate-200">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/bharath-veggalam-130563228" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-md hover:bg-white/10 text-slate-200">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/bharath-veggalam-130563228/details/featured/" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white px-3 py-1.5 text-sm transition-colors">
              <Download className="h-4 w-4" />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
