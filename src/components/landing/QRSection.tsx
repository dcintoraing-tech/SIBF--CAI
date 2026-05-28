'use client';

import { QrCode } from "lucide-react";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-12 text-center py-24 px-6 bg-[#0A0A0A]">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.4em] uppercase">ACCESO FINAL</span>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight uppercase italic">ESCANEÉ EL CÓDIGO</h2>
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
        <p className="text-xl md:text-2xl text-gray-400 font-bold uppercase tracking-tight leading-relaxed">
          ACCEDA A LA <span className="text-[#FF1E2D] font-black underline">DEMOSTRACIÓN INTERACTIVA</span> DESDE SU MÓVIL.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-3 text-xs font-black text-white uppercase tracking-[0.3em]">
            <QrCode className="w-6 h-6 text-[#FF1E2D]" />
            DISPONIBILIDAD INMEDIATA
          </div>
          <div className="bg-white/5 px-8 py-3 text-gray-500 text-[9px] font-black uppercase tracking-[0.5em] border border-white/10">
            SIBF-CAI V1.0 • OPTIMIZADO PARA MÓVIL
          </div>
        </div>
      </div>
    </div>
  );
}
