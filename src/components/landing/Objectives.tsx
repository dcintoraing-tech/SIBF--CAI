
'use client';

import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet
} from "lucide-react";

const specificObjectives = [
  { 
    icon: Scan, 
    title: "BIOMETRÍA", 
    desc: "IDENTIFICACIÓN FACIAL 100% SEGURA." 
  },
  { 
    icon: CircleCheckBig, 
    title: "AUTOMATIZACIÓN", 
    desc: "MARCADO AUTÓNOMO Y EFICIENTE." 
  },
  { 
    icon: Database, 
    title: "CENTRALIZACIÓN", 
    desc: "BASE DE DATOS ÚNICA Y ACCESIBLE." 
  },
  { 
    icon: FileSpreadsheet, 
    title: "REPORTES", 
    desc: "INFORMES EN TIEMPO REAL." 
  },
];

export default function Objectives() {
  return (
    <div id="objetivos" className="space-y-20">
      {/* Encabezado de Sección */}
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-black text-lg tracking-[0.4em] uppercase">1.2 OBJETIVOS</span>
        <h2 className="text-5xl md:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      {/* Objetivo General */}
      <div className="bg-white border-2 border-gray-100 p-12 md:p-20 text-center shadow-2xl border-l-[16px] border-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF1E2D]/5 -mr-16 -mt-16 rotate-45" />
        <h4 className="text-[14px] font-black text-[#FF1E2D] uppercase tracking-[0.6em] mb-8 border-b border-gray-100 pb-4 inline-block">OBJETIVO GENERAL</h4>
        <p className="text-2xl md:text-5xl font-medium text-gray-700 leading-[1.1] italic max-w-5xl mx-auto">
          "Desarrollar un sistema de gestión de asistencia mediante <strong>reconocimiento facial</strong>, permitiendo el registro automatizado de entradas y salidas para fortalecer la <strong>eficiencia operativa</strong> institucional."
        </p>
      </div>

      {/* Objetivos Específicos */}
      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <div className="h-[2px] flex-1 bg-gray-100" />
          <h4 className="text-[12px] font-black text-gray-400 uppercase tracking-[0.4em] whitespace-nowrap">OBJETIVOS ESPECÍFICOS</h4>
          <div className="h-[2px] flex-1 bg-gray-100" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specificObjectives.map((obj, index) => (
            <div key={index} className="bg-white p-10 border-b-8 border-transparent hover:border-[#FF1E2D] transition-all duration-500 group shadow-xl text-center flex flex-col items-center justify-center min-h-[300px]">
              <div className="w-20 h-20 red-gradient rounded-full flex items-center justify-center mb-8 shadow-lg shadow-red-500/20 group-hover:scale-110 transition-transform">
                <obj.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-black text-[#2B2B2B] mb-4 uppercase tracking-tighter">{obj.title}</h3>
              <p className="text-lg text-gray-500 font-black uppercase tracking-widest leading-tight">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
