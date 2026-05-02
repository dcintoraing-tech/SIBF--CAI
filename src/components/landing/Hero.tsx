import { Button } from "@/components/ui/button";
import { ChevronRight, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-slate-50 py-20 overflow-hidden">
      {/* Background patterns for executive feel */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Proyecto de Innovación Institucional
            </div>
            
            <h1 className="mb-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 md:text-7xl">
              Sistema Inteligente <br />
              <span className="text-primary">de Asistencia</span>
            </h1>
            
            <p className="max-w-xl mb-10 text-xl text-slate-600 font-normal leading-relaxed">
              Una solución robusta y escalable diseñada para automatizar la gestión de asistencia mediante biometría facial de alta precisión.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-semibold shadow-lg shadow-primary/20"
                asChild
              >
                <a href="#objetivo">
                  Ver Propuesta
                  <ChevronRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="h-12 px-8 text-base font-semibold border-slate-300 text-slate-700 hover:bg-slate-100"
                asChild
              >
                <a href="#problema">Planteamiento</a>
              </Button>
            </div>
          </div>
          
          <div className="flex-1 hidden lg:block">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/5 rounded-[2rem] blur-2xl" />
              <div className="relative bg-white p-4 rounded-[2rem] shadow-2xl border border-slate-100">
                <img 
                  src="https://picsum.photos/seed/executive/800/600" 
                  alt="Interface Dashboard" 
                  className="rounded-2xl w-full h-auto grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  data-ai-hint="dashboard professional"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}