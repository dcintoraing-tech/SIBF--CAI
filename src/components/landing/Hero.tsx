'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full h-full flex items-center justify-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 red-gradient" />

      <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-12 px-4 md:px-12">
        <div className="flex-1 space-y-4 md:space-y-8 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-center lg:justify-start">
            <img 
              src="/images/logo.png" 
              alt="Logo Institucional" 
              className="h-10 md:h-20 w-auto object-contain"
            />
          </div>
          
          <div className="space-y-2">
            <h1 className="text-2xl md:text-6xl lg:text-7xl font-black text-[#2B2B2B] tracking-tighter leading-none uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-4xl md:text-8xl lg:text-9xl">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-xs md:text-xl lg:text-2xl text-gray-500 max-w-xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0">
            Sistema de identificación biométrica facial aplicado al control de asistencia institucional.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                <ShieldCheck className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[8px] md:text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Biometría</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 md:w-10 md:h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/30">
                <Calendar className="w-3 h-3 md:w-5 md:h-5 text-white" />
              </div>
              <span className="text-[8px] md:text-sm font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none w-full max-w-[200px] sm:max-w-xs lg:max-w-xl">
           <div className="relative group">
              <div className="absolute -inset-8 md:-inset-16 red-gradient blur-[30px] md:blur-[100px] opacity-10"></div>
              <div className="relative aspect-[4/5] h-auto lg:h-[550px] w-full bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-xl mx-auto">
                <img 
                  src="/images/portada.png" 
                  alt="Identificación Biométrica Facial SIBF-CAI" 
                  className="w-full h-full object-cover animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#FF1E2D] shadow-[0_0_15px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute bottom-3 left-3 z-30 space-y-1">
                  <div className="w-10 h-0.5 bg-[#FF1E2D]"></div>
                  <div className="text-[6px] md:text-[8px] font-black text-white bg-[#2B2B2B] px-2 py-0.5 uppercase tracking-widest">SIBF-CAI V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
