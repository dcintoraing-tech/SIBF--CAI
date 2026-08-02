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
      {/* Cabecera 100% Transparente */}
      <div className="absolute top-0 left-0 w-full p-4 md:p-6 flex justify-between items-center z-50 pointer-events-none">
        <div className="bg-transparent pointer-events-auto opacity-80 hover:opacity-100 transition-opacity">
          <img src="/images/logo.png" alt="Logo" className="h-10 md:h-14 w-auto object-contain" />
        </div>
        
        <div className="pointer-events-auto">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-red-50 text-gray-400 hover:text-[#FF1E2D] transition-all w-10 h-10 group"
          >
            <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Área Principal - Diapositiva con padding superior para evitar el logo */}
      <div className="flex-1 relative bg-white overflow-hidden flex items-center justify-center">
        <div 
          key={currentSlide} 
          className="w-full h-full animate-in fade-in slide-in-from-right-5 duration-700 flex flex-col items-center justify-center pt-16 md:pt-20"
        >
          <div className="w-full h-full max-w-[1600px] p-6 md:p-12 flex flex-col justify-center items-stretch overflow-hidden">
            {sections[currentSlide].component}
          </div>
        </div>
      </div>

      {/* Navegación Inferior - Limpia y sin bordes negros */}
      <div className="w-full bg-white border-t border-gray-100 p-2 md:p-4 z-50 shrink-0">
        <div className="w-full flex justify-between items-center px-4 mb-2">
          <div className="flex items-center gap-2">
            <Button 
              variant="ghost" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-red-50 hover:text-[#FF1E2D] h-9 md:h-11 px-4 font-bold uppercase tracking-widest text-[10px] flex gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-red-50 hover:text-[#FF1E2D] h-9 md:h-11 px-4 font-bold uppercase tracking-widest text-[10px] flex gap-2"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="flex-1 text-center hidden md:block px-4">
            <h3 className="text-[#2B2B2B] font-black uppercase tracking-[0.4em] text-[10px] italic truncate opacity-50">
              {sections[currentSlide].title || "INICIO"}
            </h3>
          </div>

          <div className="text-[10px] font-black text-[#FF1E2D] uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded-full">
            {currentSlide + 1} <span className="text-red-200 mx-1">/</span> {sections.length}
          </div>
        </div>
        <div className="w-full px-4">
          <Progress value={progress} className="h-1 bg-gray-100" />
        </div>
      </div>
    </div>
  );
}
