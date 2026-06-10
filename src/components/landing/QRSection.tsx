'use client';

import { QrCode, Smartphone, ArrowUpRight } from "lucide-react";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-12 text-center py-12 px-6 bg-[#0A0A0A]">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.4em] uppercase">PROBAR EL SISTEMA</span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">DEMO INTERACTIVA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-10 bg-[#FF1E2D]/10 blur-3xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
        <div className="relative bg-white p-8 shadow-2xl border border-white/5 flex items-center justify-center">
          <div className="w-48 h-48 md:w-64 md:h-64">
            <img 
              src="/images/QR.png" 
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-xl space-y-8">
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <div className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-[0.2em]">
            <Smartphone className="w-6 h-6 text-[#FF1E2D]" />
            OPTIMIZADO MÓVIL
          </div>
          <div className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-[0.2em]">
            <ArrowUpRight className="w-6 h-6 text-[#FF1E2D]" />
            ACCESO INMEDIATO
          </div>
        </div>
        
        <p className="text-lg text-gray-500 font-bold uppercase tracking-tight">
          ESCANEÉ PARA VALIDAR EL <span className="text-white">RECONOCIMIENTO FACIAL</span> EN TIEMPO REAL.
        </p>
        
        <div className="bg-white/5 px-8 py-3 text-gray-600 text-[9px] font-black uppercase tracking-[0.5em] border border-white/10">
          SIBF-CAI V1.0 • SEGURIDAD BIOMÉTRICA
        </div>
      </div>
    </div>
  );
}
