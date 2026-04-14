import React from 'react';
import { ArrowUpRight, CheckCircle, FileText, Target, Zap } from 'lucide-react';

export default function AlignAILanding() {
  return (
    <div className="min-h-screen bg-[#040F49] text-white font-sans selection:bg-[#22D3EE] selection:text-[#040F49]">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#22D3EE] rounded-lg flex items-center justify-center">
            <ArrowUpRight className="text-[#040F49] stroke-[3]" />
          </div>
          <span className="text-2xl font-bold tracking-tight">AlignAI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#" className="hover:text-[#22D3EE] transition-colors">Features</a>
          <a href="#" className="hover:text-[#22D3EE] transition-colors">How it Works</a>
          <a href="#" className="hover:text-[#22D3EE] transition-colors">About</a>
        </div>
        <button className="bg-transparent border border-[#22D3EE] text-[#22D3EE] px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#22D3EE] hover:text-[#040F49] transition-all">
          Sign In
        </button>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-8 pt-20 pb-32 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold leading-[1.1] mb-6">
            Stop Guessing. <br />
            <span className="text-[#22D3EE]">Start Aligning.</span>
          </h1>
          <p className="text-lg text-slate-300 mb-10 max-w-lg leading-relaxed">
            Your skills are there, but is your CV speaking the right language? 
            AlignAI uses precision-engineered intelligence to match your experience 
            with exactly what recruiters are looking for.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#22D3EE] text-[#040F49] px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_20px_rgba(34,211,238,0.3)]">
              Optimize My CV for Free
            </button>
            <button className="bg-white/10 backdrop-blur-md border border-white/10 px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all">
              View Sample
            </button>
          </div>
        </div>

        {/* Visual Element */}
        <div className="relative">
          <div className="absolute -inset-4 bg-[#22D3EE]/20 blur-3xl rounded-full opacity-30 animate-pulse"></div>
          <div className="relative bg-slate-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-xl shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs text-slate-500 font-mono">cv_optimized_v2.pdf</div>
            </div>
            <div className="space-y-4">
              <div className="h-4 w-3/4 bg-white/10 rounded"></div>
              <div className="h-4 w-full bg-[#22D3EE]/20 rounded border-l-2 border-[#22D3EE] flex items-center px-3">
                <span className="text-[10px] text-[#22D3EE] font-bold tracking-widest uppercase">Matched Skill: Cloud Architecture</span>
              </div>
              <div className="h-4 w-5/6 bg-white/10 rounded"></div>
              <div className="h-4 w-4/6 bg-white/10 rounded"></div>
              <div className="h-4 w-full bg-[#22D3EE]/20 rounded border-l-2 border-[#22D3EE] flex items-center px-3">
                <span className="text-[10px] text-[#22D3EE] font-bold tracking-widest uppercase">Action Verb Improved: "Spearheaded"</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="bg-slate-950/50 py-24 px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-8 bg-[#040F49] border border-white/10 rounded-3xl hover:border-[#22D3EE]/50 transition-colors group">
              <Zap className="text-[#22D3EE] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">ATS Whisperer</h3>
              <p className="text-slate-400 text-sm">Bypass the bots. Our AI knows exactly which keywords the tracking systems are hunting for.</p>
            </div>
            <div className="p-8 bg-[#040F49] border border-white/10 rounded-3xl hover:border-[#22D3EE]/50 transition-colors group">
              <Target className="text-[#22D3EE] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Impact Scoring</h3>
              <p className="text-slate-400 text-sm">Get real-time feedback on your CV’s power. See your visibility score climb as you edit.</p>
            </div>
            <div className="p-8 bg-[#040F49] border border-white/10 rounded-3xl hover:border-[#22D3EE]/50 transition-colors group">
              <FileText className="text-[#22D3EE] mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-xl font-bold mb-2">Gap Analysis</h3>
              <p className="text-slate-400 text-sm">Upload a job description and instantly see exactly what's missing from your profile.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 text-center text-slate-500 text-sm">
        <p>© 2026 AlignAI. Designed for the modern hustle.</p>
      </footer>
    </div>
  );
}
