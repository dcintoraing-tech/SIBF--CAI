'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-1 red-gradient z-20" />

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 lg:px-20">
        {/* Contenido Izquierdo */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center lg:text-left z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-black text-[#2B2B2B] tracking-tighter leading-[1] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-4xl md:text-7xl lg:text-8xl">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-xs md:text-xl lg:text-2xl text-gray-500 max-w-2xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0 border-l-4 md:border-l-8 border-[#FF1E2D] pl-4 md:pl-8">
            Identificación biométrica facial aplicada al control de asistencia institucional avanzada.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-12 md:h-12 red-gradient rounded-full flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Biometría IA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-12 md:h-12 red-gradient rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-4 h-4 md:w-6 md:h-6 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Imagen Derecha */}
        <div className="flex-1 w-full max-w-[280px] md:max-w-md lg:max-w-lg flex items-center justify-center">
           <div className="relative group w-full aspect-square flex items-center justify-center">
              <div className="absolute -inset-10 md:-inset-20 red-gradient blur-[60px] opacity-10"></div>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/portada.png" 
                  alt="Biometría Facial SIBF-CAI" 
                  className="w-full h-full object-contain animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FF1E2D] shadow-[0_0_20px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 space-y-2">
                  <div className="w-16 h-1.5 bg-[#FF1E2D]"></div>
                  <div className="text-[8px] md:text-sm font-black text-white bg-[#2B2B2B] px-3 py-1 uppercase tracking-[0.4em]">PROTOCOLO SIBF-V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
