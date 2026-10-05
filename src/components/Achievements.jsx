import React from 'react';
import { achievementsList, leadershipList } from '../data/portfolioData';

const Achievements = () => {
  return (
    <section id="experience" className="bg-white py-24 px-6 md:px-12 relative font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-20" data-aos="fade-up">
          <h2 className="text-5xl md:text-7xl font-black text-black uppercase tracking-tighter mb-4">
            Leadership & <br className="hidden md:block"/> <span className="text-[#ff2a2a]">Achievements</span>
          </h2>
          <div className="w-24 h-2 bg-[#ff2a2a] mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl font-medium">
            A track record of taking initiative, leading teams, and driving excellence both inside and outside the classroom.
          </p>
        </div>

        {/* Top Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {achievementsList.map((achievement, index) => (
            <div 
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl hover:border-black transition-colors duration-300 group relative overflow-hidden"
            >
              {/* Decorative background element */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-gray-100 rounded-full group-hover:scale-150 group-hover:bg-[#ff2a2a]/10 transition-transform duration-700 pointer-events-none"></div>
              
              <div className="relative z-10 flex items-start gap-6">
                <div className="text-5xl bg-white w-20 h-20 flex items-center justify-center rounded-xl shadow-sm border border-gray-100 flex-shrink-0 group-hover:-translate-y-2 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-black text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">
                    {achievement.stats}
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-3 leading-tight">{achievement.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{achievement.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Roles List */}
        <div className="bg-black text-white rounded-3xl p-8 md:p-12 relative overflow-hidden" data-aos="zoom-in">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff2a2a] rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/3"></div>
          <h3 className="text-3xl font-black mb-10 border-b border-white/20 pb-6">Key Roles</h3>
          
          <div className="space-y-8">
            {leadershipList.map((role, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-8 items-start group">
                <div className="w-full md:w-1/4 shrink-0">
                  <span className="text-[#ff2a2a] font-bold uppercase tracking-wider text-sm mb-1 block">
                    {role.badge}
                  </span>
                  <h4 className="text-xl font-bold">{role.role}</h4>
                </div>
                
                <div className="w-full md:w-3/4 pb-8 border-b border-white/10 group-last:border-0 group-last:pb-0">
                  <h5 className="text-lg font-semibold text-gray-300 mb-2">{role.title}</h5>
                  <p className="text-gray-400">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
