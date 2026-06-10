'use client';

import { 
  Users, 
  RotateCw, 
  CheckCircle2, 
  Clock,
  LayoutGrid
} from "lucide-react";

export default function Methodology() {
  const ganttTasks = [
    { name: "ANÁLISIS", weeks: "S1-S4", progress: 100, color: "#2B2B2B" },
    { name: "DISEÑO", weeks: "S5-S8", progress: 100, color: "#2B2B2B" },
    { name: "DESARROLLO", weeks: "S9-S14", progress: 40, color: "#FF1E2D" },
    { name: "PRUEBAS", weeks: "S15-S16", progress: 0, color: "#999" },
  ];

  return (
    <div id="metodologia" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.4 METODOLOGÍA</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">AGILIDAD SCRUM</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Users, title: "EQUIPO", text: "Roles definidos." },
          { icon: RotateCw, title: "SPRINTS", text: "Entregas bi-semanales." },
          { icon: CheckCircle2, title: "VALOR", text: "Calidad continua." }
        ].map((item, i) => (
          <div key={i} className="p-10 bg-slate-50 border-t-8 border-[#FF1E2D] text-center space-y-4">
            <item.icon className="w-12 h-12 text-[#FF1E2D] mx-auto" />
            <h3 className="text-2xl font-black text-[#2B2B2B] uppercase italic">{item.title}</h3>
            <p className="text-xs text-gray-500 font-black uppercase tracking-widest">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <Clock className="w-10 h-10 text-[#FF1E2D]" />
          <h3 className="text-3xl font-black text-[#2B2B2B] uppercase italic">DIAGRAMA DE GANTT (CRONOGRAMA)</h3>
        </div>
        
        <div className="bg-[#2B2B2B] p-8 md:p-12 shadow-2xl">
          <div className="space-y-8">
            {ganttTasks.map((task, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-end mb-2">
                  <span className="text-white font-black uppercase tracking-widest text-sm">{task.name}</span>
                  <span className="text-[#FF1E2D] font-bold text-xs">{task.weeks}</span>
                </div>
                <div className="h-6 bg-white/10 w-full relative overflow-hidden">
                  <div 
                    className="h-full transition-all duration-1000 ease-out"
                    style={{ 
                      width: `${task.progress}%`, 
                      backgroundColor: task.color 
                    }}
                  />
                  {task.progress > 0 && (
                    <span className="absolute inset-0 flex items-center justify-center text-[10px] font-black text-white/50">
                      {task.progress}% COMPLETADO
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.5em]">
              EJECUCIÓN TOTAL ESTIMADA: 16 SEMANAS
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
