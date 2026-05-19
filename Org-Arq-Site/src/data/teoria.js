// Introdução básica aos conceitos de Arq Org
export const introducaoData = {
    title: "A Hase do Hardware",
    analogiaTitulo: "A Analogia da Construção",
    // Elemtenos referentes a Arq
    arquitetura: {
        termo: "Arquitetura de Computadores",
        definicao: "Refere-se aos atributos de um sistema visíveis para um programador. São as especificações conceituais e funcionais que determinam o que o sistema faz.",
        detalhes: ["Conjunto de Instruções (ISA: Instruction Set Architecture)", "Tipos de dados suportados", "Mecanismos de E/S (Entrada e Saída)", "Modos de endereçamento de memória"],
        analogia: "Na analogia de uma casa, a arquitetura representa a **planta baixa**: o número de quartos, a disposição de portas e a finalidade de cada cômodo.",
        // Definição visual
        tailwindClasses: {
            termo: "text-cyan-400 font-mono font-bold tracking-wider",
            detalhes: "border-l-2 border-cyan-500/30 pl-4 text-slate-300"
        }
       },
    // Elementos de Org
    organizacao: {
        termo: "Organização de Computadores",
        definicao: "Refere-se às unidades operacionais e suas interconexões que implementam as especificações da arquitetura. É a realização física do projeto.",
        detalhes: ["Sinais de controle da CPU (Central Processing Unit: Unidade Central de Processamento)", "Interfaces entre computador e periféricos", "Tecnologia de memória utilizada", "Projetos de circuitos lógicos"],
        analogia: "Na analogia da casa, a organização representa a **fiação elétrica**, os encanamentos de PVC e a marca dos tijolos que tornam o projeto real.",
        tailwindClasses: {
            termo: "text-emerald-500 font-mono font-bold tracking-wider",
            detalhes: "border-l-2 border-emerald-500/30 pl-4 text-slate-300"
        }
    }
};

// Diferenças entre arquiteturas Risc e Cisc
export const diferencasData = {
    sectionTitle: " Arquituras RISC vs CISC e seus Paradigmas de Processamento",
    // Elementos q compoe cada uma das arquiteturas
    paradigmas: [
        {
            // Elementos da Arq RISC
            id: "risc",
            nome: "RISC (Reduced Instruction Set Computer)",
            introducao: "Focado na eficiência do hardware por meio da simplicidade. Utiliza um conjunto de instruções reduzido e altamente otimizado, onde cada instrução executa em apenas um ciclo de clock.",
            
            estilo: {
                titulo: "text-cyan-400 font-bold tracking-tight text-xl font-mono",
                badge: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 text-xs px-2 py-1 rounded"
            },

            pros: [
                "Execução rápida de instruções simples (1 ciclo por instrução).",
                "Hardware mais simples, liberando espaço no chip para registradores.",
                "Consumo de energia reduzido, ideal para dispositivos móveis."
            ],
            contras: [
                "Programas em linguagem de máquina exigem mais linhas de código.",
                "Depende fortemente da inteligência e otimização do compilador.",
                "Maior uso da memória RAM para armazenar programas longos."
            ]
        },
        {
            id: "cisc",
            nome: "CISC (Complex Instruction Set Computer)",
            introducao: "Focado na minimização do esforço do software. Possui centenas de instruções complexas e de tamanho variável, capazes de realizar operações robustas diretamente na memória.",
            
            estilo: {
                titulo: "text-amber-500 font-bold tracking-tight text-xl font-mono",
                badge: "bg-amber-500/10 text-amber-500 border border-amber-500/30 text-xs px-2 py-1 rounded"
            },
            
            pros: [
                "Compiladores mais simples, pois o hardware já faz o trabalho pesado.",
                "Código gerado menor, economizando precioso espaço de armazenamento.",
                "Instruções de alto nível nativas diretamente no hardware."
            ],

            contras: [
                "Circuitos de decodificação massivos e extremamente complexos.",
                "Instruções demoram múltiplos ciclos de clock para finalizar.",
                "Maior dissipação térmica e consumo elevado de energia."
            ]
        }
    ]
};

export const vonNeumannData = {
    title: "A Arquitetura de Von Neumann",
    
    gargalo: {
        titulo: "O Gargalo de Von Neumann",
        descricao: "O principal limitador de desempenho dos computadores modernos. Ocorre porque os dados e as instruções compartilham o mesmo barramento físico para chegar até o processador.",
        consequencia: "A CPU opera em velocidades gigahertz, mas fica ociosa esperando a memória responder. A taxa de transferência de dados impede o hardware de atingir seu potencial máximo."
    },

    componentes: [
        {
            nome: "Memória Principal",
            sigla: "RAM (Random Acess Memory)",
            funcao: "Armazenar temporariamente ambos os dados e instruções que serão processados pelo CPU. É um espaço de enderaçamento linear e volátil.",
            style: "border border-cyan-500/20 bg-slate-900/60 p-4 rounded-lg shadow-[0_0_15px_rgba(34,211,238,0.05)] backdrop-blur-sm"
        },
        {
            nome: "Unidade de Controle",
            sigla: "UC",
            // Queria colocar "cerebro administrativo" entre aspas mas nao sei se \" funciona pra colocar o caracter literal, tmj :)
            funcao: "É o cérebro administrativo. Ela busca a instrução na memória, decodifica seu significado e coordena o fluxo de sinais para os demais componentes.",
            style: "border border-emerald-500/20 bg-slate-900/60 p-4 rounded-lg shadow-[0_0_15px_rgba(16,185,129,0.05)]"
        },
        {
            nome: "Unidade Lógica e Aritmética",
            sigla: "ULA",
            funcao: "O motor de execução. Realiza operações matemáticas fundamentais (soma, subtração) e testes lógicos booleanos (AND, OR, comparações).",
            style: "border border-amber-500/20 bg-slate-900/60 p-4 rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.05)]"
        },
        {
            nome: "Dispositivos de E/S",
            sigla: "I/O",
            funcao: "Pontes de comunicação com o mundo externo. Permitem a entrada de novos dados (teclado, sensores) e a saída de resultados processados (monitores).",
            style: "border border-slate-700 bg-slate-900/60 p-4 rounded-lg"
        }
    ],
    tailwindClasses: {
        destaqueGargalo: "text-amber-400 font-mono font-semibold bg-amber-400/10 px-1 rounded",
        componenteTitle: "text-slate-100 font-mono font-bold text-lg flex items-center gap-2",
        componenteSigla: "text-xs px-1.5 py-0.5 rounded font-bold font-mono bg-slate-800 border"
    }
}