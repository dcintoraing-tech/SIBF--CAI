'use client';

import { ShieldCheck, Lock, Database, Cpu, Globe, Server } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function CybersecuritySlide() {
  const triad = [
    {
      icon: Lock,
      title: "CONFIDENCIALIDAD",
      desc: "Acceso exclusivo mediante biometría facial. Datos cifrados con AES-256 de grado militar.",
      tag: "PROTECCIÓN"
    },
    {
      icon: Database,
      title: "INTEGRIDAD",
      desc: "Registros inmutables en tiempo real con auditoría automática, garantizando la veracidad total.",
      tag: "VERACIDAD"
    },
    {
      icon: Globe,
      title: "DISPONIBILIDAD",
      desc: "Infraestructura Cloud de alta disponibilidad (99.9%) accesible institucionalmente 24/7.",
      tag: "ACCESO"
    }
  ];

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-6 max-w-[1200px] mx-auto px-4 text-[#2B2B2B]">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-[10px] md:text-base tracking-[0.4em] uppercase">CIBERSEGURIDAD Y NUBE</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">TRÍADA DE <span className="red-gradient-text">SEGURIDAD</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {triad.map((card, i) => (
          <div 
            key={i} 
            className="group relative bg-white p-6 md:p-8 rounded-[30px] shadow-xl border border-slate-100 hover:border-[#FF1E2D]/30 transition-all duration-500 hover:-translate-y-1"
          >
            <div className="absolute top-4 right-6">
              <Badge variant="outline" className="border-[#FF1E2D] text-[#FF1E2D] font-black text-[8px] px-2 py-0.5 rounded-full uppercase italic">
                {card.tag}
              </Badge>
            </div>
            <div className="w-12 h-12 md:w-16 md:h-16 bg-red-50 rounded-[20px] flex items-center justify-center mb-4 group-hover:bg-[#FF1E2D] transition-colors duration-500">
              <card.icon className="w-6 h-6 md:w-8 md:h-8 text-[#FF1E2D] group-hover:text-white transition-colors duration-500" />
            </div>
            <h3 className="text-lg md:text-xl font-black uppercase italic mb-2 leading-none">{card.title}</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-bold uppercase leading-tight italic opacity-80">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-[#2B2B2B] rounded-[30px] p-4 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF1E2D]/10 rounded-full blur-3xl -mr-24 -mt-24"></div>
        
        <div className="flex items-center gap-6 z-10">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <Cpu className="w-5 h-5 md:w-7 md:h-7 text-[#FF1E2D]" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-[#FF1E2D] rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <ShieldCheck className="w-5 h-5 md:w-7 md:h-7 text-white" />
            </div>
            <div className="w-10 h-10 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center shadow-xl border-4 border-[#2B2B2B]">
              <Server className="w-5 h-5 md:w-7 md:h-7 text-[#2B2B2B]" />
            </div>
          </div>
          <div className="space-y-0.5">
            <h4 className="text-white text-sm md:text-2xl font-black uppercase italic leading-none">STACK TECNOLÓGICO</h4>
            <p className="text-[#FF1E2D] text-[8px] md:text-sm font-bold uppercase tracking-[0.2em] italic">NEXT.JS 15 + FIREBASE + TENSORFLOW.JS</p>
          </div>
        </div>

        <div className="text-center md:text-right z-10">
          <div className="text-2xl md:text-5xl font-black text-white italic tracking-tighter leading-none">ZERO <span className="text-[#FF1E2D]">TRUST</span></div>
          <p className="text-gray-400 text-[8px] md:text-xs font-black uppercase tracking-widest mt-1">SEGURIDAD GRANULAR POR DISEÑO</p>
        </div>
      </div>
    </div>
  );
}
