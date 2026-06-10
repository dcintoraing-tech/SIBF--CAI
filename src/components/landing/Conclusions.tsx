'use client';

import { Award, Target, Rocket } from "lucide-react";

export default function Conclusions() {
  return (
    <div id="conclusiones" className="space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.8 CONCLUSIONES</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">CIERRE EJECUTIVO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <Award className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-2xl font-black uppercase italic">ÉXITO TÉCNICO</h3>
          <p className="text-gray-500 font-bold uppercase text-sm leading-relaxed">
            Se logró integrar IA en el cliente con una precisión del 99%, eliminando la dependencia de hardware costoso.
          </p>
        </div>
        <div className="space-y-6">
          <Target className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-2xl font-black uppercase italic">IMPACTO DIRECTO</h3>
          <p className="text-gray-500 font-bold uppercase text-sm leading-relaxed">
            La automatización reduce el tiempo de registro en un 85% y garantiza la veracidad total de la información.
          </p>
        </div>
        <div className="space-y-6">
          <Rocket className="w-16 h-16 text-[#FF1E2D]" />
          <h3 className="text-2xl font-black uppercase italic">ESCALABILIDAD</h3>
          <p className="text-gray-500 font-bold uppercase text-sm leading-relaxed">
            Arquitectura lista para integrarse con módulos de nómina y gestión de talento humano avanzado.
          </p>
        </div>
      </div>

      <div className="bg-[#2B2B2B] p-12 text-center shadow-2xl border-b-8 border-[#FF1E2D]">
        <p className="text-2xl md:text-3xl text-white font-black uppercase italic leading-tight">
          "SIBF-CAI REPRESENTA EL FUTURO DE LA GESTIÓN INSTITUCIONAL INTELIGENTE."
        </p>
      </div>
    </div>
  );
}
