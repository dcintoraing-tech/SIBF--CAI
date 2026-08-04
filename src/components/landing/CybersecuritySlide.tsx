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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-10 max-w-[1400px] mx-auto px-6 text-[#2B2B2B]">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-black text-xs md:text-2xl tracking-[0.5em] uppercase">CIBERSEGURIDAD Y NUBE</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">TRÍADA DE <span className="red-gradient-text">SEGURIDAD</span></h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {triad.map((card, i) => (
          <div 
            key={i} 
            className="group relative bg-white p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 hover:border-[#FF1E2D]/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div className="absolute top-6 right-8">
              <Badge variant="outline" className="border-2 border-[#FF1E2D] text-[#FF1E2D] font-black text-[10px] md:text-sm px-4 py-1 rounded-full uppercase italic bg-red-50/50">
                {card.tag}
              </Badge>
            </div>
            <div>
              <div className="w-16 h-16 md:w-24 md:h-24 bg-red-50 rounded-[25px] flex items-center justify-center mb-6 group-hover:bg-[#FF1E2D] transition-colors duration-500">
                <card.icon className="w-8 h-8 md:w-12 md:h-12 text-[#FF1E2D] group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-2xl md:text-4xl lg:text-5xl font-black uppercase italic mb-4 leading-none tracking-tight">{card.title}</h3>
              <p className="text-xs md:text-xl lg:text-2xl text-gray-500 font-bold uppercase leading-tight italic opacity-90">
                {card.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#2B2B2B] rounded-[40px] p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF1E2D]/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
        
        <div className="flex items-center gap-8 z-10">
          <div className="flex -space-x-4">
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#2B2B2B]">
              <Cpu className="w-7 h-7 md:w-10 md:h-10 text-[#FF1E2D]" />
            </div>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#FF1E2D] rounded-full flex items-center justify-center shadow-2xl border-4 border-[#2B2B2B]">
              <ShieldCheck className="w-7 h-7 md:w-10 md:h-10 text-white" />
            </div>
            <div className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-2xl border-4 border-[#2B2B2B]">
              <Server className="w-7 h-7 md:w-10 md:h-10 text-[#2B2B2B]" />
            </div>
          </div>
          <div className="space-y-1">
            <h4 className="text-white text-lg md:text-3xl font-black uppercase italic leading-none">STACK TECNOLÓGICO</h4>
            <p className="text-[#FF1E2D] text-[10px] md:text-lg font-bold uppercase tracking-[0.3em] italic">NEXT.JS 15 + FIREBASE + TENSORFLOW.JS</p>
          </div>
        </div>

        <div className="text-center md:text-right z-10">
          <div className="text-3xl md:text-7xl font-black text-white italic tracking-tighter leading-none">ZERO <span className="text-[#FF1E2D]">TRUST</span></div>
          <p className="text-gray-400 text-[10px] md:text-sm font-black uppercase tracking-[0.4em] mt-2">SEGURIDAD GRANULAR POR DISEÑO</p>
        </div>
      </div>
    </div>
  );
}
