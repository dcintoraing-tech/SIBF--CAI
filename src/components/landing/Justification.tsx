import { TrendingUp, ShieldCheck, Zap, Globe } from "lucide-react";

export default function Justification() {
  const values = [
    {
      icon: Zap,
      title: "Rápido y Automático",
      desc: "Elimina errores humanos y reduce significativamente los tiempos administrativos."
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Anti-Fraude",
      desc: "Evita suplantaciones sin necesidad de credenciales físicas o tarjetas."
    },
    {
      icon: TrendingUp,
      title: "Decisiones con Datos",
      desc: "Información centralizada que facilita la toma de decisiones estratégicas."
    },
    {
      icon: Globe,
      title: "Vanguardia Tecnológica",
      desc: "Solución escalable que posiciona a la institución como líder en innovación."
    }
  ];

  return (
    <section id="justificacion" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 shadow-sm border border-green-100">
          <TrendingUp className="w-6 h-6" />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-400">Sección 1.3</span>
          <h2 className="text-3xl font-bold text-slate-900">Justificación y Enfoque de Venta</h2>
        </div>
      </div>

      <div className="space-y-10">
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed">
            Este sistema transforma el control de asistencia en un proceso de alto nivel, garantizando registros confiables en tiempo real y posicionando a la institución a la <span className="text-slate-900 font-bold">vanguardia tecnológica</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all duration-500 group">
              <div className="flex-none w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm group-hover:scale-110 transition-transform duration-300">
                <v.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-bold text-slate-900">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-3xl bg-blue-600 text-white shadow-xl shadow-blue-200">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold">¿Listo para la transformación digital?</h3>
              <p className="text-blue-100 font-medium">UniAssist Hub es la solución innovadora y escalable que su institución necesita.</p>
            </div>
            <div className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold shadow-lg">
              Solicitar Implementación
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
