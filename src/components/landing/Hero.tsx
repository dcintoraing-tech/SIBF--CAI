'use client';

import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden min-h-[80vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-2 red-gradient" />

      <div className="relative z-10 p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <img 
              src="/images/logo.png" 
              alt="Logo Institucional" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#2B2B2B] tracking-tighter leading-[0.95] uppercase italic">
            SISTEMA <br className="hidden md:block" />
            INTELIGENTE <br className="hidden md:block" />
            <span className="red-gradient-text text-5xl md:text-8xl lg:text-9xl">SIBF-CAI</span>
          </h1>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-500 max-w-2xl font-bold uppercase tracking-tight leading-relaxed mx-auto lg:mx-0">
            Sistema de identificación biométrica facial aplicado al control de asistencia institucional.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <ShieldCheck className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Biometría</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 md:w-10 md:h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-xs md:text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none w-full max-w-sm lg:max-w-md">
           <div className="relative group">
              <div className="absolute -inset-4 red-gradient blur-3xl opacity-10"></div>
              <div className="relative aspect-[3/4] lg:h-[500px] lg:w-[350px] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-2xl mx-auto">
                <img 
                  src="/images/portada.png" 
                  alt="Identificación Biométrica Facial SIBF-CAI" 
                  className="w-full h-full object-cover animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FF1E2D] shadow-[0_0_15px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF1E2D]/5 pointer-events-none"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
