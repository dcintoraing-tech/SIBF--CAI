'use client';

import { ClipboardList, ShieldCheck, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-2">
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-base md:text-4xl text-gray-600 font-medium leading-tight max-w-4xl">
        Identificamos necesidades críticas mediante <span className="text-[#FF1E2D] font-black text-xl md:text-6xl">ENTREVISTAS DIRECTAS</span> y análisis.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Card className="rounded-none border-t-[4px] md:border-t-[8px] border-[#FF1E2D] shadow-xl p-4 md:p-8">
          <CardHeader className="p-0 mb-4">
            <ClipboardList className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-base md:text-2xl font-black uppercase tracking-widest">Proceso Negocio</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-xs md:text-lg text-gray-500 font-bold uppercase leading-snug">
              Detectamos fallos en la confiabilidad de los registros manuales y falta de centralización.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-[4px] md:border-t-[8px] border-[#2B2B2B] shadow-xl p-4 md:p-8">
          <CardHeader className="p-0 mb-4">
            <ShieldCheck className="w-8 h-8 md:w-12 md:h-12 text-[#2B2B2B] mb-2" />
            <CardTitle className="text-base md:text-2xl font-black uppercase tracking-widest">Calidad</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 md:space-y-4">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[8px] md:text-sm font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[6px] md:text-[8px] font-black text-[#FF1E2D]">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#2B2B2B] p-4 md:p-10 space-y-4 md:space-y-8 shadow-xl">
        <div className="flex items-center gap-4">
          <Users className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
          <h3 className="text-base md:text-3xl font-black text-white uppercase italic">HISTORIAS DE USUARIO</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <div className="border-l-[4px] md:border-l-[8px] border-[#FF1E2D] pl-4 md:pl-8">
            <span className="text-[8px] md:text-[10px] font-black text-[#FF1E2D] uppercase tracking-widest">PERSONAL</span>
            <p className="text-[10px] md:text-xl text-gray-300 font-bold uppercase leading-tight">"REGISTRO DE ASISTENCIA MEDIANTE ROSTRO PARA MAYOR SEGURIDAD."</p>
          </div>
          <div className="border-l-[4px] md:border-l-[8px] border-white/20 pl-4 md:pl-8">
            <span className="text-[8px] md:text-[10px] font-black text-white/50 uppercase tracking-widest">DIRECTIVO</span>
            <p className="text-[10px] md:text-xl text-gray-300 font-bold uppercase leading-tight">"GENERAR REPORTES AUTOMÁTICOS PARA TOMA DE DECISIONES."</p>
          </div>
        </div>
      </div>
    </div>
  );
}
