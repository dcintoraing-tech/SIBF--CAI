'use client';

import { 
  ClipboardList, 
  Users, 
  ShieldCheck, 
  Fingerprint, 
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function AnalysisPhase() {
  return (
    <div id="analisis" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.6 FASE DE ANÁLISIS</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">REQUERIMIENTOS</h2>
      </div>

      <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Identificamos y documentamos las necesidades críticas mediante <span className="text-[#FF1E2D] font-black underline">ENTREVISTAS DIRECTAS</span> y análisis de entorno institucional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <Card className="rounded-none border-t-8 border-[#FF1E2D] shadow-2xl p-6">
          <CardHeader>
            <ClipboardList className="w-12 h-12 text-[#FF1E2D] mb-4" />
            <CardTitle className="text-2xl font-black uppercase tracking-widest">Proceso de Negocio</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-gray-500 font-bold uppercase leading-relaxed">
              Detectamos fallos en la confiabilidad de los registros manuales y falta de centralización operativa.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-none border-t-8 border-[#2B2B2B] shadow-2xl p-6">
          <CardHeader>
            <ShieldCheck className="w-12 h-12 text-[#2B2B2B] mb-4" />
            <CardTitle className="text-2xl font-black uppercase tracking-widest">Atributos de Calidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {["SEGURIDAD BIOMÉTRICA", "RESPUESTA < 2S", "99.9% DISPONIBILIDAD"].map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-sm font-black text-[#2B2B2B] uppercase tracking-widest">{item}</span>
                <span className="text-[10px] font-black text-[#FF1E2D]">✓ CUMPLIDO</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="bg-[#2B2B2B] p-16 space-y-12 shadow-2xl">
        <div className="flex items-center gap-6">
          <Users className="w-12 h-12 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-white uppercase italic">HISTORIAS DE USUARIO</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="border-l-4 border-[#FF1E2D] pl-8 space-y-4">
            <span className="text-xs font-black text-[#FF1E2D] uppercase tracking-widest">PERSONAL</span>
            <p className="text-xl text-gray-300 font-bold uppercase leading-snug">"REGISTRO DE ASISTENCIA MEDIANTE ROSTRO PARA MAYOR SEGURIDAD."</p>
          </div>
          <div className="border-l-4 border-white/20 pl-8 space-y-4">
            <span className="text-xs font-black text-white/50 uppercase tracking-widest">DIRECTIVO</span>
            <p className="text-xl text-gray-300 font-bold uppercase leading-snug">"GENERAR REPORTES AUTOMÁTICOS PARA TOMA DE DECISIONES."</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-10 bg-slate-50 p-16 border border-gray-100">
        <h3 className="text-2xl font-black text-[#2B2B2B] uppercase tracking-widest flex items-center gap-4">
          <Fingerprint className="w-8 h-8 text-[#FF1E2D]" />
          MÉTRICAS DE USABILIDAD
        </h3>
        <div className="space-y-10">
          <div className="space-y-4">
            <div className="flex justify-between text-sm font-black uppercase tracking-widest">
              <span>SATISFACCIÓN DE USUARIO</span>
              <span className="text-[#FF1E2D]">95%</span>
            </div>
            <Progress value={95} className="h-2 bg-gray-200" />
          </div>
          <p className="text-xs text-gray-400 font-bold uppercase italic text-center">Datos obtenidos mediante pruebas reales con personal administrativo.</p>
        </div>
      </div>
    </div>
  );
}