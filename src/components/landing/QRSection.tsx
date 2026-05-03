'use client';

import { QrCode, ExternalLink } from "lucide-react";

export default function QRSection() {
  return (
    <div id="qr-access" className="flex flex-col items-center justify-center space-y-8 text-center py-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">ACCESO DIGITAL</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">CONOCE NUESTRO SISTEMA</h2>
      </div>

      <div className="relative group">
        <div className="absolute -inset-4 red-gradient blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative bg-white p-6 shadow-2xl border border-gray-100">
          <img 
            src="/QR.png" 
            alt="Código QR de acceso" 
            className="w-48 h-48 md:w-64 md:h-64 object-contain"
          />
          <div className="absolute top-0 right-0 p-2">
            <ExternalLink className="w-5 h-5 text-[#FF1E2D] opacity-50" />
          </div>
        </div>
      </div>

      <div className="max-w-md space-y-4">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest leading-relaxed">
          ESCANEA EL CÓDIGO QR PARA NAVEGAR POR LA PROPUESTA <br />
          <span className="text-[#FF1E2D]">SIBF-CAI</span> DESDE TU DISPOSITIVO MÓVIL.
        </p>
        <div className="flex items-center justify-center gap-2 text-[10px] font-black text-[#2B2B2B] uppercase tracking-[0.2em] border-t border-gray-100 pt-4">
          <QrCode className="w-4 h-4 text-[#FF1E2D]" />
          Disponibilidad Inmediata
        </div>
      </div>
    </div>
  );
}
