import React from 'react';
import logoFullWhite from '../assets/images/logo-full-white.png';

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-gray-300 pt-16 pb-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info with White/Lime Logo Variant for Dark Background */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="inline-block group select-none">
              <img
                src={logoFullWhite}
                alt="Multiple Trades Construction Ltd."
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </a>
            
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed mt-2">
              Fine Creations With Dedication. Delivering world-class commercial, residential, and civil infrastructure with verified engineering safety.
            </p>
          </div>

          {/* Quick Links in Page Order */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#home" className="hover:text-limeAccent transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-limeAccent transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Our Services</a></li>
              <li><a href="#areas" className="hover:text-limeAccent transition-colors">Areas We Serve</a></li>
              <li><a href="#portfolio" className="hover:text-limeAccent transition-colors">Our Portfolio</a></li>
              <li><a href="#contact" className="hover:text-limeAccent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Core Domains</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Drywall &amp; Framing</a></li>
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Ceiling Systems</a></li>
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Thermal Insulation</a></li>
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Taping &amp; Texturing</a></li>
              <li><a href="#services" className="hover:text-limeAccent transition-colors">Commercial Painting</a></li>
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Work Hours</h4>
            <p className="text-sm text-gray-400">Monday – Friday:</p>
            <p className="text-sm font-semibold text-white mb-3">08:00 AM – 06:00 PM</p>
            
            <p className="text-sm text-gray-400">Saturday:</p>
            <p className="text-sm font-semibold text-white mb-3">09:00 AM – 02:00 PM</p>
            
            <p className="text-xs text-limeAccent font-medium">Sunday: Emergency On-Call</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <p>© {new Date().getFullYear()} Multiple Trades Construction Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-gray-300 transition-colors">Safety Standards</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
