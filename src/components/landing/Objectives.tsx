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
        <h2 className="text-4xl md:text-5xl font-black text-[#2B2B2B] tracking-tighter uppercase italic leading-none">OBJETIVOS</h2>
      </div>

      <div className="bg-white border-2 border-gray-100 p-12 md:p-16 text-center shadow-2xl border-l-[12px] border-[#FF1E2D]">
        <h4 className="text-[12px] font-black text-[#FF1E2D] uppercase tracking-[0.5em] mb-6">Objetivo General</h4>
        <p className="text-xl md:text-2xl font-medium text-gray-700 leading-relaxed italic max-w-5xl mx-auto">
          "Desarrollar un sistema de información para el control y gestión de asistencia mediante reconocimiento facial, que permita la identificación biométrica de las personas y el registro automatizado de entradas, asistencias y salidas, con el propósito de optimizar los procesos administrativos, mejorar la precisión de la información y fortalecer la eficiencia operativa de la institución."
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {mainObjectives.map((obj, index) => (
          <div key={index} className="bg-white p-8 border-b-4 border-transparent hover:border-[#FF1E2D] transition-all group shadow-xl text-center">
            <obj.icon className="w-10 h-10 text-[#FF1E2D] mx-auto mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-black text-[#2B2B2B] mb-2 uppercase tracking-tighter">{obj.title}</h3>
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-widest">{obj.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
