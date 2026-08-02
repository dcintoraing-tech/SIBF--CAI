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
      {/* Cabecera Transparente - Logo y Cierre */}
      <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-start z-[150] pointer-events-none">
        <div className="pointer-events-auto opacity-60 hover:opacity-100 transition-opacity">
          <img src="/images/logo.png" alt="Logo" className="h-12 md:h-20 w-auto object-contain" />
        </div>
        <div className="pointer-events-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-red-50 text-[#2B2B2B] transition-all w-14 h-14 group"
          >
            <X className="w-10 h-10 group-hover:rotate-90 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Área Principal - Centrado absoluto y aprovechamiento total */}
      <div className="flex-1 relative flex items-center justify-center p-6 md:p-12 lg:p-16 mt-16">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-[1600px] flex items-center justify-center animate-in fade-in slide-in-from-right-5 duration-700"
        >
          {sections[currentSlide].component}
        </div>
      </div>

      {/* Navegación Inferior Transparente */}
      <div className="absolute bottom-0 left-0 w-full p-8 z-[150] pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto max-w-[1600px] mx-auto">
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-slate-100 h-12 px-6 md:px-10 font-black uppercase tracking-widest text-sm flex gap-3 shadow-sm border border-slate-50 bg-white/20 backdrop-blur-sm"
            >
              <ChevronLeft className="w-6 h-6" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-slate-100 h-12 px-6 md:px-10 font-black uppercase tracking-widest text-sm flex gap-3 shadow-sm border border-slate-50 bg-white/20 backdrop-blur-sm"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          <div className="text-sm font-black text-[#FF1E2D] uppercase tracking-widest bg-white/40 backdrop-blur-md px-8 py-3 rounded-full border border-white/20">
            {currentSlide + 1} / {sections.length}
          </div>
        </div>
        <div className="mt-6 px-4 opacity-40 max-w-[1600px] mx-auto">
          <Progress value={progress} className="h-1.5 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
