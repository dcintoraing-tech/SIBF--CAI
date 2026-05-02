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
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md px-3 py-1 pointer-events-auto">
          <img src="/images/logo.png" alt="Logo" className="h-6 w-auto" />
          <span className="text-[8px] font-black uppercase tracking-widest text-[#FF1E2D]">
            SIBF-CAI
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="bg-white/10 hover:bg-red-500 hover:text-white backdrop-blur-md transition-all rounded-none w-10 h-10 pointer-events-auto border-none"
        >
          <X className="w-5 h-5" />
        </Button>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 relative flex items-center justify-center overflow-y-auto bg-slate-50/50">
        <div key={currentSlide} className="w-full max-w-6xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-right-8 duration-500">
          <div className="bg-white shadow-2xl overflow-hidden border-t-4 border-[#FF1E2D] min-h-[70vh] flex flex-col">
            <div className="flex-1 overflow-y-auto scrollbar-hide">
              {sections[currentSlide].component}
            </div>
          </div>
        </div>
      </div>

      {/* Ultra Thin Floating Navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-full max-w-xl px-4 z-50">
        <div className="bg-[#2B2B2B]/90 backdrop-blur-md p-2 shadow-2xl flex flex-col gap-2">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={prevSlide} 
                disabled={currentSlide === 0}
                className="text-white hover:bg-[#FF1E2D] disabled:opacity-20 rounded-none w-8 h-8"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={nextSlide} 
                disabled={currentSlide === sections.length - 1}
                className="text-white hover:bg-[#FF1E2D] disabled:opacity-20 rounded-none w-8 h-8"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>

            <div className="flex-1 text-center">
              <h3 className="text-white font-black uppercase tracking-[0.2em] text-[9px] italic truncate">
                {sections[currentSlide].title || "INICIO"}
              </h3>
            </div>

            <div className="text-[9px] font-bold text-gray-400 uppercase tracking-widest min-w-[40px] text-right">
              {currentSlide + 1} / {sections.length}
            </div>
          </div>
          <Progress value={progress} className="h-[2px] bg-gray-700" />
        </div>
      </div>
    </div>
  );
}
