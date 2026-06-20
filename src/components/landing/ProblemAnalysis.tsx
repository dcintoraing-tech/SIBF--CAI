
'use client';

import { History, ShieldAlert, FileX, Clock, CircleAlert, TrendingUp } from "lucide-react";

export default function ProblemAnalysis() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN" },
    { icon: FileX, text: "DISPERSIÓN" },
    { icon: Clock, text: "RETRAZOS" },
    { icon: CircleAlert, text: "ERROR HUMANO" }
  ];

  return (
    <div id="analisis-problema" className="space-y-32">
      {/* PÁGINA 1: EVOLUCIÓN */}
      <div className="min-h-[60vh] flex flex-col justify-center space-y-16">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">ANÁLISIS DEL PROBLEMA</span>
          <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">EVOLUCIÓN Y CONTEXTO</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-8 space-y-12">
            <p className="text-3xl md:text-5xl text-gray-600 leading-tight font-medium max-w-5xl">
              Históricamente, el control de asistencia ha dependido de registros físicos y manuales, los cuales hoy resultan <span className="text-[#FF1E2D] font-black underline decoration-8 underline-offset-[12px]">OBSOLETOS</span> ante la demanda de seguridad actual.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="flex gap-6 items-start p-10 bg-slate-50 border-l-8 border-[#FF1E2D] shadow-xl">
                <History className="w-14 h-14 text-[#FF1E2D] shrink-0" />
                <div>
                  <h4 className="text-xl font-black uppercase italic">MODELOS TRADICIONALES</h4>
                  <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-2">Vulnerables a errores y falta de integridad total.</p>
                </div>
              </div>
              <div className="flex gap-6 items-start p-10 bg-[#2B2B2B] text-white shadow-2xl">
                <TrendingUp className="w-14 h-14 text-[#FF1E2D] shrink-0" />
                <div>
                  <h4 className="text-xl font-black uppercase italic">NUEVA ERA DIGITAL</h4>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mt-2">Transformación total y adaptabilidad post-pandemia.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PÁGINA 2: DESAFÍO CRÍTICO */}
      <div className="min-h-[60vh] flex flex-col justify-center space-y-16 border-t border-gray-100 pt-32">
        <div className="space-y-4">
          <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">EL DESAFÍO CRÍTICO</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 space-y-12">
            <p className="text-3xl md:text-5xl text-gray-600 leading-tight font-medium max-w-4xl">
              La falta de confiabilidad institucional nace de procesos que permiten la <span className="text-[#2B2B2B] font-black underline decoration-8 underline-offset-[12px]">SUPLANTACIÓN</span> y la manipulación de datos sensibles.
            </p>
            <div className="p-12 bg-[#2B2B2B] text-center border-b-[12px] border-[#FF1E2D] shadow-2xl">
              <p className="text-3xl md:text-5xl font-black text-white uppercase italic leading-[0.9] tracking-tighter">
                "LA SEGURIDAD INSTITUCIONAL ESTÁ EN RIESGO."
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-[#FF1E2D] p-12 shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 -mr-24 -mt-24 rotate-45 group-hover:scale-110 transition-transform" />
              <h4 className="text-sm font-black text-white/70 uppercase tracking-[0.6em] mb-12 border-b border-white/20 pb-6">VULNERABILIDADES DETECTADAS</h4>
              <div className="grid grid-cols-1 gap-8">
                {challenges.map((item, i) => (
                  <div key={i} className="flex items-center gap-6 bg-white/10 p-6 border border-white/5 hover:bg-white/20 transition-all cursor-default">
                    <item.icon className="w-10 h-10 text-white" />
                    <span className="text-xl font-black text-white tracking-widest uppercase">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
