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
    goal: "Definición de Requerimientos e Inteligencia Institucional.",
    epics: ["Auditoría de Procesos", "Modelado de Sistemas", "Análisis de Requerimientos"],
    tasks: ["Entrevistas Directas", "Diagramas de Casos de Uso", "Especificación IEEE 830"]
  },
  { 
    name: "SPRINT 2", 
    phase: "DESARROLLO", 
    goal: "Diseño de Arquitectura y Prototipado de Interfaz.",
    epics: ["Diseño de Base de Datos", "UX/UI Prototyping", "Arquitectura Cloud"],
    tasks: ["Esquema Firestore", "Wireframes Alta Fidelidad", "Diagrama de Clases"]
  },
  { 
    name: "SPRINT 3", 
    phase: "DESARROLLO", 
    goal: "Implementación del Motor Biométrico y Core Lógico.",
    epics: ["Integración IA", "Reconocimiento Facial", "Frontend Core"],
    tasks: ["Lógica TensorFlow.js", "Captura Biométrica", "Desarrollo Next.js 15"]
  },
  { 
    name: "SPRINT 4", 
    phase: "IMPLEMENTACIÓN", 
    goal: "Integración de Servicios y Sincronización Real-time.",
    epics: ["Backend Firebase", "Auth Services", "Real-time Sync"],
    tasks: ["Configuración Auth", "Sincronización de Datos", "API Endpoints"]
  },
  { 
    name: "SPRINT 5", 
    phase: "PRUEBAS", 
    goal: "Validación de Precisión y Pruebas de Calidad.",
    epics: ["QA & Testing", "Optimización de Algoritmo", "Depuración UI"],
    tasks: ["Pruebas de Carga", "Test de Precisión Facial", "Stress Testing"]
  },
  { 
    name: "SPRINT 6", 
    phase: "IMPLEMENTACIÓN", 
    goal: "Despliegue Final y Puesta en Marcha.",
    epics: ["Deployment Cloud", "Documentación Técnica", "Capacitación"],
    tasks: ["Despliegue Producción", "Manuales de Usuario", "Entrega Final"]
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
    <div className="w-full h-full flex flex-col justify-center space-y-4 max-w-[1200px] mx-auto overflow-hidden">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">METODOLOGÍA ÁGIL</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM</h2>
      </div>

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
                "w-8 h-8 md:w-10 md:h-10 rounded-full border-4 flex items-center justify-center transition-all duration-300",
                currentStep >= i ? "bg-[#FF1E2D] border-[#FF1E2D] text-white" : "bg-white border-slate-100 text-slate-300 shadow-sm"
              )}
            >
              <span className="text-[10px] md:text-base font-black">{i + 1}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch bg-white p-6 shadow-2xl rounded-[30px] border border-slate-50 relative overflow-hidden min-h-[400px]">
        <div className="lg:col-span-9 space-y-4 flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <div className="bg-[#FF1E2D] text-white px-4 py-1.5 text-[10px] md:text-sm font-black uppercase tracking-widest italic shadow-lg">
              FASE: {sprints[currentStep].phase}
            </div>
            <h3 className="text-xl md:text-3xl font-black text-[#2B2B2B] italic uppercase">{sprints[currentStep].name}</h3>
          </div>
          
          <p className="text-lg md:text-xl lg:text-2xl text-[#2B2B2B] font-bold uppercase leading-tight italic border-l-8 border-[#FF1E2D] pl-6 py-1">
            {sprints[currentStep].goal}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="space-y-3">
              <h4 className="text-xs md:text-base font-black text-[#FF1E2D] uppercase italic flex items-center gap-2">
                <Layers className="w-4 h-4 md:w-5" /> ÉPICAS
              </h4>
              <ul className="space-y-2">
                {sprints[currentStep].epics.map((epic, i) => (
                  <li key={i} className="text-[10px] md:text-sm font-black text-[#2B2B2B] uppercase flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#FF1E2D] rounded-full" /> {epic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-xs md:text-base font-black text-[#2B2B2B] uppercase italic flex items-center gap-2">
                <ListTodo className="w-4 h-4 md:w-5" /> TAREAS
              </h4>
              <ul className="space-y-2">
                {sprints[currentStep].tasks.map((task, i) => (
                  <li key={i} className="text-[10px] md:text-sm font-bold text-[#2B2B2B] uppercase italic flex items-center gap-2">
                    <CheckCircle2 className="w-3 h-3 text-[#FF1E2D]" /> {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="hidden lg:col-span-3 lg:flex flex-col justify-center items-center bg-slate-50 rounded-[24px] p-6">
          <div className="relative">
             <RotateCw className="w-20 h-20 md:w-32 md:h-32 text-[#FF1E2D] animate-spin-slow opacity-10" />
             <div className="absolute inset-0 flex flex-col items-center justify-center">
                <Target className="w-10 h-10 md:w-16 md:h-16 text-[#2B2B2B]" />
             </div>
          </div>
          <div className="flex gap-4 mt-8">
            <Button 
              onClick={handlePrev} 
              disabled={currentStep === 0}
              variant="outline"
              className="rounded-full border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white h-10 w-10"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === sprints.length - 1}
              className="bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white rounded-full h-10 w-10 shadow-xl"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 pt-2">
        {[
          { icon: Users, label: "EQUIPO SCRUM" },
          { icon: RotateCw, label: "ITERACIONES" },
          { icon: CheckCircle2, label: "CALIDAD" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 p-3 bg-white shadow-lg rounded-xl border border-slate-50">
            <item.icon className="w-5 h-5 text-[#FF1E2D]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-[#2B2B2B] italic">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}