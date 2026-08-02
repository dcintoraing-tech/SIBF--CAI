'use client';

import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="w-full h-full flex items-center justify-center relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-2 red-gradient z-20" />

      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-16 px-4 md:px-16 lg:px-24">
        {/* Contenido Izquierdo */}
        <div className="flex-1 space-y-6 md:space-y-12 text-center lg:text-left z-10 flex flex-col justify-center">
          <div className="space-y-4">
            <h1 className="text-3xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
              SISTEMA <br className="hidden md:block" />
              INTELIGENTE <br className="hidden md:block" />
              <span className="red-gradient-text text-5xl md:text-9xl lg:text-[10rem]">SIBF-CAI</span>
            </h1>
          </div>
          
          <p className="text-sm md:text-2xl lg:text-3xl text-gray-500 max-w-2xl font-bold uppercase tracking-tight leading-tight mx-auto lg:mx-0 border-l-4 md:border-l-8 border-[#FF1E2D] pl-4 md:pl-8">
            Identificación biométrica facial aplicada al control de asistencia institucional avanzada.
          </p>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 md:gap-12 pt-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40">
                <ShieldCheck className="w-4 h-4 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Biometría IA</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 md:w-14 md:h-14 red-gradient rounded-full flex items-center justify-center shadow-2xl shadow-red-500/40">
                <Calendar className="w-4 h-4 md:w-7 md:h-7 text-white" />
              </div>
              <span className="text-[10px] md:text-lg font-black uppercase tracking-widest text-[#2B2B2B]">Tiempo Real</span>
            </div>
          </div>
        </div>

        {/* Imagen Derecha Optimizada */}
        <div className="flex-1 w-full max-w-[280px] md:max-w-md lg:max-w-xl h-auto flex items-center justify-center">
           <div className="relative group w-full">
              <div className="absolute -inset-12 md:-inset-24 red-gradient blur-[60px] md:blur-[120px] opacity-10"></div>
              <div className="relative aspect-[4/5] md:aspect-[3/4] lg:aspect-square w-full bg-white border-[1px] md:border-2 border-gray-100 flex items-center justify-center overflow-hidden shadow-2xl mx-auto">
                <img 
                  src="/images/portada.png" 
                  alt="Biometría Facial SIBF-CAI" 
                  className="w-full h-full object-cover animate-tech-pulse"
                />
                {/* Animación de escaneo ajustada para no salirse */}
                <div className="absolute top-0 left-0 w-full h-[4px] bg-[#FF1E2D] shadow-[0_0_25px_#FF1E2D] animate-scan-line z-20"></div>
                <div className="absolute bottom-4 left-4 z-30 space-y-2">
                  <div className="w-16 h-1 bg-[#FF1E2D]"></div>
                  <div className="text-[8px] md:text-[12px] font-black text-white bg-[#2B2B2B] px-3 py-1 uppercase tracking-[0.4em]">PROTOCOLO SIBF-V1.0</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
