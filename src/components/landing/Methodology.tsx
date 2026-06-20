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
            className="rounded-none bg-[#2B2B2B] hover:bg-[#FF1E2D] text-white font-black uppercase tracking-widest px-8 py-6 h-auto shadow-2xl transition-all flex items-center gap-4 group"
          >
            <Maximize2 className="w-5 h-5 group-hover:scale-125 transition-transform" />
            PRESENTACIÓN FULL SCREEN
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {[
          { icon: Users, title: "SCRUM", text: "ITERACIONES SEMANALES" },
          { icon: RotateCw, title: "SPRINTS", text: "ENTREGAS DE VALOR" },
          { icon: CheckCircle2, title: "CALIDAD", text: "QA INTEGRADO" }
        ].map((item, i) => (
          <div key={i} className="p-8 md:p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4 shadow-sm hover:shadow-xl transition-all group">
            <item.icon className="w-10 h-10 md:w-12 md:h-12 text-[#FF1E2D] mx-auto group-hover:rotate-12 transition-transform" />
            <h3 className="text-xl md:text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-[10px] text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Static View Timeline "Encendida" */}
      <div className="py-16 relative overflow-hidden hidden md:block bg-[#0A0A0A] p-12 shadow-inner border border-white/5">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#FF1E2D] to-transparent opacity-50" />
        <div className="flex items-center gap-6 mb-20">
          <Clock className="w-10 h-10 text-[#FF1E2D] animate-pulse" />
          <h3 className="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter">MAPA DE RUTA INTERACTIVO</h3>
        </div>
        
        <div className="relative px-20">
          {/* Linea encendida con glow */}
          <div className="absolute top-1/2 left-20 right-20 h-[3px] bg-[#1A1A1A] -translate-y-1/2 rounded-full overflow-hidden shadow-[0_0_15px_rgba(255,30,45,0.1)]">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF1E2D] to-[#A30000] opacity-50 shadow-[0_0_20px_#FF1E2D]" />
          </div>

          <div className="flex justify-between items-center relative z-10">
            {sprints.map((sprint, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center group relative cursor-pointer" 
                onClick={() => {setCurrentStep(i); setIsFullMode(true);}}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full border-4 border-[#0A0A0A] shadow-2xl flex items-center justify-center text-sm font-black text-white transition-all duration-500",
                    i === 5 ? "bg-[#333] grayscale" : "bg-[#FF1E2D] shadow-[0_0_25px_#FF1E2D]",
                    "group-hover:scale-125 group-hover:shadow-[0_0_40px_#FF1E2D]"
                  )}
                >
                  {i + 1}
                </div>
                <div className="absolute top-16 flex flex-col items-center gap-1 opacity-60 group-hover:opacity-100 transition-opacity">
                  <span className="text-[11px] font-black uppercase text-white tracking-[0.2em] text-center w-32 drop-shadow-lg">
                    {sprint.name}
                  </span>
                  <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{sprint.weeks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="md:hidden bg-slate-50 p-6 flex items-center gap-4 border-l-4 border-[#FF1E2D]">
        <Smartphone className="w-6 h-6 text-[#FF1E2D]" />
        <p className="text-[10px] font-black uppercase text-gray-500 tracking-widest">Inicie la presentación para una mejor experiencia móvil.</p>
      </div>

      {/* FULL SCREEN PRESENTATION OVERLAY */}
      {isFullMode && (
        <div className="fixed inset-0 z-[200] bg-[#0A0A0A] text-white flex flex-col animate-in fade-in zoom-in duration-500 overflow-hidden">
          {/* Header */}
          <div className="p-4 md:p-8 flex justify-between items-center bg-[#111] border-b border-white/5 z-50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 red-gradient flex items-center justify-center shadow-[0_0_30px_rgba(255,30,45,0.4)]">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-black uppercase italic tracking-widest leading-none">
                  SIBF-CAI <span className="text-[#FF1E2D]">METODOLOGÍA</span>
                </h2>
                <p className="text-[9px] text-gray-500 font-bold uppercase tracking-[0.4em] mt-1">Fase del Proyecto {currentStep + 1} de {sprints.length}</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              onClick={exitPresentation}
              className="text-white hover:text-[#FF1E2D] hover:bg-white/5 rounded-none p-4 h-auto"
            >
              <X className="w-8 h-8 md:w-10 md:h-10" />
            </Button>
          </div>

          {/* Main Slide Content - Optimizado para evitar pérdida de texto */}
          <div className="flex-1 flex flex-col md:flex-row items-stretch justify-center p-6 md:p-12 lg:p-20 gap-8 md:gap-16 overflow-y-auto">
            
            {/* Visual Part */}
            <div className="w-full md:w-1/2 flex flex-col items-center justify-center space-y-8 md:space-y-12 shrink-0">
              <div className="relative">
                <div 
                  className="w-48 h-48 md:w-80 md:h-80 rounded-full border-[12px] border-white/5 flex items-center justify-center text-8xl md:text-[10rem] font-black shadow-2xl animate-in zoom-in-50 duration-700 relative z-10"
                  style={{ 
                    backgroundColor: sprints[currentStep].color, 
                    boxShadow: `0 0 100px ${sprints[currentStep].color}44` 
                  }}
                >
                  {currentStep + 1}
                </div>
                {/* Tech Ring Animado */}
                <div className="absolute -inset-10 rounded-full border-2 border-[#FF1E2D]/20 animate-spin-slow pointer-events-none" />
                <div className="absolute -inset-16 rounded-full border border-white/5 animate-spin-slow [animation-direction:reverse] pointer-events-none" />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-5xl md:text-8xl font-black text-white uppercase italic tracking-tighter">
                  {sprints[currentStep].name}
                </h3>
                <div className="flex items-center justify-center gap-4">
                  <span className="px-6 py-2 bg-white/5 text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] border border-white/10">
                    {sprints[currentStep].weeks}
                  </span>
                  <span className="px-6 py-2 bg-[#FF1E2D] text-white text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-[0_0_20px_rgba(255,30,45,0.4)]">
                    {sprints[currentStep].progress}% COMPLETADO
                  </span>
                </div>
              </div>
            </div>

            {/* Content Part - Con scroll independiente y mejor padding */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="bg-[#1A1A1A] border-l-[12px] border-[#FF1E2D] p-8 md:p-12 lg:p-16 shadow-2xl animate-in slide-in-from-right-20 duration-700 w-full">
                <div className="space-y-10">
                  <div className="space-y-2">
                    <span className="text-[#FF1E2D] font-black text-xs md:text-sm tracking-[0.5em] uppercase">MÓDULO DE TRABAJO</span>
                    <h4 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter border-b border-white/10 pb-6">
                      {sprints[currentStep].phases}
                    </h4>
                  </div>

                  <div className="space-y-10">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-[#FF1E2D]/10 rounded-sm">
                        <Info className="w-6 h-6 text-[#FF1E2D]" />
                      </div>
                      <span className="text-sm font-black text-white uppercase tracking-widest">ACTIVIDADES CRÍTICAS</span>
                    </div>
                    <ul className="grid grid-cols-1 gap-6 md:gap-8">
                      {sprints[currentStep].details.map((detail, idx) => (
                        <li 
                          key={idx} 
                          className="text-lg md:text-2xl font-bold text-gray-300 uppercase flex gap-5 items-start animate-in fade-in slide-in-from-left-4" 
                          style={{ transitionDelay: `${idx * 150}ms` }}
                        >
                          <div className="w-4 h-4 rounded-full bg-[#FF1E2D] mt-2 shrink-0 shadow-[0_0_10px_#FF1E2D]" /> 
                          <span className="leading-tight">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="p-6 md:p-10 bg-[#111] border-t border-white/5 flex flex-col gap-6 shrink-0 z-50">
            <div className="flex items-center justify-between max-w-5xl mx-auto w-full">
              <Button 
                onClick={handlePrev}
                disabled={currentStep === -1}
                className="rounded-none bg-white/5 hover:bg-[#FF1E2D] text-white px-6 md:px-10 py-5 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest border border-white/10 disabled:opacity-20"
              >
                <ChevronLeft className="w-6 h-6" />
                <span className="hidden sm:inline">ANTERIOR</span>
              </Button>

              <div className="hidden md:flex items-center gap-3">
                {sprints.map((_, i) => (
                  <button 
                    key={i} 
                    onClick={() => setCurrentStep(i)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-500 hover:scale-150",
                      currentStep === i ? "bg-[#FF1E2D] w-16" : "bg-white/10 hover:bg-white/30"
                    )}
                  />
                ))}
              </div>

              <Button 
                onClick={handleNext}
                disabled={currentStep === sprints.length - 1}
                className="rounded-none bg-[#FF1E2D] hover:bg-white hover:text-[#FF1E2D] text-white px-6 md:px-10 py-5 h-auto transition-all flex items-center gap-4 font-black uppercase tracking-widest shadow-[0_0_30px_rgba(255,30,45,0.3)] disabled:opacity-20"
              >
                <span className="hidden sm:inline">SIGUIENTE</span>
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <div className="max-w-5xl mx-auto w-full bg-white/5 h-[2px]">
               <div 
                className="h-full bg-[#FF1E2D] transition-all duration-700 shadow-[0_0_10px_#FF1E2D]" 
                style={{ width: `${((currentStep + 1) / sprints.length) * 100}%` }}
               />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
