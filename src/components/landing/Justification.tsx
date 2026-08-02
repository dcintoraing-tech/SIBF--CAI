'use client';

import { TrendingUp, ShieldCheck, Zap, ChartColumn } from "lucide-react";

export default function Justification() {
  const values = [
    { icon: Zap, title: "AUTOMATIZACIÓN", desc: "CERO ERRORES HUMANOS." },
    { icon: ShieldCheck, title: "CERO FRAUDE", desc: "SEGURIDAD BIOMÉTRICA." },
    { icon: ChartColumn, title: "DATA DRIVEN", desc: "REPORTES EN TIEMPO REAL." },
    { icon: TrendingUp, title: "TRANSFORMACIÓN", desc: "LIDERAZGO TECNOLÓGICO." }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-10">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">JUSTIFICACIÓN</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">VALOR REAL</h2>
      </div>

      <div className="space-y-8">
        <p className="text-lg md:text-4xl text-[#2B2B2B] font-black leading-[1.1] max-w-5xl uppercase italic border-l-8 border-[#FF1E2D] pl-6">
          Garantizamos una gestión de asistencia de alto nivel competitiva bajo la <span className="text-[#FF1E2D]">TRANSFORMACIÓN DIGITAL</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex gap-5 md:gap-8 p-6 md:p-10 bg-white rounded-3xl shadow-lg border border-gray-50 transition-all hover:shadow-2xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                <v.icon className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D] animate-icon-tilt" style={{ animationDelay: `${i * 400}ms` }} />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm md:text-2xl font-black text-[#2B2B2B] uppercase tracking-tight leading-none">{v.title}</h4>
                <p className="text-[10px] md:text-base text-[#2B2B2B] font-black uppercase tracking-widest leading-tight italic opacity-60">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
