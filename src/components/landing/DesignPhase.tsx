'use client';

import { GitBranch, Database, Layout, Network, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function DesignPhase() {
  const diagrams = [
    { 
      name: "PROCESOS", 
      img: "/images/pgeneral.jpg", 
      type: "DIAGRAMA",
      desc: "Mapa de flujo operativo del sistema"
    },
    { 
      name: "CASOS USO", 
      img: "/images/cugeneral.jpg", 
      type: "DIAGRAMA",
      desc: "Interacciones de actores y sistema"
    },
    { 
      name: "CLASES", 
      img: "/images/cgeneral.jpg", 
      type: "DIAGRAMA",
      desc: "Diagrama General de Clases y Estructura de Objetos" 
    },
    { name: "SECUENCIA", img: null, type: "DIAGRAMA", desc: "Flujo de mensajes" },
  ];

  return (
    <div id="diseno" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.7 FASE DE DISEÑO</span>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diagrams.map((item, i) => (
              item.img ? (
                <Dialog key={i}>
                  <DialogTrigger asChild>
                    <button className="relative group overflow-hidden bg-white border-2 border-gray-100 p-6 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] hover:scale-[1.02] transition-all duration-300">
                      <div className="absolute inset-0 bg-[#2B2B2B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 text-center">
                        <Search className="w-8 h-8 text-[#FF1E2D] mb-2 animate-pulse" />
                        <span className="text-white font-black text-xs uppercase tracking-widest mb-1">CLIC PARA AMPLIAR</span>
                        <span className="text-gray-400 text-[9px] font-bold uppercase">{item.desc}</span>
                      </div>

                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                      <span className="text-lg font-black uppercase">{item.name}</span>
                      
                      <div className="w-full h-32 bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                         <img src={item.img} alt={item.name} className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all" />
                      </div>
                      
                      <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[10px]">VER DETALLE</Badge>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-[#FF1E2D] border-2 bg-white overflow-hidden flex flex-col">
                    <DialogHeader className="p-4 bg-[#2B2B2B] text-white shrink-0">
                      <DialogTitle className="text-xl font-black uppercase italic tracking-widest flex items-center justify-between">
                        DIAGRAMA DE {item.name}
                        <span className="text-[#FF1E2D] text-[10px] font-bold tracking-[0.2em] ml-4 bg-white/5 px-3 py-1">SIBF-CAI V1.0</span>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-auto bg-slate-100 p-4 md:p-8 flex items-start justify-center">
                      <img 
                        src={item.img} 
                        alt={item.name} 
                        className="max-w-none w-auto h-auto min-w-full shadow-2xl bg-white"
                        style={{ display: 'block' }}
                      />
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div key={i} className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl opacity-40 grayscale">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                  <span className="text-lg font-black uppercase">{item.name}</span>
                  <Badge variant="outline" className="border-gray-200 text-gray-400 font-black text-[10px]">EN PROCESO</Badge>
                </div>
              )
            ))}
          </div>
        </div>

        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <Database className="w-10 h-10 text-[#FF1E2D]" />
            <h3 className="text-2xl font-black uppercase tracking-widest">ESTRUCTURA DE DATOS</h3>
          </div>
          <div className="bg-[#2B2B2B] p-10 space-y-8 shadow-2xl h-full flex flex-col justify-center">
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors group">
              <Network className="w-8 h-8 text-[#FF1E2D] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-lg font-black uppercase">MAPEO ENTIDAD-RELACIÓN</span>
                <p className="text-xs text-gray-500 uppercase font-bold">Base de datos centralizada SQL</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors group">
              <Layout className="w-8 h-8 text-[#FF1E2D] group-hover:scale-110 transition-transform" />
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
