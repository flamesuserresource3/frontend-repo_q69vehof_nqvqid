import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Get in touch</h2>
          <p className="mt-3 text-slate-300">
            I’m open to full‑time roles and freelance projects. Feel free to reach out for collaborations or just a friendly hello.
          </p>

          <div className="mt-6 space-y-3 text-slate-300">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-400" /> veggalambharath10@gmail.com</p>
            <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-emerald-400" /> Hyderabad, Telangana</p>
            <div className="flex gap-3 mt-4">
              <a href="https://www.linkedin.com/in/bharath-veggalam-130563228" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md border border-white/15 bg-white/5 hover:bg-white/10 text-white font-semibold px-4 py-2 transition-colors">LinkedIn</a>
              <a href="https://github.com/BharathVeggalam19" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6">
          <form className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Your name" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <input type="email" placeholder="Your email" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <textarea rows="5" placeholder="Message" className="w-full rounded-md bg-slate-900/60 border border-white/10 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40" />
            <button type="button" className="inline-flex items-center justify-center rounded-md bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-semibold px-4 py-2 transition-colors">Send Message</button>
            <p className="text-xs text-slate-400">This is a demo form. Use the email above to contact me directly.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
