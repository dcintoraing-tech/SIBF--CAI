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
      {/* Cabecera Transparente con Zona Segura */}
      <div className="absolute top-0 left-0 w-full p-6 md:p-8 flex justify-between items-start z-[150] pointer-events-none">
        <div className="pointer-events-auto opacity-80 hover:opacity-100 transition-opacity">
          <img src="/images/logo.png" alt="Logo" className="h-10 md:h-16 w-auto object-contain" />
        </div>
        <div className="pointer-events-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-red-50 text-[#2B2B2B] transition-all w-12 h-12 md:w-14 md:h-14 group"
          >
            <X className="w-8 h-8 md:w-10 md:h-10 group-hover:rotate-90 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Área Principal con Padding Vertical para evitar superposiciones */}
      <div className="flex-1 relative flex items-center justify-center px-6 md:px-12 lg:px-16 pt-24 pb-32">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-[1600px] flex items-center justify-center animate-in fade-in slide-in-from-right-5 duration-700"
        >
          {sections[currentSlide].component}
        </div>
      </div>

      {/* Navegación Inferior Totalmente Transparente */}
      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-[150] pointer-events-none">
        <div className="flex justify-between items-center pointer-events-auto max-w-[1600px] mx-auto">
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-slate-100/50 h-10 md:h-12 px-4 md:px-8 font-black uppercase tracking-widest text-[10px] md:text-sm flex gap-2 md:gap-3 shadow-sm border border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4 md:w-6 md:h-6" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-slate-100/50 h-10 md:h-12 px-4 md:px-8 font-black uppercase tracking-widest text-[10px] md:text-sm flex gap-2 md:gap-3 shadow-sm border border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-4 h-4 md:w-6 md:h-6" />
            </Button>
          </div>

          <div className="text-[10px] md:text-sm font-black text-[#FF1E2D] uppercase tracking-widest bg-white/20 backdrop-blur-md px-6 py-2 md:px-8 md:py-3 rounded-full border border-white/10">
            {currentSlide + 1} / {sections.length}
          </div>
        </div>
        <div className="mt-4 px-4 opacity-30 max-w-[1600px] mx-auto">
          <Progress value={progress} className="h-1 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
