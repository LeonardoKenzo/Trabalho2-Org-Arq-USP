import React, { useState } from 'react';
import { cicloData } from '../data/cicloInstrucao.js';

export default function SeonCicloInstrucao(){
    const [passoAtivo, setPassoAtivo] = useState(0);
    const passo = cicloData.passos[passoAtivo];

    return (
        <div className="grid lg:grid-cols-3 gap-6 mt-8">
            <div className={`lg:col-span-2 bg-slate-950/80 border ${passo.cores.borda} ${passo.cores.glow} p-6 rounded-xl transition-all duration-300 backdrop-blur-sm`}>
                
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

            <div className="bg-slate-950/80 backdrop-blur-sm border border-slate-800 p-6 rounded-xl flex flex-col justify-between">
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-4">
                        Estado dos Registradores
                    </h4>
                    <div className='space-y-3'>
                        {cicloData.glossarioRegistradores.map((reg) => {
                            const estaAtivo = passo.registradoresAfetados.includes(reg.sigla);
                            return (
                                <div
                                    key={reg.sigla}
                                    className={`p-3 rounded border transition-all ${estaAtivo ? 'bg-cyan-500/10 border-cyan-500/40 shadow-[0_0_10px_rgba(34,211,238,0.05)]' : 'bg-slate-900/40 border-slate-800/60'}`}
                                    >
                                        <div className="flex justify-between items-center mb-1">
                                            <span className={`font-mono text-sm font-bold ${estaAtivo ? 'text-cyan-400' : 'text-slate-300'}`}>
                                                {reg.sigla}
                                            </span>
                                            {estaAtivo && <span className="text-[10px] font-mono text-cyan-500 animate-pulse">ATIVO</span>}
                                        </div>
                                        <span className="text-[11px] text-slate-500 block font-mono">
                                            {reg.nome}
                                        </span>
                                        <p className="text-slate-400 text-xs mt-1">
                                            {reg.funcao}
                                        </p>
                                    </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}