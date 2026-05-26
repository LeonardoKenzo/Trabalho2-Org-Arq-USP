import React, { useState, useEffect } from 'react';
import { cicloData } from '../data/cicloInstrucao.js';
import DiagramaCPU from '../assets/DiagramCPU.jsx';
import Visualizacao from '../assets/Visualizacao.jsx';

export default function SeonCicloInstrucao(){
    const [passoAtivo, setPassoAtivo] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(false);
    const passo = cicloData.passos[passoAtivo];

    // Efeito para controlar a reprodução automática e a pausa
    useEffect(() => {
        let intervalId;
        
        if (isAutoPlaying) {
            intervalId = setInterval(() => {
                setPassoAtivo((prevPasso) => {
                    // Se chegou no final, reseta para 0 para continuar o loop cíclico
                    if (prevPasso === cicloData.passos.length - 1) {
                        return 0;
                    }
                    return prevPasso + 1;
                });
            }, 2500); // 2.5 segundos por passo
        }

        // Limpa o intervalo quando o componente desmonta ou o autoPlay é pausado
        return () => clearInterval(intervalId);
    }, [isAutoPlaying]);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 w-full items-start justify-items-center">
            <div className={`bg-slate-950/80 border ${passo.cores.borda} ${passo.cores.glow} p-6 rounded-xl transition-all duration-300 backdrop-blur-sm min-h-[410px] flex flex-col`}>
                
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
                
                <div className="flex-1">
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

                    <div className="bg-black/60 p-3 rounded font-mono text-xs text-emerald-400 border border-emerald-900/30 mb-6">
                        {passo.logText}
                    </div>
                </div>

                <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-800/60">
                        <button
                            disabled={passoAtivo === 0 || isAutoPlaying}
                            onClick={() => setPassoAtivo(p => p - 1)}
                            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:pointer-events-none rounded font-mono text-xs border border-slate-700 transition-colors text-slate-300"
                        >
                            &lt; Anterior
                        </button>

                        <button
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className={`px-4 py-2 rounded font-mono text-xs font-bold border transition-all duration-300 ${
                                isAutoPlaying 
                                ? 'bg-rose-950/40 text-rose-400 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.2)]' 
                                : 'bg-purple-950/40 text-purple-400 border-purple-500/40 hover:bg-purple-900/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)]'
                            }`}
                        >
                            {isAutoPlaying ? '[ PAUSAR_EXEC ]' : '[ AUTO_EXEC ]'}
                        </button>

                        <button
                            disabled={passoAtivo === cicloData.passos.length - 1 || isAutoPlaying}
                            onClick={() => setPassoAtivo(p => p + 1)}
                            className="px-4 py-2 bg-cyan-950/40 text-cyan-400 hover:bg-cyan-900/40 disabled:opacity-30 disabled:pointer-events-none rounded font-mono text-xs border border-cyan-500/30 transition-colors"
                        >
                            Próximo &gt;
                        </button>
                </div>
            </div>
            
            <Visualizacao passoAtivo={passoAtivo} />
            
            <div className="md:col-span-2 w-full max-w-xl">
                <DiagramaCPU passoAtivo={passoAtivo} />
            </div>
        </div>
    );
}