'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-6 max-w-[1200px] mx-auto px-4">
      <div className="space-y-1 text-center md:text-left">
        <span className="text-[#FF1E2D] font-black text-xs md:text-base tracking-[0.4em] uppercase">CONCLUSIONES FINALES</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 pt-2">
        <div className="space-y-3 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-lg rounded-2xl">
          <Award className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-xl font-black uppercase italic text-[#2B2B2B]">ÉXITO TÉCNICO</h3>
          <p className="text-[10px] md:text-base text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-80">
            Integración de IA con precisión superior al 99%, eliminando hardware costoso.
          </p>
        </div>
        <div className="space-y-3 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-lg rounded-2xl">
          <Target className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-xl font-black uppercase italic text-[#2B2B2B]">IMPACTO REAL</h3>
          <p className="text-[10px] md:text-base text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-80">
            Reducción del tiempo de registro en un 85% y garantía total de veracidad.
          </p>
        </div>
        <div className="space-y-3 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-lg rounded-2xl">
          <Rocket className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-xl font-black uppercase italic text-[#2B2B2B]">ESCALABILIDAD</h3>
          <p className="text-[10px] md:text-base text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-80">
            Arquitectura Cloud de alta disponibilidad para crecimiento exponencial.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-6 md:p-10 text-center shadow-2xl border-b-[8px] border-[#FF1E2D] mt-6 rounded-[30px]">
        <p className="text-xl md:text-4xl lg:text-5xl font-black text-white uppercase italic leading-none tracking-tighter">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE HOY."
        </p>
      </div>
    </div>
  );
}
