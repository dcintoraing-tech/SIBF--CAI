'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-2 md:h-4 red-gradient" />

      <div className="relative z-10 p-6 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-[1600px] mx-auto">
        <div className="flex-1 space-y-8 md:space-y-12 text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8 justify-center lg:justify-start">
            <img 
              src="/images/logo.png" 
              alt="Logo Institucional" 
              className="h-16 md:h-28 w-auto object-contain"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-6xl md:text-9xl lg:text-[10rem]">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-base md:text-2xl lg:text-3xl text-gray-500 max-w-3xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0">
            Sistema de identificación biométrica facial aplicado al control de asistencia institucional.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4 md:pt-6">
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-8 h-8 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30">
                <ShieldCheck className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-xs md:text-lg font-black uppercase tracking-[0.3em] text-[#2B2B2B]">Biometría</span>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
              <div className="w-8 h-8 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/30">
                <Calendar className="w-4 h-4 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-xs md:text-lg font-black uppercase tracking-[0.3em] text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none w-full max-w-sm lg:max-w-2xl">
           <div className="relative group">
              <div className="absolute -inset-8 md:-inset-16 red-gradient blur-[60px] md:blur-[120px] opacity-15"></div>
              <div className="relative aspect-[3/4] h-auto lg:h-[750px] w-full lg:w-[560px] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] md:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.2)] mx-auto">
                <img 
                  src="/images/portada.png" 
                  alt="Identificación Biométrica Facial SIBF-CAI" 
                  className="w-full h-full object-cover animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[3px] md:h-[5px] bg-[#FF1E2D] shadow-[0_0_15px_#FF1E2D] md:shadow-[0_0_30px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FF1E2D]/10 pointer-events-none"></div>
                
                {/* Decoración Técnica */}
                <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-30 space-y-2">
                  <div className="w-12 md:w-20 h-0.5 md:h-1 bg-[#FF1E2D]"></div>
                  <div className="text-[8px] md:text-[10px] font-black text-white bg-[#2B2B2B] px-2 md:px-3 py-1 uppercase tracking-widest">SIBF-CAI V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
