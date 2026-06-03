import { Building2, Globe2, ShoppingBag, Landmark } from 'lucide-react';

export default function Partners() {
  return (
    <section className="py-16 px-6 md:px-12 border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-10">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">Trusted by Innovative Enterprises</h3>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-3">
            <Building2 className="w-8 h-8" />
            <span className="text-xl font-bold font-sans">TechCorp</span>
          </div>
          <div className="flex items-center gap-3">
            <Globe2 className="w-8 h-8" />
            <span className="text-xl font-bold font-sans">GlobalNet</span>
          </div>
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-8 h-8" />
            <span className="text-xl font-bold font-sans">RetailNext</span>
          </div>
          <div className="flex items-center gap-3">
            <Landmark className="w-8 h-8" />
            <span className="text-xl font-bold font-sans">FinTrust</span>
          </div>
        </div>
      </div>
    </section>
  );
}
