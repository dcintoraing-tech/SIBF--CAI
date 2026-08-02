'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-12">
      <div className="space-y-1">
        <h2 className="text-4xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-sm md:text-5xl text-[#2B2B2B] font-black leading-[1.1] max-w-5xl uppercase italic border-l-8 border-[#FF1E2D] pl-6">
        Análisis técnico mediante <span className="text-[#FF1E2D]">ENTREVISTAS DIRECTAS</span> y auditoría de procesos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        <Card className="rounded-2xl border-none bg-white shadow-2xl p-6 md:p-12 hover:bg-[#FF1E2D]/5 transition-colors">
          <CardHeader className="p-0 mb-6">
            <ClipboardList className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-xs md:text-3xl font-black uppercase tracking-widest text-[#2B2B2B]">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase leading-tight italic">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información institucional.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-none bg-white shadow-2xl p-6 md:p-12">
          <CardHeader className="p-0 mb-6">
            <ShieldCheck className="w-8 h-8 md:w-16 md:h-16 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-xs md:text-3xl font-black uppercase tracking-widest text-[#2B2B2B]">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-3 md:space-y-6">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-3">
                <span className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[10px] md:text-xl font-black text-[#FF1E2D] italic">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
