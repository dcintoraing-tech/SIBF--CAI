'use client';

import { QrCode } from "lucide-react";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-16 text-center py-24 px-10">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">ACCESO FINAL</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">ESCANEÉ EL CÓDIGO</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-10 red-gradient blur-3xl opacity-10 group-hover:opacity-30 transition duration-1000"></div>
        <div className="relative bg-white p-12 shadow-2xl border border-gray-100 flex items-center justify-center">
          <div className="w-64 h-64 md:w-96 md:h-96">
            <img 
              src="/images/QR.png" 
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="max-w-2xl space-y-10">
        <p className="text-2xl text-gray-600 font-bold uppercase tracking-tight leading-relaxed">
          ACCEDA A LA <span className="text-[#FF1E2D] font-black underline">DEMOSTRACIÓN INTERACTIVA</span> DESDE SU DISPOSITIVO MÓVIL.
        </p>
        
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-black text-[#2B2B2B] uppercase tracking-[0.3em]">
            <QrCode className="w-8 h-8 text-[#FF1E2D]" />
            DISPONIBILIDAD INMEDIATA
          </div>
          <div className="bg-[#2B2B2B] px-10 py-3 text-white text-[10px] font-black uppercase tracking-[0.5em]">
            SIBF-CAI V1.0 • OPTIMIZADO PARA MÓVIL
          </div>
        </div>
      </div>
    </div>
  );
}
