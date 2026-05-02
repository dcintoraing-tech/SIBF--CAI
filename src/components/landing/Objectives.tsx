import { 
  Scan, 
  CheckCircle, 
  Database, 
  LayoutList, 
  FileSpreadsheet, 
  Activity, 
  AlertTriangle,
  Target,
  BarChart3
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specificObjectives = [
  { icon: Scan, title: "Biometría Facial", desc: "Módulo para identificación segura de usuarios." },
  { icon: CheckCircle, title: "Captura Auto", desc: "Registro instantáneo de entradas y salidas." },
  { icon: Database, title: "Base Central", desc: "Almacenamiento unificado y seguro." },
  { icon: LayoutList, title: "Ordenación", desc: "Registros filtrables por usuario y fecha." },
  { icon: FileSpreadsheet, title: "Reportes Excel", desc: "Generación automática de informes digitales." },
  { icon: BarChart3, title: "Validación", desc: "Garantía de confiabilidad mediante pruebas." },
  { icon: Activity, title: "Análisis IA", desc: "Estudio de comportamiento institucional." },
  { icon: AlertTriangle, title: "Alertas", desc: "Notificaciones para alumnos en riesgo." },
];

export default function Objectives() {
  return (
    <div id="objetivos" className="space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.2 Objetivos del Proyecto</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">METAS ESTRATÉGICAS</h2>
      </div>

      {/* General Objective */}
      <div className="red-gradient p-10 md:p-14 text-center">
        <h4 className="text-[10px] font-bold text-white/70 uppercase tracking-[0.4em] mb-4">Objetivo General</h4>
        <p className="text-xl md:text-3xl font-black text-white leading-none uppercase italic">
          "Desarrollar un sistema basado en reconocimiento facial que automatice el registro, centralice la información y mejore la seguridad operativa."
        </p>
      </div>

      {/* Specific Objectives Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {specificObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-6 border border-gray-100 hover:border-[#FF1E2D] transition-all group">
            <div className="text-[#FF1E2D] mb-4 group-hover:scale-110 transition-transform">
              <obj.icon className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xs font-black text-[#2B2B2B] leading-tight uppercase tracking-widest">{obj.title}</h3>
              <p className="text-[10px] text-gray-500 leading-tight font-bold uppercase tracking-tighter">{obj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}