'use client';

import { ShieldCheck, Lock, Database, Cpu, Globe, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CybersecuritySlide() {
  const techCards = [
    {
      icon: Lock,
      title: "CIFRADO AVANZADO",
      desc: "Protección de datos biométricos mediante algoritmos de encriptación AES-256 en tránsito y reposo.",
      tag: "SEGURIDAD"
    },
    {
      icon: ShieldCheck,
      title: "REGLAS DE FIREBASE",
      desc: "Arquitectura Zero-Trust con reglas de seguridad granulares que impiden el acceso no autorizado.",
      tag: "INFRAESTRUCTURA"
    },
    {
      icon: Database,
      title: "INTEGRIDAD DE DATOS",
      desc: "Sincronización en tiempo real con auditoría automática de cada registro de asistencia.",
      tag: "RELIABILITY"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-8 md:space-y-12 max-w-[1300px] mx-auto px-6 text-[#2B2B2B]">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">CIBERSEGURIDAD Y NUBE</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">PROTECCIÓN <span className="red-gradient-text">TOTAL</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {techCards.map((card, i) => (
          <div 
            key={i} 
            className="group relative bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 hover:border-[#FF1E2D]/30 transition-all duration-500 hover:-translate-y-2"
          >
            <div className="absolute top-6 right-8">
              <Badge variant="outline" className="border-[#FF1E2D] text-[#FF1E2D] font-black text-[10px] px-3 py-1 rounded-full uppercase italic">
                {card.tag}
              </Badge>
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-red-50 rounded-[25px] flex items-center justify-center mb-8 group-hover:bg-[#FF1E2D] transition-colors duration-500">
              <card.icon className="w-8 h-8 md:w-10 md:h-10 text-[#FF1E2D] group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-xl md:text-3xl font-black uppercase italic mb-4 leading-none">{card.title}</h3>
            <p className="text-sm md:text-lg text-gray-500 font-bold uppercase leading-tight italic opacity-80">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#2B2B2B] rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1E2D]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="flex items-center gap-8 z-10">
          <div className="flex -space-x-4">
            <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <Cpu className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            </div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-[#FF1E2D] rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <Globe className="w-6 h-6 md:w-10 md:h-10 text-white" />
            </div>
            <div className="w-12 h-12 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <Server className="w-6 h-6 md:w-10 md:h-10 text-[#2B2B2B]" />
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-white text-xl md:text-4xl font-black uppercase italic leading-none">STACK TECNOLÓGICO</h4>
            <p className="text-[#FF1E2D] text-xs md:text-xl font-bold uppercase tracking-[0.2em] italic">NEXT.JS 15 + TENSORFLOW.JS + FIREBASE</p>
          </div>
        </div>

        <div className="text-right z-10">
          <div className="text-4xl md:text-7xl font-black text-white italic tracking-tighter leading-none">100% <span className="text-[#FF1E2D]">CLOUD</span></div>
          <p className="text-gray-400 text-[10px] md:text-sm font-black uppercase tracking-widest mt-2">Disponibilidad Global Garantizada</p>
        </div>
      </div>
    </div>
  );
}
