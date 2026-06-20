'use client';

import React, { useState } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  ChevronLeft,
  ChevronRight,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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

export default function Methodology() {
  const [currentStep, setCurrentStep] = useState(-1); // -1 is overview

  const handleNext = () => {
    if (currentStep < sprints.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > -1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetView = () => setCurrentStep(-1);

  return (
    <div id="metodologia" className="space-y-12 md:space-y-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-bold text-base md:text-lg tracking-[0.4em] uppercase">1.5 METODOLOGÍA</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ESTRUCTURA ÁGIL</h2>
        </div>

        <div className="flex items-center gap-2 bg-white p-2 border-2 border-gray-100 shadow-xl">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handlePrev}
            disabled={currentStep === -1}
            className="rounded-none border-gray-200 hover:bg-[#FF1E2D] hover:text-white transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div className="px-4 text-[10px] font-black uppercase tracking-widest text-gray-400 min-w-[120px] text-center">
            {currentStep === -1 ? "VISTA GENERAL" : `PASO ${currentStep + 1} / ${sprints.length}`}
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={handleNext}
            disabled={currentStep === sprints.length - 1}
            className="rounded-none border-gray-200 hover:bg-[#FF1E2D] hover:text-white transition-all"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          {currentStep !== -1 && (
            <Button 
              variant="ghost" 
              onClick={resetView}
              className="text-[10px] font-black uppercase tracking-widest text-[#FF1E2D] hover:bg-red-50"
            >
              RESET
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className={cn(
            "p-8 md:p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4 shadow-sm transition-all duration-500",
            currentStep !== -1 && "opacity-20 scale-95 grayscale"
          )}>
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-xl md:text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-16 md:space-y-24 py-12 relative overflow-hidden">
        <div className="flex items-center gap-6 mb-8">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-2xl md:text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">LÍNEA DE TIEMPO INTERACTIVA</h3>
        </div>
        
        <div className="relative overflow-x-auto pb-48 pt-12 md:pt-32 px-4 scrollbar-hide">
          <div className="relative min-w-[1000px] md:min-w-full md:max-w-6xl mx-auto px-10">
            {/* Base Line */}
            <div className="absolute top-1/2 left-0 w-full h-[4px] bg-gray-200 -translate-y-1/2 rounded-full z-0" />
            
            {/* Progress Line */}
            <div 
              className="absolute top-1/2 left-0 h-[4px] bg-[#FF1E2D] -translate-y-1/2 rounded-full z-1 transition-all duration-1000 ease-in-out" 
              style={{ width: currentStep === -1 ? '0%' : `${((currentStep + 1) / sprints.length) * 100}%` }}
            />
            
            <div className="flex justify-between items-center relative z-10">
              {sprints.map((sprint, i) => {
                const isActive = currentStep === i;
                const isPast = currentStep > i;
                const isDeemphasized = currentStep !== -1 && !isActive;

                return (
                  <div key={i} className="flex flex-col items-center group relative">
                    <div 
                      onClick={() => setCurrentStep(i)}
                      className={cn(
                        "relative cursor-pointer transition-all duration-500 ease-out z-30",
                        isActive ? "scale-[1.8] md:scale-[2.2]" : "scale-100",
                        isDeemphasized && "opacity-30 blur-[1px] grayscale"
                      )}
                    >
                      <div 
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-xs font-black text-white transition-colors duration-500"
                        style={{ backgroundColor: isActive || isPast ? sprint.color : '#E5E7EB' }}
                      >
                        {i + 1}
                      </div>
                      
                      {isActive && (
                        <div className="absolute -inset-4 rounded-full border-2 border-[#FF1E2D] animate-ping opacity-30" />
                      )}
                    </div>

                    {/* Sprint Labels below node */}
                    <div className={cn(
                      "absolute top-16 flex flex-col items-center text-center w-32 md:w-48 space-y-2 transition-all duration-500",
                      isActive ? "scale-110 translate-y-4" : "scale-100",
                      isDeemphasized && "opacity-20"
                    )}>
                      <span className={cn(
                        "text-lg md:text-2xl font-black uppercase italic tracking-tighter transition-colors",
                        isActive ? "text-[#FF1E2D]" : "text-[#2B2B2B]"
                      )}>
                        {sprint.name}
                      </span>
                      <span className="text-[10px] md:text-xs font-black text-gray-400 uppercase tracking-[0.2em]">
                        {sprint.weeks}
                      </span>
                      <div className={cn(
                        "px-4 py-1 text-[10px] font-black text-white rounded-full uppercase transition-all",
                        isActive ? "opacity-100" : "opacity-0"
                      )} style={{ backgroundColor: sprint.color }}>
                        {sprint.progress}% COMPLETADO
                      </div>
                    </div>

                    {/* Detail Panel for active sprint */}
                    {isActive && (
                      <div className="absolute bottom-24 w-[300px] md:w-[400px] bg-[#1A1A1A] border-l-8 border-[#FF1E2D] p-8 shadow-2xl animate-in slide-in-from-bottom-10 duration-500 z-50">
                        <div className="space-y-6">
                          <div className="flex items-center justify-between border-b border-white/10 pb-4">
                            <h4 className="text-lg font-black text-[#FF1E2D] uppercase tracking-widest">{sprint.name}</h4>
                            <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.3em]">{sprint.phases}</span>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center gap-2">
                              <Info className="w-4 h-4 text-[#FF1E2D]" />
                              <span className="text-[10px] font-black text-white uppercase tracking-widest">ACTIVIDADES CLAVE</span>
                            </div>
                            <ul className="grid grid-cols-1 gap-3">
                              {sprint.details.map((detail, idx) => (
                                <li key={idx} className="text-[11px] font-bold text-gray-300 uppercase flex gap-3 items-start animate-in fade-in slide-in-from-left-4 duration-500" style={{ transitionDelay: `${idx * 100}ms` }}>
                                  <span className="text-[#FF1E2D] text-lg leading-none">•</span> 
                                  <span className="pt-1">{detail}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {/* Decorative triangle */}
                        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1A1A1A] rotate-45 z-[-1]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {currentStep !== -1 && (
        <div className="bg-[#2B2B2B] p-10 text-center animate-in fade-in duration-700">
          <p className="text-xl md:text-2xl text-white font-black uppercase italic tracking-tighter">
            PROGRESO ACTUAL: <span className="text-[#FF1E2D]">{sprints[currentStep].name}</span> — {sprints[currentStep].phases}
          </p>
        </div>
      )}
    </div>
  );
}
