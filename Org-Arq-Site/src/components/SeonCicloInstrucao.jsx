import React, { useState } from 'react';
import { cicloData } from '../data/cicloInstrucao.js';
import Visualizacao from '../assets/Visualizacao.jsx';
export default function SeonCicloInstrucao(){
    const [passoAtivo, setPassoAtivo] = useState(0);
    const passo = cicloData.passos[passoAtivo];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full items-start">
            <div className={`bg-slate-950/80 border ${passo.cores.borda} ${passo.cores.glow} p-6 rounded-xl transition-all duration-300 backdrop-blur-sm min-h-[410px]`}>
                
                <div className="flex justify-between items-center mb-6">
                    <span className={`font-mono text-xs font-bold ${passo.cores.texto} tracking-widest`}>
                        [ STAGE: {passo.fase} ]
                    </span>
                    <div className="flex gap-1">
                        {cicloData.passos.map((_, idx) => (
                            <span 
                                key={idx}
                                className={`w-3 h-1.5 rounded-sm transition-colors ${idx === passoAtivo ? 'bg-cyan-400' : 'bg-slate-800'}`}
                            />
                        ))}
                    </div>
                </div>
                
                <h3 className="text-xl font-mono font-bold text-slate-100 mb-2">
                    {passo.titulo}
                </h3>
                <p className="text-slate-300 text-sm mb-4">
                    {passo.descricao}
                </p>

                <div className="bg-slate-900/80 p-4 rounded border border-slate-800/80 font-mono text-xs text-slate-400 mb-6">
                <span className="text-slate-500 block mb-1">
                    // HARDWARE_FLOW:
                </span>
                {passo.detalhesHardware}
                </div>

                <div className="bg-black/60 p-3 rounded font-mono text-xs text-emerald-400 border border-emerald-900/30">
                        {passo.logText}
                </div>

                <div className="flex justify-between mt-6 pt-4 border-t border-slate-800/60">
                        <button
                            disabled={passoAtivo === 0}
                            onClick={()=>setPassoAtivo(p=>p-1)}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none rounded font-mono text-xs border border-slate-700 transition-colors text-slate-300"
                            >
                            &lt; Passo Anterior
                        </button>

                        <button
                            disabled={passoAtivo===cicloData.passos.length - 1}
                            onClick={()=>setPassoAtivo(p=>p+1)}
                            className="px-4 py-2 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/40 disabled:opacity-30 disabled:pointer-events-none rounded font-mono text-xs border border-cyan-500/30 transition-colors"
                        >
                            Próximo Passo &gt;
                        </button>

                </div>
            </div>
            <Visualizacao passoAtivo={passoAtivo} />
        </div>
    );
}