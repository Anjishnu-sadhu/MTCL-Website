import React from 'react';
import Button from '../components/Button';

// Local cropped service images
import imgDrywall from '../assets/images/services/service-drywall.jpg';
import imgInsulation from '../assets/images/services/service-insulation.jpg';
import imgSteelFraming from '../assets/images/services/service-steel-framing.jpg';
import imgTaping from '../assets/images/services/service-taping.jpg';
import imgCeilingSystems from '../assets/images/services/service-ceiling-systems.jpg';
import imgSpecialtyCeilings from '../assets/images/services/service-specialty-ceilings.jpg';
import imgWallPainting from '../assets/images/services/service-wall-painting.jpg';

export default function Services() {
  const services = [
    {
      title: 'Drywall Installation',
      description: 'Interior and exterior gypsum board systems, fire-rated assemblies, and sound-proofing.',
      image: imgDrywall,
    },
    {
      title: 'Insulation Solutions',
      description: 'Thermal and acoustic insulation, fire-stopping, and blow-in insulation systems.',
      image: imgInsulation,
    },
    {
      title: 'Steel Stud Framing',
      description: 'Light gauge interiors, exterior wind-load framing, and load-bearing steel systems.',
      image: imgSteelFraming,
    },
    {
      title: 'Taping & Texturing',
      description: 'Finishes from level 1 to 5, bead and trim installation using premium systems.',
      image: imgTaping,
    },
    {
      title: 'Ceiling Systems',
      description: 'Acoustic T-bar ceilings and metal linear ceiling systems for modern interiors.',
      image: imgCeilingSystems,
    },
    {
      title: 'Specialty Ceilings & Finishes',
      description: 'Wood slats, soffits, and custom ceiling solutions for an architectural look.',
      image: imgSpecialtyCeilings,
    },
    {
      title: 'Wall Painting',
      description: 'Foundations, slabs, finishing and structural concrete services.',
      image: imgWallPainting,
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-20 lg:py-24 bg-[#edf1df] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest-900 font-bold text-xs uppercase tracking-widest mb-3">
            What We Offer
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-forest-900 tracking-tight">
            Comprehensive Construction &amp; Finishing Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-700">
            Precision engineering and artisanal finish craftsmanship across commercial and residential developments.
          </p>
        </div>

        {/* Services Cards Container */}
        {/* Row 1: Top 4 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {services.slice(0, 4).map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/60 hover:-translate-y-1 flex flex-col group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-forest-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2: Bottom 3 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.slice(4).map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-200/60 hover:-translate-y-1 flex flex-col group"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-forest-900 mb-2 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Banner */}
        <div className="mt-14 sm:mt-18 bg-forest text-white rounded-3xl p-8 sm:p-12 text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Need a personalized commercial or residential proposal?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 max-w-xl">
              Our site engineers and estimators provide complimentary blueprint takeoffs and on-site consultations.
            </p>
          </div>
          <Button 
            variant="primary" 
            className="whitespace-nowrap !rounded-2xl !bg-[#cde973] hover:!bg-[#b8d85f] text-forest-900 font-bold"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request A Service Quote
          </Button>
        </div>

      </div>
    </section>
  );
}
