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
      {/* Cabecera Minimalista Flotante */}
      <div className="absolute top-0 left-0 w-full p-2 md:p-4 flex justify-between items-center z-50 pointer-events-none">
        <div className="flex items-center gap-3 bg-white/80 backdrop-blur-md px-4 py-2 shadow-sm border border-gray-100 pointer-events-auto">
          <img src="/images/logo.png" alt="Logo" className="h-6 md:h-10 w-auto" />
          <div className="h-6 w-[1px] bg-gray-200 mx-2 hidden sm:block"></div>
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.4em] text-[#FF1E2D] hidden sm:block">
            PRESENTACIÓN EJECUTIVA SIBF-CAI
          </span>
        </div>
        
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onClose} 
          className="bg-white/80 hover:bg-[#FF1E2D] hover:text-white backdrop-blur-md transition-all w-10 h-10 md:w-14 md:h-14 border border-gray-100 shadow-sm pointer-events-auto group"
        >
          <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
        </Button>
      </div>

      {/* Área Principal - Ocupa todo el ancho y alto disponible */}
      <div className="flex-1 relative bg-white overflow-hidden">
        <div 
          key={currentSlide} 
          className="w-full h-full animate-in fade-in slide-in-from-right-5 duration-700 flex flex-col items-stretch justify-center"
        >
          <div className="w-full h-full p-4 md:p-8 lg:p-12 flex flex-col justify-center items-center overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center max-w-full">
              {sections[currentSlide].component}
            </div>
          </div>
        </div>
      </div>

      {/* Barra de Navegación Inferior Compacta */}
      <div className="w-full bg-white border-t border-gray-100 p-2 md:p-4 flex flex-col gap-2 z-50 shrink-0">
        <div className="w-full flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 h-8 md:h-12 px-4 md:px-6 border border-gray-100 font-black uppercase tracking-widest text-[8px] md:text-[10px] flex gap-2 transition-all"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="outline" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-[#FF1E2D] hover:text-white disabled:opacity-20 h-8 md:h-12 px-4 md:px-6 border border-gray-100 font-black uppercase tracking-widest text-[8px] md:text-[10px] flex gap-2 transition-all"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>

          <div className="flex-1 text-center hidden md:block">
            <h3 className="text-[#2B2B2B] font-black uppercase tracking-[0.4em] text-[10px] italic truncate">
              {sections[currentSlide].title || "INICIO"}
            </h3>
          </div>

          <div className="text-[10px] md:text-xs font-black text-[#FF1E2D] uppercase tracking-[0.2em] bg-slate-50 px-3 py-1.5 border border-gray-100">
            {currentSlide + 1} <span className="text-gray-300 mx-1">/</span> {sections.length}
          </div>
        </div>
        <div className="w-full px-4">
          <Progress value={progress} className="h-1 bg-gray-100 rounded-none overflow-hidden">
            <div className="h-full red-gradient transition-all duration-500" style={{ width: `${progress}%` }} />
          </Progress>
        </div>
      </div>
    </div>
  );
}
