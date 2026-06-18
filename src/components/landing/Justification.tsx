import { TrendingUp, ShieldCheck, Zap, ChartColumn } from "lucide-react";

export default function Justification() {
  const values = [
    { icon: Zap, title: "AUTOMATIZACIÓN", desc: "Cero errores humanos." },
    { icon: ShieldCheck, title: "CERO FRAUDE", desc: "Seguridad biométrica." },
    { icon: ChartColumn, title: "DATA DRIVEN", desc: "Reportes en tiempo real." },
    { icon: TrendingUp, title: "TRANSFORMACIÓN", desc: "Liderazgo tecnológico." }
  ];

  return (
    <div id="justificacion" className="space-y-20">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.3 JUSTIFICACIÓN</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">VALOR REAL</h2>
      </div>

      <div className="space-y-16">
        <p className="text-2xl md:text-3xl text-gray-600 font-medium leading-tight max-w-5xl">
          El sistema posiciona a la institución en la <span className="text-[#FF1E2D] font-black underline">TRANSFORMACIÓN DIGITAL</span>, garantizando una gestión de asistencia de alto nivel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, i) => (
            <div key={i} className="flex gap-10 p-12 bg-slate-50 border-t-8 border-transparent hover:border-[#FF1E2D] transition-all group shadow-sm">
              <v.icon className="w-16 h-16 text-[#FF1E2D] group-hover:scale-110 transition-transform" />
              <div className="space-y-4">
                <h4 className="text-2xl font-black text-[#2B2B2B] uppercase tracking-widest">{v.title}</h4>
                <p className="text-sm text-gray-400 font-bold uppercase tracking-widest leading-relaxed">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}