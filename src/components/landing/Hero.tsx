
'use client';

import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden min-h-[95vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-3 red-gradient" />

      <div className="relative z-10 p-8 md:p-20 flex flex-col lg:flex-row items-center justify-between gap-20 w-full max-w-7xl mx-auto">
        <div className="flex-1 space-y-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <img 
              src="/images/logo.png" 
              alt="Logo Institucional" 
              className="h-20 md:h-28 w-auto object-contain"
            />
          </div>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-6xl md:text-9xl lg:text-[10rem]">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-500 max-w-3xl font-bold uppercase tracking-tight leading-relaxed mx-auto lg:mx-0">
            Sistema de identificación biométrica facial aplicado al control de asistencia institucional.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-10 md:gap-14 pt-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-[#2B2B2B]">Biometría</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-sm md:text-lg font-black uppercase tracking-[0.2em] text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none w-full max-w-md lg:max-w-xl">
           <div className="relative group">
              <div className="absolute -inset-8 red-gradient blur-[100px] opacity-10"></div>
              <div className="relative aspect-[3/4] lg:h-[700px] lg:w-[500px] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] mx-auto">
                <img 
                  src="/images/portada.png" 
                  alt="Identificación Biométrica Facial SIBF-CAI" 
                  className="w-full h-full object-cover animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FF1E2D] shadow-[0_0_25px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF1E2D]/10 pointer-events-none"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
