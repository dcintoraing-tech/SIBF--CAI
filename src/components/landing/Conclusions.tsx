'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-10 max-w-[1100px] mx-auto px-4 text-[#2B2B2B]">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">CONCLUSIONES FINALES</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE DEL PROYECTO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="space-y-4 border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-8 shadow-xl rounded-[30px] border border-slate-50">
          <Award className="w-10 h-10 text-[#FF1E2D] mb-2" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic">ÉXITO TÉCNICO</h3>
          <p className="text-xs md:text-base font-black uppercase leading-tight italic text-[#2B2B2B] opacity-90">
            Integración de IA con precisión superior al 99%, eliminando costos de hardware.
          </p>
        </div>
        <div className="space-y-4 border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-8 shadow-xl rounded-[30px] border border-slate-50">
          <Target className="w-10 h-10 text-[#FF1E2D] mb-2" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic">IMPACTO REAL</h3>
          <p className="text-xs md:text-base font-black uppercase leading-tight italic text-[#2B2B2B] opacity-90">
            Reducción del tiempo de registro en un 85% y garantía total de veracidad.
          </p>
        </div>
        <div className="space-y-4 border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-8 shadow-xl rounded-[30px] border border-slate-50">
          <Rocket className="w-10 h-10 text-[#FF1E2D] mb-2" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic">ESCALABILIDAD</h3>
          <p className="text-xs md:text-base font-black uppercase leading-tight italic text-[#2B2B2B] opacity-90">
            Arquitectura Cloud de alta disponibilidad lista para crecimiento institucional.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-8 md:p-12 text-center shadow-2xl border-b-[10px] border-[#FF1E2D] mt-8 rounded-[40px] relative overflow-hidden group">
        <div className="absolute inset-0 bg-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
        <p className="text-2xl md:text-4xl lg:text-5xl font-black text-white uppercase italic leading-none tracking-tighter relative z-10">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE HOY."
        </p>
      </div>
    </div>
  );
}