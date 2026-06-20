
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
    <div id="analisis-problema" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.1 ANÁLISIS DEL PROBLEMA</span>
        <h2 className="text-5xl md:text-7xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">CONTEXTO Y DESAFÍO</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
        {/* Lado Izquierdo: Contexto Histórico */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-[#2B2B2B] uppercase tracking-tighter italic border-l-8 border-[#FF1E2D] pl-6">
              EVOLUCIÓN DE LA GESTIÓN
            </h3>
            <p className="text-2xl md:text-3xl text-gray-600 leading-tight font-medium">
              Históricamente, el control de asistencia ha dependido de registros físicos y manuales, los cuales hoy resultan <span className="text-[#FF1E2D] font-black underline">OBSOLETOS</span> ante la demanda de seguridad actual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 items-start p-6 bg-slate-50 border border-gray-100 shadow-sm">
              <History className="w-10 h-10 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-sm font-black uppercase italic">MODELOS TRADICIONALES</h4>
                <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2">Vulnerables a errores y falta de integridad.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start p-6 bg-[#2B2B2B] text-white shadow-xl">
              <TrendingUp className="w-10 h-10 text-[#FF1E2D] shrink-0" />
              <div>
                <h4 className="text-sm font-black uppercase italic">NUEVA ERA DIGITAL</h4>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-2">Transformación total post-pandemia.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Derecho: El Problema Crítico */}
        <div className="lg:col-span-6 space-y-12">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-black text-[#2B2B2B] uppercase tracking-tighter italic border-l-8 border-gray-200 pl-6">
              EL DESAFÍO CRÍTICO
            </h3>
            <p className="text-2xl md:text-3xl text-gray-600 leading-tight font-medium">
              La falta de confiabilidad institucional nace de procesos que permiten la <span className="text-[#2B2B2B] font-black">SUPLANTACIÓN</span> y la manipulación de datos sensibles.
            </p>
          </div>

          <div className="bg-[#FF1E2D] p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 -mr-16 -mt-16 rotate-45 group-hover:scale-110 transition-transform" />
            <h4 className="text-xs font-black text-white/70 uppercase tracking-[0.5em] mb-8 border-b border-white/20 pb-4">VULNERABILIDADES DETECTADAS</h4>
            <div className="grid grid-cols-2 gap-6">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 p-4 border border-white/5 hover:bg-white/20 transition-all cursor-default">
                  <item.icon className="w-6 h-6 text-white" />
                  <span className="text-xs font-black text-white tracking-widest uppercase">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="p-12 md:p-20 bg-[#2B2B2B] text-center border-b-8 border-[#FF1E2D] shadow-2xl">
        <p className="text-3xl md:text-5xl font-black text-white uppercase italic leading-[0.9] tracking-tighter">
          "LA SEGURIDAD INSTITUCIONAL ESTÁ EN RIESGO ANTE MÉTODOS DE IDENTIFICACIÓN NO BIOMÉTRICOS."
        </p>
      </div>
    </div>
  );
}
