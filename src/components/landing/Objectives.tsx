import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet,
  Target
} from "lucide-react";

const mainObjectives = [
  { icon: Scan, title: "BIOMETRÍA", desc: "Seguridad total." },
  { icon: CircleCheckBig, title: "AUTOMATIZACIÓN", desc: "Cero intervención." },
  { icon: Database, title: "CENTRALIZACIÓN", desc: "Un solo punto." },
  { icon: FileSpreadsheet, title: "REPORTES", desc: "Acceso inmediato." },
];

export default function Objectives() {
  return (
    <div id="objetivos" className="space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.2 METAS ESTRATÉGICAS</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">OBJETIVOS</h2>
      </div>

      <div className="red-gradient p-16 md:p-24 text-center shadow-2xl">
        <h4 className="text-sm font-black text-white/60 uppercase tracking-[0.5em] mb-8">Propósito General</h4>
        <p className="text-3xl md:text-5xl font-black text-white leading-[1.1] uppercase italic max-w-5xl mx-auto">
          "OPTIMIZAR EL CONTROL INSTITUCIONAL MEDIANTE RECONOCIMIENTO FACIAL EN TIEMPO REAL."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {mainObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-10 border border-gray-100 hover:border-[#FF1E2D] transition-all group shadow-sm text-center">
            <obj.icon className="w-12 h-12 text-[#FF1E2D] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-[#2B2B2B] mb-2 uppercase">{obj.title}</h3>
            <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
