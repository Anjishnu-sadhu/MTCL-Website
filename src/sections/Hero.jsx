import React from 'react';
import workerImg from '../assets/images/worker.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative w-full bg-[#043023] text-white overflow-hidden flex items-end pt-12 sm:pt-16 lg:pt-20 pb-0"
    >
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* Left Text Block */}
          <div className="lg:col-span-7 xl:col-span-7 text-left pb-12 sm:pb-16 lg:pb-24 pt-4">
            
            {/* Headline matching screenshot */}
            <h1 className="text-[36px] sm:text-[48px] md:text-[56px] lg:text-[60px] xl:text-[66px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white">
              Building Strength <br />
              <span className="text-[#cbe875]">Framing Excellence.</span>
            </h1>

            {/* Subtitle matching screenshot */}
            <p className="mt-5 sm:mt-6 text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#cfded6] max-w-[540px] leading-[1.5]">
              Specialist in Drywall, Insulation & Steel Stud Framing. 
            </p>

            {/* Action Buttons: Get Start & Our Service */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 sm:gap-5">
              
              {/* Primary button: Get Start */}
              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-[#cbe875] hover:bg-[#b8d85f] active:scale-95 text-[#142820] font-bold text-[16px] sm:text-[18px] px-8 sm:px-9 py-3 sm:py-3.5 rounded-2xl transition-all duration-200 shadow-md"
              >
                Get Start
              </button>

              {/* Secondary button: Our Service */}
              <button
                type="button"
                onClick={() => {
                  const element = document.getElementById('services');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="border-2 border-[#527f6c] hover:border-white text-white hover:bg-white/10 active:scale-95 font-semibold text-[16px] sm:text-[18px] px-7 sm:px-8 py-3 sm:py-3.5 rounded-2xl transition-all duration-200"
              >
                Our Service
              </button>

            </div>

          </div>

          {/* Right Column: Worker and authentic Roof Chevron */}
          <div className="lg:col-span-5 xl:col-span-5 flex justify-center lg:justify-end items-end relative self-end w-full">
            <div className="relative w-full max-w-[380px] sm:max-w-[440px] lg:max-w-[500px] xl:max-w-[540px] flex items-end justify-center">
              
              {/* Authentic Roofline Chevron Motif anchored behind the worker */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none select-none z-0" 
                viewBox="-50 0 520 405" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="xMidYMid meet"
              >
                <path 
                  d="M -40 370 L 335 95 L 460 200" 
                  stroke="#1c4932" 
                  strokeWidth="38" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                />
              </svg>

              {/* Seamless Transparent Worker Image resting on the section bottom */}
              <img
                src={workerImg}
                alt="Construction Worker with Hard Hat and Gloves"
                className="relative z-10 w-full h-auto object-contain object-bottom pointer-events-none select-none block"
                loading="eager"
              />

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
