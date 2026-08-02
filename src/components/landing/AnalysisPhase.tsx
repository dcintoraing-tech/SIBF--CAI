'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-10">
      <div className="space-y-1">
        <h2 className="text-3xl md:text-6xl lg:text-7xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-xs md:text-3xl lg:text-4xl text-[#2B2B2B] font-bold leading-[1.1] max-w-5xl uppercase italic border-l-4 md:border-l-8 border-[#FF1E2D] pl-4 md:pl-6">
        Análisis técnico mediante <span className="text-[#FF1E2D]">ENTREVISTAS DIRECTAS</span> y auditoría de procesos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <Card className="rounded-xl border-none bg-white shadow-xl p-4 md:p-8 hover:bg-[#FF1E2D]/5 transition-colors">
          <CardHeader className="p-0 mb-4">
            <ClipboardList className="w-6 h-6 md:w-12 md:h-12 text-[#FF1E2D] mb-2" />
            <CardTitle className="text-[10px] md:text-2xl font-black uppercase tracking-widest text-[#2B2B2B]">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[10px] md:text-lg text-[#2B2B2B] font-bold uppercase leading-tight italic">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información institucional.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-xl border-none bg-white shadow-xl p-4 md:p-8">
          <CardHeader className="p-0 mb-4">
            <ShieldCheck className="w-6 h-6 md:w-12 md:h-12 text-[#2B2B2B] mb-2" />
            <CardTitle className="text-[10px] md:text-2xl font-black uppercase tracking-widest text-[#2B2B2B]">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-2 md:space-y-4">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-2">
                <span className="text-[8px] md:text-sm lg:text-base font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[8px] md:text-sm lg:text-base font-black text-[#FF1E2D] italic">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
