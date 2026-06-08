import React from 'react';
import { useNavigate } from 'react-router-dom';
import { introducaoData, diferencasData, vonNeumannData } from '../data/teoria.js';
import SplitText from '../assets/SplitText.jsx';

export default function SeonTeoria() {
    const navigate = useNavigate();

    return (
        <div className='space-y-12'>
            {/* 1. Introdução */}
            <div className='grid md:grid-cols-2 gap-6'>
                {/* --- CARD ARQUITETURA --- */}
                <div 
                    onClick={() => navigate('/topico/arquitetura')}
                    className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all group"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-cyan-500/70 block"># CONCEITO_A</span>
                        <span className="text-[10px] font-mono text-cyan-500/40 opacity-0 group-hover:opacity-100 transition-opacity border border-cyan-500/30 px-2 py-0.5 rounded-full">
                            [ Saiba Mais ]
                        </span>
                    </div>
                    <h3 className={introducaoData.arquitetura.tailwindClasses.termo}>
                        <SplitText text={introducaoData.arquitetura.termo} rootMargin={0} duration={.8} splitType='words' delay={20}/>
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 mb-4 leading-relaxed">
                        <SplitText text={introducaoData.arquitetura.definicao} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                    </p>
                    <div className={introducaoData.arquitetura.tailwindClasses.detalhes}>
                        {introducaoData.arquitetura.detalhes.map((item, i) => (
                        <div key={i} className="text-xs font-mono my-1 text-slate-400">└─ <SplitText text={item} duration={.8} delay={20} splitType='words'/></div>
                        ))}
                    </div>
                </div>
                
                {/* --- CARD ORGANIZAÇÃO --- */}
                <div 
                    onClick={() => navigate('/topico/organizacao')}
                    className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all group"
                >
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-mono text-emerald-500/70 block"># CONCEITO_B</span>
                        <span className="text-[10px] font-mono text-emerald-500/40 opacity-0 group-hover:opacity-100 transition-opacity border border-emerald-500/30 px-2 py-0.5 rounded-full">
                            [ Saiba Mais ]
                        </span>
                    </div>
                    <h3 className={introducaoData.organizacao.tailwindClasses.termo}>
                        <SplitText text={introducaoData.organizacao.termo} rootMargin={0} duration={.8} splitType='words' delay={20}/>
                    </h3>
                    <p className="text-slate-400  text-sm mt-2 mb-4 leading-relaxed">
                       <SplitText text={introducaoData.organizacao.definicao} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                    </p>
                    <div className={introducaoData.organizacao.tailwindClasses.detalhes}>
                        {introducaoData.organizacao.detalhes.map((item, i) => (
                        <div key={i} className="text-xs font-mono my-1 text-slate-400">└─ <SplitText rootMargin={0} text={item} duration={.8} delay={20} splitType='words'/></div>
                    ))}
                    </div>
                </div>
            </div>

            {/* RISC VS CISC */}
            <div className="bg-slate-950/30 border border-slate-800/80 rounded-xl p-6">
                <h3 className="text-lg font-mono text-slate-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    <SplitText text={diferencasData.sectionTitle} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                    {diferencasData.paradigmas.map((p) => (
                        <div 
                            key={p.id} 
                            onClick={() => navigate(`/topico/${p.id}`)}
                            className="space-y-4 cursor-pointer p-4 rounded-xl -m-4 transition-all hover:bg-slate-900/50 hover:scale-[1.01] hover:border hover:border-slate-700/50 group relative"
                        >
                            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <span className="text-[10px] font-mono text-slate-500 border border-slate-700 px-2 py-0.5 rounded-full">
                                    [ Saiba Mais ]
                                </span>
                            </div>

                            <div className='flex items-center gap-3 pr-24'>
                                <h4 className={p.estilo.titulo}>
                                    <SplitText text={p.nome} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                                </h4>
                                <span className={p.estilo.badge}>PARADIGMA</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                <SplitText text={p.introducao} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div>
                                    <h5 className="text-xs font-mono text-emerald-400 font-bold mb-2">
                                        <SplitText text={'PROS'} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                                    </h5>
                                    <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                                        {p.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="text-xs font-mono text-rose-400 font-bold mb-2">
                                        <SplitText text={'CONTRAS'} rootMargin={0} textAlign='left' duration={.8} splitType='lines' delay={20} />
                                    </h5>
                                    <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                                        {p.contras.map((contra, idx) => <li key={idx}>{contra}</li>)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Von Neumann */}
            <div className='space-y-6'>
                <h3 className="text-lg font-mono text-slate-200 flex items-center gap-2 border-b border-slate-800/60 pb-3">
                    <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                    <SplitText text={vonNeumannData.title} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                </h3>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Seção Nova: O que é a arquitetura de von neymmnan */}
                    <div 
                        onClick={() => navigate('/topico/vonneumann')}
                        className="bg-slate-950/40 border border-slate-800/80 p-5 rounded-xl cursor-pointer hover:bg-slate-900/40 hover:border-cyan-500/30 hover:scale-[1.01] transition-all group relative"
                    >
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono text-cyan-500/60 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                                [ Saiba Mais ]
                            </span>
                        </div>

                        <h4 className="text-cyan-400 font-mono font-bold text-sm uppercase tracking-wider mb-2">
                            <SplitText text={vonNeumannData.introducao.titulo} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            <SplitText text={vonNeumannData.introducao.descricao} rootMargin={0} textAlign='left' duration={.5} splitType='lines' delay={10} />
                        </p>
                    </div>

                    {/* Card do Gargalo */}
                    <div 
                        onClick={() => navigate('/topico/vonneumann')}
                        className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-xl cursor-pointer hover:bg-amber-500/10 hover:border-amber-500/40 hover:scale-[1.01] transition-all group relative"
                    >
                        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] font-mono text-amber-500/60 border border-amber-500/30 px-2 py-0.5 rounded-full">
                                [ Saiba Mais ]
                            </span>
                        </div>

                        <h4 className="text-amber-500 font-mono font-bold text-sm uppercase tracking-wider mb-2">
                            <SplitText text={vonNeumannData.gargalo.titulo} rootMargin={0} textAlign='left' duration={.8} splitType='words' delay={20} />
                        </h4>
                        <p className="text-slate-300 text-sm max-w-3xl mb-2 leading-relaxed">
                            <SplitText text={vonNeumannData.gargalo.descricao} rootMargin={0}  textAlign='left' duration={.5} splitType='lines' delay={10} />
                        </p>
                        <p className="text-slate-400 text-xs italic">
                            <SplitText text={vonNeumannData.gargalo.consequencia} rootMargin={0} textAlign='left' duration={.5} splitType='lines' delay={10} />
                        </p>
                    </div>
                </div>

                {/* Grid dos Componentes de Hardware */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {vonNeumannData.componentes.map((comp, idx) => {
                        // Array ordenado para mapear cada bloco a um ID de rota correspondente
                        const idsComponentes = ['ram', 'uc', 'ula', 'io'];
                        const idTopico = idsComponentes[idx];

                        return (
                            <div 
                                key={idx} 
                                onClick={() => navigate(`/topico/${idTopico}`)}
                                className={`${comp.style} cursor-pointer hover:scale-[1.03] hover:-translate-y-1 hover:border-slate-500/60 transition-all group relative`}
                            >
                                {/* Tag indicativa pequena de clique interna ao bloco */}
                                <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-[8px] font-mono text-slate-500 border border-slate-800 px-1.5 py-0.5 rounded-full bg-slate-950">
                                        [ ABRIR ]
                                    </span>
                                </div>

                                <div className='flex justify-between items-start mb-3 pr-6'>
                                    <h5 className="text-slate-200 font-mono font-bold text-base">
                                        <SplitText text={comp.nome} rootMargin={0} textAlign='left' duration={.5} splitType='lines' delay={10} /> 
                                    </h5>
                                    <span className={vonNeumannData.tailwindClasses.componenteSigla}>
                                        <SplitText text={comp.sigla} rootMargin={0} textAlign='left' duration={.5} splitType='lines' delay={10} />
                                    </span>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed">
                                    <SplitText text={comp.funcao} rootMargin={0} textAlign='left' duration={.5} splitType='lines' delay={10} />
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}