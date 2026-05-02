'use client';

import React, { useState } from 'react';
import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Layers, 
  PlayCircle,
  Clock,
  ChevronRight
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

const phases = [
  {
    name: "Fase de Análisis",
    duration: "2 Semanas",
    progress: 100,
    color: "bg-blue-500",
    start: 0,
    width: 15,
    tasks: ["Requerimientos", "Análisis de Factibilidad", "Arquitectura"]
  },
  {
    name: "Fase de Diseño",
    duration: "3 Semanas",
    progress: 100,
    color: "bg-purple-500",
    start: 15,
    width: 20,
    tasks: ["UI/UX Prototipado", "Diseño de Base de Datos", "Diagramas"]
  },
  {
    name: "Fase de Desarrollo",
    duration: "8 Semanas",
    progress: 80,
    color: "bg-[#FF1E2D]",
    start: 35,
    width: 40,
    tasks: ["Backend Firebase", "Frontend Next.js", "Algoritmos Faciales"]
  },
  {
    name: "Fase de Pruebas",
    duration: "2 Semanas",
    progress: 0,
    color: "bg-orange-500",
    start: 75,
    width: 15,
    tasks: ["Pruebas de Seguridad", "QA de Biometría", "UAT"]
  },
  {
    name: "Fase de Implementación",
    duration: "1 Semana",
    progress: 0,
    color: "bg-green-500",
    start: 90,
    width: 10,
    tasks: ["Despliegue", "Capacitación", "Entrega Final"]
  }
];

export default function Methodology() {
  const [activePhase, setActivePhase] = useState<number | null>(null);

  return (
    <div id="metodologia" className="space-y-16">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.3 Metodología de Trabajo</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight text-balance">AGILIDAD CON SCRUM</h2>
      </div>

      {/* Scrum Explanation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <Users className="w-10 h-10 text-[#FF1E2D] mb-6" />
          <h3 className="text-sm font-black text-[#2B2B2B] uppercase tracking-widest mb-3">Roles</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-bold uppercase">Product Owner, Scrum Master y Equipo de Desarrollo para una gestión eficiente.</p>
        </div>
        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <RotateCw className="w-10 h-10 text-[#FF1E2D] mb-6 animate-spin-slow" />
          <h3 className="text-sm font-black text-[#2B2B2B] uppercase tracking-widest mb-3">Sprints</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-bold uppercase">Ciclos de trabajo de 2 semanas enfocados en entregables funcionales.</p>
        </div>
        <div className="p-8 bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
          <CheckCircle2 className="w-10 h-10 text-[#FF1E2D] mb-6" />
          <h3 className="text-sm font-black text-[#2B2B2B] uppercase tracking-widest mb-3">Valor Continuo</h3>
          <p className="text-xs text-gray-500 leading-relaxed font-bold uppercase">Entregas incrementales que aseguran la alineación con las metas institucionales.</p>
        </div>
      </div>

      {/* Gantt Chart Section */}
      <div className="space-y-8">
        <div className="flex items-center gap-3">
          <Clock className="w-5 h-5 text-[#FF1E2D]" />
          <h3 className="text-xl font-black text-[#2B2B2B] uppercase tracking-tighter">Diagrama de Gantt del Proyecto</h3>
        </div>

        <div className="bg-[#2B2B2B] p-4 md:p-8 rounded-none md:rounded-lg overflow-x-auto">
          <div className="min-w-[800px] space-y-6">
            {/* Header Timeline */}
            <div className="flex border-b border-gray-700 pb-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <div className="w-1/4">Fase / Actividad</div>
              <div className="w-3/4 flex justify-between">
                <span>Mes 1</span>
                <span>Mes 2</span>
                <span>Mes 3</span>
                <span>Mes 4</span>
              </div>
            </div>

            {/* Gantt Bars */}
            <div className="space-y-4">
              {phases.map((phase, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center group cursor-pointer"
                  onMouseEnter={() => setActivePhase(idx)}
                  onMouseLeave={() => setActivePhase(null)}
                >
                  <div className="w-1/4 text-xs font-bold text-white uppercase tracking-tighter pr-4">
                    {phase.name}
                  </div>
                  <div className="w-3/4 relative h-10 bg-gray-800/50 flex items-center">
                    <div 
                      className={cn(
                        "absolute h-6 transition-all duration-700 ease-out flex items-center justify-end px-2 overflow-hidden",
                        phase.color,
                        activePhase === idx ? "opacity-100 scale-y-110" : "opacity-80 scale-y-100"
                      )}
                      style={{ 
                        left: `${phase.start}%`, 
                        width: `${phase.width}%`,
                        animationDelay: `${idx * 150}ms`
                      }}
                    >
                      <span className="text-[8px] font-black text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        {phase.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Phase Details (Conditional Rendering based on interaction) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="p-8 bg-[#F5F5F5] space-y-4">
            <h4 className="text-xs font-black text-[#2B2B2B] uppercase tracking-widest flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#FF1E2D]" />
              Detalles de la Fase Seleccionada
            </h4>
            <div className="space-y-2">
              {activePhase !== null ? (
                <div className="animate-in fade-in slide-in-from-left-4 duration-300">
                  <p className="text-sm font-black text-[#FF1E2D] uppercase mb-4">{phases[activePhase].name}</p>
                  <ul className="space-y-2">
                    {phases[activePhase].tasks.map((task, i) => (
                      <li key={i} className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase">
                        <ChevronRight className="w-3 h-3 text-[#FF1E2D]" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p className="text-[10px] text-gray-400 font-bold uppercase italic">Pase el cursor sobre una fase del diagrama para ver los detalles.</p>
              )}
            </div>
          </div>

          <div className="p-8 bg-white border border-gray-100 space-y-6">
            <h4 className="text-xs font-black text-[#2B2B2B] uppercase tracking-widest flex items-center gap-2">
              <PlayCircle className="w-4 h-4 text-[#FF1E2D]" />
              Estado de Ejecución
            </h4>
            <div className="space-y-6">
              {phases.slice(0, 3).map((phase, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-tighter">
                    <span>{phase.name}</span>
                    <span className="text-[#FF1E2D]">{phase.progress}%</span>
                  </div>
                  <Progress value={phase.progress} className="h-1 bg-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
