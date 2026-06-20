'use client';

import { GitBranch, Database, Layout, Network, Search, Maximize2, FileText } from "lucide-react";
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
      img: "/images/dp.pdf", 
      type: "DOCUMENTO PDF",
      desc: "Mapa de flujo operativo del sistema (Formato PDF)",
      isPdf: true
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
      desc: "Estructura de objetos y lógica del sistema" 
    },
    { 
      name: "SECUENCIA", 
      img: null, 
      type: "DIAGRAMA", 
      desc: "Flujo de mensajes y eventos" 
    },
  ];

  return (
    <div id="diseno" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.7 FASE DE DISEÑO</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic text-shadow-sm">ARQUITECTURA</h2>
      </div>

      <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight max-w-4xl">
        Transformamos requerimientos en <span className="text-[#FF1E2D] font-black underline decoration-2 underline-offset-8">MODELOS TÉCNICOS</span> de alta fidelidad bajo estándares de ingeniería.
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
                    <button className="relative group overflow-hidden bg-white border-2 border-gray-100 p-6 flex flex-col items-center gap-4 shadow-xl hover:border-[#FF1E2D] hover:shadow-2xl hover:shadow-red-500/10 hover:scale-[1.02] transition-all duration-300 ease-out">
                      {/* Overlay de preview al poner el cursor */}
                      <div className="absolute inset-0 bg-[#2B2B2B]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-4 text-center">
                        <Maximize2 className="w-8 h-8 text-[#FF1E2D] mb-2 animate-pulse" />
                        <span className="text-white font-black text-xs uppercase tracking-widest mb-1">VER EN ALTA CALIDAD</span>
                        <span className="text-gray-400 text-[9px] font-bold uppercase">{item.desc}</span>
                      </div>

                      <div className="w-full flex justify-between items-center mb-1">
                        <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                        <Badge variant="outline" className="border-red-100 text-[#FF1E2D] font-black text-[8px] px-2 py-0">HD</Badge>
                      </div>
                      
                      <span className="text-lg font-black uppercase tracking-tighter">{item.name}</span>
                      
                      <div className="w-full h-32 bg-slate-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                         {item.isPdf ? (
                           <div className="flex flex-col items-center gap-2">
                             <FileText className="w-12 h-12 text-[#FF1E2D] opacity-40 group-hover:opacity-100 transition-opacity" />
                             <span className="text-[10px] font-black text-gray-400 uppercase">DOCUMENTO PDF</span>
                           </div>
                         ) : (
                           <img 
                            src={item.img} 
                            alt={item.name} 
                            className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            style={{ imageRendering: 'auto' }}
                           />
                         )}
                      </div>
                      
                      <div className="text-[#FF1E2D] font-black text-[10px] uppercase tracking-widest flex items-center gap-2">
                        DETALLES <Search className="w-3 h-3" />
                      </div>
                    </button>
                  </DialogTrigger>
                  <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 border-[#FF1E2D] border-2 bg-white overflow-hidden flex flex-col shadow-[0_0_100px_rgba(0,0,0,0.3)]">
                    <DialogHeader className="p-4 bg-[#2B2B2B] text-white shrink-0 z-20 shadow-lg">
                      <DialogTitle className="text-xl font-black uppercase italic tracking-widest flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="text-[#FF1E2D]">|</span> {item.name}
                        </div>
                        <div className="flex items-center gap-4">
                          <span className="text-gray-500 text-[10px] font-bold tracking-[0.2em] hidden sm:block">RESOLUCIÓN ORIGINAL</span>
                          <span className="text-[#FF1E2D] text-[10px] font-bold tracking-[0.2em] bg-white/5 px-3 py-1 border border-white/10">SIBF-CAI V1.0</span>
                        </div>
                      </DialogTitle>
                    </DialogHeader>
                    <div className="flex-1 overflow-auto bg-[#F8F9FA] p-0 flex items-stretch justify-center relative bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]">
                      {item.isPdf ? (
                        <iframe 
                          src={`${item.img}#toolbar=0&navpanes=0&scrollbar=1`} 
                          className="w-full h-full border-none"
                          title={item.name}
                        />
                      ) : (
                        <div className="p-4 md:p-12 w-full flex justify-center items-start">
                          <img 
                            src={item.img} 
                            alt={item.name} 
                            className="max-w-none w-auto h-auto min-w-full shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-white border border-gray-200"
                            style={{ 
                              display: 'block',
                              imageRendering: 'auto',
                              WebkitOptimizeContrast: 'true'
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              ) : (
                <div key={i} className="bg-white border-2 border-gray-100 p-8 flex flex-col items-center gap-4 shadow-xl opacity-40 grayscale select-none">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{item.type}</span>
                  <span className="text-lg font-black uppercase">{item.name}</span>
                  <Badge variant="outline" className="border-gray-200 text-gray-400 font-black text-[10px]">PENDIENTE</Badge>
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
          <div className="bg-[#2B2B2B] p-10 space-y-8 shadow-2xl h-full flex flex-col justify-center border-r-8 border-[#FF1E2D]">
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors group cursor-default">
              <Network className="w-8 h-8 text-[#FF1E2D] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-lg font-black uppercase tracking-tight">MAPEO ENTIDAD-RELACIÓN</span>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Base de datos centralizada SQL</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-white p-6 border border-white/10 hover:bg-white/5 transition-colors group cursor-default">
              <Layout className="w-8 h-8 text-[#FF1E2D] group-hover:scale-110 transition-transform" />
              <div>
                <span className="text-lg font-black uppercase tracking-tight">DISEÑO DE INTERFAZ UX</span>
                <p className="text-xs text-gray-500 uppercase font-bold tracking-widest">Prototipado funcional de alta fidelidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
