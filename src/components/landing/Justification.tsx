
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
    <div id="justificacion" className="space-y-32">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">JUSTIFICACIÓN</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">VALOR REAL</h2>
      </div>

      <div className="space-y-24">
        <p className="text-3xl md:text-6xl text-gray-600 font-medium leading-[1.1] max-w-6xl">
          El sistema garantiza una gestión de asistencia de alto nivel competitiva bajo la <span className="text-[#FF1E2D] font-black underline decoration-[12px] underline-offset-[16px]">TRANSFORMACIÓN DIGITAL</span>.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {values.map((v, i) => (
            <div key={i} className="flex gap-12 p-16 bg-slate-50 border-t-[12px] border-transparent hover:border-[#FF1E2D] transition-all group shadow-2xl">
              <v.icon className="w-20 h-20 text-[#FF1E2D] group-hover:scale-110 transition-transform shrink-0" />
              <div className="space-y-6">
                <h4 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-widest">{v.title}</h4>
                <p className="text-xl text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
