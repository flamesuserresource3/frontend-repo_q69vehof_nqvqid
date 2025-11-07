import React from 'react';
import { Code, Database, Globe, Sparkles } from 'lucide-react';

const SkillBadge = ({ label }) => (
  <span className="text-xs px-2 py-1 rounded-md bg-white/5 text-slate-200 border border-white/10">
    {label}
  </span>
);

const Skills = () => {
  return (
    <section id="skills" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
        <p className="mt-3 text-slate-300 max-w-2xl">
          A focused tech stack for building reliable web applications and applying AI/ML where it matters.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white">
              <Code className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Programming</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Python'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white">
              <Globe className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Web Development</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['HTML', 'CSS', 'JavaScript (Frontend)', 'Python (Backend)'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-white">
              <Database className="h-5 w-5 text-emerald-400" />
              <h3 className="font-semibold">Database</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['MySQL'].map((s) => (
                <SkillBadge key={s} label={s} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-2 text-white">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <h3 className="font-semibold">Soft Skills</h3>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {['Problem-solving', 'Adaptability', 'Creativity', 'Positive Attitude', 'Time Management'].map((s) => (
              <SkillBadge key={s} label={s} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
