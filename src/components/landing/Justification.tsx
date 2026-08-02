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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-12">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-xl tracking-[0.4em] uppercase">JUSTIFICACIÓN</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">VALOR REAL</h2>
      </div>

      <div className="space-y-6 md:space-y-12">
        <p className="text-sm md:text-5xl text-[#2B2B2B] font-black leading-[1.1] max-w-7xl uppercase italic">
          Garantizamos una gestión de asistencia de alto nivel competitiva bajo la <span className="text-[#FF1E2D]">TRANSFORMACIÓN DIGITAL</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {values.map((v, i) => (
            <div key={i} className="flex gap-6 md:gap-10 p-8 md:p-14 bg-white border-2 border-[#2B2B2B] border-t-[16px] border-t-[#FF1E2D] transition-all shadow-2xl animate-executive-pulse" style={{ animationDelay: `${i * 300}ms` }}>
              <v.icon className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] shrink-0 animate-icon-tilt" style={{ animationDelay: `${i * 400}ms` }} />
              <div className="space-y-4">
                <h4 className="text-sm md:text-3xl font-black text-[#2B2B2B] uppercase tracking-widest leading-none">{v.title}</h4>
                <p className="text-[12px] md:text-xl text-[#2B2B2B] font-black uppercase tracking-widest leading-tight italic">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}