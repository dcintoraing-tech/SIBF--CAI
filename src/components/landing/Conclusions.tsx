'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-lg tracking-[0.4em] uppercase">CONCLUSIONES</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-12">
        <div className="space-y-2 md:space-y-6 text-center md:text-left">
          <Award className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-3xl font-black uppercase italic">ÉXITO TÉCNICO</h3>
          <p className="text-[10px] md:text-xl text-gray-500 font-bold uppercase leading-tight">
            Se logró integrar IA con una precisión del 99%, eliminando hardware costoso.
          </p>
        </div>
        <div className="space-y-2 md:space-y-6 text-center md:text-left">
          <Target className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-3xl font-black uppercase italic">IMPACTO</h3>
          <p className="text-[10px] md:text-xl text-gray-500 font-bold uppercase leading-tight">
            La automatización reduce el tiempo de registro en un 85% y garantiza veracidad.
          </p>
        </div>
        <div className="space-y-2 md:space-y-6 text-center md:text-left">
          <Rocket className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] mx-auto md:mx-0" />
          <h3 className="text-lg md:text-3xl font-black uppercase italic">ESCALABLE</h3>
          <p className="text-[10px] md:text-xl text-gray-500 font-bold uppercase leading-tight">
            Arquitectura Cloud preparada para el crecimiento institucional continuo.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-6 md:p-16 text-center shadow-2xl border-b-[8px] md:border-b-[16px] border-[#FF1E2D]">
        <p className="text-xl md:text-7xl font-black text-white uppercase italic leading-none tracking-tighter">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE."
        </p>
      </div>
    </div>
  );
}
