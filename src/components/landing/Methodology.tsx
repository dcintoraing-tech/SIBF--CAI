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
    <div className="w-full h-full flex flex-col justify-center space-y-6 md:space-y-8 max-w-[1400px] mx-auto px-6">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-xl tracking-[0.4em] uppercase">METODOLOGÍA ÁGIL</span>
        <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM</h2>
      </div>

      {/* Línea del Tiempo Animada */}
      <div className="relative pt-10 pb-4">
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
                "w-8 h-8 md:w-14 md:h-14 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                currentStep >= i ? "bg-[#FF1E2D] border-[#FF1E2D] text-white" : "bg-white border-slate-100 text-slate-300 shadow-sm"
              )}
            >
              <span className="text-[10px] md:text-xl font-black">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Contenido del Sprint */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white p-6 md:p-10 shadow-2xl rounded-[40px] border border-slate-50 relative overflow-hidden">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center gap-4">
            <div className="bg-[#FF1E2D] text-white px-5 py-2 text-xs md:text-lg font-black uppercase tracking-widest italic shadow-lg">
              {sprints[currentStep].phase}
            </div>
            <h3 className="text-2xl md:text-5xl font-black text-[#2B2B2B] italic uppercase">{sprints[currentStep].name}</h3>
          </div>
          
          <p className="text-xl md:text-3xl text-[#2B2B2B] font-bold uppercase leading-tight italic border-l-8 border-[#FF1E2D] pl-6 py-2">
            {sprints[currentStep].goal}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="text-sm md:text-xl font-black text-[#FF1E2D] uppercase italic flex items-center gap-2">
                <Layers className="w-5 h-5" /> ÉPICAS POR FASE
              </h4>
              <ul className="space-y-2">
                {sprints[currentStep].epics.map((epic, i) => (
                  <li key={i} className="text-xs md:text-lg font-black text-[#2B2B2B] uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF1E2D] rounded-full" /> {epic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm md:text-xl font-black text-[#2B2B2B] uppercase italic flex items-center gap-2">
                <ListTodo className="w-5 h-5" /> LISTA DE TAREAS
              </h4>
              <ul className="space-y-2">
                {sprints[currentStep].tasks.map((task, i) => (
                  <li key={i} className="text-xs md:text-lg font-bold text-[#2B2B2B] uppercase italic opacity-70 flex items-center gap-2">
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
              className="rounded-full border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white h-12 w-12 md:h-16 md:w-16"
            >
              <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === sprints.length - 1}
              className="bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white rounded-full h-12 w-12 md:h-16 md:w-16 shadow-xl"
            >
              <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
            </Button>
          </div>
        </div>

        <div className="hidden lg:col-span-5 lg:flex flex-col justify-center items-center bg-slate-50 rounded-[30px] p-8 border border-slate-100">
          <div className="relative">
             <div className="absolute -inset-16 bg-[#FF1E2D]/5 blur-[80px] rounded-full animate-pulse" />
             <RotateCw className="w-32 h-32 md:w-56 md:h-56 text-[#FF1E2D] animate-spin-slow opacity-20" />
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Target className="w-16 h-16 md:w-28 md:h-28 text-[#2B2B2B] animate-bounce" />
                <span className="text-[10px] md:text-sm font-black text-[#2B2B2B] uppercase tracking-[0.5em] mt-4">CORE VALUE</span>
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 pt-2">
        {[
          { icon: Users, label: "EQUIPO SCRUM" },
          { icon: RotateCw, label: "ITERACIONES" },
          { icon: CheckCircle2, label: "CALIDAD ASEGURADA" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-2xl border border-slate-50">
            <item.icon className="w-6 h-6 md:w-10 md:h-10 text-[#FF1E2D]" />
            <span className="text-[10px] md:text-sm font-black uppercase tracking-widest text-[#2B2B2B] italic">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
