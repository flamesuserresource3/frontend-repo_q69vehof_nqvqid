import React from 'react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful hero experience built with Spline and React, blending motion and depth for an immersive feel.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
  },
  {
    title: 'Design System Starter',
    description: 'A cohesive UI kit with accessible components, tokens, and theming for rapid product builds.',
    tags: ['Tailwind', 'Radix UI', 'Accessibility'],
    link: '#',
  },
  {
    title: 'API-Driven Dashboard',
    description: 'Real-time insights and charts powered by a modern API layer and snappy UX patterns.',
    tags: ['FastAPI', 'MongoDB', 'Charts'],
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">A curated selection of work exploring interactivity, performance, and delightful user experiences.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-5">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white group-hover:text-emerald-300 transition-colors">{p.title}</h3>
                <span className="text-xs text-slate-400">Case Study</span>
              </div>
              <p className="mt-2 text-sm text-slate-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-white/10">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
