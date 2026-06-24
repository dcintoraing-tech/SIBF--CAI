'use client';

import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';

interface PresentationModeProps {
  sections: Array<{ id: string; title?: string; component: React.ReactNode }>;
  onClose: () => void;
}

export default function PresentationMode({ sections, onClose }: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [currentSlide]);

  const nextSlide = () => {
    if (currentSlide < sections.length - 1) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const progress = ((currentSlide + 1) / sections.length) * 100;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-in fade-in duration-500">
      {/* Minimal Floating Header */}
      <div className="absolute top-0 left-0 w-full p-3 md:p-6 flex justify-between items-center z-50">
        <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 shadow-xl border border-gray-100 rounded-none">
          <img src="/images/logo.png" alt="Logo" className="h-6 md:h-8 w-auto" />
          <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden sm:block"></div>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FF1E2D] hidden sm:block">
            SIBF-CAI PRESENTACIÓN
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="bg-white/90 hover:bg-[#FF1E2D] hover:text-white backdrop-blur-md transition-all rounded-none w-10 h-10 md:w-14 md:h-14 border border-gray-100 shadow-xl group"
        >
          <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col items-center justify-center bg-[#F8F9FA] overflow-hidden p-2 md:p-6 lg:p-12">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-[1600px] mx-auto animate-in fade-in slide-in-from-right-10 duration-500 flex flex-col"
        >
          <div className="flex-1 bg-white shadow-2xl border-t-[8px] md:border-t-[16px] border-[#FF1E2D] flex flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto p-6 md:p-12 lg:p-24 scroll-smooth">
              {sections[currentSlide].component}
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="w-full bg-white border-t border-gray-100 p-4 md:p-8 flex flex-col gap-6 z-50">
        <div className="max-w-4xl mx-auto w-full flex justify-between items-center gap-8">
          <div className="flex items-center gap-3 md:gap-6">
            <Button 
              variant="outline" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 rounded-none h-12 md:h-16 px-6 md:px-10 border-2 border-gray-100 font-black uppercase tracking-widest text-xs md:text-sm flex gap-3 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 rounded-none h-12 md:h-16 px-6 md:px-10 border-2 border-gray-100 font-black uppercase tracking-widest text-xs md:text-sm flex gap-3 transition-all"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 text-center hidden md:block">
            <h3 className="text-[#2B2B2B] font-black uppercase tracking-[0.5em] text-xs italic truncate">
              {sections[currentSlide].title || "INICIO"}
            </h3>
          </div>

          <div className="text-xs md:text-sm font-black text-[#FF1E2D] uppercase tracking-[0.3em] bg-slate-50 px-6 py-2 border border-gray-100">
            {currentSlide + 1} <span className="text-gray-300 mx-2">/</span> {sections.length}
          </div>
        </div>
        <div className="max-w-4xl mx-auto w-full">
          <Progress value={progress} className="h-1 md:h-2 bg-gray-100 rounded-none overflow-hidden">
            <div className="h-full red-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
          </Progress>
        </div>
      </div>
    </div>
  );
}
