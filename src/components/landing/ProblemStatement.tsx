import { ShieldAlert, FileX, Clock, CircleAlert } from "lucide-react";

export default function ProblemStatement() {
  const challenges = [
    { icon: ShieldAlert, text: "SUPLANTACIÓN" },
    { icon: FileX, text: "DISPERSIÓN" },
    { icon: Clock, text: "RETRAZOS" },
    { icon: CircleAlert, text: "ERROR HUMANO" }
  ];

  return (
    <div id="problema" className="space-y-16">
      <div className="space-y-4">
        <span className="text-[#FF1E2D] font-bold text-lg tracking-[0.4em] uppercase">1.1 DESAFÍO ACTUAL</span>
        <h2 className="text-5xl md:text-6xl font-black text-[#2B2B2B] tracking-tight uppercase italic">EL PROBLEMA</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
        <div className="lg:col-span-7 space-y-10">
          <p className="text-2xl md:text-3xl font-medium text-gray-600 leading-tight">
            Los métodos manuales de asistencia generan <span className="text-[#2B2B2B] font-black">brechas de seguridad</span> y falta de confiabilidad institucional.
          </p>
          
          <div className="p-10 bg-slate-50 border-l-[12px] border-[#FF1E2D] italic text-[#2B2B2B] font-black uppercase text-2xl tracking-tight leading-snug">
            "Procesos obsoletos = pérdida de tiempo y recursos."
          </div>

          <p className="text-xl text-gray-500 font-bold uppercase tracking-tight">
            La suplantación de identidad y la dispersión de información impiden una toma de decisiones eficiente.
          </p>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-[#2B2B2B] p-12 text-white space-y-10 shadow-2xl">
            <h4 className="text-sm font-black text-gray-400 uppercase tracking-[0.5em] text-center border-b border-gray-700 pb-6">ALERTAS CRÍTICAS</h4>
            <div className="grid grid-cols-1 gap-6">
              {challenges.map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-5 border border-gray-700 hover:border-[#FF1E2D] transition-all group bg-white/5">
                  <item.icon className="w-8 h-8 text-[#FF1E2D]" />
                  <span className="text-lg font-black tracking-widest group-hover:text-[#FF1E2D] transition-colors uppercase">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
