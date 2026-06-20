
'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div id="conclusiones" className="space-y-32">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">CONCLUSIONES</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CIERRE</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-8">
          <Award className="w-24 h-24 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black uppercase italic">ÉXITO TÉCNICO</h3>
          <p className="text-xl text-gray-500 font-bold uppercase leading-relaxed">
            Se logró integrar IA con una precisión del 99%, eliminando la dependencia de hardware costoso.
          </p>
        </div>
        <div className="space-y-8">
          <Target className="w-24 h-24 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black uppercase italic">IMPACTO DIRECTO</h3>
          <p className="text-xl text-gray-500 font-bold uppercase leading-relaxed">
            La automatización reduce el tiempo de registro en un 85% y garantiza la veracidad total.
          </p>
        </div>
        <div className="space-y-8">
          <Rocket className="w-24 h-24 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black uppercase italic">ESCALABILIDAD</h3>
          <p className="text-xl text-gray-500 font-bold uppercase leading-relaxed">
            Arquitectura escalable preparada para el crecimiento institucional y adaptabilidad continua.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-24 text-center shadow-2xl border-b-[20px] border-[#FF1E2D]">
        <p className="text-4xl md:text-7xl font-black text-white uppercase italic leading-tight tracking-tighter">
          "SIBF-CAI: EL FUTURO DE LA GESTIÓN INTELIGENTE."
        </p>
      </div>
    </div>
  );
}
