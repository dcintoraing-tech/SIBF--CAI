'use client';

import { QrCode, Smartphone, ArrowUpRight } from "lucide-react";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-16 text-center py-20 px-6 bg-[#0A0A0A]">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.4em] uppercase">ACCESO DIRECTO</span>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase italic leading-none">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-16 bg-[#FF1E2D]/20 blur-[80px] opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white p-12 shadow-[0_0_50px_rgba(255,30,45,0.2)] border border-white/10 flex items-center justify-center transform group-hover:scale-[1.02] transition-transform duration-500">
          <div className="w-56 h-56 md:w-72 md:h-72">
            <img 
              src="/images/QR.png" 
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl space-y-12">
        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          <div className="flex items-center gap-4 text-sm font-black text-white uppercase tracking-[0.2em]">
            <Smartphone className="w-8 h-8 text-[#FF1E2D]" />
            OPTIMIZADO MÓVIL
          </div>
          <div className="flex items-center gap-4 text-sm font-black text-white uppercase tracking-[0.2em]">
            <ArrowUpRight className="w-8 h-8 text-[#FF1E2D]" />
            ACCESO INSTANTÁNEO
          </div>
        </div>
        
        <p className="text-2xl md:text-3xl text-gray-400 font-bold uppercase tracking-tight leading-snug">
          ESCANEÉ PARA PROBAR EL <span className="text-white border-b-4 border-[#FF1E2D]">RECONOCIMIENTO FACIAL</span> EN TIEMPO REAL.
        </p>
        
        <div className="bg-white/5 px-10 py-4 text-white/40 text-xs font-black uppercase tracking-[0.8em] border border-white/10">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA
        </div>
      </div>
    </div>
  );
}