import React, { useState } from 'react';
 
export default function DiagramaCPU({ passoAtivo }) {

  const ativosPorPasso = {
    0: ['PC', 'MAR', 'MEM', 'MBR', 'IR'],
    1: ['IR', 'UC'],
    2: ['UC', 'ULA', 'REG'],
    3: ['ULA', 'REG'],
  };
 
  const ativos = ativosPorPasso[passoAtivo] ?? [];
 
  const corPorPasso = {
    0: { stroke: '#22d3ee', glow: 'rgba(34,211,238,0.6)',  fill: 'rgba(34,211,238,0.12)'  },
    1: { stroke: '#a855f7', glow: 'rgba(168,85,247,0.6)',  fill: 'rgba(168,85,247,0.12)'  },
    2: { stroke: '#10b981', glow: 'rgba(16,185,129,0.6)',  fill: 'rgba(16,185,129,0.12)'  },
    3: { stroke: '#f59e0b', glow: 'rgba(245,158,11,0.6)',  fill: 'rgba(245,158,11,0.12)'  },
  };
 
  const cor = corPorPasso[passoAtivo];
 
  const descricoes = {
    PC:  'Program Counter — guarda o endereço da próxima instrução. Na fase Fetch envia esse endereço ao MAR.',
    IR:  'Instruction Register — armazena a instrução buscada da memória para a UC decodificar.',
    MAR: 'Memory Address Register — aponta qual endereço da RAM deve ser acessado.',
    MBR: 'Memory Buffer Register — buffer de entrada/saída entre CPU e memória.',
    UC:  'Unidade de Controle — interpreta o opcode do IR e emite sinais de controle para a ULA.',
    ULA: 'Unidade Lógica e Aritmética — executa operações lógicas e aritméticas. Atualiza as flags.',
    REG: 'Registradores de Uso Geral — armazenamento ultra-rápido que alimenta e recebe resultados da ULA.',
    MEM: 'Memória Principal (RAM) — armazena instruções e dados do programa em execução.',
    'Barr.End':   'Barramento de Endereços — transporta o endereço do MAR até a RAM (sentido único: CPU → MEM).',
    'Barr.Dados': 'Barramento de Dados — transporta instruções/dados entre MBR e RAM (bidirecional).',
  };
 
  function isAtivo(id) {
    return ativos.includes(id);
  }
 
  function boxStyle(id) {
    const ativo = isAtivo(id);
    return {
      fill:        ativo ? cor.fill   : 'rgba(15,23,42,0.7)',
      stroke:      ativo ? cor.stroke : '#334155',
      strokeWidth: ativo ? 1.5        : 0.8,
      filter:      ativo ? `drop-shadow(0 0 6px ${cor.glow})` : 'none',
      cursor:      'pointer',
      transition:  'all 0.3s',
    };
  }
 
  function labelStyle(id) {
    const ativo = isAtivo(id);
    return {
      fill:       ativo ? cor.stroke : '#94a3b8',
      fontFamily: 'monospace',
      fontSize:   12,
      fontWeight: ativo ? 700 : 400,
      transition: 'fill 0.3s',
    };
  }
 
  function busStyle(id) {
    const ativo = isAtivo(id);
    return {
      stroke:      ativo ? cor.stroke : '#334155',
      strokeWidth: ativo ? 2          : 1,
      strokeDasharray: ativo ? 'none' : '4 3',
      filter:      ativo ? `drop-shadow(0 0 4px ${cor.glow})` : 'none',
      opacity:     ativo ? 1          : 0.4,
      transition:  'all 0.3s',
    };
  }
 
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%'}}>
      <svg
        viewBox="0 0 520 420"
        width="100%"
        style={{ display: 'block', overflow: 'visible' }}
        aria-label="Diagrama estrutural CPU e Memória"
      >
        <defs>
          <marker id="arr-fwd" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke={cor.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="arr-bwd" viewBox="0 0 10 10" refX="2" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M8 1L2 5L8 9" fill="none" stroke={cor.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
          <marker id="arr-gray" viewBox="0 0 10 10" refX="8" refY="5"
            markerWidth="5" markerHeight="5" orient="auto">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </marker>
        </defs>
 
        {/* ── Contorno CPU ── */}
        <rect x="12" y="12" width="300" height="390" rx="14"
          fill="rgba(2,6,23,0.5)" stroke={cor.stroke} strokeWidth="1.4" drop-shadow={`0 0 8px ${cor.glow}`}/>
        <text x="32" y="33" style={{ fill: cor.stroke, fontFamily: 'monospace', fontSize: 10, letterSpacing: 2 }}>
          CPU
        </text>
 
        {/* ── Contorno MEM ── */}
        <rect x="354" y="68" width="152" height="278" rx="14"
          fill="rgba(2,6,23,0.5)"
          stroke={isAtivo('MEM') ? cor.stroke : '#1e293b'}
          strokeWidth={isAtivo('MEM') ? 1.5 : 1.2}
          style={{ filter: isAtivo('MEM') ? `drop-shadow(0 0 8px ${cor.glow})` : 'none', transition: 'all 0.3s' }}
        />
        <text x="372" y="89" style={{ fill: isAtivo('MEM') ? cor.stroke : '#475569', fontFamily: 'monospace', fontSize: 10, letterSpacing: 2, transition: 'fill 0.3s' }}>
          MEMÓRIA RAM
        </text>
 
        {/* Linhas de instrução na RAM */}
        {[0,1,2,3,4].map(i => (
          <g key={i}>
            <rect x="372" y={108 + i * 42} width="116" height="30" rx="4"
              fill={isAtivo('MEM') && (i === 0 || i === 2) ? cor.fill : 'rgba(15,23,42,0.6)'}
              stroke={isAtivo('MEM') && (i === 0  || i === 2)? cor.stroke : '#1e293b'}
              strokeWidth="0.8" style={{ transition: 'all 0.3s' }}/>
            <text x="382" y={127 + i * 42} style={{ fill: isAtivo('MEM') && (i === 0 || i === 2)? cor.stroke : '#334155', fontFamily: 'monospace', fontSize: 9, transition: 'fill 0.3s' }}>
              {i === 0 ? 'INSTR' : `  DATA${i}`}
            </text>
          </g>
        ))}
 
        {/* ── Barramentos ── */}
        {/* Barramento de Endereços (MAR - MEM, sentido único) */}
        <g>
          <line x1="232" y1="148" x2="352" y2="148"
            style={busStyle('MAR')}
            markerEnd={isAtivo('MAR') ? 'url(#arr-fwd)' : 'url(#arr-gray)'}/>
          <text x="262" y="141" style={{ fill: '#475569', fontFamily: 'monospace', fontSize: 8, letterSpacing: 1 }}>
            ADRESS
          </text>
        </g>
 
        {/* Barramento de Dados (MBR - MEM, bidirecional) */}
        <g>
          <line x1="232" y1="198" x2="352" y2="198"
            style={busStyle('MBR')}
            markerStart={isAtivo('MBR') ? 'url(#arr-bwd)' : undefined}
            markerEnd={isAtivo('MBR') ? 'url(#arr-fwd)' : 'url(#arr-gray)'}/>
          <text x="264" y="191" style={{ fill: '#475569', fontFamily: 'monospace', fontSize: 8, letterSpacing: 1 }}>
            DADOS
          </text>
        </g>
 
        {/* ── Blocos CPU ── */}
 
        {/* PC */}
        <g>
          <rect x="32" y="50" width="96" height="46" rx="7" style={boxStyle('PC')}/>
          <text x="80" y="68" textAnchor="middle" style={{ ...labelStyle('PC'), fontSize: 13, fontWeight: 700 }}>PC</text>
          <text x="80" y="84" textAnchor="middle" style={{ ...labelStyle('PC'), fontSize: 8, letterSpacing: 1 }}>PROGRAM COUNTER</text>
        </g>
 
        {/* IR */}
        <g>
          <rect x="32" y="122" width="96" height="46" rx="7" style={boxStyle('IR')}/>
          <text x="80" y="140" textAnchor="middle" style={{ ...labelStyle('IR'), fontSize: 13, fontWeight: 700 }}>IR</text>
          <text x="80" y="156" textAnchor="middle" style={{ ...labelStyle('IR'), fontSize: 8, letterSpacing: 1 }}>INSTR. REGISTER</text>
        </g>
 
        {/* MAR */}
        <g>
          <rect x="144" y="122" width="84" height="46" rx="7" style={boxStyle('MAR')}/>
          <text x="186" y="140" textAnchor="middle" style={{ ...labelStyle('MAR'), fontSize: 13, fontWeight: 700 }}>MAR</text>
          <text x="186" y="156" textAnchor="middle" style={{ ...labelStyle('MAR'), fontSize: 8, letterSpacing: 1 }}>ADDR. REG.</text>
        </g>
 
        {/* MBR */}
        <g>
          <rect x="144" y="172" width="84" height="46" rx="7" style={boxStyle('MBR')}/>
          <text x="186" y="190" textAnchor="middle" style={{ ...labelStyle('MBR'), fontSize: 13, fontWeight: 700 }}>MBR</text>
          <text x="186" y="206" textAnchor="middle" style={{ ...labelStyle('MBR'), fontSize: 8, letterSpacing: 1 }}>BUFFER REG.</text>
        </g>
 
        {/* Conexão IR - MBR (dados chegam: MBR - IR) */}
        <line x1="100" y1="169" x2="100" y2="200"
          stroke={isAtivo('MBR') ? cor.stroke : '#1e293b'}
          strokeWidth={isAtivo('MBR') ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
        <line x1="100" y1="200" x2="144" y2="200"
          stroke={isAtivo('MBR') ? cor.stroke : '#1e293b'}
          strokeWidth={isAtivo('MBR') ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
        
        {/* Conexão PC - MAR */}
        <line x1="128" y1="70" x2="190" y2="70"
          stroke={isAtivo('PC') ? cor.stroke : '#1e293b'}
          strokeWidth={isAtivo('PC') ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
        <line x1="190" y1="70" x2="190" y2="122"
          stroke={isAtivo('PC') ? cor.stroke : '#1e293b'}
          strokeWidth={isAtivo('PC') ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
 
        {/* UC */}
        <g>
          <rect x="32" y="252" width="130" height="56" rx="7" style={boxStyle('UC')}/>
          <text x="97" y="274" textAnchor="middle" style={{ ...labelStyle('UC'), fontSize: 13, fontWeight: 700 }}>UC</text>
          <text x="97" y="290" textAnchor="middle" style={{ ...labelStyle('UC'), fontSize: 8, letterSpacing: 1 }}>UNID. DE CONTROLE</text>
          {/* Pontinho pulsante */}
          {isAtivo('UC') && (
            <circle cx="148" cy="264" r="3" fill={cor.stroke} style={{ animation: 'pulse 1s infinite' }}/>
          )}
        </g>
 
        {/* ULA */}
        <g>
          <rect x="32" y="330" width="130" height="56" rx="7" style={boxStyle('ULA')}/>
          <text x="97" y="352" textAnchor="middle" style={{ ...labelStyle('ULA'), fontSize: 13, fontWeight: 700 }}>ULA / ALU</text>
          <text x="97" y="368" textAnchor="middle" style={{ ...labelStyle('ULA'), fontSize: 8, letterSpacing: 1 }}>LÓGICA E ARITMÉTICA</text>
        </g>
 
        {/* REG */}
        <g>
          <rect x="176" y="252" width="124" height="134" rx="7" style={boxStyle('REG')}/>
          <text x="236" y="274" textAnchor="middle" style={{ ...labelStyle('REG'), fontSize: 12, fontWeight: 700 }}>BANCO DE REG</text>
          <text x="238" y="290" textAnchor="middle" style={{ ...labelStyle('REG'), fontSize: 8, letterSpacing: 1 }}>USO GERAL</text>
          {/* Linhas decorativas de registradores */}
          {[0,1,2,3].map(i => (
            <rect key={i} x="188" y={300 + i * 22} width="100" height="14" rx="3"
              fill={isAtivo('REG') ? cor.fill : 'rgba(15,23,42,0.4)'}
              stroke={isAtivo('REG') ? cor.stroke : '#1e293b'}
              strokeWidth="0.5" style={{ transition: 'all 0.3s' }}/>
          ))}
          <text x="238" y="310" textAnchor="middle" style={{ fill: isAtivo('REG') ? cor.stroke : '#334155', fontFamily: 'monospace', fontSize: 8, transition: 'fill 0.3s' }}>R0</text>
          <text x="238" y="332" textAnchor="middle" style={{ fill: isAtivo('REG') ? cor.stroke : '#334155', fontFamily: 'monospace', fontSize: 8, transition: 'fill 0.3s' }}>R1</text>
          <text x="238" y="354" textAnchor="middle" style={{ fill: isAtivo('REG') ? cor.stroke : '#334155', fontFamily: 'monospace', fontSize: 8, transition: 'fill 0.3s' }}>R2</text>
          <text x="238" y="376" textAnchor="middle" style={{ fill: isAtivo('REG') ? cor.stroke : '#334155', fontFamily: 'monospace', fontSize: 8, transition: 'fill 0.3s' }}>R3</text>
        </g>
 
        {/* Conexão IR - UC */}
        <line x1="80" y1="168" x2="80" y2="252"
          stroke={isAtivo('UC') ? cor.stroke : '#1e293b'}
          strokeWidth={(isAtivo('UC')) ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
 
        {/* Conexão UC - ULA */}
        <line x1="97" y1="308" x2="97" y2="330"
          stroke={isAtivo('UC') || isAtivo('ULA') ? cor.stroke : '#1e293b'}
          strokeWidth={(isAtivo('UC') || isAtivo('ULA')) ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
 
        {/* Conexão REG - ULA */}
        <line x1="162" y1="360" x2="176" y2="360"
          stroke={isAtivo('REG') || isAtivo('ULA') ? cor.stroke : '#1e293b'}
          strokeWidth={(isAtivo('REG') || isAtivo('ULA')) ? 1.5 : 0.7}
          style={{ transition: 'all 0.3s' }}/>
 
        {/* Legenda passo */}
        <rect x="14" y="408" width="180" height="1" fill="#1e293b"/>
        <text x="16" y="418" style={{ fill: `${cor.stroke}`, fontFamily: 'monospace', fontSize: 9, letterSpacing: 2 }}>
          {['[ STAGE: FETCH ]','[ STAGE: DECODE ]','[ STAGE: EXECUTE ]','[ STAGE: WRITEBACK ]'][passoAtivo]}
        </text>
      </svg>
    </div>
  );
}