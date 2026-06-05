import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { detalhesData } from '../data/conteudoDetalhado';
import SplitText from '../assets/SplitText.jsx';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
};

const menuNavegacao = [
    {
        categoria: "Fundamentos",
        items: [
            { id: "arquitetura", nome: "Arquitetura" },
            { id: "organizacao", nome: "Organização" }
        ]
    },
    {
        categoria: "Paradigmas",
        items: [
            { id: "risc", nome: "RISC" },
            { id: "cisc", nome: "CISC" }
        ]
    },
    {
        categoria: "Von Neumann",
        items: [
            { id: "vonneumann", nome: "Visão Geral" },
            { id: "ram", nome: "Memória RAM" },
            { id: "uc", nome: "Unidade de Controle" },
            { id: "ula", nome: "ULA" },
            { id: "io", nome: "Entrada/Saída" }
        ]
    }
];

export default function DetalhesTopico() {
    const { idTopico } = useParams(); 
    const topico = detalhesData[idTopico];
    const [menuAberto, setMenuAberto] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMenuAberto(false);
    }, [idTopico]);

    if (!topico) {
        return (
            <motion.div 
                initial="initial" animate="in" exit="out" variants={pageVariants} transition={pageTransition}
                className="flex flex-col items-center justify-center min-h-[50vh] text-slate-400 font-mono"
            >
                <p className="text-xl mb-4">[ ERRO 404: TÓPICO NÃO ENCONTRADO ]</p>
                <Link to="/" className="text-cyan-400 hover:underline border border-cyan-500/30 px-4 py-2 rounded bg-cyan-950/30">
                    RETORNAR
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div 
            initial="initial" 
            animate="in" 
            exit="out" 
            variants={pageVariants} 
            transition={pageTransition}
            className="max-w-6xl mx-auto w-full pb-12 flex flex-col lg:flex-row gap-8 items-start"
        >
            {/* --- SIDEBAR DE NAVEGAÇÃO --- */}
            <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-8 z-20">
                <button 
                    onClick={() => setMenuAberto(!menuAberto)}
                    className="lg:hidden w-full flex justify-between items-center bg-slate-900 border border-slate-700 p-3 rounded font-mono text-xs text-slate-300 hover:bg-slate-800 transition-colors mb-4"
                >
                    <span>[ MENU_DE_TÓPICOS ]</span>
                    <span className="text-cyan-400">{menuAberto ? '[-]' : '[+]'}</span>
                </button>

                <div className={`flex-col gap-6 ${menuAberto ? 'flex' : 'hidden'} lg:flex bg-slate-950/50 p-5 rounded-xl border border-slate-800 backdrop-blur-sm`}>
                    <Link 
                        to="/" 
                        className="inline-flex items-center gap-2 text-xs font-mono text-slate-500 hover:text-cyan-400 transition-colors pb-4 border-b border-slate-800 group"
                    >
                        <span className="group-hover:-translate-x-1 transition-transform">&lt;-</span> 
                        [ HOME ]
                    </Link>

                    {menuNavegacao.map((secao, idx) => (
                        <div key={idx} className="space-y-3">
                            <h3 className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                                // {secao.categoria}
                            </h3>
                            <ul className="space-y-1">
                                {secao.items.map((item) => {
                                    const ativo = item.id === idTopico;
                                    return (
                                        <li key={item.id}>
                                            <Link 
                                                to={`/topico/${item.id}`}
                                                className={`block text-xs font-mono px-3 py-2 rounded transition-all border-l-2 ${
                                                    ativo 
                                                    ? `bg-slate-800/80 text-cyan-300 border-cyan-400 ${topico.estilo.bgGlow}` 
                                                    : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900 hover:border-slate-600'
                                                }`}
                                            >
                                                {ativo ? '> ' : ''}{item.nome}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    ))}
                </div>
            </aside>

            {/* --- CONTEÚDO PRINCIPAL (DINÂMICO) --- */}
            <main className="flex-1 min-w-0 w-full space-y-8">
                <header className={`border-l-4 ${topico.estilo.borda} pl-6 mb-12`}>
                    <span className={`text-xs font-mono ${topico.estilo.textoSec} block mb-2 uppercase tracking-widest`}>
                        // {topico.categoria}
                    </span>
                    <h1 className={`text-3xl md:text-5xl font-black tracking-wider font-mono ${topico.estilo.textoPrinc}`}>
                        <SplitText text={topico.titulo} duration={0.8} splitType='words' delay={20}/>
                    </h1>
                </header>

                {/* Renderização Automática das Seções */}
                {topico.secoes && topico.secoes.map((secao, index) => (
                    <section 
                        key={index} 
                        className={`bg-slate-950/60 border border-slate-800 p-5 md:p-8 rounded-xl backdrop-blur-sm ${
                            secao.destaque ? topico.estilo.bgGlow : ''
                        }`}
                    >
                        <h2 className="text-sm font-mono text-slate-300 mb-4 border-b border-slate-800/80 pb-2 uppercase tracking-widest flex items-center gap-2">
                            <span className={topico.estilo.textoPrinc}>#</span> {secao.titulo}
                        </h2>

                        {/* Se for do tipo texto */}
                        {secao.tipo === 'texto' && (
                            <p className="text-slate-400 text-sm leading-relaxed whitespace-pre-line">
                                {secao.conteudo}
                            </p>
                        )}

                {/* Exemplos */}
                {topico.conteudo.exemplos && topico.conteudo.exemplos.length > 0 && (
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
                )}
                        {/* Se for do tipo lista */}
                        {secao.tipo === 'lista' && Array.isArray(secao.conteudo) && (
                            <ul className="list-none space-y-3">
                                {secao.conteudo.map((item, idx) => (
                                    <li key={idx} className="text-slate-400 text-sm flex gap-3 items-start">
                                        <span className={`${topico.estilo.textoPrinc} font-mono mt-0.5`}>&gt;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </section>
                ))}
            </main>
        </motion.div>
    );
}