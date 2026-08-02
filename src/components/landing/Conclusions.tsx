'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-6 max-w-[1400px] mx-auto px-6">
      <div className="space-y-1 text-center md:text-left">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">CONCLUSIONES FINALES</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="space-y-4 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-xl rounded-2xl">
          <Award className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#2B2B2B]">ÉXITO TÉCNICO</h3>
          <p className="text-xs md:text-lg text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-70">
            Integración de IA con precisión superior al 99%, eliminando hardware propietario costoso.
          </p>
        </div>
        <div className="space-y-4 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-xl rounded-2xl">
          <Target className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#2B2B2B]">IMPACTO REAL</h3>
          <p className="text-xs md:text-lg text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-70">
            Reducción del tiempo de registro institucional en un 85% y garantía total de veracidad.
          </p>
        </div>
        <div className="space-y-4 text-center md:text-left border-l-4 border-l-[#FF1E2D] pl-6 bg-white p-6 shadow-xl rounded-2xl">
          <Rocket className="w-10 h-10 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-2xl font-black uppercase italic text-[#2B2B2B]">ESCALABILIDAD</h3>
          <p className="text-xs md:text-lg text-[#2B2B2B] font-bold uppercase leading-tight italic opacity-70">
            Arquitectura Cloud de alta disponibilidad preparada para el crecimiento institucional exponencial.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-8 md:p-14 text-center shadow-2xl border-b-[12px] border-[#FF1E2D] mt-8 rounded-[40px]">
        <p className="text-2xl md:text-5xl lg:text-6xl font-black text-white uppercase italic leading-none tracking-tighter">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE HOY."
        </p>
      </div>
    </div>
  );
}
