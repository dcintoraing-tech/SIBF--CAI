'use client';

import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet
} from "lucide-react";

const specificObjectives = [
  { icon: Scan, title: "BIOMETRÍA", desc: "IDENTIFICACIÓN SEGURA." },
  { icon: CircleCheckBig, title: "AUTOMATIZACIÓN", desc: "MARCADO EFICIENTE." },
  { icon: Database, title: "CENTRALIZACIÓN", desc: "BASE DE DATOS ÚNICA." },
  { icon: FileSpreadsheet, title: "REPORTES", desc: "INFORMES TIEMPO REAL." },
];

export default function Objectives() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-black text-[12px] md:text-2xl tracking-[0.4em] uppercase">OBJETIVOS</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">MISIÓN Y ALCANCE</h2>
      </div>

      <div className="bg-white border border-gray-100 p-8 md:p-16 shadow-2xl border-l-[10px] md:border-l-[24px] border-[#FF1E2D] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#FF1E2D]/5 -mr-12 -mt-12 rotate-45" />
        <h4 className="text-[10px] md:text-xl font-black text-[#FF1E2D] uppercase tracking-[0.6em] mb-6 border-b border-gray-100 pb-4 inline-block">OBJETIVO GENERAL</h4>
        <p className="text-sm md:text-5xl font-medium text-gray-700 leading-tight italic max-w-6xl">
          "Desarrollar un sistema de información para la <strong>gestión de asistencia</strong> basado en <strong>reconocimiento facial</strong> que permita registrar de forma automática, optimizando la <strong>gestión institucional</strong>."
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-6 md:p-12 border-b-[6px] md:border-b-[12px] border-gray-100 shadow-xl text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 md:w-20 md:h-20 red-gradient rounded-full flex items-center justify-center shadow-lg">
              <obj.icon className="w-6 h-6 md:w-10 md:h-10 text-white" />
            </div>
            <h3 className="text-[12px] md:text-2xl font-black text-[#2B2B2B] uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-[8px] md:text-xs text-gray-400 font-bold uppercase tracking-widest leading-none">
              {obj.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
