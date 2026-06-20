'use client';

import React, { useState, useEffect } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  ChevronLeft,
  ChevronRight,
  Info,
  Maximize2,
  X,
  Smartphone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
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
  const [currentStep, setCurrentStep] = useState(-1);
  const [isFullMode, setIsFullMode] = useState(false);

  const handleNext = () => {
    if (currentStep < sprints.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    } else {
      setCurrentStep(-1);
    }
  };

  const startPresentation = () => {
    setCurrentStep(0);
    setIsFullMode(true);
  };

  const exitPresentation = () => {
    setIsFullMode(false);
    setCurrentStep(-1);
  };

  // Prevent scroll when in full mode
  useEffect(() => {
    if (isFullMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [isFullMode]);

  return (
    <div id="metodologia" className="space-y-12 md:space-y-20 relative">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-4">
          <span className="text-[#FF1E2D] font-bold text-base md:text-lg tracking-[0.4em] uppercase">1.5 METODOLOGÍA</span>
          <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic leading-none">ESTRUCTURA ÁGIL</h2>
        </div>

        <div className="flex items-center gap-4">
          <Button 
            onClick={startPresentation}
            className="rounded-none bg-[#2B2B2B] hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-8 py-6 h-auto shadow-2xl transition-all flex items-center gap-4"
          >
            <Maximize2 className="w-5 h-5" />
            PRESENTACIÓN FULL SCREEN
          </Button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className="p-8 md:p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4 shadow-sm hover:shadow-xl transition-all">
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-xl md:text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Static View Timeline */}
      <div className="py-12 relative overflow-hidden hidden md:block">
        <div className="flex items-center gap-6 mb-16">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-2xl md:text-3xl font-black text-[#2B2B2B] uppercase italic tracking-tighter">MAPA DE RUTA</h3>
        </div>
        
        <div className="relative px-10">
          <div className="absolute top-1/2 left-10 right-10 h-[4px] bg-gray-200 -translate-y-1/2 rounded-full" />
          <div className="flex justify-between items-center relative z-10">
            {sprints.map((sprint, i) => (
              <div key={i} className="flex flex-col items-center group relative cursor-pointer" onClick={() => {setCurrentStep(i); setIsFullMode(true);}}>
                <div className="w-10 h-10 rounded-full border-4 border-white shadow-xl flex items-center justify-center text-xs font-black text-white transition-all bg-[#E5E7EB] group-hover:bg-[#FF1E2D] group-hover:scale-125">
                  {i + 1}
                </div>
                <span className="absolute top-12 text-[10px] font-black uppercase text-gray-400 tracking-widest text-center w-24">
                  {sprint.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile-only help text */}
      <div className="md:hidden bg-slate-50 p-6 flex items-center gap-4 border-l-4 border-[#FF1E2D]">
        <Smartphone className="w-6 h-6 text-[#FF1E2D]" />
        <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Inicie la presentación para una mejor experiencia móvil.</p>
      </div>

      {/* FULL SCREEN PRESENTATION OVERLAY */}
      {isFullMode && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col animate-in fade-in zoom-in duration-500">
          {/* Header */}
          <div className="p-6 md:p-10 flex justify-between items-center bg-[#1A1A1A] border-b border-white/5">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 red-gradient flex items-center justify-center">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-black uppercase italic tracking-widest">
                  SIBF-CAI <span className="text-[#FF1E2D]">METODOLOGÍA</span>
                </h2>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-[0.4em]">Paso {currentStep + 1} de {sprints.length}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={exitPresentation}
              className="text-white hover:text-[#FF1E2D] hover:bg-white/5 rounded-none p-4 h-auto"
            >
              <X className="w-8 h-8" />
            </Button>
          </div>

          {/* Main Slide Content */}
          <div className="flex-1 flex flex-col md:flex-row items-center justify-center p-6 md:p-20 gap-10 md:gap-20 overflow-hidden">
            
            {/* Visual Part */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-12">
              <div className="relative">
                <div 
                  className="w-48 h-48 md:w-72 md:h-72 rounded-full border-[12px] border-white/5 flex items-center justify-center text-7xl md:text-9xl font-black shadow-2xl animate-in zoom-in-50 duration-700"
                  style={{ backgroundColor: sprints[currentStep].color, boxShadow: `0 0 80px ${sprints[currentStep].color}33` }}
                >
                  {currentStep + 1}
                </div>
                <div className="absolute -inset-8 rounded-full border-2 border-white/10 animate-spin-slow" />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-5xl md:text-7xl font-black text-white uppercase italic tracking-tighter">
                  {sprints[currentStep].name}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="px-4 py-1 bg-white/10 text-white text-xs font-black uppercase tracking-widest border border-white/20">
                    {sprints[currentStep].weeks}
                  </span>
                  <span className="px-4 py-1 bg-[#FF1E2D] text-white text-xs font-black uppercase tracking-widest">
                    {sprints[currentStep].progress}% COMPLETADO
                  </span>
                </div>
              </div>
            </div>

            {/* Content Part */}
            <div className="w-full md:w-1/2 bg-[#1A1A1A] border-l-[12px] border-[#FF1E2D] p-10 md:p-16 shadow-2xl animate-in slide-in-from-right-20 duration-700">
              <div className="space-y-10">
                <div className="space-y-2">
                  <span className="text-[#FF1E2D] font-black text-xs md:text-sm tracking-[0.5em] uppercase">FASES ACTUALES</span>
                  <h4 className="text-3xl md:text-4xl font-black text-white uppercase italic tracking-tighter border-b border-white/10 pb-4">
                    {sprints[currentStep].phases}
                  </h4>
                </div>

                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <Info className="w-6 h-6 text-[#FF1E2D]" />
                    <span className="text-sm font-black text-white uppercase tracking-widest">ACTIVIDADES CLAVE</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-6">
                    {sprints[currentStep].details.map((detail, idx) => (
                      <li key={idx} className="text-base md:text-xl font-bold text-gray-300 uppercase flex gap-4 items-start animate-in fade-in slide-in-from-left-4" style={{ transitionDelay: `${idx * 150}ms` }}>
                        <div className="w-3 h-3 rounded-full bg-[#FF1E2D] mt-2 shrink-0" /> 
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="p-6 md:p-10 bg-[#1A1A1A] border-t border-white/5 flex flex-col gap-6">
            <div className="flex items-center justify-between max-w-4xl mx-auto w-full">
              <Button 
                onClick={handlePrev}
                disabled={currentStep === -1}
                className="rounded-none bg-white/5 hover:bg-[#FF1E2D] text-white px-8 py-6 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest border border-white/10"
              >
                <ChevronLeft className="w-6 h-6" />
                ANTERIOR
              </Button>

              <div className="hidden md:flex items-center gap-2">
                {sprints.map((_, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      currentStep === i ? "bg-[#FF1E2D] w-12" : "bg-white/20"
                    )}
                  />
                ))}
              </div>

              <Button 
                onClick={handleNext}
                disabled={currentStep === sprints.length - 1}
                className="rounded-none bg-[#FF1E2D] hover:bg-white hover:text-[#FF1E2D] text-white px-8 py-6 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest shadow-2xl shadow-red-500/20"
              >
                SIGUIENTE
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <Progress value={((currentStep + 1) / sprints.length) * 100} className="h-1 bg-white/5 max-w-4xl mx-auto" />
          </div>
        </div>
      )}
    </div>
  );
}
