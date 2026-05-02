import { AlertCircle, ArrowRight } from "lucide-react";

export default function ProblemStatement() {
  const painPoints = [
    "Ineficiencia en registros manuales",
    "Riesgos de suplantación de identidad",
    "Falta de datos centralizados en tiempo real",
    "Altos costos operativos de supervisión"
  ];

  return (
    <section id="problema" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-red-50 text-red-600">
              <AlertCircle className="w-5 h-5" />
            </div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-400">Contexto Actual</h2>
          </div>
          <h2 className="text-3xl font-bold md:text-5xl text-slate-900 mb-6 leading-tight">
            Planteamiento del <span className="text-slate-400">Problema</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-7 space-y-8">
            <p className="text-2xl text-slate-600 font-light leading-relaxed">
              Los métodos tradicionales de control de asistencia generan <span className="text-slate-900 font-medium">brechas de seguridad</span> y una carga administrativa insostenible para instituciones modernas.
            </p>
            <div className="h-px bg-slate-100 w-full" />
            <p className="text-lg text-slate-500 leading-relaxed">
              La suplantación de identidad y la dispersión de la información limitan la capacidad de respuesta institucional, afectando directamente la toma de decisiones estratégicas y la eficiencia operativa en entornos de alta concurrencia.
            </p>
          </div>
          
          <div className="lg:col-span-5">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">Desafíos Críticos</h4>
              <div className="space-y-4">
                {painPoints.map((item, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-primary transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}