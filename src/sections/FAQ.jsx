import React, { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: 'How do you determine the estimated timeline and budget for a project?',
      a: 'We conduct full architectural blueprint reviews, site topographic surveys, and material pricing assessments. We then prepare a detailed milestone schedule with guaranteed maximum pricing (GMP).'
    },
    {
      q: 'Do you take care of zoning approvals and municipal permits?',
      a: 'Yes. Our in-house legal and civil liaisons handle all municipal clearances, fire safety certifications, environmental impact assessments, and building authority permits.'
    },
    {
      q: 'Can we request changes mid-way through the construction phase?',
      a: 'Absolutely. We utilize modern Building Information Modeling (BIM) workflows that allow structured change-orders with clear cost and timeline impact assessments before implementation.'
    },
    {
      q: 'What warranties and post-construction support do you offer?',
      a: 'We provide a comprehensive 10-year structural warranty alongside a 2-year mechanical, electrical, and plumbing (MEP) service and maintenance guarantee.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-cream-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-forest bg-forest/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Got Questions?
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-2 text-sm sm:text-base text-gray-600">
            Clear answers about our construction process, permits, and warranty.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl border border-gray-200/80 overflow-hidden shadow-sm transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-bold text-forest-900 text-sm sm:text-base hover:text-forest transition-colors"
                >
                  <span>{faq.q}</span>
                  <span className={`text-xl font-bold transition-transform duration-200 ${isOpen ? 'rotate-45 text-forest' : 'text-gray-400'}`}>
                    +
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 animate-fadeIn">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
