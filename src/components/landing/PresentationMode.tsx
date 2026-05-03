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
      <div className="absolute top-0 left-0 w-full p-2 md:p-4 flex justify-between items-center z-50">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-md px-3 py-1 shadow-sm border border-gray-100">
          <img src="/images/logo.png" alt="Logo" className="h-5 md:h-6 w-auto" />
          <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest text-[#FF1E2D]">
            SIBF-CAI
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="bg-white/80 hover:bg-red-500 hover:text-white backdrop-blur-md transition-all rounded-none w-8 h-8 md:w-10 md:h-10 border border-gray-100"
        >
          <X className="w-4 h-4 md:w-5 md:h-5" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex flex-col items-center justify-center bg-slate-50/30 overflow-hidden">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-6xl mx-auto md:p-6 lg:p-12 animate-in fade-in slide-in-from-right-8 duration-500 flex flex-col"
        >
          <div className="flex-1 bg-white shadow-xl md:shadow-2xl border-t-4 border-[#FF1E2D] flex flex-col overflow-hidden md:rounded-lg">
            <div className="flex-1 overflow-y-auto p-4 md:p-0 scrollbar-hide">
              {sections[currentSlide].component}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile-Optimized Navigation */}
      <div className="w-full bg-white border-t border-gray-100 p-2 md:p-4 flex flex-col gap-2 z-50">
        <div className="max-w-xl mx-auto w-full flex justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 rounded-none w-10 h-10 border-gray-200"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 rounded-none w-10 h-10 border-gray-200"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex-1 text-center hidden sm:block">
            <h3 className="text-[#2B2B2B] font-black uppercase tracking-[0.2em] text-[10px] italic truncate">
              {sections[currentSlide].title || "BIENVENIDA"}
            </h3>
          </div>

          <div className="text-[10px] font-bold text-[#FF1E2D] uppercase tracking-widest min-w-[50px] text-right">
            {currentSlide + 1} / {sections.length}
          </div>
        </div>
        <div className="max-w-xl mx-auto w-full">
          <Progress value={progress} className="h-[3px] bg-gray-100 rounded-none" />
        </div>
      </div>
    </div>
  );
}
