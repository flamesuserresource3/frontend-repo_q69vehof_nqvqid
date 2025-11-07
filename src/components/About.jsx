import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-slate-950 to-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I enjoy building interactive products that live at the intersection of design and engineering. My work focuses on clarity, performance, and moments of delight. I’ve collaborated with startups and teams to ship high‑quality experiences across web and product.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            When I’m not pushing pixels, you’ll find me learning new tools, exploring generative art, and tweaking workflows to make teams move faster.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Framer Motion', 'FastAPI', 'MongoDB'].map((s) => (
              <span key={s} className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10">{s}</span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-400/20 blur-2xl rounded-xl" />
          <div className="relative rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
            <p className="text-slate-300">
              "Design is how it works. Code is how it ships. Craft is how it feels."
            </p>
            <p className="mt-4 text-sm text-slate-400">— My principle for building products</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
