import React from 'react';

export default function Features() {
  const highlights = [
    {
      num: '01',
      title: 'Structural Durability',
      desc: 'All projects undergo strict geological and seismic testing to ensure minimum 80+ years structural lifespan.'
    },
    {
      num: '02',
      title: 'Smart Tech Integration',
      desc: 'We incorporate energy management automation, IoT sensor wiring, and modern security provisions in every build.'
    },
    {
      num: '03',
      title: 'Zero Incident Safety',
      desc: 'Strict OSHA & international worker safety compliance on all active construction and excavation sites.'
    },
    {
      num: '04',
      title: 'Financial Predictability',
      desc: 'Escrow-backed phase milestone releases so you only pay as real, verifiable progress is inspected.'
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-forest-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-limeAccent bg-white/10 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Why Partner With Us
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Setting New Standards in Modern Construction
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300">
            Engineered strength, aesthetic elegance, and complete delivery reliability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-[#0e3b2c] p-6 sm:p-8 rounded-2xl border border-white/10 hover:border-limeAccent/60 transition-colors group flex flex-col justify-between"
            >
              <div>
                <span className="text-3xl sm:text-4xl font-black text-limeAccent/60 group-hover:text-limeAccent transition-colors">
                  {item.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-semibold text-limeAccent">
                <span>Verified Standard</span>
                <span className="inline-block transform group-hover:translate-x-1 transition-transform">&rarr;</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
