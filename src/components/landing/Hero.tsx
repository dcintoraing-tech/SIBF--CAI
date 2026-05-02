import { Badge } from "@/components/ui/badge";
import { ShieldCheck, Calendar } from "lucide-react";

export default function Hero() {
  return (
    <header className="relative bg-white border-b border-slate-100 overflow-hidden">
      {/* Subtle decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-50 rounded-full -ml-24 -mb-24 blur-2xl" />

      <div className="relative z-10 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="px-3 py-1 border-primary/20 text-primary bg-primary/5 font-bold uppercase tracking-wider">
              Propuesta Ejecutiva v1.0
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Sistema Inteligente <br />
            <span className="text-primary">de Control de Asistencia</span>
          </h1>
          
          <div className="flex items-center gap-6 text-slate-500 font-medium">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <span>Biometría Facial</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Gestión en Tiempo Real</span>
            </div>
          </div>
        </div>

        <div className="flex-none bg-slate-50 p-3 rounded-2xl border border-slate-100 shadow-inner">
           <div className="w-48 h-48 md:w-64 md:h-64 rounded-xl bg-white flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden group">
              <img 
                src="https://picsum.photos/seed/face-auth/600/600" 
                alt="Logo Institucional" 
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 transition-all duration-500"
                data-ai-hint="facial biometric"
              />
           </div>
        </div>
      </div>
    </header>
  );
}
