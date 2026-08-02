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
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">JUSTIFICACIÓN</span>
        <h2 className="text-2xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">VALOR REAL</h2>
      </div>

      <div className="space-y-4 md:space-y-10">
        <p className="text-sm md:text-4xl text-gray-600 font-medium leading-tight max-w-5xl">
          El sistema garantiza una gestión de asistencia de alto nivel competitiva bajo la <span className="text-[#FF1E2D] font-black text-xl md:text-5xl">TRANSFORMACIÓN DIGITAL</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex gap-4 md:gap-8 p-4 md:p-10 bg-slate-50 border-t-[6px] md:border-t-[12px] border-[#FF1E2D] transition-all shadow-xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
              <v.icon className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] shrink-0 animate-icon-tilt" style={{ animationDelay: `${i * 400}ms` }} />
              <div className="space-y-2">
                <h4 className="text-sm md:text-2xl font-black text-[#2B2B2B] uppercase tracking-widest leading-none">{v.title}</h4>
                <p className="text-[10px] md:text-lg text-gray-400 font-bold uppercase tracking-widest leading-tight">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
