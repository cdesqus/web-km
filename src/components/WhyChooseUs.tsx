import { Zap, Lock, HeadphonesIcon, Cpu } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: Zap, title: "Agile Approach", desc: "Fast delivery with iterative improvements.", color: "text-amber-500", bg: "bg-amber-500/10" },
    { icon: Lock, title: "Enterprise Security", desc: "Top-tier security protocols embedded by design.", color: "text-slate-blue", bg: "bg-slate-blue/10" },
    { icon: HeadphonesIcon, title: "Dedicated Support", desc: "Responsive experts ready to assist 24/7.", color: "text-secondary", bg: "bg-secondary/10" },
    { icon: Cpu, title: "Future Ready", desc: "Leveraging AI and modern cloud architectures.", color: "text-muted-indigo", bg: "bg-muted-indigo/10" },
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center gap-4 mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-text-main">The KaumTech Advantage</h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real transformation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div key={i} className="p-8 bg-surface rounded-2xl border border-gray-100 flex flex-col items-center text-center gap-4 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className={`w-16 h-16 rounded-2xl ${f.bg} flex items-center justify-center mb-2`}>
                <f.icon className={`w-8 h-8 ${f.color}`} />
              </div>
              <h3 className="text-xl font-bold text-text-main">{f.title}</h3>
              <p className="text-text-muted leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
