import { ShieldCheck, Activity } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-6 flex flex-col gap-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-main mb-6">PT Kaum Muda Teknologi</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              We are a dynamic IT partner bridging the gap between youthful agility and enterprise-grade stability. Founded on the principle that modern technology should be accessible, reliable, and innovative, we empower organizations to navigate the digital landscape with absolute confidence.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 bg-surface rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <Activity className="w-8 h-8 text-slate-blue mb-4" />
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-slate-blue block mb-2">99.9%</span>
              <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">Uptime SLA</span>
            </div>
            <div className="p-6 bg-surface rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-300">
              <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
              <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-secondary to-green-400 block mb-2">24/7</span>
              <span className="text-sm font-semibold text-text-muted uppercase tracking-wider">Security Ops</span>
            </div>
          </div>
        </div>
        
        <div className="lg:col-span-6 h-full min-h-[500px] relative">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-blue/10 to-transparent rounded-3xl transform translate-x-4 translate-y-4"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoMAlPfjbm1AGW4F4iKW0IuhsrOCr3kWuv5WlHU61o5UFfGNnGDSnsWV41BcNABMcMc8JBcqVNoYRWRmmboHOolsTps-0KUwSxFYzVpyKysJpU9MopkEOAZAJikpj7z2x_XTmW4-oZcPSPeUbi5_CRuFhx-bfTSP2Z9b8J-RwmfIUvKYb-vFtnoc6GcCxHBK2m5kNt8vbqTHdnnp-h6R1GtZJvoHt-tOOtelW1Io8MX7H6OV27lyPXAPtJ_gD72n0ReW5Ll6RfwDY" 
            alt="KaumTech Corporate Team" 
            className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
          />
        </div>
      </div>
    </section>
  );
}
