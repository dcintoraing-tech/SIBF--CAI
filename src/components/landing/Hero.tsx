'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-2 red-gradient z-20" />

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-10 md:gap-24 px-6 md:px-16 lg:px-32">
        {/* Contenido Izquierdo */}
        <div className="flex-1 space-y-8 md:space-y-16 text-center lg:text-left z-10 flex flex-col justify-center">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-5xl md:text-9xl lg:text-[12rem]">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-2xl lg:text-4xl text-gray-500 max-w-3xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0 border-l-4 md:border-l-12 border-[#FF1E2D] pl-6 md:pl-12">
            Identificación biométrica facial aplicada al control de asistencia institucional avanzada.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-16 pt-6">
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 md:w-16 md:h-16 red-gradient rounded-full flex items-center justify-center shadow-2xl">
                <ShieldCheck className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-[12px] md:text-2xl font-black uppercase tracking-widest text-[#2B2B2B]">Biometría IA</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 md:w-16 md:h-16 red-gradient rounded-full flex items-center justify-center shadow-2xl">
                <Calendar className="w-5 h-5 md:w-8 md:h-8 text-white" />
              </div>
              <span className="text-[12px] md:text-2xl font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Imagen Derecha */}
        <div className="flex-1 w-full max-w-[320px] md:max-w-xl lg:max-w-2xl h-full flex items-center justify-center">
           <div className="relative group w-full h-full flex items-center justify-center">
              <div className="absolute -inset-16 md:-inset-32 red-gradient blur-[100px] opacity-10"></div>
              <div className="relative aspect-square w-full bg-white border-2 border-gray-100 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/images/portada.png" 
                  alt="Biometría Facial SIBF-CAI" 
                  className="w-full h-full object-contain animate-tech-pulse"
                />
                <div className="absolute top-0 left-0 w-full h-[6px] bg-[#FF1E2D] shadow-[0_0_30px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute bottom-6 left-6 z-30 space-y-3">
                  <div className="w-24 h-2 bg-[#FF1E2D]"></div>
                  <div className="text-[10px] md:text-xl font-black text-white bg-[#2B2B2B] px-4 py-2 uppercase tracking-[0.4em]">PROTOCOLO SIBF-V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
