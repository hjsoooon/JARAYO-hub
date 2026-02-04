
import React, { useState } from 'react';
import { PROTOTYPES, FAQS } from './constants';
import { PrototypeCard } from './components/PrototypeCard';
import { Button } from './components/Button';

const App: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('hj.son@huray.net');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToPrototypes = () => {
    const el = document.getElementById('prototypes');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-[100] bg-[#0f0f12]/70 backdrop-blur-xl border-b border-white/[0.05]">
        <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-[#ff8a00] rounded-md flex items-center justify-center font-inter font-black text-white italic text-xs shadow-lg shadow-[#ff8a00]/20">J</div>
            <span className="font-inter font-bold text-lg tracking-tighter">JARAYO</span>
          </div>
          <button 
            onClick={scrollToPrototypes} 
            className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/50 hover:text-[#ff8a00] transition-colors"
          >
            Explore Hub
          </button>
        </div>
      </nav>

      <main className="pt-14 md:pt-16">
        {/* Hero Section */}
        <section className="relative px-4 md:px-6 pt-16 md:pt-24 pb-12 md:pb-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[400px] bg-[#ff8a00]/5 blur-[120px] rounded-full pointer-events-none -z-10 opacity-60"></div>
          
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2.5 px-3 py-1 bg-white/[0.03] border border-white/10 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff8a00] animate-pulse"></span>
              <span className="font-inter text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500">Internal Prototype Lab</span>
            </div>
            
            <h1 className="font-inter text-4xl sm:text-5xl md:text-8xl font-extrabold mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              <span className="text-[#ff8a00]">JARAYO</span> <br className="hidden md:block" />
              <span className="text-premium-gradient">Prototype Hub</span>
            </h1>
            
            <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed font-medium tracking-tight opacity-80 px-2">
              더 나은 육아 경험을 위한 4가지 실험적 기능.<br />
              프로토타입을 직접 실행하고 혁신을 경험해 보세요.
            </p>

            {/* Reverted Test Notice Box Style with Specific Text */}
            <div className="relative group max-w-md mx-auto mb-12">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ff8a00]/20 to-transparent rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative flex items-start gap-4 p-5 bg-[#15151a] border border-white/10 rounded-2xl text-left">
                <div className="flex-shrink-0 w-10 h-10 bg-[#ff8a00]/10 rounded-full flex items-center justify-center border border-[#ff8a00]/20">
                  <svg className="w-5 h-5 text-[#ff8a00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-1 tracking-tight">테스트 안내</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium">
                    본 공간은 <span className="text-gray-300 font-semibold">사내 테스트 전용 빌드</span>입니다. 모든 기능은 개발 중이며 <span className="text-gray-400 border-b border-gray-700 underline-offset-4">실제 서비스와 상세 내용이 다를 수 있습니다.</span>
                  </p>
                  <p className="text-[13px] text-gray-500 leading-relaxed font-medium mt-2">
                    각 설문 항목의 테스트가 완료되면 반드시 <span className="text-[#ff8a00] font-semibold">작업 종료 버튼</span>을 눌러주세요. 창을 그냥 닫으면 결과가 누락될 수 있어요.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prototype Grid */}
        <section id="prototypes" className="py-16 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center mb-10 md:mb-20">
            <h2 className="font-inter text-xs font-bold tracking-[0.4em] uppercase text-[#ff8a00] mb-4">Innovation Library</h2>
            <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-12">
            {PROTOTYPES.map((item) => (
              <PrototypeCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-32 px-4 md:px-6 border-t border-white/[0.03] bg-[#0c0c0e]">
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col items-center mb-12">
              <h2 className="font-inter text-xs font-bold tracking-[0.4em] uppercase text-[#ff8a00] mb-4">자주묻는 질문</h2>
              <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="space-y-3">
              {FAQS.map((faq, idx) => (
                <div key={idx} className="group border border-white/[0.05] rounded-xl overflow-hidden bg-white/[0.01]">
                  <button 
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-4 md:px-7 py-4 md:py-5 text-left flex justify-between items-center group-hover:bg-white/[0.02] transition-all"
                  >
                    <span className="font-semibold text-sm tracking-tight text-white/90 group-hover:text-white">{faq.question}</span>
                    <svg className={`w-4 h-4 text-[#ff8a00] opacity-50 transition-transform duration-500 ${openFaq === idx ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  <div className={`transition-all duration-500 ease-[cubic-bezier(0.16, 1, 0.3, 1)] overflow-hidden ${openFaq === idx ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 md:px-7 pb-5 md:pb-6 pt-2 text-[13px] md:text-[13.5px] text-gray-500 leading-relaxed font-medium">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 md:py-24 px-4 md:px-6 border-t border-white/[0.03] text-center bg-[#0c0c0e]">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-10 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            <div className="w-5 h-5 bg-white/10 rounded flex items-center justify-center font-inter font-black text-[9px] italic text-white">J</div>
            <span className="font-inter font-bold text-xs tracking-tighter">JARAYO</span>
          </div>
          <p className="font-inter text-[10px] font-bold tracking-[0.2em] uppercase text-gray-600 mb-2">JARAYO Internal Platform</p>
          <p className="font-inter text-[9px] text-gray-700 mb-10 tracking-widest uppercase">&copy; 2026 JARAYO TEAM. ALL RIGHTS RESERVED.</p>
          <div className="flex justify-center gap-10">
            <button 
              onClick={() => setShowContactModal(true)}
              className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#ff8a00] transition-colors"
            >
              Contact
            </button>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-[#ff8a00] transition-colors">Internal Docs</a>
          </div>
        </div>
      </footer>

      {/* Contact Modal */}
      {showContactModal && (
        <div 
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="relative bg-[#15151a] border border-white/10 rounded-2xl p-6 md:p-8 max-w-sm mx-4 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-12 h-12 bg-[#ff8a00]/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-[#ff8a00]/20">
              <svg className="w-6 h-6 text-[#ff8a00]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-3 tracking-tight">Contact</h3>
            <p className="text-sm text-gray-400 mb-4 leading-relaxed">
              아래 이메일로 문의해 주세요.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 mb-4">
              <span className="text-white font-medium text-sm">hj.son@huray.net</span>
            </div>
            <button 
              onClick={copyEmail}
              className={`inline-flex items-center gap-2 px-5 py-2.5 text-sm font-bold rounded-lg transition-all ${
                copied 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[#ff8a00] text-white hover:bg-[#ff8a00]/90'
              }`}
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  복사 완료!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  복사하기
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
