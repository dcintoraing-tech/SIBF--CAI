'use client';

import { History, Lightbulb, TrendingUp } from "lucide-react";

export default function Background() {
  return (
    <div id="antecedentes" className="space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.1 ANTECEDENTES</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">CONTEXTO HISTÓRICO</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <p className="text-2xl text-gray-600 leading-tight">
            La gestión de asistencia ha evolucionado desde registros en papel hasta sistemas biométricos complejos. Sin embargo, muchas instituciones aún operan bajo modelos <span className="text-[#FF1E2D] font-black underline">INEFICIENTES</span>.
          </p>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <History className="w-10 h-10 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-xl font-black uppercase italic">MÉTODOS TRADICIONALES</h4>
                <p className="text-gray-500 font-bold uppercase text-xs">Vulnerables a errores y fraude de identidad.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <TrendingUp className="w-10 h-10 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-xl font-black uppercase italic">DEMANDA TECNOLÓGICA</h4>
                <p className="text-gray-500 font-bold uppercase text-xs">Necesidad de digitalización inmediata post-pandemia.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#2B2B2B] p-12 text-white relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E2D] -mr-16 -mt-16 rotate-45 group-hover:scale-110 transition-transform" />
          <Lightbulb className="w-16 h-16 text-[#FF1E2D] mb-8" />
          <h3 className="text-3xl font-black uppercase italic leading-none mb-6">VISIÓN DEL PROYECTO</h3>
          <p className="text-gray-400 font-bold uppercase text-sm leading-relaxed">
            Integrar IA de vanguardia para transformar un proceso administrativo rutinario en un sistema de seguridad inteligente bajo una <span className="text-white">TRANSFORMACIÓN DIGITAL</span> real.
          </p>
        </div>
      </div>
    </div>
  );
}