import React from 'react';
import Button from '../components/Button';
import aboutImg from '../assets/images/about-architecture.jpg';

export default function About() {
  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '7+', label: 'Years of Experience' },
    { number: '60+', label: 'Commercial Projects' },
    { number: '40+', label: 'Skilled Professionals' },
  ];

  const highlights = [
    { title: 'Certified Engineers', desc: 'Licensed professionals with rigorous safety compliance.' },
    { title: 'Eco-Friendly Materials', desc: 'Sustainable building practices lowering environmental footprint.' },
    { title: 'Transparent Costing', desc: 'Accurate estimation with zero hidden fees or surprises.' },
    { title: 'On-Time Milestones', desc: 'Streamlined project management keeping deadlines intact.' },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid: Image + Description */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with 100% Guarantee Badge */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3] bg-gray-100">
              <img 
                src={aboutImg} 
                alt="Modern Architecture Construction" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Overlapping feature card */}
            <div className="absolute -bottom-6 -right-4 sm:-bottom-8 sm:right-6 bg-forest-800 text-white p-5 sm:p-6 rounded-2xl shadow-2xl border border-white/10 max-w-[240px] sm:max-w-[280px]">
              <span className="text-3xl sm:text-4xl font-extrabold text-limeAccent">100%</span>
              <p className="text-xs sm:text-sm text-gray-200 mt-1 font-medium">
                Safe &amp; on-time delivery guaranteed across all commercial &amp; residential jobs.
              </p>
            </div>
          </div>

          {/* Right Column: Text & Features */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forest/5 text-forest font-semibold text-xs uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-forest"></span>
              About Our Company
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-900 tracking-tight leading-snug">
              Constructing Future Landmarks With Precision &amp; Integrity.
            </h2>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
             Multiple Trades Construction Ltd is a trusted name in Canada’s construction industry. We specialize in drywall installation, insulation solutions, and steel stud framing — serving both commercial and residential clients. Our team combines skilled workmanship with modern building techniques to ensure every project meets the highest standards of quality and safety.
            </p>

            {/* Points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-cream-100 border border-gray-200/60">
                  <h4 className="font-bold text-forest-900 text-sm sm:text-base mb-1">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button 
                variant="dark"
                className="!rounded-xl"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Learn More About Us
              </Button>
            </div>

          </div>

        </div>

        {/* Key Statistics Grid matching the reference image */}
        <div className="mt-14 sm:mt-18 bg-[#d6df8f] rounded-3xl p-8 sm:p-12 shadow-sm border border-[#c4ce7e]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0a3322] tracking-tight leading-none">
                  {stat.number}
                </span>
                <span className="text-sm sm:text-base font-bold text-[#1c3e2f] mt-3 leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
