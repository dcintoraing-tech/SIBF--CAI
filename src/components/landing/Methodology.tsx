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
  const sprints = [
    { 
      name: "SPRINT 1", 
      weeks: "Semanas 1 - 2",
      phases: "Fase de Análisis",
      details: [
        "Levantamiento de Requerimientos",
        "HU Alumno (HU01-HU03 con RF/RNF)",
        "HU Docente (HU05-HU07 con RF/RNF)",
        "HU Admin (HU08-HU11 con RF/RNF)",
        "Estudio de Usabilidad"
      ],
      progress: 100,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 2", 
      weeks: "Semanas 3 - 5",
      phases: "Análisis y Diseño",
      details: [
        "HU Gestión usuarios V1.1",
        "HU Administración catálogos V1.1",
        "HU Supervisión y respaldo V1.1",
        "Diagramas UML: Procesos, Casos Uso, Clases, Secuencia",
        "Diagrama Entidad Relación",
        "Arquitectura de información"
      ],
      progress: 100,
      color: "#2B2B2B"
    },
    { 
      name: "SPRINT 3", 
      weeks: "Semanas 6 - 8",
      phases: "Diseño, Desarrollo y Pruebas",
      details: [
        "UI Design: Login, Dashboard, Usuarios, Reportes, Respaldo",
        "FE: Next.js + Tailwind + TypeScript",
        "Validaciones con Hook Form + Zod",
        "Integración backend, sesiones y roles",
        "CRUD de usuarios y catálogos",
        "Pruebas QA de autenticación y respaldo"
      ],
      progress: 100,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 4", 
      weeks: "Semanas 9 - 11",
      phases: "Desarrollo y Pruebas Backend",
      details: [
        "Implementación DB SQL",
        "API REST (Node.js)",
        "Endpoints: Auth, Usuarios, Asistencias",
        "Lógica de negocio y JWT",
        "Pruebas de endpoints (Postman)",
        "Validación de datos y seguridad"
      ],
      progress: 85,
      color: "#2B2B2B"
    },
    { 
      name: "SPRINT 5", 
      weeks: "Semanas 12 - 14",
      phases: "Integración Hardware",
      details: [
        "Integración lector biométrico facial",
        "Captura asistencia tiempo real",
        "Sincronización HW + FE + BE",
        "Pruebas de reconocimiento y precisión",
        "Validación en entorno real"
      ],
      progress: 85,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 6", 
      weeks: "Semanas 15 - 16",
      phases: "Implementación y Cierre",
      details: [
        "Despliegue y configuración servidor",
        "Manual de usuario y técnico",
        "Capacitación a usuarios",
        "Pruebas finales QA",
        "Entrega formal y Retroalimentación"
      ],
      progress: 0,
      color: "#A3A3A3"
    },
  ];

  return (
    <div id="metodologia" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.5 METODOLOGÍA</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ESTRUCTURA ÁGIL</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4 shadow-sm">
            <item.icon className="w-12 h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-16 py-12">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">LÍNEA DE TIEMPO DEL PROYECTO</h3>
        </div>
        
        <div className="relative pt-24 pb-32 px-4">
          <TooltipProvider>
            <div className="relative max-w-6xl mx-auto">
              {/* Línea Principal */}
              <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2 rounded-full" />
              
              <div className="flex justify-between items-center relative">
                {sprints.map((sprint, i) => (
                  <div key={i} className="flex flex-col items-center group relative">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="relative cursor-pointer z-20">
                          {/* Nodo de la línea */}
                          <div 
                            className="w-10 h-10 rounded-full border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-125 flex items-center justify-center text-[10px] font-black text-white"
                            style={{ backgroundColor: sprint.color }}
                          >
                            {i + 1}
                          </div>
                          {/* Efecto de pulsación para sprints en progreso */}
                          {sprint.progress > 0 && sprint.progress < 100 && (
                            <div 
                              className="absolute -inset-2 rounded-full border-2 animate-ping opacity-20"
                              style={{ borderColor: sprint.color }}
                            />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-[#1A1A1A] border-[#FF1E2D] text-white p-6 max-w-md rounded-none shadow-2xl z-[100] animate-in fade-in zoom-in duration-300">
                        <div className="space-y-4">
                          <div className="border-b border-white/10 pb-3">
                            <h4 className="text-sm font-black text-[#FF1E2D] uppercase tracking-widest">{sprint.name}</h4>
                            <p className="text-[10px] text-gray-400 font-bold uppercase">{sprint.phases}</p>
                          </div>
                          <ul className="space-y-2">
                            {sprint.details.map((detail, idx) => (
                              <li key={idx} className="text-[11px] font-bold uppercase leading-tight flex gap-3">
                                <span className="text-[#FF1E2D] text-lg leading-none">•</span> {detail}
                              </li>
                            ))}
                          </ul>
                          <div className="flex justify-between items-center pt-3 border-t border-white/5">
                            <span className="text-[10px] font-black text-[#FF1E2D]">ESTADO: {sprint.progress === 100 ? 'COMPLETADO' : sprint.progress === 0 ? 'PENDIENTE' : 'EN PROGRESO'}</span>
                            <span className="text-[10px] font-black text-white/50">{sprint.progress}%</span>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    {/* Etiquetas Inferiores - Letra más grande */}
                    <div className="absolute top-16 flex flex-col items-center text-center w-40 space-y-2">
                      <span className="text-xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">{sprint.name}</span>
                      <span className="text-xs font-black text-gray-400 uppercase tracking-[0.2em]">{sprint.weeks}</span>
                      <div 
                        className="px-3 py-1 text-[10px] font-black text-white rounded-full uppercase"
                        style={{ backgroundColor: sprint.color }}
                      >
                        {sprint.progress}%
                      </div>
                    </div>

                    {/* Etiqueta Superior de Fase */}
                    <div className="absolute -top-16 flex flex-col items-center text-center w-48">
                      <span className="text-[10px] font-black text-[#FF1E2D] uppercase tracking-[0.3em] line-clamp-1 border-b-2 border-[#FF1E2D] pb-1">
                        {sprint.phases}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>
        
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] pt-24">
          CRONOGRAMA ESTRATÉGICO • 16 SEMANAS DE EJECUCIÓN • TRANSFORMACIÓN DIGITAL SIBF-CAI
        </p>
      </div>
    </div>
  );
}