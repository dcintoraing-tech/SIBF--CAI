'use client';

import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden min-h-[60vh] flex items-center">
      <div className="absolute top-0 left-0 w-full h-2 red-gradient" />

      <div className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 w-full max-w-7xl mx-auto">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-6">
            <div className="text-[#FF1E2D]">
              <ShieldCheck className="w-12 h-12" />
            </div>
            <div className="h-12 w-[2px] bg-gray-200 hidden md:block" />
            <Badge variant="outline" className="px-4 py-1 border-[#FF1E2D] text-[#FF1E2D] font-black uppercase tracking-[0.2em] text-[10px] rounded-none">
              PROPUESTA EJECUTIVA V1.0
            </Badge>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
            SISTEMA <br />
            INTELIGENTE <br />
            <span className="red-gradient-text text-6xl md:text-8xl">SIBF-CAI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 max-w-xl font-bold uppercase tracking-tight leading-relaxed">
            BIOMETRÍA FACIAL PARA LA AUTOMATIZACIÓN DE ASISTENCIAS EN TIEMPO REAL.
          </p>
          
          <div className="flex flex-wrap items-center gap-8 text-[#2B2B2B] pt-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest">Biometría</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 red-gradient rounded-full flex items-center justify-center shadow-lg shadow-red-500/20">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-black uppercase tracking-widest">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
           <div className="relative group">
              <div className="absolute -inset-2 red-gradient blur-2xl opacity-10 transition duration-1000 group-hover:opacity-20"></div>
              <div className="relative w-64 h-[400px] bg-white border border-gray-100 flex items-center justify-center overflow-hidden shadow-2xl">
                <img 
                  src="/portada.png" 
                  alt="Identificación Biométrica Facial SIBF-CAI" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-90"
                />
                <div className="absolute top-1/2 left-0 w-full h-[3px] bg-[#FF1E2D] shadow-[0_0_10px_#FF1E2D] animate-pulse"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}
