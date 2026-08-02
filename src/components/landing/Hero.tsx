
'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12 px-6 md:px-12 lg:px-20">
        {/* Contenido Izquierdo */}
        <div className="flex-1 space-y-6 md:space-y-10 text-center lg:text-left z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.95] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-6xl md:text-8xl lg:text-9xl">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-xl lg:text-2xl text-[#2B2B2B] max-w-2xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0 border-l-4 md:border-l-[10px] border-[#FF1E2D] pl-4 md:pl-6">
            Identificación biométrica facial aplicada al control de asistencia institucional avanzada.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-10 pt-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 red-gradient rounded-lg flex items-center justify-center shadow-lg">
                <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-[10px] md:text-base font-black uppercase tracking-widest text-[#2B2B2B]">Biometría IA</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 red-gradient rounded-lg flex items-center justify-center shadow-lg">
                <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-[10px] md:text-base font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Imagen Derecha - Limpia sin recuadros ni etiquetas innecesarias */}
        <div className="flex-1 w-full max-w-[320px] md:max-w-xl lg:max-w-2xl flex items-center justify-center">
           <div className="relative group w-full aspect-square flex items-center justify-center">
              <div className="absolute -inset-10 md:-inset-20 red-gradient blur-[100px] opacity-10"></div>
              <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-transparent">
                <img 
                  src="/images/portada.png" 
                  alt="Biometría Facial SIBF-CAI" 
                  className="w-full h-full object-contain animate-tech-pulse z-10"
                />
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FF1E2D] shadow-[0_0_20px_#FF1E2D] animate-scan-line z-20"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
