'use client';

import { GitBranch, Database, Layout, Network } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DesignPhase() {
  return (
    <div id="diseno" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.6 FASE DE DISEÑO</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">ARQUITECTURA</h2>
      </div>

      <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black underline">MODELOS TÉCNICOS</span> escalables bajo estándares de ingeniería.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <GitBranch className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">MODELADO UML</h3>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {["PROCESOS", "CASOS USO", "CLASES", "SECUENCIA"].map((item, i) => (
              <div key={i} className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] transition-all">
                <span className="text-xs font-black text-gray-400 uppercase tracking-widest">DIAGRAMA</span>
                <span className="text-lg font-black uppercase">{item}</span>
                <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[10px]">UML V2.0</Badge>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <Database className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">ESTRUCTURA DE DATOS</h3>
          </div>
          <div className="bg-[#2B2B2B] p-10 space-y-8 shadow-2xl h-full">
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors">
              <Network className="w-8 h-8 text-[#FF1E2D]" />
              <div>
                <span className="text-lg font-black uppercase">MAPEO ENTIDAD-RELACIÓN</span>
                <p className="text-xs text-gray-500 uppercase font-bold">Base de datos centralizada</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors">
              <Layout className="w-8 h-8 text-[#FF1E2D]" />
              <div>
                <span className="text-lg font-black uppercase">DISEÑO DE INTERFAZ UX</span>
                <p className="text-xs text-gray-500 uppercase font-bold">Prototipado de alta fidelidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
