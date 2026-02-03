
import React, { useState, useEffect } from 'react';
import { PrototypeItem } from '../types';
import { Button } from './Button';

interface PrototypeCardProps {
  item: PrototypeItem;
}

export const PrototypeCard: React.FC<PrototypeCardProps> = ({ item }) => {
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const savedCount = localStorage.getItem(`clicks_${item.id}`);
    if (savedCount) {
      setClickCount(parseInt(savedCount, 10));
    }
  }, [item.id]);

  const handleTestClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);
    localStorage.setItem(`clicks_${item.id}`, newCount.toString());
  };

  return (
    <div className="card-hover-effect bg-[#15151a]/40 border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col group">
      <div className="flex justify-between items-start mb-10">
        <div className="w-16 h-16 bg-white/[0.03] border border-white/[0.05] flex items-center justify-center rounded-2xl text-4xl shadow-inner group-hover:scale-110 transition-transform duration-500">
          {item.icon}
        </div>
        <div className="flex flex-col items-end gap-3">
          {item.badge && (
            <span className="px-3 py-1 bg-[#ff8a00]/10 text-[#ff8a00] text-[10px] font-bold tracking-widest uppercase rounded-full border border-[#ff8a00]/20">
              {item.badge}
            </span>
          )}
          <div className="flex items-center gap-1.5 py-1 px-2 bg-white/[0.03] rounded-md border border-white/[0.05]">
            <span className="w-1 h-1 rounded-full bg-[#ff8a00]"></span>
            <span className="text-[9px] text-gray-500 font-bold tracking-tighter uppercase">
              Tested: <span className="text-gray-300">{clickCount}</span>
            </span>
          </div>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight group-hover:text-[#ff8a00] transition-colors duration-300">
          {item.title}
        </h3>
        <p className="text-[#ff8a00]/80 text-sm font-semibold mb-5 italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          "{item.slogan}"
        </p>
        <p className="text-gray-400 text-base leading-relaxed font-medium opacity-90">
          {item.description}
        </p>
      </div>

      <div className="mb-10 space-y-4">
        <h4 className="text-[10px] font-bold text-gray-600 uppercase tracking-[0.2em] ml-1">Core Experience</h4>
        <div className="space-y-4">
          {item.keyValues.map((val, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#ff8a00] group-hover:scale-125 transition-transform"></div>
              <p className="flex-1 text-sm text-gray-400 font-medium leading-relaxed group-hover:text-gray-300 transition-colors">
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

      <div className="mt-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Button 
          href={item.link} 
          target="_blank" 
          rel="noopener" 
          onClick={handleTestClick}
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
    </div>
  );
};
