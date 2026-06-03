import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-primary via-[#21426e] to-[#0f2340] text-white relative overflow-hidden">
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-slate-blue/30 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-muted-indigo/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">Let's Build the Future Together</h2>
          <p className="text-lg text-white/80 leading-relaxed max-w-lg">
            Ready to elevate your business infrastructure? Reach out to our team of experts for a free consultation and discover how we can transform your technological landscape.
          </p>
          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Mail className="text-secondary w-6 h-6" />
              </div>
              <span className="text-xl font-medium group-hover:text-secondary transition-colors duration-300">hello@kaumtech.com</span>
            </div>
            <div className="flex items-center gap-4 group cursor-pointer w-fit">
              <div className="p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 group-hover:bg-white/10 group-hover:scale-105 transition-all duration-300">
                <Phone className="text-secondary w-6 h-6" />
              </div>
              <span className="text-xl font-medium group-hover:text-secondary transition-colors duration-300">+62 21 5550 1234</span>
            </div>
          </div>
        </div>
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 shadow-2xl relative">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
          <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Full Name</label>
              <input className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="John Doe" type="text"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Email Address</label>
              <input className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all backdrop-blur-sm" placeholder="john@company.com" type="email"/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-white/90">Message</label>
              <textarea className="bg-white/5 border border-white/10 rounded-xl p-4 text-white placeholder:text-white/40 focus:ring-2 focus:ring-secondary focus:border-transparent outline-none transition-all resize-none backdrop-blur-sm" placeholder="How can we help you?" rows={4}></textarea>
            </div>
            <button className="w-full py-4 mt-2 bg-gradient-to-r from-secondary to-teal-500 text-white font-bold text-lg rounded-xl shadow-lg shadow-secondary/20 hover:-translate-y-1 transition-all duration-300 active:scale-[0.98]">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
