import { 
  Scan, 
  CheckCircle, 
  Database, 
  LayoutList, 
  FileSpreadsheet, 
  Activity, 
  AlertTriangle,
  Target
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const specificObjectives = [
  { icon: Scan, title: "Reconocimiento Facial", desc: "Integrar módulo biométrico para identificación segura." },
  { icon: CheckCircle, title: "Registro Automático", desc: "Captura instantánea de entradas y salidas." },
  { icon: Database, title: "Data Centralizada", desc: "Almacenamiento unificado en arquitectura robusta." },
  { icon: LayoutList, title: "Organización Estructurada", desc: "Filtros por usuario, fecha y horarios específicos." },
  { icon: FileSpreadsheet, title: "Reportería Digital", desc: "Generación automática de informes en Excel." },
  { icon: Activity, title: "Análisis de Patrones", desc: "Estudio de comportamiento de asistencia institucional." },
  { icon: AlertTriangle, title: "Alertas Académicas", desc: "Notificaciones preventivas para alumnos en riesgo." },
];

export default function Objectives() {
  return (
    <section id="objetivos" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-primary shadow-sm border border-blue-100">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Sección 1.2</span>
          <h2 className="text-3xl font-bold text-slate-900">Objetivos del Proyecto</h2>
        </div>
      </div>

      {/* General Objective */}
      <div className="bg-primary/5 border border-primary/10 rounded-3xl p-8 md:p-12 text-center space-y-4">
        <h4 className="text-xs font-bold text-primary uppercase tracking-[0.2em]">Objetivo General</h4>
        <p className="text-2xl md:text-3xl font-bold text-slate-800 leading-tight max-w-4xl mx-auto">
          "Desarrollar un sistema inteligente de control de asistencia basado en <span className="text-primary underline decoration-primary/30 underline-offset-8">reconocimiento facial</span> que automatice el registro, centralice la información y genere análisis en tiempo real."
        </p>
      </div>

      {/* Specific Objectives Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specificObjectives.map((obj, index) => (
          <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
            <CardContent className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-primary">
                <obj.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 mb-1">{obj.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{obj.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
