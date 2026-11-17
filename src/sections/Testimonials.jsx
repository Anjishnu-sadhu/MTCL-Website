import React from 'react';
import avatar1 from '../assets/images/avatar-1.jpg';
import avatar2 from '../assets/images/avatar-2.jpg';
import avatar3 from '../assets/images/avatar-3.jpg';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Robert Sterling',
      role: 'CEO, Sterling Retail Group',
      feedback: 'The team completed our 6-story commercial office ahead of schedule. Their attention to structural detail and energy efficiency was unprecedented.',
      rating: 5,
      avatar: avatar1
    },
    {
      name: 'Eleanor Vance',
      role: 'Property Developer, Emerald Heights',
      feedback: 'Working with Multiple Trades Construction made our 40-unit residential project completely stress-free. Every milestone was met with precision.',
      rating: 5,
      avatar: avatar2
    },
    {
      name: 'Marcus Hayes',
      role: 'Operations Director, Apex Logistics',
      feedback: 'Their structural engineering division delivered our 120,000 sq ft warehouse facility flawlessly. Cost estimates were accurate to the dollar.',
      rating: 5,
      avatar: avatar3
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-forest bg-forest/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Client Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-900 tracking-tight">
            Trusted By Developers, Architects &amp; Companies
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-600">
            Real feedback from property owners and commercial developers who built with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((rev, idx) => (
            <div 
              key={idx} 
              className="bg-cream-50 p-6 sm:p-8 rounded-3xl border border-gray-200/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-amber-400 mb-4 text-base">
                  {'★'.repeat(rev.rating)}
                </div>
                <p className="text-sm sm:text-base text-gray-700 italic leading-relaxed mb-6">
                  "{rev.feedback}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-gray-200/60">
                <img 
                  src={rev.avatar} 
                  alt={rev.name} 
                  className="w-12 h-12 rounded-full object-cover border-2 border-forest/20"
                />
                <div>
                  <h4 className="font-bold text-forest-900 text-sm">{rev.name}</h4>
                  <p className="text-xs text-gray-500">{rev.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
