'use client';

import { ClipboardList, ShieldCheck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AnalysisPhase() {
  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-16">
      <div className="space-y-1">
        <h2 className="text-4xl md:text-9xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">REQUERIMIENTOS</h2>
      </div>

      <p className="text-sm md:text-6xl text-[#2B2B2B] font-black leading-[1.1] max-w-6xl uppercase italic">
        Análisis técnico mediante <span className="text-[#FF1E2D]">ENTREVISTAS DIRECTAS</span> y auditoría de procesos.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16">
        <Card className="rounded-none border-4 border-[#2B2B2B] border-t-[16px] border-t-[#FF1E2D] shadow-2xl p-8 md:p-16 hover:bg-[#FF1E2D]/5 transition-colors">
          <CardHeader className="p-0 mb-6">
            <ClipboardList className="w-10 h-10 md:w-20 md:h-20 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-sm md:text-4xl font-black uppercase tracking-widest text-[#2B2B2B]">PROCESO NEGOCIO</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-[12px] md:text-2xl text-[#2B2B2B] font-black uppercase leading-tight italic">
              Detectamos fallos críticos en la confiabilidad de los registros manuales y una falta de centralización de la información.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-4 border-[#2B2B2B] border-t-[16px] border-t-[#2B2B2B] shadow-2xl p-8 md:p-16">
          <CardHeader className="p-0 mb-6">
            <ShieldCheck className="w-10 h-10 md:w-20 md:h-20 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-sm md:text-4xl font-black uppercase tracking-widest text-[#2B2B2B]">CALIDAD TÉCNICA</CardTitle>
          </CardHeader>
          <CardContent className="p-0 space-y-4 md:space-y-8">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b-2 border-[#2B2B2B] pb-4">
                <span className="text-[10px] md:text-2xl font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[10px] md:text-2xl font-black text-[#FF1E2D] italic">✓ OK</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}