'use client';

import { 
  TrendingDown, 
  ArrowRight, 
  CheckCircle2, 
  XCircle,
  Zap,
  BarChart3
} from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export default function BusinessProcess() {
  const comparisonData = [
    { feature: "HARDWARE", legacy: "PROPIETARIO COSTOSO", sibf: "DISPOSITIVOS ESTÁNDAR" },
    { feature: "IMPLEMENTACIÓN", legacy: "MESES / SEMANAS", sibf: "DÍAS / HORAS" },
    { feature: "ACTUALIZACIÓN", legacy: "MANUAL / PRESENCIAL", sibf: "NUBE (INSTANTÁNEA)" },
    { feature: "ESCALABILIDAD", legacy: "LIMITADA POR CABLEADO", sibf: "INFINITA (MODULAR)" },
    { feature: "COSTO TOTAL", legacy: "ALTO (MANUAL/SOPORTE)", sibf: "5 VECES MÁS ECONÓMICO" }
  ];

  return (
    <div id="negocio" className="space-y-32">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-xl tracking-[0.4em] uppercase">PROCESO DE NEGOCIO</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">COMPETITIVIDAD</h2>
      </div>

      <p className="text-3xl md:text-5xl text-gray-600 font-medium leading-tight max-w-5xl">
        Ofrecemos un <span className="text-[#FF1E2D] font-black text-4xl md:text-7xl">80% DE SIMILITUD</span> funcional con sistemas globales, pero con una estructura de costos disruptiva.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="bg-[#2B2B2B] p-16 text-white shadow-2xl space-y-12">
          <div className="flex items-center gap-6">
            <TrendingDown className="w-16 h-16 text-[#FF1E2D]" />
            <h3 className="text-4xl font-black uppercase italic">DISRUPCIÓN EN COSTOS</h3>
          </div>
          <div className="space-y-8">
            <div className="flex justify-between items-end border-b border-white/10 pb-6">
              <span className="text-gray-400 font-bold uppercase tracking-widest">SISTEMAS TRADICIONALES</span>
              <span className="text-3xl font-black line-through text-gray-600">$$$$$</span>
            </div>
            <div className="flex justify-between items-end border-b border-white/20 pb-6">
              <span className="text-white font-black uppercase tracking-widest">SIBF-CAI SOLUTION</span>
              <span className="text-5xl font-black text-[#FF1E2D]">$</span>
            </div>
            <p className="text-xl font-bold uppercase text-gray-400 leading-relaxed">
              Eliminamos el intermediario de hardware y licencias por usuario, reduciendo el presupuesto operativo en un <span className="text-white text-3xl font-black">80%</span>.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="flex items-center gap-6">
            <Zap className="w-14 h-14 text-[#FF1E2D]" />
            <h3 className="text-3xl font-black text-[#2B2B2B] uppercase tracking-widest italic">VENTAJAS OPERATIVAS</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="flex items-start gap-6 p-8 bg-white border border-gray-100 shadow-xl">
              <CheckCircle2 className="w-8 h-8 text-[#FF1E2D] shrink-0" />
              <p className="text-xl font-black text-gray-500 uppercase tracking-tighter">SIN DEPENDENCIAS DE PROVEEDORES DE HARDWARE EXTERNOS.</p>
            </div>
            <div className="flex items-start gap-6 p-8 bg-white border border-gray-100 shadow-xl">
              <CheckCircle2 className="w-8 h-8 text-[#FF1E2D] shrink-0" />
              <p className="text-xl font-black text-gray-500 uppercase tracking-tighter">ACTUALIZACIONES DE IA BASADAS EN SOFTWARE (SaaS).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-12">
        <div className="flex items-center gap-6">
          <BarChart3 className="w-14 h-14 text-[#FF1E2D]" />
          <h3 className="text-4xl font-black uppercase tracking-widest italic">MATRIZ COMPARATIVA</h3>
        </div>
        
        <div className="overflow-x-auto shadow-2xl">
          <Table className="bg-white border-4 border-[#2B2B2B]">
            <TableHeader className="bg-[#2B2B2B]">
              <TableRow className="hover:bg-[#2B2B2B] border-none">
                <TableHead className="text-white font-black uppercase p-8 text-xl">FACTOR</TableHead>
                <TableHead className="text-gray-400 font-black uppercase p-8 text-xl">SISTEMAS LEGACY</TableHead>
                <TableHead className="text-[#FF1E2D] font-black uppercase p-8 text-2xl italic">SIBF-CAI (NUESTRO)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonData.map((row, i) => (
                <TableRow key={i} className="border-gray-100 hover:bg-slate-50 transition-colors">
                  <TableCell className="p-8 font-black uppercase text-[#2B2B2B]">{row.feature}</TableCell>
                  <TableCell className="p-8 font-bold text-gray-400 uppercase flex items-center gap-4">
                    <XCircle className="w-5 h-5 text-gray-300" /> {row.legacy}
                  </TableCell>
                  <TableCell className="p-8 font-black text-[#2B2B2B] uppercase text-lg italic">
                    <div className="flex items-center gap-4">
                      <CheckCircle2 className="w-6 h-6 text-[#FF1E2D]" /> {row.sibf}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
