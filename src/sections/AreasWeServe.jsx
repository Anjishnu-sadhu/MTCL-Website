import React, { useState } from 'react';
import Button from '../components/Button';
import canadaMap from '../assets/images/canada-map-green.png';

export default function AreasWeServe() {
  const [selectedArea, setSelectedArea] = useState('calgary');

  const serviceAreas = [
    {
      id: 'calgary',
      name: 'Calgary',
      subtitle: 'Primary Metropolitan Service Hub',
      description: 'Including North East, North West, South East, South West, Inner city.',
      services: ['Full Commercial Drywall', 'Residential Interior Finishes', 'Steel Stud Framing', 'T-Bar Ceilings'],
      position: 'top-left',
    },
    {
      id: 'rocky-view',
      name: 'Rocky View County',
      subtitle: 'Northern & Surrounding Communities',
      description: 'Airdrie, Cochrane, Chestermere, Langdon, Balzac & All Nearby',
      services: ['Industrial Warehouses', 'Subdivision Framing', 'Acoustic Soundproofing', 'Blow-In Insulation'],
      position: 'bottom-left',
    },
    {
      id: 'foothills',
      name: 'Foot Hills County',
      subtitle: 'Southern Regional Coverage',
      description: 'Okotoks, High River and All Nearby',
      services: ['Estate Home Drywall', 'Custom Ceiling Soffits', 'Level-5 Finish Taping', 'Wall Painting'],
      position: 'top-right',
    },
    {
      id: 'canmore',
      name: 'Canmore',
      subtitle: 'Bow Valley & Mountain Region',
      description: 'Nearby Canmore Nordic Centre Provincial Park, the Grassi Lakes Trail weaves past a waterfall to 2 turquoise blue lakes.',
      services: ['Architectural Wood Slats', 'Moisture-Barrier Gypsum', 'Resilient Mountain Framing', 'Bespoke Ceilings'],
      position: 'bottom-right',
    },
  ];

  const leftAreas = serviceAreas.filter((a) => a.position.includes('left'));
  const rightAreas = serviceAreas.filter((a) => a.position.includes('right'));

  return (
    <section id="areas" className="py-16 sm:py-20 lg:py-28 bg-[#fbfcee] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#cbe875]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-forest/10 text-forest font-bold text-xs uppercase tracking-widest mb-3.5">
            Regional Service Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-forest-900 tracking-tight">
            Areas We Serve
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Delivering expert commercial and residential drywall, steel framing, ceiling systems, and custom interior finishes across Calgary and surrounding Alberta communities.
          </p>
        </div>

        {/* 3-Column Visual Presentation matching user's layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column: Calgary & Rocky View County */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-14 order-2 lg:order-1">
            {leftAreas.map((area) => {
              const isSelected = selectedArea === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-white shadow-xl border-forest/30 scale-[1.02]'
                      : 'bg-transparent hover:bg-white/70 border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Emerald Pin Icon matching screenshot */}
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#107548]/10 flex items-center justify-center text-[#107548]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-[28px] font-black text-[#107548] leading-tight">
                        {area.name}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                        {area.description}
                      </p>

                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 animate-fadeIn">
                          {area.services.map((srv, idx) => (
                            <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-cream-200 text-forest-900 rounded-md">
                              ✓ {srv}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Center Column: Canada Map Graphic with Live Beacon Pin on Alberta/Calgary */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center order-1 lg:order-2 my-4 lg:my-0">
            <div className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[440px]">
              
              {/* Canada Map Silhouette */}
              <img
                src={canadaMap}
                alt="Canada Service Coverage Map - Calgary Alberta Region"
                className="w-full h-auto object-contain filter drop-shadow-[0_12px_24px_rgba(4,48,35,0.15)] select-none pointer-events-none"
              />

              {/* Pulsing Regional Pin on Calgary / Southern Alberta */}
              <div 
                className="absolute"
                style={{ top: '75%', left: '24%' }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-8 w-8 rounded-full bg-[#cbe875] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-[#cbe875] border-2 border-forest-900 shadow-md"></span>
                </div>

                {/* Pin Tooltip */}
                <div className="absolute left-6 -top-2 whitespace-nowrap bg-forest-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl border border-white/20 flex items-center gap-1.5 z-20">
                  <span className="w-2 h-2 rounded-full bg-[#cbe875] animate-pulse"></span>
                  <span>Calgary HQ &amp; Dispatch</span>
                </div>
              </div>

            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-widest text-forest-800 bg-[#edf1df] px-4 py-1.5 rounded-full border border-forest/10">
              Calgary Metropolitan Region &amp; Bow Valley Corridor
            </p>
          </div>

          {/* Right Column: Foot Hills County & Canmore */}
          <div className="lg:col-span-4 space-y-10 sm:space-y-14 order-3">
            {rightAreas.map((area) => {
              const isSelected = selectedArea === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setSelectedArea(area.id)}
                  className={`p-6 sm:p-7 rounded-3xl transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-white shadow-xl border-forest/30 scale-[1.02]'
                      : 'bg-transparent hover:bg-white/70 border-transparent hover:border-gray-200'
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    {/* Emerald Pin Icon matching screenshot */}
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-[#107548]/10 flex items-center justify-center text-[#107548]">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-[28px] font-black text-[#107548] leading-tight">
                        {area.name}
                      </h3>
                      <p className="mt-3 text-sm sm:text-base text-gray-700 leading-relaxed font-normal">
                        {area.description}
                      </p>

                      {isSelected && (
                        <div className="mt-4 pt-3 border-t border-gray-100 flex flex-wrap gap-1.5 animate-fadeIn">
                          {area.services.map((srv, idx) => (
                            <span key={idx} className="text-xs font-semibold px-2.5 py-1 bg-cream-200 text-forest-900 rounded-md">
                              ✓ {srv}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Banner: Project Dispatch Commitment */}
        <div className="mt-16 sm:mt-20 bg-forest text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 text-center lg:text-left">
          <div className="max-w-2xl">
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-2">
              Ready to build or renovate in any of our coverage zones?
            </h3>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              Our site estimators provide fast on-site visits across Calgary, Rocky View County, Foothills, and Canmore with guaranteed project timelines.
            </p>
          </div>

          <Button
            variant="primary"
            className="!bg-[#cbe875] hover:!bg-[#b8d85f] text-forest-900 font-bold !rounded-2xl !px-8 !py-3.5 whitespace-nowrap shadow-lg"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) element.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Schedule On-Site Consultation
          </Button>
        </div>

      </div>
    </section>
  );
}
