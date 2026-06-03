import { Hexagon, MapPin, Globe, Share2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-surface-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Hexagon className="text-slate-blue w-8 h-8 fill-slate-blue/20" />
            <span className="text-2xl font-bold tracking-tight">KaumTech</span>
          </div>
          <p className="text-gray-400 leading-relaxed">
            Empowering the next generation of digital transformation with agility, stability, and innovation.
          </p>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors"><Share2 className="w-5 h-5" /></a>
          </div>
        </div>
        
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <nav className="flex flex-col gap-3">
            <a className="text-gray-400 hover:text-white transition-colors" href="#home">Home</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#about">About Us</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#services">Services</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
            <a className="text-gray-400 hover:text-white transition-colors" href="#">Terms of Service</a>
          </nav>
        </div>
        
        <div className="flex flex-col gap-6">
          <h4 className="text-lg font-semibold">Location</h4>
          <p className="text-gray-400 leading-relaxed">
            KaumTech Headquarters<br/>
            KH Abdullah Syafei No 23<br/>
            Tebet, Jakarta Selatan
          </p>
          <div className="w-full h-32 bg-gray-800 rounded-xl overflow-hidden relative border border-white/10">
            <img alt="Location Map" className="w-full h-full object-cover opacity-40 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAib2eYovAwq2PFKxQNrBIP0koVTJSyoq2BqTwbdQ7hjNS3RtjigyOUg7UxakwTyPwHXuwdhHKmXfs0Bl8VQdupfrsA5IhE_h58ouWJNlRq3f7vbofFGX-QliTY51fjtuQ-uNSHq6TPcAHBFCYJtwC5B-h7eS5MhalJPW0y-tXF6ArQgXVqRVXKmRh8RU2YGaCHa690xn5XlgXRUrmo3M1ddQ8VK3XTl7q7VIEfSJMlebToz98ZcdFdxPk1LqQqSSYCbfVmEnCyTiQ"/>
            <div className="absolute inset-0 flex items-center justify-center">
              <MapPin className="text-slate-blue w-8 h-8 drop-shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 px-6 md:px-12 text-center">
        <p className="text-sm text-gray-500">
          © 2024 PT Kaum Muda Teknologi. All rights reserved. | kaumtech.com
        </p>
      </div>
    </footer>
  );
}
