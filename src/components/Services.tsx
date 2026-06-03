import { Server, CloudCog, Sparkles } from 'lucide-react';

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <span className="px-4 py-1.5 bg-white/10 text-slate-blue rounded-full text-sm font-semibold tracking-wide uppercase border border-white/10 backdrop-blur-md">Core Solutions</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Enterprise IT Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-xl bg-slate-blue/20 flex items-center justify-center border border-slate-blue/30 group-hover:scale-110 transition-transform duration-500">
              <Server className="text-slate-blue w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">IT Managed Services</h3>
              <p className="text-gray-400 leading-relaxed">
                Comprehensive infrastructure management, 24/7 proactive monitoring, and dedicated technical support for complex enterprise assets.
              </p>
            </div>
          </div>
          
          <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-xl bg-muted-indigo/20 flex items-center justify-center border border-muted-indigo/30 group-hover:scale-110 transition-transform duration-500">
              <CloudCog className="text-muted-indigo w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">Cloud Architecture</h3>
              <p className="text-gray-400 leading-relaxed">
                Expert cloud migration strategies, high-availability DevOps automation, and scalable distributed storage solutions.
              </p>
            </div>
          </div>

          <div className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col gap-6 hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30 group-hover:scale-110 transition-transform duration-500">
              <Sparkles className="text-secondary w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3">AI & Automation</h3>
              <p className="text-gray-400 leading-relaxed">
                Leveraging Generative AI and intelligent automated workflows to transform raw enterprise data into actionable business intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
