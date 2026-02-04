
import React from 'react';
import { PrototypeItem } from '../types';
import { Button } from './Button';

interface PrototypeCardProps {
  item: PrototypeItem;
}

export const PrototypeCard: React.FC<PrototypeCardProps> = ({ item }) => {
  return (
    <div className="card-hover-effect bg-[#15151a]/40 border border-white/10 rounded-2xl md:rounded-[2rem] p-5 md:p-10 flex flex-col group">
      <div className="flex justify-between items-start mb-6 md:mb-10">
        <div className="w-12 h-12 md:w-16 md:h-16 bg-white/[0.03] border border-white/[0.05] flex items-center justify-center rounded-xl md:rounded-2xl text-3xl md:text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {item.icon}
        </div>
        {item.badge && (
          <span className="px-3 py-1 bg-[#ff8a00]/10 text-[#ff8a00] text-[10px] font-bold tracking-widest uppercase rounded-full border border-[#ff8a00]/20">
            {item.badge}
          </span>
        )}
      </div>

      <div className="mb-5 md:mb-8">
        <h3 className="text-xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-[#ff8a00] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-[#ff8a00]/80 text-sm font-semibold mb-5 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          "{item.slogan}"
        </p>
        <p className="text-gray-400 text-sm md:text-base leading-relaxed font-medium opacity-90">
          {item.description}
        </p>
      </div>

      <div className="mb-6 md:mb-10 space-y-3 md:space-y-4">
        <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] ml-1">Core Experience</h4>
        <div className="space-y-3 md:space-y-4">
          {item.keyValues.map((val, idx) => (
            <div key={idx} className="flex gap-3 md:gap-4 items-start">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8a00] flex-shrink-0 group-hover:scale-125 transition-transform"></div>
              <p className="flex-1 text-xs md:text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
                {val}
              </p>
            </div>
          ))}
        </div>
        {item.disclaimer && (
          <p className="mt-6 pt-4 border-t border-white/[0.03] text-[11px] text-gray-600 italic leading-relaxed">
            * {item.disclaimer}
          </p>
        )}
      </div>

      {item.link ? (
        <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Button 
            href={item.link} 
            target="_blank" 
            rel="noopener" 
            className="flex-1 text-[13px] font-bold tracking-tight"
          >
            테스트 실행
            <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Button>
          
          {item.serviceLink && (
            <Button 
              href={item.serviceLink} 
              target="_blank" 
              rel="noopener" 
              variant="outline"
              className="flex-1 text-[12px] font-bold border-white/5 hover:border-white/20 text-gray-400 hover:text-white"
            >
              서비스 URL
              <svg className="ml-2 w-3.5 h-3.5 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Button>
          )}
        </div>
      ) : (
        <div className="mt-auto flex items-center justify-center py-4">
          <span className="text-gray-500 text-sm font-medium italic">준비 중...</span>
        </div>
      )}
    </div>
  );
};
