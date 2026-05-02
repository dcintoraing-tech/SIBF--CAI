import { TrendingUp, ShieldCheck, Zap, Globe, BarChart3, Rocket } from "lucide-react";

export default function Justification() {
  const values = [
    {
      icon: Zap,
      title: "Rápido y Automático",
      desc: "Elimina errores humanos y reduce significativamente los tiempos administrativos del personal."
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Anti-Fraude",
      desc: "Evita suplantaciones sin necesidad de credenciales físicas, garantizando registros reales."
    },
    {
      icon: BarChart3,
      title: "Decisiones con Datos",
      desc: "Centraliza información y genera reportes automáticos para una toma de decisiones estratégica."
    },
    {
      icon: Globe,
      title: "Vanguardia Tecnológica",
      desc: "Solución innovadora que posiciona a la institución como líder en adopción de IA."
    }
  ];

  return (
    <section id="justificacion" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary shadow-sm border border-primary/10">
          <TrendingUp className="w-7 h-7" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary/60">Sección 1.3</span>
          <h2 className="text-3xl font-bold text-slate-900">Justificación y Enfoque</h2>
        </div>
      </div>

      <div className="space-y-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            Este sistema transforma el control de asistencia en un proceso de alto nivel, garantizando registros confiables y posicionando a la institución a la <span className="text-primary font-bold border-b-2 border-primary/20 pb-1">vanguardia tecnológica</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex gap-6 p-8 rounded-3xl bg-white border border-slate-100 hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group">
              <div className="flex-none w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-primary shadow-inner group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <v.icon className="w-8 h-8" />
              </div>
              <div className="space-y-3">
                <h4 className="text-xl font-bold text-slate-900">{v.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="relative overflow-hidden p-10 md:p-14 rounded-[3rem] bg-slate-900 text-white shadow-2xl">
          {/* Subtle decoration to avoid "plain black" feel */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full -mr-48 -mt-48 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full -ml-32 -mb-32 blur-[80px]" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="space-y-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3">
                <Rocket className="w-6 h-6 text-primary" />
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Impulse la Eficiencia Hoy</h3>
              </div>
              <p className="text-slate-400 text-lg font-medium max-w-lg">
                UniAssist Hub es la solución innovadora, accesible y escalable que su institución requiere para el futuro.
              </p>
            </div>
            <button className="px-10 py-5 bg-primary hover:bg-primary/90 text-white rounded-2xl font-bold shadow-xl shadow-primary/30 transition-all hover:scale-105 active:scale-95 text-lg">
              Solicitar Implementación
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}