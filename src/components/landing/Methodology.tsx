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
  ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sprints = [
  { 
    name: "SPRINT 1", 
    phase: "ANÁLISIS", 
    icon: Search,
    goal: "Definición de Requerimientos e Inteligencia Institucional.",
    epics: ["Auditoría de Procesos", "Modelado de Sistemas", "Análisis de Requerimientos"],
    tasks: ["Entrevistas Directas", "Diagramas de Casos de Uso", "Especificación IEEE 830"]
  },
  { 
    name: "SPRINT 2", 
    phase: "DESARROLLO", 
    icon: Code2,
    goal: "Diseño de Arquitectura y Prototipado de Interfaz.",
    epics: ["Diseño de Base de Datos", "UX/UI Prototyping", "Arquitectura Cloud"],
    tasks: ["Esquema Firestore", "Wireframes Alta Fidelidad", "Diagrama de Clases"]
  },
  { 
    name: "SPRINT 3", 
    phase: "DESARROLLO", 
    icon: Code2,
    goal: "Implementación del Motor Biométrico y Core Lógico.",
    epics: ["Integración IA", "Reconocimiento Facial", "Frontend Core"],
    tasks: ["Lógica TensorFlow.js", "Captura Biométrica", "Desarrollo Next.js 15"]
  },
  { 
    name: "SPRINT 4", 
    phase: "IMPLEMENTACIÓN", 
    icon: Settings2,
    goal: "Integración de Servicios y Sincronización Real-time.",
    epics: ["Backend Firebase", "Auth Services", "Real-time Sync"],
    tasks: ["Configuración Auth", "Sincronización de Datos", "API Endpoints"]
  },
  { 
    name: "SPRINT 5", 
    phase: "IMPLEMENTACIÓN", 
    icon: Settings2,
    goal: "Despliegue Final y Puesta en Marcha Inicial.",
    epics: ["Deployment Cloud", "Documentación Técnica", "Capacitación"],
    tasks: ["Despliegue Producción", "Manuales de Usuario", "Entrega Final"]
  },
  { 
    name: "SPRINT 6", 
    phase: "PRUEBAS", 
    icon: ShieldCheck,
    goal: "Validación de Precisión y Pruebas de Calidad Final.",
    epics: ["QA & Testing", "Optimización de Algoritmo", "Depuración UI"],
    tasks: ["Pruebas de Carga", "Test de Precisión Facial", "Stress Testing"]
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

  const ActiveIcon = sprints[currentStep].icon;

  return (
    <div className="w-full h-full flex flex-col justify-center space-y-6 max-w-[1200px] mx-auto overflow-hidden animate-in fade-in duration-700">
      <div className="space-y-1">
        <span className="text-[#FF1E2D] font-black text-xs md:text-lg tracking-[0.4em] uppercase">METODOLOGÍA ÁGIL</span>
        <h2 className="text-3xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">SCRUM ROADMAP</h2>
      </div>

      {/* Timeline Visual */}
      <div className="relative pt-10 pb-4">
        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-slate-100 -translate-y-1/2 rounded-full" />
        <div 
          className="absolute top-1/2 left-0 h-1.5 bg-[#FF1E2D] -translate-y-1/2 transition-all duration-1000 ease-in-out rounded-full shadow-[0_0_10px_#FF1E2D]" 
          style={{ width: `${(currentStep / (sprints.length - 1)) * 100}%` }}
        />

        <div className="flex justify-between items-center relative z-10">
          {sprints.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-3">
              <button
                onClick={() => setCurrentStep(i)}
                className={cn(
                  "w-10 h-10 md:w-14 md:h-14 rounded-full border-4 flex items-center justify-center transition-all duration-500",
                  currentStep === i 
                    ? "bg-[#FF1E2D] border-[#FF1E2D] text-white scale-125 shadow-xl" 
                    : currentStep > i 
                      ? "bg-[#FF1E2D]/80 border-[#FF1E2D]/20 text-white" 
                      : "bg-white border-slate-200 text-slate-300"
                )}
              >
                <s.icon className="w-5 h-5 md:w-7 md:h-7" />
              </button>
              <span className={cn(
                "text-[8px] md:text-[10px] font-black uppercase tracking-widest hidden md:block",
                currentStep === i ? "text-[#FF1E2D]" : "text-slate-400"
              )}>
                {s.phase}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[40px] border border-slate-50 relative overflow-hidden min-h-[450px]">
        <div 
          key={currentStep}
          className="lg:col-span-8 space-y-6 flex flex-col justify-center animate-in slide-in-from-right-10 duration-500"
        >
          <div className="flex items-center gap-6">
            <div className="bg-[#FF1E2D] text-white px-6 py-2 text-xs md:text-sm font-black uppercase tracking-[0.3em] italic shadow-lg rounded-full">
              {sprints[currentStep].phase}
            </div>
            <h3 className="text-2xl md:text-4xl font-black text-[#2B2B2B] italic uppercase">{sprints[currentStep].name}</h3>
          </div>
          
          <p className="text-xl md:text-3xl text-[#2B2B2B] font-black uppercase leading-[1.1] italic border-l-[10px] border-[#FF1E2D] pl-8 py-2">
            {sprints[currentStep].goal}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-6">
            <div className="space-y-4">
              <h4 className="text-xs md:text-lg font-black text-[#FF1E2D] uppercase italic flex items-center gap-3">
                <Layers className="w-5 h-5 md:w-6" /> ÉPICAS DEL SPRINT
              </h4>
              <ul className="space-y-3">
                {sprints[currentStep].epics.map((epic, i) => (
                  <li key={i} className="text-xs md:text-lg font-black text-[#2B2B2B] uppercase flex items-center gap-3">
                    <div className="w-2.5 h-2.5 bg-[#FF1E2D] rounded-full shrink-0" /> {epic}
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xs md:text-lg font-black text-[#2B2B2B] uppercase italic flex items-center gap-3">
                <ListTodo className="w-5 h-5 md:w-6" /> BACKLOG DE TAREAS
              </h4>
              <ul className="space-y-3">
                {sprints[currentStep].tasks.map((task, i) => (
                  <li key={i} className="text-xs md:text-lg font-bold text-[#2B2B2B] uppercase italic flex items-center gap-3 opacity-70">
                    <CheckCircle2 className="w-4 h-4 md:w-5 text-[#FF1E2D] shrink-0" /> {task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Sidebar Controls */}
        <div className="hidden lg:col-span-4 lg:flex flex-col justify-center items-center bg-slate-50 rounded-[30px] p-8 border border-slate-100">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#FF1E2D]/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <ActiveIcon className="w-24 h-24 md:w-32 md:h-32 text-[#2B2B2B] relative z-10 animate-pulse" />
          </div>
          <div className="flex gap-6 mt-12">
            <Button 
              onClick={handlePrev} 
              disabled={currentStep === 0}
              variant="outline"
              className="rounded-full border-2 border-[#2B2B2B] text-[#2B2B2B] hover:bg-[#2B2B2B] hover:text-white h-14 w-14 shadow-lg transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              onClick={handleNext} 
              disabled={currentStep === sprints.length - 1}
              className="bg-[#FF1E2D] hover:bg-[#2B2B2B] text-white rounded-full h-14 w-14 shadow-2xl transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Badges */}
      <div className="grid grid-cols-3 gap-6 pt-2">
        {[
          { icon: Users, label: "EQUIPO MULTIDISCIPLINARIO" },
          { icon: CheckCircle2, label: "CONTROL DE CALIDAD QA" },
          { icon: ShieldCheck, label: "SEGURIDAD DE DATOS" }
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-2xl border border-slate-50">
            <item.icon className="w-6 h-6 text-[#FF1E2D]" />
            <span className="text-[9px] md:text-xs font-black uppercase tracking-widest text-[#2B2B2B] italic">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}