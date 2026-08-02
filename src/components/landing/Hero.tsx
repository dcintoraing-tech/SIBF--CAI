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
            <h1 className="text-3xl md:text-5xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[1] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-5xl md:text-7xl lg:text-9xl">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-xl lg:text-2xl text-[#2B2B2B] max-w-2xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0 border-l-4 md:border-l-[12px] border-[#FF1E2D] pl-4 md:pl-8">
            Identificación biométrica facial aplicada al control de asistencia institucional avanzada.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-14 md:h-14 red-gradient rounded-none flex items-center justify-center shadow-lg border-2 border-[#2B2B2B]">
                <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Biometría IA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 md:w-14 md:h-14 red-gradient rounded-none flex items-center justify-center shadow-lg border-2 border-[#2B2B2B]">
                <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Imagen Derecha - Sin recuadros blancos molestos */}
        <div className="flex-1 w-full max-w-[320px] md:max-w-xl lg:max-w-2xl flex items-center justify-center">
           <div className="relative group w-full aspect-square flex items-center justify-center">
              <div className="absolute -inset-10 md:-inset-20 red-gradient blur-[100px] opacity-10"></div>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
                <img 
                  src="/images/portada.png" 
                  alt="Biometría Facial SIBF-CAI" 
                  className="w-full h-full object-contain animate-tech-pulse z-10"
                />
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#FF1E2D] shadow-[0_0_30px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute bottom-8 left-8 z-30 space-y-2">
                  <div className="w-20 h-2 bg-[#FF1E2D]"></div>
                  <div className="text-[10px] md:text-base font-black text-white bg-[#2B2B2B] px-4 py-2 uppercase tracking-[0.4em] italic shadow-2xl">PROTOCOLO SIBF-V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}