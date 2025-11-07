import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-slate-300 leading-relaxed">
            I’m a passionate and detail‑oriented Python Full‑Stack Developer with a B.Tech in Computer Science (AI & ML) from Malla Reddy Institute of Technology and Science, Telangana (2025). I enjoy building practical, user‑focused solutions that bridge design, engineering, and data.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            My toolkit includes Python, HTML, CSS, JavaScript, and MySQL. I’m particularly interested in applying AI/ML to real‑world problems. I’ve worked on projects ranging from face emotion recognition to network traffic analysis, focusing on performance, clarity, and reliable delivery.
          </p>
          <p className="mt-3 text-slate-300 leading-relaxed">
            I’m eager to start my career as a Software Engineer where I can contribute to impactful projects and continue growing in full‑stack and AI‑driven applications.
          </p>
        </div>

        <div className="relative">
          <div className="rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-xl">
            <h3 className="text-white font-semibold">Education</h3>
            <p className="mt-2 text-slate-300 text-sm">
              B.Tech, Computer Science (AI & ML) — Malla Reddy Institute of Technology and Science, Telangana — 2025
            </p>

            <h3 className="mt-6 text-white font-semibold">Certifications</h3>
            <ul className="mt-2 space-y-2 text-slate-300 text-sm list-disc list-inside">
              <li>Artificial Intelligence Course Completion Certificate</li>
              <li>Yukthi Certificate for Academic Projects</li>
              <li>Certificate of Appreciation for Volunteering at Generative AI Workshop</li>
              <li>Face Emotion Recognition System Deployment Achievement</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
