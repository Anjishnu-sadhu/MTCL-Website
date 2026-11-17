import React, { useState } from 'react';
import Button from '../components/Button';

// Local HD Portfolio Project Images
import proj1 from '../assets/images/portfolio/project-1.jpg';
import proj2 from '../assets/images/portfolio/project-2.jpg';
import proj3 from '../assets/images/portfolio/project-3.jpg';
import proj4 from '../assets/images/portfolio/project-4.jpg';
import proj5 from '../assets/images/portfolio/project-5.jpg';
import proj6 from '../assets/images/portfolio/project-6.jpg';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'The Pinnacle Financial Tower',
      category: 'commercial',
      categoryLabel: 'Commercial Build',
      location: 'Metro Downtown Core',
      image: proj1,
      area: '145,000 sq ft',
      timeline: '8 Months',
      scope: 'Light-gauge steel stud framing, multi-layer fire-rated drywall, and acoustic grid ceiling systems across 14 commercial floors.',
      highlights: ['Level-5 Finish Throughout', 'LEED Gold Certified', 'Night-Shift Mobilization']
    },
    {
      id: 2,
      title: 'Oakridge Luxury Hillside Estate',
      category: 'residential',
      categoryLabel: 'Luxury Residential',
      location: 'North Hills Estates',
      image: proj2,
      area: '12,500 sq ft',
      timeline: '5 Months',
      scope: 'Custom architectural wood slat ceilings, soundproof home cinema partitions, and designer wall finishes.',
      highlights: ['Custom Soffit Detailing', 'Acoustic Wall Isolation', 'Zero Seam Imperfections']
    },
    {
      id: 3,
      title: 'Metropolis Corporate Headquarters',
      category: 'commercial',
      categoryLabel: 'Commercial Interior',
      location: 'West Valley Tech Corridor',
      image: proj3,
      area: '85,000 sq ft',
      timeline: '6 Months',
      scope: 'Acoustic T-bar ceiling systems, conference room sound isolation assemblies, and architectural soffit lighting enclosures.',
      highlights: ['Custom Linear Baffles', 'Low-VOC Wall Coatings', 'High STC Sound Ratings']
    },
    {
      id: 4,
      title: 'Aerospace Logistics Logistics Center',
      category: 'framing',
      categoryLabel: 'Structural Framing',
      location: 'East Industrial Corridor',
      image: proj4,
      area: '220,000 sq ft',
      timeline: '10 Months',
      scope: 'Heavy-duty load-bearing structural steel stud assemblies, industrial demising walls, and thermal insulation barrier systems.',
      highlights: ['Heavy-Gauge Steel Tracks', '4-Hour Fire Wall Assemblies', 'Seismic Restraints']
    },
    {
      id: 5,
      title: 'Civic Innovation Terminal Complex',
      category: 'commercial',
      categoryLabel: 'Infrastructure',
      location: 'Central Transport District',
      image: proj5,
      area: '180,000 sq ft',
      timeline: '12 Months',
      scope: 'Complete public concourse gypsum board installation, high-impact security drywall, and exterior wind-load framing.',
      highlights: ['Public Safety Compliance', 'High-Traffic Durability', 'Escrow Milestone Tracking']
    },
    {
      id: 6,
      title: 'The Azure Waterfront Penthouse',
      category: 'finishes',
      categoryLabel: 'Specialty Finishes',
      location: 'South Coast Bay',
      image: proj6,
      area: '9,800 sq ft',
      timeline: '4 Months',
      scope: 'Bespoke walnut wood slat ceiling assemblies, curved architectural drywall bulkheads, and hand-troweled Venetian texture.',
      highlights: ['Curved Bulkhead Drywall', 'Artisanal Woodwork', 'Moisture-Resistant Gypsum']
    }
  ];

  const filteredProjects = projects;

  return (
    <section id="portfolio" className="py-16 sm:py-20 lg:py-24 bg-cream-100 relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest/10 text-forest-900 font-bold text-xs uppercase tracking-widest mb-3">
            Proven Craftsmanship
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-forest-900 tracking-tight">
            Our Portfolio
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            A showcase of our landmark commercial developments, high-precision steel stud framing, and bespoke residential finishes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-200/80 hover:-translate-y-1.5 flex flex-col group cursor-pointer"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Category Pill Tag */}
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3.5 py-1.5 bg-forest-900/90 text-limeAccent backdrop-blur-md rounded-full shadow-md">
                    {project.categoryLabel}
                  </span>
                </div>

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-forest-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-forest-900 font-bold text-xs px-4 py-2 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    View Project Details &rarr;
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-semibold text-gray-500 mb-2">
                    <span className="flex items-center gap-1 text-forest-800">
                      📍 {project.location}
                    </span>
                    <span>{project.area}</span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-forest-900 group-hover:text-forest transition-colors mb-2 leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 line-clamp-2 leading-relaxed">
                    {project.scope}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-forest">
                  <span>Completed Milestone</span>
                  <span className="group-hover:translate-x-1 transition-transform">Details &rarr;</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Detailed Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-900/80 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200">
              <div className="relative aspect-[16/10] w-full">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-forest-900/80 text-white flex items-center justify-center text-xl font-bold hover:bg-forest transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div>
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 bg-[#d6df8f] text-forest-900 rounded-full">
                    {selectedProject.categoryLabel}
                  </span>
                  <h3 className="text-2xl font-black text-forest-900 mt-3">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs font-semibold text-gray-500 mt-1">
                    📍 {selectedProject.location} • Total Footprint: {selectedProject.area} • Delivery: {selectedProject.timeline}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-forest-900 uppercase tracking-wider mb-2">Project Scope &amp; Craft</h4>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {selectedProject.scope}
                  </p>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-forest-900 uppercase tracking-wider mb-2">Quality Standards Achieved</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.highlights.map((h, i) => (
                      <span key={i} className="text-xs font-semibold px-3 py-1.5 bg-cream-200 text-forest-900 rounded-lg">
                        ✓ {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-3 justify-end">
                  <Button
                    variant="secondary"
                    className="!rounded-xl"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close
                  </Button>
                  <Button
                    variant="primary"
                    className="!rounded-xl !bg-[#cde973] text-forest-900 font-bold"
                    onClick={() => {
                      setSelectedProject(null);
                      const element = document.getElementById('contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Inquire About Similar Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom Metrics Bar */}
        <div className="mt-14 sm:mt-18 bg-[#043023] text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-black text-limeAccent">500+</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Completed Deliveries</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">99.4%</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">On-Time Milestones</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-limeAccent">Zero</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Lost-Time Safety Incidents</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-black text-white">100%</p>
              <p className="text-xs sm:text-sm text-gray-300 mt-1">Municipal Code Pass Rate</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
