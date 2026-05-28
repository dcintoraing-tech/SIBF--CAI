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
    <div id="objetivos" className="space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-black text-sm tracking-[0.4em] uppercase">1.2 METAS ESTRATÉGICAS</span>
        <h2 className="text-4xl md:text-6xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">OBJETIVOS</h2>
      </div>

      <div className="red-gradient p-12 md:p-20 text-center shadow-2xl">
        <h4 className="text-[10px] font-black text-white/60 uppercase tracking-[0.5em] mb-6">PROPÓSITO GENERAL</h4>
        <p className="text-3xl md:text-5xl font-black text-white leading-tight uppercase italic max-w-4xl mx-auto">
          "OPTIMIZAR EL CONTROL INSTITUCIONAL MEDIANTE RECONOCIMIENTO FACIAL EN TIEMPO REAL."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {mainObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-10 border-b-4 border-transparent hover:border-[#FF1E2D] transition-all group shadow-xl text-center">
            <obj.icon className="w-12 h-12 text-[#FF1E2D] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-xl font-black text-[#2B2B2B] mb-2 uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-[10px] text-gray-400 font-black uppercase tracking-widest">{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
