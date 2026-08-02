
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
      {/* Cabecera Transparente */}
      <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-[150] pointer-events-none">
        <div className="pointer-events-auto opacity-40 hover:opacity-100 transition-opacity">
          <img src="/images/logo.png" alt="Logo" className="h-10 md:h-16 w-auto object-contain" />
        </div>
        <div className="pointer-events-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-red-50 text-[#2B2B2B] transition-all w-12 h-12 group"
          >
            <X className="w-8 h-8 group-hover:rotate-90 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Área Principal - Centrado absoluto */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-12 lg:p-20">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-[1400px] flex items-center justify-center animate-in fade-in slide-in-from-right-5 duration-700"
        >
          {sections[currentSlide].component}
        </div>
      </div>

      {/* Navegación Inferior Transparente */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-[150] pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto">
          <div className="flex gap-2">
            <Button 
              variant="ghost" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-slate-100 h-10 px-4 md:px-8 font-black uppercase tracking-widest text-xs flex gap-2"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-slate-100 h-10 px-4 md:px-8 font-black uppercase tracking-widest text-xs flex gap-2"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-xs font-black text-[#FF1E2D] uppercase tracking-widest bg-white/50 backdrop-blur-sm px-6 py-2 rounded-full">
            {currentSlide + 1} / {sections.length}
          </div>
        </div>
        <div className="mt-4 px-2 opacity-30">
          <Progress value={progress} className="h-1 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
