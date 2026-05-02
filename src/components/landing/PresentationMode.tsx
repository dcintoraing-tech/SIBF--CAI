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
    // Lock scroll when presenting
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
    <div className="fixed inset-0 z-[100] bg-white flex flex-col overflow-hidden animate-in fade-in duration-300">
      {/* Header Controls */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="flex items-center gap-4">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
          <div className="h-6 w-[1px] bg-gray-200" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#FF1E2D] hidden sm:inline">
            SIBF-CAI | PRESENTACIÓN EJECUTIVA
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            {currentSlide + 1} / {sections.length}
          </span>
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onClose} 
            className="red-gradient text-white font-black uppercase tracking-widest text-[10px] px-4 rounded-none h-8"
          >
            <X className="w-3.5 h-3.5 mr-2" />
            Cerrar
          </Button>
        </div>
      </div>

      {/* Slide Content Area */}
      <div className="flex-1 relative flex items-center justify-center p-4 md:p-8 overflow-y-auto mt-16 bg-[#F8F9FA]">
        <div key={currentSlide} className="w-full max-w-6xl mx-auto animate-in fade-in slide-in-from-right-12 duration-500">
          <div className="bg-white shadow-2xl overflow-hidden border-t-8 border-[#FF1E2D] min-h-[60vh] flex flex-col">
            <div className="flex-1 overflow-y-auto">
              {sections[currentSlide].component}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Progress and Navigation */}
      <div className="p-4 bg-[#2B2B2B] flex flex-col gap-4">
        <Progress value={progress} className="h-1 bg-gray-700" />
        <div className="flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide} 
              disabled={currentSlide === 0}
              className="bg-transparent border-gray-700 text-white hover:bg-[#FF1E2D] hover:border-[#FF1E2D] disabled:opacity-30 rounded-none w-10 h-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              disabled={currentSlide === sections.length - 1}
              className="bg-transparent border-gray-700 text-white hover:bg-[#FF1E2D] hover:border-[#FF1E2D] disabled:opacity-30 rounded-none w-10 h-10"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-center">
            <h3 className="text-white font-black uppercase tracking-tighter text-xs italic">
              {sections[currentSlide].title || "BIENVENIDA"}
            </h3>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <div className="text-right">
              <p className="text-[8px] text-gray-500 uppercase font-bold tracking-widest">Proyecto Institucional</p>
              <p className="text-[10px] text-white font-black uppercase tracking-tighter">SIBF-CAI V1.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}