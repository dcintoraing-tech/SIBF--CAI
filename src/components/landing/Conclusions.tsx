'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[12px] md:text-2xl tracking-[0.4em] uppercase">CONCLUSIONES</span>
        <h2 className="text-4xl md:text-9xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-20">
        <div className="space-y-4 md:space-y-10 text-center md:text-left border-l-4 border-l-gray-100 pl-6">
          <Award className="w-10 h-10 md:w-24 md:h-24 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-5xl font-black uppercase italic text-[#2B2B2B]">ÉXITO TÉCNICO</h3>
          <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase leading-[1.2] italic">
            Se logró integrar IA con una precisión del 99%, eliminando hardware costoso.
          </p>
        </div>
        <div className="space-y-4 md:space-y-10 text-center md:text-left border-l-4 border-l-gray-100 pl-6">
          <Target className="w-10 h-10 md:w-24 md:h-24 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-5xl font-black uppercase italic text-[#2B2B2B]">IMPACTO</h3>
          <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase leading-[1.2] italic">
            La automatización reduce el tiempo de registro en un 85% y garantiza veracidad.
          </p>
        </div>
        <div className="space-y-4 md:space-y-10 text-center md:text-left border-l-4 border-l-gray-100 pl-6">
          <Rocket className="w-10 h-10 md:w-24 md:h-24 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-xl md:text-5xl font-black uppercase italic text-[#2B2B2B]">ESCALABLE</h3>
          <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase leading-[1.2] italic">
            Arquitectura Cloud preparada para el crecimiento institucional continuo.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-10 md:p-24 text-center shadow-2xl border-b-[24px] border-[#FF1E2D]">
        <p className="text-2xl md:text-8xl font-black text-white uppercase italic leading-none tracking-tighter">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE."
        </p>
      </div>
    </div>
  );
}