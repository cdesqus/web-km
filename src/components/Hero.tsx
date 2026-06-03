import { ArrowRight, PlayCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-24 overflow-hidden bg-surface">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      {/* Glow effects */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-slate-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-blue/10 border border-slate-blue/20 text-slate-blue w-fit font-medium text-sm">
            <span className="w-2 h-2 rounded-full bg-slate-blue animate-pulse"></span>
            Next-Gen IT Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight text-text-main">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-blue">Future of Enterprise</span>
          </h1>
          
          <p className="text-lg text-text-muted max-w-lg leading-relaxed">
            KaumTech bridges the gap between youthful agility and corporate stability. We architect, deploy, and manage scalable infrastructure tailored for modern growth.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2">
            <a href="#contact" className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 flex items-center gap-2 group">
              Start Building 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button className="px-8 py-4 bg-white border border-gray-200 text-text-main rounded-lg font-medium hover:bg-gray-50 transition-all flex items-center gap-2 shadow-sm">
              <PlayCircle className="w-5 h-5 text-slate-blue" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-blue/20 to-transparent rounded-2xl blur-2xl transform rotate-3"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4-8STsq05Fd6eqYziqxtQ6CDu52YZMOAfk2iYLxa19Pmj0shTtAr6kipUXFf7UJJ6hFVOQaO4Noq4jl5LPQS65-qZfTI6WEzZQpFUK_9pqgfTI8yllMs6rvyb8nwWOeGK2Dy1z614IfWU2UtBSc6QvXgxSHqJ1h7Pt6UJgxJCemmBIEk-9sd2OPoTTg6m_6XWmM39CmW-SnkiegriNaiDkdAU74FFK0Fqsfg8olI4YnG0h0UIwh9DVk8iRsp38cJ25GSfcETgc8U" 
            alt="Enterprise Technology" 
            className="relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-2xl border border-white/40 ring-1 ring-gray-900/5"
          />
          {/* Floating UI Elements */}
          <div className="absolute -left-8 top-12 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 z-20 animate-[float_6s_ease-in-out_infinite]">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900">System Status</p>
              <p className="text-xs text-gray-500">All systems operational</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
