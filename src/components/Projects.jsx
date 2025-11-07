import React from 'react';

const projects = [
  {
    title: 'Face Emotion Recognition (FER) using DL',
    tools: ['Python', 'CNN', 'OpenCV', 'FER-2013'],
    description:
      'Detects and classifies human emotions like happy, sad, and angry using deep learning and computer vision.',
    link: '#',
  },
  {
    title: 'Network Traffic Analysis using ML',
    tools: ['Python', 'Wireshark', 'kNN', 'SVM', 'Naïve Bayes', 'Decision Trees'],
    description:
      'Analyzes network traffic patterns to detect anomalies and improve data security using classical ML models.',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          Selected work combining software engineering and AI/ML to solve real‑world problems.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 transition transform hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-tr from-emerald-500/10 to-cyan-500/10" />
              <div className="relative p-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <span className="text-xs text-slate-400">Case Study</span>
                </div>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tools.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-md bg-slate-800/80 text-slate-200 border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
