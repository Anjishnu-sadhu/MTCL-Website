import React, { useState } from 'react';
import logoFull from '../assets/images/logo-full.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', active: true },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Areas We Serve', href: '#areas' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="w-full bg-[#fbfcee] border-b border-[#e2e6d5] sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-[86px] sm:h-[92px]">
          
          {/* Brand Logo */}
          <a href="#home" className="flex items-center group select-none py-1">
            <img
              src={logoFull}
              alt="Multiple Trades Construction Ltd."
              className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-7 xl:space-x-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-[15px] xl:text-[17px] font-semibold transition-colors duration-200 ${
                  link.active
                    ? 'text-[#142820] font-bold'
                    : 'text-[#2b4438] hover:text-[#0b3828]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Sign Up Button */}
          <div className="hidden lg:block">
            <button
              type="button"
              className="bg-[#cbe875] hover:bg-[#b8d85f] active:scale-95 text-[#142820] font-bold text-[15px] xl:text-[17px] px-6 xl:px-8 py-3 rounded-2xl transition-all duration-200 shadow-sm"
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-[#112a20] hover:bg-[#0b3828]/10 focus:outline-none transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden bg-[#fbfcee] border-t border-[#e2e6d5] px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-[17px] font-semibold text-[#142820] py-2 hover:text-[#0b3828]"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <button
              type="button"
              className="w-full bg-[#cbe875] hover:bg-[#b8d85f] text-[#142820] font-bold text-[17px] py-3.5 rounded-2xl transition-all shadow-sm"
              onClick={() => {
                setIsOpen(false);
                const element = document.getElementById('contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
