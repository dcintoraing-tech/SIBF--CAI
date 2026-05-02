import { AlertCircle, FileX, Clock, ShieldAlert } from "lucide-react";

export default function ProblemStatement() {
  const challenges = [
    { icon: ShieldAlert, text: "Suplantación de identidad" },
    { icon: FileX, text: "Dispersión de información" },
    { icon: Clock, text: "Falta de datos en tiempo real" },
    { icon: AlertCircle, text: "Ineficiencia operativa" }
  ];

  return (
    <section id="problema" className="space-y-10">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
          <AlertCircle className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Sección 1.1</span>
          <h2 className="text-3xl font-bold text-slate-900">Planteamiento del Problema</h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <p className="text-xl text-slate-600 leading-relaxed">
            Actualmente, el control de asistencia en instituciones como <span className="text-slate-900 font-bold">LaUni</span> se realiza mediante métodos manuales o poco integrados, como listas, firmas o registros en archivos digitales básicos. 
          </p>
          
          <div className="p-8 bg-primary/[0.03] rounded-3xl border-l-4 border-primary shadow-sm italic text-slate-700 text-lg">
            "Estos procesos generan errores, pérdida de tiempo y falta de confiabilidad institucional."
          </div>

          <p className="text-lg text-slate-600 leading-relaxed">
            Existen problemas críticos como la <span className="text-primary font-bold">suplantación de identidad</span>, registros incorrectos y dispersión de la información en distintos formatos, lo que dificulta la consulta inmediata y la generación de reportes precisos.
          </p>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            La falta de un sistema automatizado y centralizado limita la eficiencia operativa y el acceso a información precisa en tiempo real.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg shadow-slate-200/50 space-y-6">
            <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest text-center">Desafíos Críticos Identificados</h4>
            <div className="space-y-4">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-primary/20 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-bold text-slate-700">{item.text}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-400 text-center leading-relaxed font-medium">
              La modernización es imperativa para garantizar la integridad de los datos institucionales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}