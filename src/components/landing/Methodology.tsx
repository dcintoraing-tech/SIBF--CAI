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
      start: 1, 
      end: 2, 
      progress: 100, 
      color: "#FF1E2D",
      phases: "FASE DE ANÁLISIS",
      details: [
        "Levantamiento de Requerimientos",
        "Historias de Usuario del Alumno (HU01, HU02, HU03 con RF y RNF)",
        "Historia de Usuario del Docente (HU05, HU06, HU07 con RF y RNF)",
        "Historia de Usuario del Administrador (HU08-HU11 con RF y RNF)",
        "Estudio de Usabilidad"
      ]
    },
    { 
      name: "SPRINT 2", 
      start: 3, 
      end: 5, 
      progress: 100, 
      color: "#2B2B2B",
      phases: "FASE DE ANÁLISIS / FASE DE DISEÑO",
      details: [
        "Gestión de usuarios y catálogos institucionales V1.1",
        "Supervisión y respaldo de información V1.1",
        "Diagramas: Procesos, Casos de Uso y Secuencia",
        "Especificación de Casos de Uso",
        "Arquitectura MVC y Diagrama Entidad Relación",
        "Arquitectura de información"
      ]
    },
    { 
      name: "SPRINT 3", 
      start: 6, 
      end: 8, 
      progress: 100, 
      color: "#FF1E2D",
      phases: "FASE DE DISEÑO / FASE DE DESARROLLO / FASE DE PRUEBAS",
      details: [
        "Diseño UI: Login, Dashboard, Usuarios, Reportes, Respaldo",
        "Implementación Frontend: Next.js + Tailwind + ShadCN",
        "Formularios y validaciones (React Hook Form + Zod)",
        "Integración backend, sesiones y roles",
        "CRUD de usuarios y catálogos",
        "Módulo de respaldo y visualización de reportes",
        "Pruebas CRUD y de autenticación"
      ]
    },
    { 
      name: "SPRINT 4", 
      start: 9, 
      end: 11, 
      progress: 90, 
      color: "#2B2B2B",
      phases: "FASE DE DESARROLLO / FASE DE PRUEBAS",
      details: [
        "Implementación Base de Datos SQL",
        "Creación de API REST (Node.js)",
        "Endpoints: Auth, Usuarios, Asistencias, Catálogos",
        "Lógica de negocio y Seguridad JWT",
        "Pruebas de endpoints (Postman)",
        "Validación de datos y acceso"
      ]
    },
    { 
      name: "SPRINT 5", 
      start: 12, 
      end: 14, 
      progress: 85, 
      color: "#FF1E2D",
      phases: "FASE DE DESARROLLO / FASE DE PRUEBAS",
      details: [
        "Integración con lector biométrico facial",
        "Captura de asistencia en tiempo real",
        "Asociación automática alumno-grupo",
        "Sincronización HW + FE + BE",
        "Pruebas de reconocimiento y precisión",
        "Validación en entorno real"
      ]
    },
    { 
      name: "SPRINT 6", 
      start: 15, 
      end: 16, 
      progress: 0, 
      color: "#A3A3A3",
      phases: "FASE DE IMPLEMENTACIÓN",
      details: [
        "Despliegue (Local/Nube) y Configuración Servidor",
        "Capacitación, Manual de Usuario y Manual Técnico",
        "Pruebas finales QA y Corrección de errores",
        "Documentación final y Entrega del sistema",
        "Retroalimentación"
      ]
    },
  ];

  const weeks = Array.from({ length: 16 }, (_, i) => i + 1);

  return (
    <div id="metodologia" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.4 METODOLOGÍA</span>
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

      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">CRONOGRAMA DE SPRINTS (GANTT)</h3>
        </div>
        
        <div className="bg-[#0A0A0A] p-6 md:p-12 shadow-2xl overflow-x-auto border-t-8 border-[#FF1E2D]">
          <TooltipProvider>
            <div className="min-w-[1000px]">
              <div className="grid grid-cols-[220px_repeat(16,1fr)] gap-px border-b border-white/10 pb-6">
                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest self-end">SPRINT / FASES / SEMANAS</div>
                {weeks.map(w => (
                  <div key={w} className="text-center text-white/40 text-[10px] font-black">S{w}</div>
                ))}
              </div>

              <div className="relative mt-8 space-y-8">
                {sprints.map((sprint, i) => (
                  <div key={i} className="grid grid-cols-[220px_repeat(16,1fr)] items-center group">
                    <div className="pr-6">
                      <div className="text-white font-black text-sm uppercase tracking-tighter group-hover:text-[#FF1E2D] transition-colors">
                        {sprint.name}
                      </div>
                      <div className="text-[#FF1E2D] text-[8px] font-black uppercase tracking-widest leading-tight mt-1">
                        {sprint.phases}
                      </div>
                    </div>
                    <div className="col-span-16 h-14 relative bg-white/5 flex items-center">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div 
                            className="absolute h-10 rounded-none flex items-center justify-center cursor-help overflow-hidden transition-all duration-300 hover:brightness-125"
                            style={{ 
                              left: `${((sprint.start - 1) / 16) * 100}%`,
                              width: `${((sprint.end - sprint.start + 1) / 16) * 100}%`,
                              backgroundColor: sprint.color,
                              boxShadow: `0 0 30px ${sprint.color}44`
                            }}
                          >
                            <span className="relative z-10 text-[11px] font-black text-white px-2">
                              {sprint.progress}%
                            </span>
                            <div 
                              className="absolute inset-0 bg-white/20 transition-all duration-1000"
                              style={{ width: `${sprint.progress}%` }}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent side="top" className="bg-[#1A1A1A] border-[#FF1E2D] text-white p-6 max-w-md rounded-none shadow-2xl z-[100]">
                          <div className="space-y-4">
                            <div>
                              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#FF1E2D] border-b border-white/10 pb-2 mb-2">
                                {sprint.name}: {sprint.phases}
                              </p>
                              <ul className="space-y-2">
                                {sprint.details.map((detail, idx) => (
                                  <li key={idx} className="text-[11px] font-bold uppercase leading-tight flex gap-2">
                                    <span className="text-[#FF1E2D] text-lg leading-none">•</span> {detail}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="flex justify-between items-center pt-2 border-t border-white/5">
                              <span className="text-[10px] font-black text-gray-500">SEMANAS {sprint.start}-{sprint.end}</span>
                              <span className="text-[10px] font-black text-[#FF1E2D]">PROGRESO: {sprint.progress}%</span>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </div>
                ))}

                <div className="absolute top-0 left-[220px] right-0 bottom-0 pointer-events-none flex">
                  {weeks.map(w => (
                    <div key={w} className="flex-1 border-l border-white/5 h-full" />
                  ))}
                </div>
              </div>
            </div>
          </TooltipProvider>
        </div>
        
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] pt-4">
          CICLO DE DESARROLLO: 16 SEMANAS • SIBF-CAI V1.0
        </p>
      </div>
    </div>
  );
}
