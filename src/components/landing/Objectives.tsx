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
  { icon: Scan, title: "Reconocimiento Facial", desc: "Integrar módulo biométrico para identificación segura de usuarios." },
  { icon: CheckCircle, title: "Registro Automático", desc: "Captura instantánea de entradas, asistencias y salidas." },
  { icon: Database, title: "Data Centralizada", desc: "Almacenamiento unificado en base de datos robusta." },
  { icon: LayoutList, title: "Organización Estructurada", desc: "Registros filtrables por usuario, fecha y horarios." },
  { icon: FileSpreadsheet, title: "Reportería Digital", desc: "Generación automática de informes en formato Excel." },
  { icon: BarChart3, title: "Validación de Precisión", desc: "Pruebas constantes para garantizar la confiabilidad." },
  { icon: Activity, title: "Análisis de Patrones", desc: "Estudio de comportamiento de asistencia institucional." },
  { icon: AlertTriangle, title: "Alertas Académicas", desc: "Notificaciones para alumnos en riesgo por inasistencia." },
];

export default function Objectives() {
  return (
    <section id="objetivos" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
          <Target className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Sección 1.2</span>
          <h2 className="text-3xl font-bold text-slate-900">Objetivos del Proyecto</h2>
        </div>
      </div>

      {/* General Objective */}
      <div className="relative overflow-hidden bg-primary p-12 md:p-16 rounded-[2.5rem] shadow-2xl shadow-primary/20 text-center group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:bg-white/20 transition-all duration-700" />
        <div className="relative z-10 space-y-6">
          <h4 className="text-xs font-bold text-primary-foreground/70 uppercase tracking-[0.3em]">Objetivo General</h4>
          <p className="text-2xl md:text-4xl font-extrabold text-white leading-tight max-w-4xl mx-auto">
            "Desarrollar un sistema inteligente basado en <span className="text-blue-200">reconocimiento facial</span> que automatice el registro, centralice la información y mejore la seguridad y eficiencia operativa."
          </p>
        </div>
      </div>

      {/* Specific Objectives Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {specificObjectives.map((obj, index) => (
          <Card key={index} className="border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl">
            <CardContent className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <obj.icon className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-base font-bold text-slate-900 leading-tight">{obj.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed font-medium">{obj.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}