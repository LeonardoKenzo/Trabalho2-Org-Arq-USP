import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { detalhesData } from '../data/conteudoDetalhado';
import SplitText from '../assets/SplitText.jsx';

export default function DetalhesTopico() {
    // Pega o ID da URL (ex: 'arquitetura', 'risc')
    const { idTopico } = useParams(); 
    const topico = detalhesData[idTopico];

    // Rola para o topo ao carregar a página
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [idTopico]);

    if (!topico) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[50vh] text-slate-400 font-mono">
                <p className="text-xl mb-4">[ ERRO 404: TÓPICO NÃO ENCONTRADO ]</p>
                <Link to="/" className="text-cyan-400 hover:underline border border-cyan-500/30 px-4 py-2 rounded bg-cyan-950/30">
                    RETORNAR
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto w-full animate-fade-in pb-12">
            {/* Botão de Voltar */}
            <Link 
                to="/" 
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors mb-10 group"
            >
                <span className="group-hover:-translate-x-1 transition-transform">&lt;-</span> 
                [ RETORNAR_A_HOME ]
            </Link>

            {/* Cabeçalho do Tópico */}
            <header className={`border-l-4 ${topico.estilo.borda} pl-6 mb-12`}>
                <span className={`text-xs font-mono ${topico.estilo.textoSec} block mb-2 uppercase tracking-widest`}>
                    // {topico.categoria}
                </span>
                <h1 className={`text-3xl md:text-5xl font-black tracking-wider font-mono ${topico.estilo.textoPrinc}`}>
                    <SplitText text={topico.titulo} duration={0.8} splitType='words' delay={20}/>
                </h1>
            </header>

            {/* Containers de Conteúdo (Placeholders) */}
            <main className="space-y-8">
                {/* Bloco 1: História */}
                <section className={`bg-slate-950/60 border border-slate-800 p-5 md:p-8 rounded-xl backdrop-blur-sm ${topico.estilo.bgGlow}`}>
                    <h2 className="text-sm font-mono text-slate-300 mb-4 border-b border-slate-800/80 pb-2 uppercase tracking-widest flex items-center gap-2">
                        <span className={topico.estilo.textoPrinc}>#</span> História e Origem
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                        {topico.conteudo.historia}
                    </p>
                </section>

                {/* Bloco 2: Aprofundamento */}
                <section className="bg-slate-950/60 border border-slate-800 p-5 md:p-8 rounded-xl backdrop-blur-sm">
                    <h2 className="text-sm font-mono text-slate-300 mb-4 border-b border-slate-800/80 pb-2 uppercase tracking-widest flex items-center gap-2">
                        <span className={topico.estilo.textoPrinc}>#</span> Aprofundamento Técnico
                    </h2>
                    <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                        {topico.conteudo.aprofundamento}
                    </p>
                </section>

                {/* Bloco 3: Exemplos */}
                <section className="bg-slate-950/60 border border-slate-800 p-5 md:p-8 rounded-xl backdrop-blur-sm">
                    <h2 className="text-sm font-mono text-slate-300 mb-4 border-b border-slate-800/80 pb-2 uppercase tracking-widest flex items-center gap-2">
                        <span className={topico.estilo.textoPrinc}>#</span> Aplicações Práticas
                    </h2>
                    <ul className="list-none space-y-3">
                        {topico.conteudo.exemplos.map((exemplo, idx) => (
                            <li key={idx} className="text-slate-400 text-sm flex gap-3 items-start">
                                <span className={`${topico.estilo.textoPrinc} font-mono mt-0.5`}>&gt;</span>
                                <span>{exemplo}</span>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}