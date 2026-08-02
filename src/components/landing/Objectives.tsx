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
    desc: "IDENTIFICACIÓN FACIAL SEGURA." 
  },
  { 
    icon: CircleCheckBig, 
    title: "AUTOMATIZACIÓN", 
    desc: "MARCADO EFICIENTE." 
  },
  { 
    icon: Database, 
    title: "CENTRALIZACIÓN", 
    desc: "BASE DE DATOS ÚNICA." 
  },
  { 
    icon: FileSpreadsheet, 
    title: "REPORTES", 
    desc: "INFORMES EN TIEMPO REAL." 
  },
];

export default function Objectives() {
  return (
    <div id="objetivos" className="space-y-16 md:space-y-24">
      {/* OBJETIVO GENERAL */}
      <div className="flex flex-col justify-center space-y-8 md:space-y-16">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-black text-lg md:text-xl tracking-[0.4em] uppercase">OBJETIVOS</span>
          <h2 className="text-4xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
        </div>

        <div className="bg-white border-2 border-gray-100 p-8 md:p-20 text-center shadow-2xl border-l-[12px] md:border-l-[24px] border-[#FF1E2D] relative overflow-hidden animate-executive-pulse">
          <div className="absolute top-0 right-0 w-24 h-24 md:w-48 md:h-48 bg-[#FF1E2D]/5 -mr-12 -mt-12 md:-mr-24 md:-mt-24 rotate-45 animate-glow-pulse" />
          <h4 className="text-sm md:text-xl font-black text-[#FF1E2D] uppercase tracking-[0.6em] md:tracking-[0.8em] mb-6 md:mb-12 border-b-2 border-gray-100 pb-4 inline-block">OBJETIVO GENERAL</h4>
          <p className="text-xl md:text-5xl font-medium text-gray-700 leading-[1.1] italic max-w-6xl mx-auto">
            "Desarrollar un sistema de información para la <strong>gestión de asistencia</strong> basado en <strong>reconocimiento facial</strong> que permita identificar a las personas y registrar de forma automática la hora de entrada, pase de lista y salida, optimizando el registro y la <strong>gestión de la asistencia institucional</strong>."
          </p>
        </div>
      </div>

      {/* OBJETIVOS ESPECÍFICOS */}
      <div className="space-y-8 md:space-y-16">
        <div className="flex items-center gap-4 md:gap-8">
          <div className="h-[2px] flex-1 bg-gray-100" />
          <h4 className="text-sm md:text-xl font-black text-gray-400 uppercase tracking-[0.3em] md:tracking-[0.5em] whitespace-nowrap">ESPECÍFICOS</h4>
          <div className="h-[2px] flex-1 bg-gray-100" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {specificObjectives.map((obj, index) => (
            <div key={index} className="bg-white p-8 md:p-10 border-b-[8px] md:border-b-[12px] border-transparent shadow-2xl text-center flex flex-col items-center justify-center min-h-[250px] md:min-h-[300px] animate-executive-pulse" style={{ animationDelay: `${index * 500}ms` }}>
              <div className="w-16 h-16 md:w-20 md:h-20 red-gradient rounded-full flex items-center justify-center mb-6 md:mb-8 shadow-xl shadow-red-500/20">
                <obj.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <h3 className="text-xl md:text-2xl font-black text-[#2B2B2B] mb-4 uppercase tracking-tighter">{obj.title}</h3>
              <p className="text-sm md:text-lg text-gray-500 font-black uppercase tracking-widest leading-tight">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
