'use client';

import React, { useState } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  ChevronLeft,
  ChevronRight,
  Target,
  Layers,
  ListTodo
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { 
    name: "SPRINT 1", 
    phase: "ANÁLISIS", 
    goal: "Definición de Requerimientos y Arquitectura.",
    epics: ["Auditoría de Procesos", "Modelado IEEE 830", "Diseño de Arquitectura"],
    tasks: ["Entrevistas Directas", "Diagramas de Casos de Uso", "Diagrama de Clases"]
  },
  { 
    name: "SPRINT 2", 
    phase: "DISEÑO", 
    goal: "Arquitectura de Información y Prototipado.",
    epics: ["Diseño UX/UI", "Seguridad de Datos", "Interfaces de Usuario"],
    tasks: ["Wireframes de Alta Fidelidad", "Diseño de Base de Datos", "Esquema de Autenticación"]
  },
  { 
    name: "SPRINT 3", 
    phase: "CORE IA", 
    goal: "Desarrollo del Motor Biométrico.",
    epics: ["Implementación IA", "Reconocimiento Facial", "Entrenamiento Modelo"],
    tasks: ["Lógica TensorFlow.js", "Captura Biométrica", "Pruebas de Precisión"]
  },
  { 
    name: "SPRINT 4", 
    phase: "INTEGRACIÓN", 
    goal: "Comunicación y Sincronización Cloud.",
    epics: ["Backend Services", "Real-time Sync", "API Integration"],
    tasks: ["Configuración Firebase", "Sincronización Firestore", "Validación de Sesiones"]
  },
  { 
    name: "SPRINT 5", 
    phase: "CALIDAD", 
    goal: "Optimización y Panel de Control.",
    epics: ["Panel Administrativo", "Gestión de Usuarios", "Reportes"],
    tasks: ["Dashboard de Asistencia", "Pruebas de Carga", "Depuración de UI"]
  },
  { 
    name: "SPRINT 6", 
    phase: "DESPLIEGUE", 
    goal: "Entrega Final y Puesta en Marcha.",
    epics: ["Deployment", "Capacitación", "Documentación"],
    tasks: ["Despliegue en Servidores", "Manuales de Usuario", "Presentación Ejecutiva"]
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
    <div className="w-full h-full flex flex-col justify-center space-y-4 md:space-y-6 max-w-[1300px] mx-auto">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">METODOLOGÍA ÁGIL</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM</h2>
      </div>

      {/* Línea del Tiempo Interactiva */}
      <div className="relative pt-6 pb-2">
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2" />
        <div 
          className="absolute top-1/2 left-0 h-1 bg-[#FF1E2D] -translate-y-1/2 transition-all duration-700 ease-in-out" 
          style={{ width: `${(currentStep / (sprints.length - 1)) * 100}%` }}
        />

        <div className="flex justify-between items-center relative z-10">
          {sprints.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentStep(i)}
              className={cn(
                "w-8 h-8 md:w-12 md:h-12 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                currentStep >= i ? "bg-[#FF1E2D] border-[#FF1E2D] text-white" : "bg-white border-slate-100 text-slate-300 shadow-sm"
              )}
            >
              <span className="text-[10px] md:text-lg font-black">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Contenido del Sprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch bg-white p-6 md:p-8 shadow-2xl rounded-[30px] border border-slate-50 relative overflow-hidden">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-4">
            <div className="bg-[#FF1E2D] text-white px-4 py-1.5 text-[10px] md:text-base font-black uppercase tracking-widest italic shadow-lg">
              {sprints[currentStep].phase}
            </div>
            <h3 className="text-xl md:text-4xl font-black text-[#2B2B2B] italic uppercase">{sprints[currentStep].name}</h3>
          </div>
          
          <p className="text-lg md:text-2xl text-[#2B2B2B] font-bold uppercase leading-tight italic border-l-8 border-[#FF1E2D] pl-6 py-1">
            {sprints[currentStep].goal}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-[10px] md:text-lg font-black text-[#FF1E2D] uppercase italic flex items-center gap-2">
                <Layers className="w-4 h-4 md:w-5 md:h-5" /> ÉPICAS
              </h4>
              <ul className="space-y-1">
                {sprints[currentStep].epics.map((epic, i) => (
                  <li key={i} className="text-[10px] md:text-base font-black text-[#2B2B2B] uppercase flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#FF1E2D] rounded-full" /> {epic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="text-[10px] md:text-lg font-black text-[#2B2B2B] uppercase italic flex items-center gap-2">
                <ListTodo className="w-4 h-4 md:w-5 md:h-5" /> TAREAS
              </h4>
              <ul className="space-y-1">
                {sprints[currentStep].tasks.map((task, i) => (
                  <li key={i} className="text-[10px] md:text-base font-bold text-[#2B2B2B] uppercase italic opacity-80 flex items-center gap-2">
                    ✓ {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4 pt-4">
            <Button 
              onClick={handlePrev} 
              disabled={currentStep === 0}
              variant="outline"
              className="rounded-full border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white h-10 w-10 md:h-12 md:w-12"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === sprints.length - 1}
              className="bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white rounded-full h-10 w-10 md:h-12 md:w-12 shadow-xl"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-4 lg:flex flex-col justify-center items-center bg-slate-50 rounded-[24px] p-6 border border-slate-100">
          <div className="relative">
             <div className="absolute -inset-12 bg-[#FF1E2D]/5 blur-[60px] rounded-full animate-pulse" />
             <RotateCw className="w-24 h-24 md:w-40 md:h-40 text-[#FF1E2D] animate-spin-slow opacity-10" />
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Target className="w-12 h-12 md:w-20 md:h-20 text-[#2B2B2B]" />
                <span className="text-[8px] md:text-[10px] font-black text-[#2B2B2B] uppercase tracking-[0.4em] mt-2">VALOR</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 md:gap-6 pt-2">
        {[
          { icon: Users, label: "EQUIPO SCRUM" },
          { icon: RotateCw, label: "ITERACIONES" },
          { icon: CheckCircle2, label: "CALIDAD" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 md:p-4 bg-white shadow-lg rounded-xl border border-slate-50">
            <item.icon className="w-5 h-5 md:w-8 md:h-8 text-[#FF1E2D]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-[#2B2B2B] italic">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
