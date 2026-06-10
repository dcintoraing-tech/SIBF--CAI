'use client';

import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Methodology() {
  const tasks = [
    { 
      name: "ANÁLISIS", 
      start: 1, 
      end: 4, 
      progress: 100, 
      color: "#FF1E2D",
      details: "Levantamiento de requerimientos, entrevistas con personal administrativo y definición de historias de usuario."
    },
    { 
      name: "DISEÑO", 
      start: 5, 
      end: 8, 
      progress: 100, 
      color: "#2B2B2B",
      details: "Modelado UML completo, diseño de arquitectura de datos en Firestore y prototipado de interfaces de usuario."
    },
    { 
      name: "DESARROLLO", 
      start: 9, 
      end: 14, 
      progress: 85, 
      color: "#FF1E2D",
      details: "Implementación del núcleo de IA con face-api.js, desarrollo del frontend en Next.js e integración con Firebase Auth."
    },
    { 
      name: "PRUEBAS", 
      start: 15, 
      end: 16, 
      progress: 0, 
      color: "#A3A3A3",
      details: "Control de calidad, pruebas de estrés de reconocimiento facial y validación de seguridad de datos."
    },
  ];

  const weeks = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div id="metodologia" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.4 METODOLOGÍA</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">AGILIDAD SCRUM</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: "EQUIPO", text: "ROLES DEFINIDOS" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS BI-SEMANALES" },
          { icon: CheckCircle2, title: "VALOR", text: "CALIDAD CONTINUA" }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4">
            <item.icon className="w-12 h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">CRONOGRAMA DE ACTIVIDADES (GANTT)</h3>
        </div>
        
        <div className="bg-[#1A1A1A] p-4 md:p-10 shadow-2xl overflow-x-auto">
          <TooltipProvider>
            <div className="min-w-[800px]">
              {/* Header Semanas */}
              <div className="grid grid-cols-[200px_repeat(16,1fr)] gap-px border-b border-white/10 pb-4">
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest self-end">FASES / SEMANAS</div>
                {weeks.map(w => (
                  <div key={w} className="text-center text-white/40 text-[10px] font-black">S{w}</div>
                ))}
              </div>

              {/* Filas de Actividades */}
              <div className="relative mt-6 space-y-4">
                {tasks.map((task, i) => (
                  <div key={i} className="grid grid-cols-[200px_repeat(16,1fr)] items-center group">
                    <div className="text-white font-black text-sm uppercase tracking-tighter pr-4 group-hover:text-[#FF1E2D] transition-colors">
                      {task.name}
                    </div>
                    <div className="col-span-16 h-10 relative bg-white/5 flex items-center">
                      {/* Barra de Gantt con Tooltip */}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className="absolute h-6 rounded-sm flex items-center justify-center text-[10px] font-black text-white transition-all duration-300 hover:brightness-110 cursor-help"
                            style={{ 
                              left: `${((task.start - 1) / 16) * 100}%`,
                              width: `${((task.end - task.start + 1) / 16) * 100}%`,
                              backgroundColor: task.color,
                              boxShadow: `0 0 15px ${task.color}44`
                            }}
                          >
                            <span className="relative z-10">{task.progress}%</span>
                            {/* Linea de progreso interno */}
                            <div 
                              className="absolute inset-0 bg-white/20 transition-all duration-1000"
                              style={{ width: `${task.progress}%` }}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-[#2B2B2B] border-[#FF1E2D] text-white p-4 max-w-xs rounded-none">
                          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF1E2D] mb-1">Actividades:</p>
                          <p className="text-xs font-bold uppercase leading-tight">{task.details}</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}

                {/* Grid Lines Verticales */}
                <div className="absolute top-0 left-[200px] right-0 bottom-0 pointer-events-none flex">
                  {weeks.map(w => (
                    <div key={w} className="flex-1 border-l border-white/5 h-full" />
                  ))}
                </div>
              </div>
            </div>
          </TooltipProvider>
        </div>
        
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] pt-4">
          DURACIÓN ESTIMADA: 4 MESES (16 SEMANAS)
        </p>
      </div>
    </div>
  );
}
