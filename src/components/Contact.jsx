import React from 'react';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="bg-black py-24 px-6 md:px-12 relative overflow-hidden font-sans">
      
      {/* Decorative Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none z-0">
        GET IN TOUCH
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        
        <div data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter">
            Let's <span className="text-transparent [-webkit-text-stroke:2px_#ff2a2a]">Talk</span>
          </h2>
          <div className="w-20 h-2 bg-[#ff2a2a] mx-auto mb-10"></div>
          <p className="text-gray-400 text-lg md:text-xl font-medium mb-16 max-w-lg mx-auto leading-relaxed">
            I'm currently open to new opportunities. Feel free to reach out directly via email, phone, or connect with me!
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white">
          
          {/* Email */}
          <div data-aos="fade-up" data-aos-delay="100" className="bg-gray-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-[#ff2a2a]/60 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-center items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3">Email Me At</span>
            <a href={`mailto:${personalInfo.emails.primary}`} className="text-base sm:text-lg font-bold hover:text-[#ff2a2a] transition-colors break-all">
              {personalInfo.emails.primary}
            </a>
          </div>

          {/* Phone */}
          <div data-aos="fade-up" data-aos-delay="200" className="bg-gray-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-[#ff2a2a]/60 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-center items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3">Call Me At</span>
            <a href={`tel:${personalInfo.phone.replace(/[\s-]/g, '')}`} className="text-lg sm:text-xl font-bold hover:text-[#ff2a2a] transition-colors">
              {personalInfo.phone}
            </a>
          </div>

          {/* Location */}
          <div data-aos="fade-up" data-aos-delay="300" className="bg-gray-900/50 border border-white/10 p-8 rounded-3xl backdrop-blur-md hover:border-[#ff2a2a]/60 hover:bg-gray-900/80 transition-all duration-300 group flex flex-col justify-center items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 block mb-3">Based In</span>
            <p className="text-lg sm:text-xl font-bold text-gray-300">
              {personalInfo.location}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
