
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
    <div id="objetivos" className="space-y-32">
      {/* OBJETIVO GENERAL */}
      <div className="min-h-[50vh] flex flex-col justify-center space-y-16">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-black text-xl tracking-[0.4em] uppercase">OBJETIVOS</span>
          <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
        </div>

        <div className="bg-white border-2 border-gray-100 p-16 md:p-24 text-center shadow-2xl border-l-[24px] border-[#FF1E2D] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF1E2D]/5 -mr-24 -mt-24 rotate-45" />
          <h4 className="text-xl font-black text-[#FF1E2D] uppercase tracking-[0.8em] mb-12 border-b-2 border-gray-100 pb-6 inline-block">OBJETIVO GENERAL</h4>
          <p className="text-3xl md:text-6xl font-medium text-gray-700 leading-[1.1] italic max-w-6xl mx-auto">
            "Desarrollar un sistema de gestión de asistencia mediante <strong>reconocimiento facial</strong> para fortalecer la <strong>eficiencia operativa</strong> institucional."
          </p>
        </div>
      </div>

      {/* OBJETIVOS ESPECÍFICOS */}
      <div className="space-y-16">
        <div className="flex items-center gap-8">
          <div className="h-[3px] flex-1 bg-gray-100" />
          <h4 className="text-xl font-black text-gray-400 uppercase tracking-[0.5em] whitespace-nowrap">ESPECÍFICOS</h4>
          <div className="h-[3px] flex-1 bg-gray-100" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {specificObjectives.map((obj, index) => (
            <div key={index} className="bg-white p-12 border-b-[12px] border-transparent hover:border-[#FF1E2D] transition-all duration-500 group shadow-2xl text-center flex flex-col items-center justify-center min-h-[350px]">
              <div className="w-24 h-24 red-gradient rounded-full flex items-center justify-center mb-10 shadow-xl shadow-red-500/20 group-hover:scale-110 transition-transform">
                <obj.icon className="w-12 h-12 text-white" />
              </div>
              <h3 className="text-3xl font-black text-[#2B2B2B] mb-6 uppercase tracking-tighter">{obj.title}</h3>
              <p className="text-xl text-gray-500 font-black uppercase tracking-widest leading-tight">
                {obj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
