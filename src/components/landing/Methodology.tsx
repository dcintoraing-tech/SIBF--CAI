'use client';

import React, { useState } from 'react';
import { 
  Users, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Layers,
  ListTodo,
  Search,
  Code2,
  Settings2,
  ShieldCheck,
  Zap,
  Cpu
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { 
    name: "SPRINT 1", 
    phases: ["ANÁLISIS"], 
    icon: Search,
    goal: "Levantamiento de requerimientos y estudio de usabilidad institucional.",
    tasks: [
      "Levantamiento de requerimientos.",
      "Definición de historias de usuario.",
      "Requerimientos funcionales y no funcionales.",
      "Estudio de usabilidad."
    ]
  },
  { 
    name: "SPRINT 2", 
    phases: ["ANÁLISIS", "DISEÑO"], 
    icon: Code2,
    goal: "Refinamiento de historias y modelado integral de la arquitectura.",
    tasks: [
      "Refinamiento de historias de usuario.",
      "Modelado de procesos.",
      "Casos de uso.",
      "Arquitectura del sistema.",
      "Diagramas de secuencia.",
      "Diagrama entidad-relación.",
      "Arquitectura de información."
    ]
  },
  { 
    name: "SPRINT 3", 
    phases: ["DISEÑO", "DESARROLLO", "PRUEBAS"], 
    icon: Layers,
    goal: "Construcción del frontend, interfaces y validaciones funcionales.",
    tasks: [
      "Diseño de interfaces.",
      "Desarrollo frontend.",
      "Formularios y validaciones.",
      "Integración con backend.",
      "CRUD de información.",
      "Reportes dinámicos.",
      "Sistemas de respaldo.",
      "Pruebas funcionales."
    ]
  },
  { 
    name: "SPRINT 4", 
    phases: ["DESARROLLO", "PRUEBAS"], 
    icon: Settings2,
    goal: "Implementación de API REST, lógica de negocio y seguridad robusta.",
    tasks: [
      "Base de datos centralizada.",
      "API REST.",
      "Endpoints de comunicación.",
      "Lógica de negocio.",
      "Autenticación y autorización.",
      "Pruebas de API y seguridad."
    ]
  },
  { 
    name: "SPRINT 5", 
    phases: ["DESARROLLO", "PRUEBAS"], 
    icon: Cpu,
    goal: "Integración del motor de IA biométrica y registro en tiempo real.",
    tasks: [
      "Integración biométrica facial.",
      "Registro automático de asistencia.",
      "Asociación alumno-grupo.",
      "Control de entrada y salida.",
      "Integración frontend-backend-hardware.",
      "Pruebas de reconocimiento facial."
    ]
  },
  { 
    name: "SPRINT 6", 
    phases: ["IMPLEMENTACIÓN", "EVALUACIÓN", "CIERRE"], 
    icon: ShieldCheck,
    goal: "Despliegue en producción, capacitación final y entrega de proyecto.",
    tasks: [
      "Despliegue en infraestructura Cloud.",
      "Configuración de producción.",
      "Capacitación de usuarios.",
      "Manual de usuario y manual técnico.",
      "QA y corrección de errores finales.",
      "Validación con usuarios reales.",
      "Documentación y entrega final."
    ]
  },
];

export default function Methodology() {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < sprints.length - 1) setCurrentStep(currentStep + 1);
  };

  const handlePrev = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 max-w-[1200px] mx-auto overflow-hidden animate-in fade-in duration-700">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">METODOLOGÍA ÁGIL</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM ROADMAP</h2>
      </div>

      <div className="relative pt-12 pb-6">
        <div className="absolute top-[45px] md:top-[60px] left-0 w-full h-1.5 bg-slate-100 rounded-full" />
        <div 
          className="absolute top-[45px] md:top-[60px] left-0 h-1.5 bg-[#FF1E2D] transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_10px_#FF1E2D]" 
          style={{ width: `${(currentStep / (sprints.length - 1)) * 100}%` }}
        />

        <div className="flex justify-between items-start relative z-10 px-2">
          {sprints.map((s, i) => (
            <div key={i} className="flex flex-col items-center group cursor-pointer" onClick={() => setCurrentStep(i)}>
              <div
                className={cn(
                  "w-10 h-10 md:w-16 md:h-16 rounded-full border-4 flex items-center justify-center transition-all duration-500",
                  currentStep === i 
                    ? "bg-[#FF1E2D] border-[#FF1E2D] text-white scale-125 shadow-xl" 
                    : currentStep > i 
                      ? "bg-[#FF1E2D]/80 border-[#FF1E2D]/20 text-white" 
                      : "bg-white border-slate-200 text-slate-300"
                )}
              >
                <s.icon className="w-5 h-5 md:w-8 md:h-8" />
              </div>
              <div className="flex flex-col items-center gap-0.5 mt-3">
                <span className={cn(
                  "text-[8px] md:text-xs font-black uppercase tracking-tighter mb-1",
                  currentStep === i ? "text-[#FF1E2D]" : "text-slate-400"
                )}>
                  {s.name}
                </span>
                <div className="flex flex-col items-center">
                  {s.phases.map((p, idx) => (
                    <span key={idx} className={cn(
                      "text-[6px] md:text-[8px] font-black uppercase tracking-widest hidden md:block leading-none mb-0.5",
                      currentStep === i ? "text-[#2B2B2B]" : "text-slate-300"
                    )}>
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[40px] border border-slate-50 relative overflow-hidden min-h-[480px]">
        <div 
          key={currentStep}
          className="lg:col-span-12 space-y-6 flex flex-col justify-center animate-in slide-in-from-right-10 duration-500"
        >
          <div className="flex items-center justify-between border-b-2 border-slate-50 pb-4">
            <div className="flex items-center gap-6">
              <div className="flex flex-col gap-1">
                {sprints[currentStep].phases.map((phase, idx) => (
                  <div key={idx} className="bg-[#FF1E2D] text-white px-4 py-1 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] italic shadow-md rounded-full w-fit">
                    {phase}
                  </div>
                ))}
              </div>
              <h3 className="text-2xl md:text-5xl font-black text-[#2B2B2B] italic uppercase tracking-tighter">{sprints[currentStep].name}</h3>
            </div>
            <div className="flex gap-4">
               <Button onClick={handlePrev} disabled={currentStep === 0} variant="outline" className="rounded-full h-10 w-10 md:h-14 md:w-14 border-2 border-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white transition-all"><ChevronLeft className="w-6 h-6"/></Button>
               <Button onClick={handleNext} disabled={currentStep === sprints.length - 1} className="bg-[#FF1E2D] rounded-full h-10 w-10 md:h-14 md:w-14 hover:scale-110 active:scale-95 transition-all"><ChevronRight className="w-6 h-6"/></Button>
            </div>
          </div>
          
          <p className="text-lg md:text-3xl text-[#2B2B2B] font-black uppercase leading-tight italic border-l-[10px] border-[#FF1E2D] pl-8 py-2">
            {sprints[currentStep].goal}
          </p>

          <div className="space-y-4 pt-4">
            <h4 className="text-xs md:text-xl font-black text-[#2B2B2B] uppercase italic flex items-center gap-3">
              <ListTodo className="w-5 h-5 md:w-7 text-[#FF1E2D]" /> PRODUCT BACKLOG / TAREAS
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3">
              {sprints[currentStep].tasks.map((task, i) => (
                <li key={i} className="text-[10px] md:text-lg font-bold text-[#2B2B2B] uppercase italic flex items-center gap-4 border-b border-slate-50 pb-2">
                  <CheckCircle2 className="w-4 h-4 md:w-6 text-[#FF1E2D] shrink-0" /> 
                  <span className="opacity-80">{task}</span>
                </li>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-2">
        {[
          { icon: Users, label: "EQUIPO MULTIDISCIPLINARIO" },
          { icon: Zap, label: "ENTREGA CONTINUA" },
          { icon: ShieldCheck, label: "CALIDAD ASEGURADA" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-2xl border border-slate-50">
            <item.icon className="w-6 h-6 text-[#FF1E2D]" />
            <span className="text-[8px] md:text-xs font-black uppercase tracking-widest text-[#2B2B2B] italic">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
