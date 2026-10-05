import React from 'react';
import { education } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="bg-black py-24 px-6 md:px-12 text-white relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center uppercase tracking-tight" data-aos="fade-up">
          Educational <span className="text-[#ff2a2a]">Journey</span>
        </h2>

        <div className="relative border-l-4 border-[#ff2a2a]/30 ml-4 md:ml-8">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className="mb-12 ml-8 md:ml-12 relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline dot */}
              <div className="absolute -left-[42px] md:-left-[58px] top-1 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#ff2a2a] border-4 border-black group-hover:scale-125 transition-transform duration-300 z-10 flex items-center justify-center text-xs shadow-[0_0_15px_rgba(255,42,42,0.6)]">
                {edu.icon}
              </div>

              {/* Content Card */}
              <div className="bg-gray-900/50 hover:bg-gray-800/80 p-6 md:p-8 rounded-2xl border border-gray-800 hover:border-[#ff2a2a]/50 transition-all duration-300 backdrop-blur-sm group-hover:-translate-y-2 group-hover:shadow-[0_10px_30px_rgba(255,42,42,0.1)]">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white">{edu.degree}</h3>
                  <span className="bg-[#ff2a2a]/20 text-[#ff2a2a] px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap border border-[#ff2a2a]/30">
                    {edu.year}
                  </span>
                </div>
                
                <h4 className="text-lg text-gray-300 font-semibold mb-2">{edu.institution}</h4>
                {edu.university && (
                  <p className="text-gray-400 mb-4">{edu.university}</p>
                )}
                
                <div className="inline-block mt-2 px-4 py-2 bg-black/50 rounded-lg border border-gray-800">
                  <span className="text-sm font-bold text-white/60 uppercase tracking-wider mr-2">Score/Grade:</span>
                  <span className="text-white font-bold">{edu.score}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
