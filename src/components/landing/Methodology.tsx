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
      weeks: "Sem. 1-2",
      phases: "Análisis",
      details: [
        "Levantamiento de Requerimientos",
        "HU Alumno y Docente",
        "HU Administrador",
        "Estudio de Usabilidad"
      ],
      progress: 100,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 2", 
      weeks: "Sem. 3-5",
      phases: "Análisis / Diseño",
      details: [
        "Gestión de usuarios V1.1",
        "Administración de catálogos",
        "Diagramas UML Generales",
        "Arquitectura MVC"
      ],
      progress: 100,
      color: "#2B2B2B"
    },
    { 
      name: "SPRINT 3", 
      weeks: "Sem. 6-8",
      phases: "Desarrollo / Pruebas",
      details: [
        "Login y Dashboard Funcional",
        "Implementación Frontend",
        "Validaciones Zod",
        "Pruebas de Autenticación"
      ],
      progress: 100,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 4", 
      weeks: "Sem. 9-11",
      phases: "Backend / Datos",
      details: [
        "Estructura SQL Centralizada",
        "API REST Node.js",
        "Seguridad JWT",
        "Pruebas de Endpoints"
      ],
      progress: 85,
      color: "#2B2B2B"
    },
    { 
      name: "SPRINT 5", 
      weeks: "Sem. 12-14",
      phases: "IA / Integración",
      details: [
        "Integración Biometría Facial",
        "Captura en tiempo real",
        "Sincronización Cloud",
        "Validación Entorno Real"
      ],
      progress: 85,
      color: "#FF1E2D"
    },
    { 
      name: "SPRINT 6", 
      weeks: "Sem. 15-16",
      phases: "Implementación",
      details: [
        "Despliegue Servidor",
        "Manuales Técnicos",
        "Capacitación Usuarios",
        "Cierre y Retroalimentación"
      ],
      progress: 0,
      color: "#A3A3A3"
    },
  ];

  return (
    <div id="metodologia" className="space-y-12 md:space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-base md:text-lg tracking-[0.4em] uppercase">1.5 METODOLOGÍA</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ESTRUCTURA ÁGIL</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className="p-8 md:p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4 shadow-sm">
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-xl md:text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-12 md:space-y-16 py-8">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-2xl md:text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">LÍNEA DE TIEMPO</h3>
        </div>
        
        <div className="relative overflow-x-auto pb-24 pt-12 md:pt-24 px-4 scrollbar-hide">
          <TooltipProvider>
            <div className="relative min-w-[900px] md:min-w-full md:max-w-6xl mx-auto px-10">
              <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2 rounded-full" />
              
              <div className="flex justify-between items-center relative">
                {sprints.map((sprint, i) => (
                  <div key={i} className="flex flex-col items-center group relative">
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <div className="relative cursor-pointer z-20">
                          <div 
                            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-125 flex items-center justify-center text-xs font-black text-white"
                            style={{ backgroundColor: sprint.color }}
                          >
                            {i + 1}
                          </div>
                          {sprint.progress > 0 && sprint.progress < 100 && (
                            <div className="absolute -inset-2 rounded-full border-2 animate-ping opacity-20" style={{ borderColor: sprint.color }} />
                          )}
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-[#1A1A1A] border-[#FF1E2D] text-white p-6 max-w-xs rounded-none shadow-2xl z-[100]">
                        <div className="space-y-3">
                          <h4 className="text-sm font-black text-[#FF1E2D] uppercase tracking-widest border-b border-white/10 pb-2">{sprint.name}</h4>
                          <ul className="space-y-2">
                            {sprint.details.map((detail, idx) => (
                              <li key={idx} className="text-[10px] font-bold uppercase flex gap-2">
                                <span className="text-[#FF1E2D]">•</span> {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    <div className="absolute top-16 flex flex-col items-center text-center w-32 md:w-40 space-y-2">
                      <span className="text-lg md:text-2xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">{sprint.name}</span>
                      <span className="text-[10px] md:text-sm font-black text-gray-400 uppercase tracking-[0.2em]">{sprint.weeks}</span>
                      <div className="px-3 py-1 text-[10px] font-black text-white rounded-full uppercase" style={{ backgroundColor: sprint.color }}>
                        {sprint.progress}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
}
