import React from 'react';
import { introducaoData, diferencasData, vonNeumannData } from '../data/teoria.js';
import SplitText from '../assets/SplitText.jsx';
export default function SeonTeoria(){
    return (
        <div className='space-y-12'>
            {/* 1. Introdução (Estou acessando diretamente os elementos)*/ }

            <div className='grid md:grid-cols-2 gap-6'>
                <div className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm">
                    <span className="text-xs font-mono text-cyan-500/70 block mb-2"># CONCEITO_A</span>
                    <h3 className={introducaoData.arquitetura.tailwindClasses.termo}>
                        <SplitText text={introducaoData.arquitetura.termo} duration={.8} splitType='words' delay={20}/>
                    </h3>
                    <p className="text-slate-400 text-sm mt-2 mb-4 leading-relaxed">
                       
                        <SplitText text =  {introducaoData.arquitetura.definicao}  textAlign='left' duration={.8} splitType='words' delay={20} />
                    </p>
                    <div className={introducaoData.arquitetura.tailwindClasses.detalhes}>
                        {/*A Arrow function ta ai pra printar todos os detalhes q esta definidos numa lista. O mesmo vai valer para as q aparecerem mais embaixo, mesma logicca. */}
                        {introducaoData.arquitetura.detalhes.map((item, i) => (
                        <div key={i} className="text-xs font-mono my-1 text-slate-400">└─ <SplitText text={item} duration={.8} delay={20} splitType='words'/></div>
                        ))}
                    </div>
                </div>
                
                <div className="bg-slate-950/50 border border-slate-800 p-6 rounded-xl backdrop-blur-sm">
                        <span className="text-xs font-mono text-emerald-500/70 block mb-2"># CONCEITO_B</span>
                        <h3 className={introducaoData.organizacao.tailwindClasses.termo}>
                            <SplitText text={introducaoData.organizacao.termo} duration={.8} splitType='words' delay={20}/>
                        </h3>
                        <p className="text-slate-400  text-sm mt-2 mb-4 leading-relaxed">
                           <SplitText text = {introducaoData.organizacao.definicao}  textAlign='left' duration={.8} splitType='words' delay={20} />
                        </p>
                        <div className={introducaoData.organizacao.tailwindClasses.detalhes}>
                            {introducaoData.organizacao.detalhes.map((item, i) => (
                            <div key={i} className="text-xs font-mono my-1 text-slate-400">└─ <SplitText text={item} duration={.8} delay={20} splitType='words'/></div>
                        ))}
                        </div>
                </div>
            </div>

            {/*RISC VS CISC */}
            <div className="bg-slate-950/30 border border-slate-800/80 rounded-xl p-6">
                <h3 className="text-lg font-mono text-slate-200 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse" />
                    <SplitText text = {diferencasData.sectionTitle}  textAlign='left' duration={.8} splitType='words' delay={20} />
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                        {diferencasData.paradigmas.map((p) => (
                            <div key={p.id} className='space-y-4'>
                                <div className='flex items-center gap-3'>
                                    <h4 className={p.estilo.titulo}><SplitText text = {p.nome}  textAlign='left' duration={.8} splitType='words' delay={20} /></h4>
                                    <span className={p.estilo.badge}>PARADIGMA</span>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed"><SplitText text = {p.introducao}  textAlign='left' duration={.8} splitType='words' delay={20} /></p>

                                <div className="grid grid-cols-2 gap-4 pt-2">
                                    <div>
                                        <h5 className="text-xs font-mono text-emerald-400 font-bold mb-2"><SplitText text = {'PRO'}  textAlign='left' duration={.8} splitType='words' delay={20} /></h5>
                                        <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                                            {p.pros.map((pro, idx) => <li key={idx}>{pro}</li>)}
                                        </ul>
                                    </div>
                                    <div>
                                        <h5 className="text-xs font-mono text-rose-400 font-bold mb-2"><SplitText text = {'CONTRAS'}  textAlign='left' duration={.8} splitType='lines' delay={20} /></h5>
                                        <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                                            {p.contras.map((contra, idx) => <li key={idx}>{contra}</li>)}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            {/*Von Neumann */}
            <div className='space-y-6'>
                <div className="bg-amber-500/5 border border-amber-500/20 p-5 rounded-xl">
                        <h4 className="text-amber-500 font-mono font-bold text-sm uppercase tracking-wider mb-2">
                            <SplitText text = {vonNeumannData.gargalo.titulo}  textAlign='left' duration={.8} splitType='words' delay={20} />
                        </h4>
                        <p className="text-slate-300 text-sm max-w-3xl mb-2"><SplitText text = {vonNeumannData.gargalo.descricao}  textAlign='left' duration={.5} splitType='lines' delay={10} /></p>
                        <p className="text-slate-400 text-xs italic"><SplitText text = {vonNeumannData.gargalo.consequencia}  textAlign='left' duration={.5} splitType='lines' delay={10} /></p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {vonNeumannData.componentes.map((comp, idx) => (
                            <div key={idx} className={comp.style}>
                                <div className='flex justify-between items-start mb-3'>
                                    <h5 className="text-slate-200 font-mono font-bold text-base"><SplitText text = {comp.nome}  textAlign='left' duration={.5} splitType='lines' delay={10} /> </h5>
                                    <span className={vonNeumannData.tailwindClasses.componenteSigla}><SplitText text = {comp.sigla}  textAlign='left' duration={.5} splitType='lines' delay={10} /></span>
                                </div>
                                <p className="text-slate-400 text-xs leading-relaxed"><SplitText text = {comp.funcao}  textAlign='left' duration={.5} splitType='lines' delay={10} /></p>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
}