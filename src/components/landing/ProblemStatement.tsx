import { AlertCircle, ArrowRight } from "lucide-react";

export default function ProblemStatement() {
  return (
    <section id="problema" className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center text-red-600 shadow-sm border border-red-100">
          <AlertCircle className="w-6 h-6" />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Sección 1.1</span>
          <h2 className="text-3xl font-bold text-slate-900">Planteamiento del Problema</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 space-y-6">
          <p className="text-xl text-slate-600 leading-relaxed">
            Actualmente, el control de asistencia en instituciones como <span className="text-slate-900 font-bold">LaUni</span> se realiza mediante métodos manuales o poco integrados, como listas, firmas o registros en archivos digitales básicos. 
          </p>
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 italic text-slate-500">
            "Estos procesos generan errores, pérdida de tiempo y falta de confiabilidad institucional."
          </div>
          <p className="text-lg text-slate-600 leading-relaxed">
            Existen problemas críticos como la <span className="text-primary font-semibold">suplantación de identidad</span>, registros incorrectos y dispersión de la información en distintos formatos, lo que dificulta la consulta inmediata y la generación de reportes precisos.
          </p>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-100 shadow-sm space-y-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Desafíos Críticos</h4>
            {[
              "Suplantación de identidad",
              "Dispersión de información",
              "Falta de datos en tiempo real",
              "Ineficiencia operativa"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400" />
                <span className="text-sm font-semibold text-slate-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 px-2 leading-tight">
            La falta de un sistema automatizado limita el acceso a información precisa en tiempo real.
          </p>
        </div>
      </div>
    </section>
  );
}
