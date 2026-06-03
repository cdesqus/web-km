import { useState, useEffect } from 'react';
import { Menu, Hexagon } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <nav className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer">
          <Hexagon className="text-primary w-8 h-8 fill-primary/10" />
          <span className="text-2xl font-bold text-primary tracking-tight">KaumTech</span>
        </div>
        <div className="hidden md:flex items-center gap-8 font-medium">
          <a href="#home" className="text-primary hover:text-primary/80 transition-colors">Home</a>
          <a href="#services" className="text-text-muted hover:text-primary transition-colors">Services</a>
          <a href="#about" className="text-text-muted hover:text-primary transition-colors">Company</a>
          <a href="#contact" className="px-6 py-2.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all shadow-md shadow-primary/20">Contact Sales</a>
        </div>
        <button className="md:hidden text-text-main">
          <Menu className="w-6 h-6" />
        </button>
      </nav>
    </header>
  );
}
