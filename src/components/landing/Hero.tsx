import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -mr-48 -mt-48 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-50/50 rounded-full -ml-36 -mb-36 blur-2xl" />

      <div className="relative z-10 p-8 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-4 py-1.5 border-primary/20 text-primary bg-primary/5 font-bold uppercase tracking-wider text-xs">
              Presentación Ejecutiva v1.0
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Sistema Inteligente <br />
            <span className="text-primary">de Control de Asistencia</span>
          </h1>
          
          <p className="text-lg text-slate-500 max-w-xl font-medium leading-relaxed">
            Optimización y automatización de procesos institucionales mediante biometría facial de vanguardia.
          </p>
          
          <div className="flex items-center gap-8 text-slate-600 font-bold">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-primary" />
              </div>
              <span>Biometría Facial</span>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <span>Gestión en Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none p-4 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-inner">
           <div className="w-56 h-56 md:w-72 md:h-72 rounded-[2rem] bg-white flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden">
              <img 
                src="https://picsum.photos/seed/tech-present/800/800" 
                alt="Identificación Biométrica" 
                className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
                data-ai-hint="facial biometric"
              />
           </div>
        </div>
      </div>
    </header>
  );
}