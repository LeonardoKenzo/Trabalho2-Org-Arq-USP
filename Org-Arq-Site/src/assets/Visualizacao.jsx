import React, { useState, memo } from 'react';

function Visualizacao({ passoAtivo }) {
  const [componenteSelecionado, setComponenteSelecionado] = useState(null);

  const ativosPorPasso = {
    0: ['PC', 'MAR', 'MEM', 'MBR', 'IR'],
    1: ['IR', 'UC'],
    2: ['UC', 'ULA', 'REG'],
    3: ['ULA', 'REG']
  };

  const hardwares = [
    { id: 'PC', nome: 'Program Counter', tipo: 'cpu', colSpan: 'col-span-1', desc: 'Guarda o endereço da próxima instrução. Na fase Fetch, ele envia esse endereço para o MAR.' },
    { id: 'IR', nome: 'Instruction Register', tipo: 'cpu', colSpan: 'col-span-1', desc: 'Recebe a instrução vinda da Memória e a guarda para a Unidade de Controle decodificar.' },
    { id: 'MAR', nome: 'MAR', tipo: 'cpu', colSpan: 'col-span-1', desc: 'Memory Address Register. Aponta para onde a RAM deve olhar.' },
    { id: 'MBR', nome: 'MBR', tipo: 'cpu', colSpan: 'col-span-1', desc: 'Memory Buffer Register. O "saguão" de entrada/saída de dados da CPU.' },
    { id: 'UC', nome: 'Unidade de Controle', tipo: 'cpu', colSpan: 'col-span-2 md:col-span-2', desc: 'O cérebro. Lê o IR no passo 2 e envia sinais para a ULA no passo 3.' },
    { id: 'ULA', nome: 'ULA / ALU', tipo: 'cpu', colSpan: 'col-span-2 md:col-span-2', desc: 'Realiza as operações lógicas e aritméticas durante a fase de Execução (Passo 3).' },
    { id: 'REG', nome: 'Registradores (Gerais)', tipo: 'cpu', colSpan: 'col-span-2 md:col-span-2', desc: 'Armazenamento ultra-rápido para os cálculos da ULA.' },
    { id: 'MEM', nome: 'Memória Principal (RAM)', tipo: 'memoria', rowSpan: 'row-span-1 md:row-span-1', colSpan: 'col-span-2 md:col-span-2', desc: 'Guarda as instruções e dados do programa. Responde aos pedidos da CPU.' }
  ];

  return (
    <div className="flex flex-col h-full space-y-4 w-full">
      {/* ALTERAÇÃO AQUI: grid-cols-2 no celular, md:grid-cols-4 a partir de tablets */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 bg-slate-950/50 p-3 md:p-4 rounded-xl border border-slate-800">
        
        {hardwares.map((hw) => {
          const isAtivo = ativosPorPasso[passoAtivo]?.includes(hw.id);
          const isSelecionado = componenteSelecionado?.id === hw.id;
          
          return (
            <div
              key={hw.id}
              onClick={() => setComponenteSelecionado(hw)}
              className={`
                relative cursor-pointer overflow-hidden rounded-lg border backdrop-blur-md transition-all duration-300 flex flex-col p-2 md:p-3
                ${hw.colSpan} ${hw.rowSpan || 'row-span-1'}
                ${isSelecionado ? 'ring-2 ring-white scale-[1.02] z-10' : 'hover:border-slate-500'}
                ${isAtivo ? 'bg-cyan-950/40 border-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.3)]' : 'bg-slate-900/60 border-slate-800'}
              `}
            >
              {isAtivo && (
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full animate-shimmer" />
              )}
              
              <div className="flex justify-between items-start mb-1 md:mb-2 relative z-10">
                <span className={`font-mono font-bold text-xs md:text-sm ${isAtivo ? 'text-cyan-300' : 'text-slate-400'}`}>
                  {hw.id}
                </span>
                {isAtivo && <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#22d3ee]"></span>}
              </div>
              <span className="text-[9px] md:text-[10px] text-slate-500 uppercase tracking-wider font-mono mt-auto relative z-10 leading-tight md:leading-normal">
                {hw.nome}
              </span>
            </div>
          );
        })}
      </div>

      <div className={`flex-1 border p-4 rounded-xl transition-all duration-300 ${componenteSelecionado ? 'bg-slate-900 border-cyan-500/50' : 'bg-slate-950 border-slate-800 border-dashed'}`}>
        {componenteSelecionado ? (
          <div className="animate-fade-in">
            <h4 className="text-cyan-400 font-mono font-bold text-base md:text-lg mb-2 flex items-center gap-2">
              <span className="text-slate-500">##</span> {componenteSelecionado.nome}
            </h4>
            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
              {componenteSelecionado.desc}
            </p>
            <button 
              onClick={() => setComponenteSelecionado(null)}
              className="mt-4 text-[10px] md:text-xs font-mono text-slate-500 hover:text-rose-400 transition-colors"
            >
              [ FECHAR_INSPEÇÃO ]
            </button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center text-slate-600 font-mono text-[10px] md:text-xs text-center p-4">
            [ CLIQUE EM UM COMPONENTE<br/>PARA INSPECIONAR ]
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(Visualizacao);