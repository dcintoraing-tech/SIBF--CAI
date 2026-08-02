'use client';

import { TrendingDown, CheckCircle2, Zap, ShieldCheck } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BusinessProcess() {
  const comparisonData = [
    { feature: "HARDWARE", legacy: "PROPIETARIO", sibf: "ESTÁNDAR" },
    { feature: "IMPLEMENTACIÓN", legacy: "SEMANAS", sibf: "HORAS" },
    { feature: "ACTUALIZACIÓN", legacy: "MANUAL", sibf: "NUBE" },
    { feature: "ESCALABILIDAD", legacy: "LIMITADA", sibf: "INFINITA" },
    { feature: "COSTO TOTAL", legacy: "ALTO", sibf: "80% MENOS" }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-10">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-bold text-[10px] md:text-xl tracking-[0.4em] uppercase">PROCESO DE NEGOCIO</span>
        <h2 className="text-3xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">COMPETITIVIDAD</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-stretch">
        <div className="bg-[#2B2B2B] p-6 md:p-16 text-white shadow-2xl border-b-[16px] border-[#FF1E2D] space-y-6">
          <div className="flex items-center gap-4">
            <TrendingDown className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-5xl font-black uppercase italic">AHORRO MASIVO</h3>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b-2 border-white/10 pb-4">
              <span className="text-[10px] md:text-lg text-gray-400 font-black uppercase">GLOBAL PRO</span>
              <span className="text-lg md:text-4xl font-black line-through text-gray-600">$150,000 MXN</span>
            </div>
            <div className="flex justify-between items-center border-b-2 border-white/20 pb-4">
              <span className="text-[12px] md:text-xl text-white font-black uppercase">SIBF-CAI</span>
              <span className="text-2xl md:text-7xl font-black text-[#FF1E2D] italic">$30,000 MXN</span>
            </div>
            <p className="text-[10px] md:text-xl font-black uppercase text-gray-400 leading-tight">
              Reducción del presupuesto operativo en un <span className="text-white text-xl md:text-5xl">80%</span>.
            </p>
          </div>
        </div>

        <div className="space-y-4 bg-white p-6 md:p-16 shadow-2xl border-2 border-[#2B2B2B]">
          <div className="flex items-center gap-4">
            <Zap className="w-8 h-8 md:w-16 md:h-16 text-[#FF1E2D]" />
            <h3 className="text-xl md:text-4xl font-black text-[#2B2B2B] uppercase tracking-widest italic">VENTAJAS SaaS</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-5 bg-slate-50 border-2 border-[#2B2B2B]">
              <CheckCircle2 className="w-6 h-6 text-[#FF1E2D]" />
              <p className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase">SIN DEPENDENCIAS DE HARDWARE EXTERNO.</p>
            </div>
            <div className="flex items-center gap-4 p-5 bg-slate-50 border-2 border-[#2B2B2B]">
              <CheckCircle2 className="w-6 h-6 text-[#FF1E2D]" />
              <p className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase">ACTUALIZACIONES SaaS INSTANTÁNEAS.</p>
            </div>
            <div className="bg-[#FF1E2D]/10 border-l-[12px] border-[#FF1E2D] p-6 mt-4">
              <div className="flex items-center gap-4 mb-2">
                <ShieldCheck className="w-6 h-6 text-[#FF1E2D]" />
                <span className="text-[12px] md:text-2xl font-black text-[#2B2B2B] uppercase tracking-widest">MANTENIMIENTO</span>
              </div>
              <p className="text-[10px] md:text-xl font-black text-[#2B2B2B] uppercase leading-tight italic">
                <span className="text-[#FF1E2D]">GRATIS 6 MESES</span>. LUEGO PRESUPUESTO PERSONALIZADO.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto shadow-2xl bg-white border-4 border-[#2B2B2B]">
        <Table className="min-w-full">
          <TableHeader className="bg-[#2B2B2B]">
            <TableRow className="hover:bg-[#2B2B2B] border-none">
              <TableHead className="text-white font-black uppercase text-[10px] md:text-2xl py-6">FACTOR</TableHead>
              <TableHead className="text-gray-500 font-black uppercase text-[10px] md:text-2xl py-6 text-center">GLOBAL PRO</TableHead>
              <TableHead className="text-[#FF1E2D] font-black uppercase text-[12px] md:text-3xl py-6 text-center italic">SIBF-CAI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, i) => (
              <TableRow key={i} className="border-[#2B2B2B] hover:bg-[#FF1E2D]/5">
                <TableCell className="p-6 font-black uppercase text-[#2B2B2B] text-[10px] md:text-2xl">{row.feature}</TableCell>
                <TableCell className="p-6 font-black text-gray-400 uppercase text-[10px] md:text-2xl text-center">{row.legacy}</TableCell>
                <TableCell className="p-6 font-black text-[#2B2B2B] uppercase text-[12px] md:text-3xl italic text-center">
                  <span className="inline-flex items-center gap-2"><CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-[#FF1E2D]" /> {row.sibf}</span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}