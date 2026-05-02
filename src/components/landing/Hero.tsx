import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar, Scan } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-gray-100 overflow-hidden">
      {/* Decorative red accent line */}
      <div className="absolute top-0 left-0 w-full h-1 red-gradient" />

      <div className="relative z-10 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-4 py-1 border-[#FF1E2D] text-[#FF1E2D] font-bold uppercase tracking-[0.2em] text-[10px] rounded-none">
              DOCUMENTO EJECUTIVO V1.0
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter leading-[0.9] uppercase italic">
            SISTEMA INTELIGENTE <br />
            <span className="red-gradient-text">CONTROL DE ASISTENCIA</span>
          </h1>
          
          <p className="text-sm md:text-base text-gray-500 max-w-xl font-medium leading-relaxed uppercase tracking-wide">
            OPTIMIZACIÓN Y AUTOMATIZACIÓN DE PROCESOS INSTITUCIONALES MEDIANTE BIOMETRÍA FACIAL DE VANGUARDIA.
          </p>
          
          <div className="flex flex-wrap items-center gap-6 text-[#2B2B2B] pt-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 red-gradient rounded-full flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Biometría</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 red-gradient rounded-full flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest">Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none hidden lg:block">
           <div className="relative group">
              <div className="absolute -inset-1 red-gradient blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative w-64 h-80 bg-white border border-gray-100 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/biometric/600/800" 
                  alt="Identificación Biométrica" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
                  data-ai-hint="facial recognition"
                />
                <div className="absolute inset-0 border-[20px] border-white/20 pointer-events-none"></div>
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-[#FF1E2D] animate-pulse"></div>
              </div>
           </div>
        </div>
      </div>
    </header>
  );
}