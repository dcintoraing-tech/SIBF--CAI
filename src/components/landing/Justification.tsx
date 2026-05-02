import { TrendingUp, ShieldCheck, Zap, BarChart3, Rocket } from "lucide-react";

export default function Justification() {
  const values = [
    {
      icon: Zap,
      title: "Automatización",
      desc: "Elimina errores humanos y reduce significativamente los tiempos administrativos del personal."
    },
    {
      icon: ShieldCheck,
      title: "Cero Fraude",
      desc: "Evita suplantaciones sin necesidad de credenciales físicas, garantizando registros reales."
    },
    {
      icon: BarChart3,
      title: "Data Driven",
      desc: "Centraliza información y genera reportes automáticos para una toma de decisiones estratégica."
    },
    {
      icon: TrendingUp,
      title: "Vanguardia",
      desc: "Solución innovadora que posiciona a la institución como líder en adopción tecnológica."
    }
  ];

  return (
    <div id="justificacion" className="space-y-12">
      <div className="space-y-2">
        <span className="text-[#FF1E2D] font-bold text-sm tracking-[0.3em] uppercase">1.3 Justificación y Enfoque</span>
        <h2 className="text-3xl font-black text-[#2B2B2B] tracking-tight">VALOR INSTITUCIONAL</h2>
      </div>

      <div className="space-y-12">
        <div className="prose prose-slate max-w-none">
          <p className="text-lg text-gray-600 leading-relaxed font-medium uppercase tracking-tight">
            Este sistema transforma el control de asistencia en un proceso de alto nivel, garantizando registros confiables y posicionando a la institución a la <span className="text-[#FF1E2D] font-black underline decoration-2 underline-offset-4">VANGUARDIA TECNOLÓGICA</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {values.map((v, i) => (
            <div key={i} className="flex gap-6 p-8 bg-[#F5F5F5] border-t-2 border-transparent hover:border-[#FF1E2D] transition-all group">
              <div className="flex-none w-12 h-12 red-gradient flex items-center justify-center text-white shadow-lg shadow-red-500/20">
                <v.icon className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm font-black text-[#2B2B2B] uppercase tracking-widest">{v.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-bold uppercase tracking-tighter">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-10 md:p-14 bg-[#2B2B2B] text-white flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <Rocket className="w-5 h-5 text-[#FF1E2D]" />
              <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter italic">Impulse la Eficiencia Hoy</h3>
            </div>
            <p className="text-gray-400 text-xs font-bold uppercase tracking-[0.2em]">
              UNIASSIST HUB: LA SOLUCIÓN ACCESIBLE Y ESCALABLE PARA EL FUTURO.
            </p>
          </div>
          <button className="px-10 py-5 red-gradient hover:scale-105 transition-all text-white font-black uppercase tracking-widest text-xs shadow-xl shadow-red-500/20">
            Solicitar Implementación
          </button>
        </div>
      </div>
    </div>
  );
}