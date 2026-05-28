'use client';

import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden min-h-[70vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-2 red-gradient" />

      <div className="relative z-10 p-12 md:p-24 flex flex-col md:flex-row items-center justify-between gap-16 w-full">
        <div className="flex-1 space-y-10">
          <div className="flex items-center gap-10">
            <img 
              src="/images/logo.png" 
              alt="Logo Institucional" 
              className="h-28 w-auto object-contain"
            />
            <div className="h-20 w-[2px] bg-gray-200 hidden md:block" />
            <Badge variant="outline" className="px-6 py-2 border-[#FF1E2D] text-[#FF1E2D] font-black uppercase tracking-[0.3em] text-sm rounded-none">
              RESUMEN EJECUTIVO V1.0
            </Badge>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter leading-[0.85] uppercase italic">
            SISTEMA <br />
            INTELIGENTE <br />
            <span className="red-gradient-text">SIBF-CAI</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-500 max-w-2xl font-bold uppercase tracking-tight leading-relaxed">
            BIOMETRÍA FACIAL PARA LA AUTOMATIZACIÓN DE ASISTENCIAS EN TIEMPO REAL.
          </p>
          
          <div className="flex flex-wrap items-center gap-10 text-[#2B2B2B] pt-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-black uppercase tracking-widest">Biometría</span>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <span className="text-lg font-black uppercase tracking-widest">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
           <div className="relative group">
              <div className="absolute -inset-2 red-gradient blur-2xl opacity-20 transition duration-1000 group-hover:opacity-40"></div>
              <div className="relative w-80 h-[450px] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="https://picsum.photos/seed/biometric/600/800" 
                  alt="Identificación Biométrica" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                  data-ai-hint="facial recognition"
                />
                <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[#FF1E2D] shadow-[0_0_15px_#FF1E2D] animate-pulse"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
