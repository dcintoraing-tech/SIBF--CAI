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
      progress: 100, 
      color: "#FF1E2D",
      phases: "Fase de Análisis",
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
      weeks: "Semanas 3 - 5",
      progress: 100, 
      color: "#2B2B2B",
      phases: "Análisis y Diseño",
      details: [
        "HU: Gestión de usuarios del sistema V1.1",
        "HU: Administración de catálogos institucionales V1.1",
        "HU: Supervisión y respaldo de información V1.1",
        "Diagrama de Procesos General",
        "Diagrama de Casos de Uso General",
        "Especificación de Casos de Uso",
        "Diagrama de Arquitectura MVC",
        "Diagrama de Secuencia",
        "Diagrama Entidad Relación",
        "Arquitectura de información"
      ]
    },
    { 
      name: "SPRINT 3", 
      weeks: "Semanas 6 - 8",
      progress: 100, 
      color: "#FF1E2D",
      phases: "Diseño, Desarrollo y Pruebas",
      details: [
        "UI Design: Login, Dashboard, Usuarios, Reportes, Respaldo",
        "Implementación Frontend (Next.js + Tailwind)",
        "Formularios y validaciones (React Hook Form + Zod)",
        "Integración con backend, sesiones y roles",
        "CRUD de usuarios y catálogos",
        "Visualización de reportes y módulo de respaldo",
        "Pruebas de autenticación, CRUD y respaldo"
      ]
    },
    { 
      name: "SPRINT 4", 
      weeks: "Semanas 9 - 11",
      progress: 85, 
      color: "#2B2B2B",
      phases: "Desarrollo y Pruebas Backend",
      details: [
        "Implementación Base de Datos SQL",
        "Creación de API REST (Node.js)",
        "Endpoints: Auth, Usuarios, Asistencias, Catálogos",
        "Implementación de lógica de negocio",
        "Seguridad JWT (roles y permisos)",
        "Pruebas de endpoints (Postman)",
        "Validación de datos y seguridad"
      ]
    },
    { 
      name: "SPRINT 5", 
      weeks: "Semanas 12 - 14",
      progress: 85, 
      color: "#FF1E2D",
      phases: "Integración Hardware",
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
      weeks: "Semanas 15 - 16",
      progress: 0, 
      color: "#A3A3A3",
      phases: "Implementación y Cierre",
      details: [
        "Despliegue y configuración de servidor",
        "Configuración DB en producción",
        "Manual de usuario y Manual técnico",
        "Capacitación a usuarios",
        "Pruebas finales QA",
        "Entrega formal y Retroalimentación"
      ]
    },
  ];

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

      <div className="space-y-16 py-12">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">LÍNEA DE TIEMPO DEL PROYECTO</h3>
        </div>
        
        <div className="relative pt-12 pb-24 px-4 overflow-x-auto">
          <TooltipProvider>
            <div className="min-w-[1000px] relative">
              {/* Main Timeline Line */}
              <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2" />
              
              <div className="flex justify-between items-center relative">
                {sprints.map((sprint, i) => (
                  <div key={i} className="flex flex-col items-center group relative">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="relative cursor-pointer">
                          {/* Point on the line */}
                          <div 
                            className="w-8 h-8 rounded-full border-4 border-white shadow-xl transition-all duration-300 group-hover:scale-150 relative z-20"
                            style={{ backgroundColor: sprint.color }}
                          />
                          {/* Progress Circle (Outer) */}
                          <div 
                            className="absolute -inset-2 rounded-full border-2 border-dashed opacity-20 group-hover:opacity-100 group-hover:animate-spin-slow"
                            style={{ borderColor: sprint.color }}
                          />
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="top" className="bg-[#1A1A1A] border-[#FF1E2D] text-white p-6 max-w-sm rounded-none shadow-2xl z-[100]">
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
                            <span className="text-[10px] font-black text-[#FF1E2D]">PROGRESO: {sprint.progress}%</span>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>

                    {/* Sprint Label Below */}
                    <div className="absolute top-12 flex flex-col items-center text-center w-32">
                      <span className="text-sm font-black text-[#2B2B2B] uppercase italic">{sprint.name}</span>
                      <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{sprint.weeks}</span>
                      <div className="mt-2 px-2 py-0.5 bg-gray-100 text-[8px] font-black text-[#2B2B2B] rounded-full">
                        {sprint.progress}% COMPLETADO
                      </div>
                    </div>

                    {/* Phase Label Above */}
                    <div className="absolute -top-12 flex flex-col items-center text-center w-40">
                      <span className="text-[10px] font-black text-[#FF1E2D] uppercase tracking-tighter line-clamp-1">
                        {sprint.phases}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TooltipProvider>
        </div>
        
        <p className="text-center text-gray-400 text-[10px] font-black uppercase tracking-[0.5em] pt-12">
          CRONOGRAMA ESTRATÉGICO • 16 SEMANAS DE EJECUCIÓN • SIBF-CAI V1.0
        </p>
      </div>
    </div>
  );
}
