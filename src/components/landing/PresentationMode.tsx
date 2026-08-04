'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

interface PresentationModeProps {
  sections: Array<{ id: string; title?: string; component: React.ReactNode }>;
  onClose: () => void;
}

export default function PresentationMode({ sections, onClose }: PresentationModeProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const controlsTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'Escape') onClose();
    };

    const resetControlsTimer = () => {
      setShowControls(true);
      if (controlsTimerRef.current) {
        clearTimeout(controlsTimerRef.current);
      }
      controlsTimerRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000); // Ocultar después de 3 segundos de inactividad
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousemove', resetControlsTimer);
    
    document.body.style.overflow = 'hidden';
    resetControlsTimer();

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousemove', resetControlsTimer);
      if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
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
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-in fade-in duration-500 cursor-default">
      {/* Cabecera Auto-ocultable */}
      <div className={cn(
        "absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-[200] transition-all duration-500",
        showControls ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
      )}>
        <div className="opacity-70 hover:opacity-100 transition-opacity">
          <img src="/images/logo.png" alt="Logo" className="h-8 md:h-12 w-auto object-contain" />
        </div>
        <div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose} 
            className="hover:bg-red-50 text-[#2B2B2B] transition-all w-10 h-10 md:w-14 md:h-14 group rounded-full border border-black/5 bg-white/5 backdrop-blur-sm shadow-xl"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 group-hover:rotate-90 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Área de Visualización */}
      <div className="flex-1 relative flex items-center justify-center px-6 md:px-16">
        <div 
          key={currentSlide} 
          className="w-full h-full max-w-[1400px] flex items-center justify-center animate-in fade-in slide-in-from-right-10 duration-700"
        >
          {sections[currentSlide].component}
        </div>
      </div>

      {/* Navegación Inferior Auto-ocultable */}
      <div className={cn(
        "absolute bottom-0 left-0 w-full p-6 md:p-10 z-[200] transition-all duration-500",
        showControls ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        <div className="flex justify-between items-center max-w-[1400px] mx-auto">
          <div className="flex gap-4">
            <Button 
              variant="ghost" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="text-[#2B2B2B] hover:bg-slate-100/40 h-10 md:h-12 px-6 md:px-8 font-black uppercase tracking-widest text-[9px] md:text-xs flex gap-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 shadow-sm"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
              <span className="hidden sm:inline">ANTERIOR</span>
            </Button>
            <Button 
              variant="ghost" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="text-[#2B2B2B] hover:bg-slate-100/40 h-10 md:h-12 px-6 md:px-8 font-black uppercase tracking-widest text-[9px] md:text-xs flex gap-2 bg-white/50 backdrop-blur-md rounded-full border border-black/5 shadow-sm"
            >
              <span className="hidden sm:inline">SIGUIENTE</span>
              <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>

          <div className="text-[9px] md:text-xs font-black text-[#FF1E2D] uppercase tracking-widest bg-white/50 backdrop-blur-xl px-6 py-2 md:px-8 md:py-3 rounded-full border border-black/5 shadow-2xl">
            {currentSlide + 1} <span className="text-[#2B2B2B]/30 mx-2">/</span> {sections.length}
          </div>
        </div>
        <div className="mt-6 px-10 opacity-30 max-w-[1400px] mx-auto">
          <Progress value={progress} className="h-1 bg-slate-200" />
        </div>
      </div>
    </div>
  );
}
