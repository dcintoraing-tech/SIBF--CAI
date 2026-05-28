import { 
  Scan, 
  CircleCheckBig, 
  Database, 
  FileSpreadsheet
} from "lucide-react";

const mainObjectives = [
  { icon: Scan, title: "BIOMETRÍA", desc: "SEGURIDAD TOTAL" },
  { icon: CircleCheckBig, title: "AUTOMATIZACIÓN", desc: "CERO INTERVENCIÓN" },
  { icon: Database, title: "CENTRALIZACIÓN", desc: "UN SOLO PUNTO" },
  { icon: FileSpreadsheet, title: "REPORTES", desc: "ACCESO INMEDIATO" },
];

export default function Objectives() {
  return (
    <div id="objetivos" className="space-y-24">
      <div className="space-y-6">
        <span className="text-[#FF1E2D] font-black text-xl tracking-[0.5em] uppercase">1.2 METAS ESTRATÉGICAS</span>
        <h2 className="text-6xl md:text-8xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">OBJETIVOS</h2>
      </div>

      <div className="red-gradient p-16 md:p-32 text-center shadow-3xl">
        <h4 className="text-sm font-black text-white/60 uppercase tracking-[0.6em] mb-10">PROPÓSITO GENERAL</h4>
        <p className="text-4xl md:text-7xl font-black text-white leading-[1.05] uppercase italic max-w-6xl mx-auto">
          "OPTIMIZAR EL CONTROL INSTITUCIONAL MEDIANTE RECONOCIMIENTO FACIAL EN TIEMPO REAL."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        {mainObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-12 border-b-8 border-transparent hover:border-[#FF1E2D] transition-all group shadow-xl text-center">
            <obj.icon className="w-16 h-16 text-[#FF1E2D] mx-auto mb-8 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black text-[#2B2B2B] mb-4 uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-sm text-gray-400 font-black uppercase tracking-widest">{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
