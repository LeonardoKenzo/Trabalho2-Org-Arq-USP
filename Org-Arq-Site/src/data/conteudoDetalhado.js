export const detalhesData = {
    arquitetura: {
        titulo: "Arquitetura de Computadores",
        categoria: "Fundamentos do Hardware",
        estilo: {
            textoPrinc: "text-cyan-400",
            textoSec: "text-cyan-500/70",
            borda: "border-cyan-500",
            bgGlow: "shadow-[0_0_30px_rgba(34,211,238,0.1)]"
        },
        conteudo: {
            historia: "---EM BREVE---",
            aprofundamento: "---EM BREVE---",
            exemplos: [
                "Arquitetura x86 (Intel/AMD).",
                "Arquitetura ARM (Dispositivos móveis e Apple Silicon)."
            ]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: [
                    "Exemplo 1: Arquitetura x86 (Intel/AMD).",
                    "Exemplo 2: Arquitetura ARM (Dispositivos móveis e Apple Silicon).",
                    "Exemplo 3: [Insira um novo exemplo aqui]"
                ]
            }
        ]
    },
    organizacao: {
        titulo: "Organização de Computadores",
        categoria: "Implementação Física",
        estilo: {
            textoPrinc: "text-emerald-500",
            textoSec: "text-emerald-500/70",
            borda: "border-emerald-500",
            bgGlow: "shadow-[0_0_30px_rgba(16,185,129,0.1)]"
        },
        conteudo: {
            historia: "---EM BREVE---",
            aprofundamento: "---EM BREVE---",
            exemplos: ["Sinais de controle", "Interfaces de periféricos"]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    risc: {
        titulo: "Arquitetura RISC",
        categoria: "Reduced Instruction Set Computer",
        estilo: {
            textoPrinc: "text-orange-500",
            textoSec: "text-orange-500/70",
            borda: "border-orange-500",
            bgGlow: "shadow-[0_0_30px_rgba(251,146,60,0.1)]"
        },
        conteudo: {
            historia: "---EM BREVE---",
            aprofundamento: "---EM BREVE---",
            exemplos: ["Dispositivos móveis (smartphones, tablets)", "Dispositivos IOT","Sistemas Embarcados","Ecossistema ARM (Linha Qualcomm Snapdragon) e Apple Silicon (Linha M1, M2, M3, M4)"]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    cisc: {
        titulo: "Arquitetura CISC",
        categoria: "Complex Instruction Set Computer",
        estilo: {
            textoPrinc: "text-red-500",
            textoSec: "text-red-500/70",
            borda: "border-red-500",
            bgGlow: "shadow-[0_0_30px_rgba(239,68,68,0.1)]"
        },
        conteudo: {
            historia: "---EM BREVE---",
            aprofundamento: "---EM BREVE---",
            exemplos: ["Desktops e Servidores Tradicionais", "Linha Intel Core (i3, i5, i7, i9) e Intel Xeon"]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    vonneumann: {
        titulo: "Arquitetura de Von Neumann",
        categoria: "Modelo de Arquitetura Clássica",
        estilo: {
            textoPrinc: "text-purple-500",
            textoSec: "text-purple-500/70",
            borda: "border-purple-500",
            bgGlow: "shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        },
        conteudo: {
            historia: "1936 | A Base Matemática\n• Alan Turing comprova a viabilidade teórica de uma 'Máquina Universal': um sistema capaz de processar qualquer algoritmo computável através de instruções lógicas.\n\n1940 | O Primeiro Passo Eletrônico\n• John V. Atanasoff desenvolve o primeiro protótipo digital eletrônico, pavimentando o caminho para os computadores modernos.\n\n1940–1945 | A Era ENIAC e o Engessamento Físico\n• Construído por Mauchly e Eckert na Universidade da Pensilvânia, o ENIAC chancelou o uso de válvulas eletrônicas.\n• Limitação Crítica: Ausência de um programa armazenado interno. Para reprogramar a máquina, operadores humanos precisavam alterar chaves e recabear painéis físicos manualmente.\n\n1944 | A Busca pela Flexibilidade\n• Inicia-se o projeto EDVAC com o objetivo claro de superar o engessamento e a lentidão física de reprogramação do ENIAC.\n\n1944–1945 | A Consolidação de Von Neumann\n• Matematicamente brilhante, John von Neumann ingressa no projeto EDVAC em 1944.\n• Em 1945, ele formaliza e organiza a estrutura lógica que resolveu o problema do ENIAC no manuscrito 'First Draft of a Report on the EDVAC'.\n\n• Conclusão:\n  A partir deste ponto, dados e instruções de controle passam a residir no mesmo espaço de memória física, permitindo que o computador seja reprogramado eletronicamente e de forma quase instantânea, sem a necessidade de intervenção física nos cabos da máquina.",
            aprofundamento: "=== O PARADIGMA DO PROGRAMA ARMAZENADO ===\n\n• Unificação na Memória Central:\n  A maior inovação do modelo foi unificar dados e instruções na mesma matriz de memória principal. Ambos são armazenados sob a mesma codificação binária e tratados de forma idêntica pelo sistema.\n\n• Barramento Unificado:\n  Instruções e dados compartilham o mesmo caminho lógico e a mesma via interconectora. Existe um único barramento unificado conectando a CPU e a Memória Principal.\n\n• Auto-Modificação Dinâmica:\n  Esse design permitiu que o computador inspecionasse e modificasse suas próprias estruturas algorítmicas dinamicamente. A CPU consegue enxergar e manipular a memória que contém o código utilizando as mesmíssimas instruções que usa para alterar variáveis numéricas.\n\n\n=== O GARGALO DE VON NEUMANN ===\n\n• Definição do Problema:\n  Consiste na limitação física e na lentidão na taxa de transferência de dados entre a Memória Principal e a CPU, já que o barramento que interliga as duas unidades é lento.\n\n• O Muro de Memória (Memory Wall):\n  A aceleração da velocidade de processamento da CPU (densidade de transistores impulsionada pela Lei de Moore) tornou-se desproporcional à velocidade de acesso às matrizes de memória externa DRAM. Isso gera uma latência desperdiçada onde o processador congela seus ciclos de computação aguardando os dados chegarem.\n\n• As Causas Principais do Gargalo:\n  1. Distância Física: O tráfego de sinais entre o chip do processador e as placas de memória externa.\n  2. Tecnologia DRAM: O uso de microcapacitores para representar os bits, que possuem um tempo intrínseco de carga e descarga lento.\n\n• O Muro de Potência (Power Wall):\n  Com a quebra da Escala de Dennard (escala que afirmava que, à medida que os transistores encolhem, sua densidade de potência permaneceriam constante), tornou-se impossível reduzir o tamanho dos transistores sem gerar calor extremo. Essa limitação térmica forçou a indústria a migrar para arquiteturas multicore (múltiplos núcleos no mesmo chip) para continuar evoluindo o desempenho.\n\n\n=== SOLUÇÕES E MITIGAÇÕES DO SISTEMA ===\n\nPara atenuar esse impacto paralisante nos barramentos, adota-se três abordagens tecnológicas essenciais:\n\n• Memória Cache (SRAM)\nImplementação de camadas auxiliares ultrarrápidas (L1, L2 e L3) embutidas próximas ou dentro da CPU. Baseia-se no 'Princípio da Localidade' (temporal e espacial): variáveis próximas na memória tendem a ser usadas juntas no código. Ao buscar um dado lento, a controladora varre um grande bloco adjacente e o guarda na Cache. Se a CPU precisar dele logo depois, ocorre um 'Hit' (acesso instantâneo), driblando o barramento externo.\n\n• Intercalação de Memória (Interleave)\nDivisão da matriz de memória RAM em bancos físicos independentes. Isso permite que a CPU realize acessos paralelos a bancos diferentes, extraindo múltiplos blocos maciços de dados simultaneamente na mesma requisição.\n\n• Memória Embebida (eDRAM)\nExtensões volumosas de memória DRAM fundidas diretamente ao encapsulamento original do processador. Ao embutir essa estrutura ao lado do chip principal, reduz-se brutalmente a distância física e o tempo de trânsito dos sinais na placa-mãe.",
            exemplos: ["De forma pura (sem as soluções e mitigações abordadas), a arquitetura de von Neumann não é mais utilizada comercialmente, pois foi substituida por uma mistura com a arquitetura de Harvard, formando a Arquitetura de Harvard Modificada","Projetos Acadêmicos: Cesar ➔ Uma arquitetura de 16 bits reais, alocando até 64 kilobytes de memória externa e suportando sub-rotinas complexas através de 8 registradores logísticos"]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    ram: {
        titulo: "Memória RAM",
        categoria: "Armazenamento de Dados",
        estilo: {
            textoPrinc: "text-cyan-400",
            textoSec: "text-cyan-500/70",
            borda: "border-cyan-500",
            bgGlow: "shadow-[0_0_30px_rgba(34,211,238,0.1)]"
        },
        conteudo: {
            historia: "=== BREVE HISTÓRIA E ORIGEM DA RAM ===\n\nA Superação do Limite Físico:\n• A gênese da RAM está intrinsecamente ligada à necessidade de superar o maior obstáculo técnico dos primeiros computadores: a ausência completa de um espaço de trabalho dinâmico.\n\nA Máquina de Hardware Rígido\n• No início da década de 1940, máquinas colossais como o ENIAC não possuíam o conceito de 'memória de trabalho' para o código. Para alterar as tarefas ou trocar de programa, os engenheiros precisavam recabear painéis físicos e alterar matrizes de chaves manualmente.\n\nO EDVAC e von Neumann\n• Em 1945, com o manuscrito 'First Draft of a Report on the EDVAC', John von Neumann formalizou o paradigma do Programa Armazenado. Ele estipulou que o computador necessitava de um 'repositório linear universal' onde dados numéricos e instruções do software pudessem coexistir sob a mesma codificação.\n\nO Nascimento do 'Acesso Aleatório' (Random Access)\n• Para a arquitetura funcionar, essa matriz precisava permitir que a CPU saltasse para qualquer endereço de célula instantaneamente (por exemplo, ir do endereço 10 direto para o 4096 em um único pulso de clock).\n• Esse salto imediato eliminou a necessidade de ler a memória de forma puramente sequencial, como ocorria nas antigas e lentas fitas magnéticas. É dessa natureza de acesso direto e instantâneo que nasce a sigla RAM (Random Access Memory).",
            aprofundamento: "=== ESTRUTURA DA MEMÓRIA PRINCIPAL ===\n\n• Linearidade Absoluta e Endereçamento:\n  A matriz de memória central é organizada de forma estritamente sequencial, dividida em células lógicas que possuem linearidade absoluta. Para que a CPU possa localizar qualquer dado, cada uma dessas células detém um endereço unívoco escalar (um identificador numérico único).\n\n• Subdivisão Funcional do Repositório:\n  Para atender aos diferentes estados do computador, a memória principal subdivide-se em duas categorias operacionais:\n  1. ROM (Read-Only Memory) ➔ Memória não volátil, utilizada para armazenar as instruções de iniciação de baixo nível do sistema (firmware).\n  2. RAM (Random Access Memory) ➔ Memória volátil e de leitura/escrita rápida, destinada a abrigar os programas e dados ativos do usuário em tempo de execução.\n\n\n=== DIFERENCIAÇÃO TOPOLÓGICA (DRAM vs SRAM) ===\n\nEstruturalmente falando, a engenharia da matriz RAM consolida-se em duas tecnologias com comportamentos físicos distintos:\n\n• DRAM - Dynamic RAM\nConsiste em memórias dinâmicas baseadas em células compostas por transistores e capacitores instáveis. Por dependerem de capacitores que perdem carga continuamente, exigem ciclos constantes de renovação de energia (refresh) para manter os dados intactos. É uma tecnologia mais lenta, porém densa e barata, ideal para a RAM principal.\n\n• SRAM - Static RAM\nConsiste em memórias estáticas atreladas a arranjos de transistores que formam comportas lógicas (flip-flops). Não necessitam de ciclos de refresh e mantêm a informação estável enquanto houver alimentação. É uma tecnologia extremamente veloz e cara, utilizada em volumes menores para compor as memórias Cache.\n\n• eDRAM - Embedded DRAM\nNa prática, são blocos densos de memória DRAM passiva — que normalmente ficariam localizados nos pentes de memória RAM conectados na placa-mãe, distantes do processador — fundidos (embutidos) diretamente à própria matriz de silício da CPU, dentro do seu encapsulamento original. Gera a eliminação do trânsito externo de dados, pois os sinais elétricos não precisam mais viajar pelos lentos caminhos de barramento da placa-mãe contornando o engarrafamento crônico de transferência de dados, agindo como uma poderosa camada de mitigação contra o MemoryWall.",
            exemplos: ["DRAM: Padrão absoluto utilizado como a Memória Principal Externa do computador atualmente", "SRAM: Utilizado para construir a Memória Cache. Em processadores modernos, como a família ARM Cortex ou linhas de 32 bits como Kinetis, a SRAM é dividida internamente em vias isoladas para instruções e dados (Arquitetura Harvard Modificada) para garantir celeridade extrema","eDRAM: Soluções de alto desempenho criadas para suprimir o Gargalo de von Neumann em tarefas que engarrafam o barramento da placa. Um exemplo é o processador neural NorthPole da IBM"]
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    ula: {
        titulo: "Unidade Lógica e Aritmética",
        categoria: "Componente de Processamento",
        estilo: {
            textoPrinc: "text-purple-500",
            textoSec: "text-purple-500/70",
            borda: "border-purple-500",
            bgGlow: "shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        },
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    uc: {
        titulo: "Unidade de Controle",
        categoria: "Componente de Processamento",
        estilo: {
            textoPrinc: "text-green-500",
            textoSec: "text-green-500/70",
            borda: "border-green-500",
            bgGlow: "shadow-[0_0_30px_rgba(34,151,84,0.1)]"
        },
        conteudo: {
            historia: "=== A EVOLUÇÃO DA UNIDADE DE CONTROLE ===\n\nDo Hardware Rígido ao Software Fluido:\n• A evolução da Unidade de Controle (UC) resume, em essência, a jornada tecnológica para libertar o computador do engessamento de suas conexões físicas.\n\nA 'Unidade de Controle' Humana\n• Na era do ENIAC (início da década de 1940), a figura de uma Unidade de Controle puramente eletrônica e automatizada não existia. O sequenciamento lógico era executado de forma estritamente braçal.\n• Para que a máquina passasse de uma adição para uma multiplicação, as operadoras humanas precisavam atuar fisicamente como a unidade de controle, recabeando extensos painéis e alterando chaves seletoras de comando.\n\nO EDVAC e o Paradigma Clássico\n• A gênese da Unidade de Controle moderna ocorreu em 1945, cristalizada no célebre manuscrito 'First Draft of a Report on the EDVAC', de John von Neumann.\n• Com a introdução do Paradigma do Programa Armazenado, a máquina finalmente ganhou um 'cérebro' interno integrado, projetado especificamente para ler os códigos binários na memória e orquestrar o hardware automaticamente.\n\nA Inspiração Biomimética\n• Para desenhar essa engenharia, von Neumann extraiu pesada inspiração biológica dos trabalhos dos neurofisiologistas McCulloch e Pitts (1943) sobre a modelagem da atividade nervosa.\n• Ele projetou a Unidade de Controle para mimetizar os feixes nervosos do organismo: ela não computa ou altera os dados substantivos, mas irradia impulsos elétricos de sincronia (sinapses) para controlar o ritmo global (clock) e liberar as comportas de tráfego de dados da CPU, memória e periféricos.",
            aprofundamento: "=== O REGRAMENTO LOGÍSTICO E TEMPORAL ===\n\n• O Controle do Relógio e do Fluxo:\n  A autoridade primária deste componente não envolve o tratamento substantivo da informação ou a resolução de fórmulas algébricas. Sua função vital é o regramento do tempo (clock) e do escoamento logístico de todos os bits que trafegam pela infraestrutura física do computador. É a UC quem dita a ordem rigorosa de quem 'fala' e quem 'escuta' no barramento unificado.\n\n\n=== DESMEMBRAMENTO ANALÍTICO (DECODE) ===\n\n• Dissecando a Palavra Binária:\n  A vocação mais vigorosa da Unidade de Controle ocorre no estágio isolado do Instruction Decode. Assim que uma instrução é capturada da memória e enclausurada no Registrador de Instrução (IR), a Controladora submete essa palavra a um desmembramento completo.\n\n• Tradução de Bits para Comandos:\n  Ela 'porciona as trilhas', dissecando a palavra para separar o OPCode (o comando base a ser executado) dos campos adjacentes alocados para os operandos suplementares ou ponteiros associativos. Em suma, ela traduz os bits da instrução em uma ordem executável.\n\n\n=== IRRADIAÇÃO DE SINALIZAÇÕES E ORQUESTRAÇÃO ===\n\nApós decodificar a instrução no IR, a UC atua como um maestro, irradiando impulsos de permissividade e sinalizações rigorosas rumo a todas as extremidades do hardware:\n\n• Para a Memória Principal\nAcessa o Program Counter (PC) e acende o pino de requisição absoluta de Leitura (Read) ou Escrita (Write) no barramento de controle para liberar ou salvar conteúdos operacionais.\n\n• Para a ULA\nControla a ativação mecânica dos circuitos necessários para a operação exigida naquele ciclo específico (ex: engatilhar o circuito de soma ou de comparação lógica).\n\n• Para os Periféricos\nEmite ordens rigorosas para abrir ou fechar as comportas comunicadoras no portal de Entrada e Saída (I/O).\n\n\n=== O SEQUENCIAMENTO IRREVERSÍVEL ===\n\n• A Concretude do Ciclo (Fetch-Decode-Execute):\n  Por fim, é através do rigor hierárquico desta unidade que o ciclo elementar do computador atinge sua concretude e infalibilidade. Ela orquestra ativamente a leitura minuciosa e sequencial das instruções do programa. Caso haja a necessidade de buscar variáveis extras em acessos recursivos (Operand Fetch), é a Controladora que engaja os recálculos e faz o apontamento unificado do novo endereço na matriz de memória.",
            exemplos: ["Arquiteturas CISC: A Unidade de Controle é incrivelmente complexa. Como as instruções têm tamanhos variados e realizam tarefas colossais, a UC atua como uma micro-CPU interna","Arquiteturas RISC: Como as instruções são perfeitamente padronizadas e métricas, a UC dispensa o microcódigo pesado. Sua principal aplicação prática aqui é o gerenciamento dos Pipelines, garantindo que a máquina processe múltiplos estágios de instruções diferentes ao mesmo tempo, sem que elas colidam no barramento","Proteção de Hardware: A Unidade de Controle é a barreira física fundamental. É ela quem avalia e impõe os anéis de privilégio (como Ring 0 para o Kernel e Ring 3 para os aplicativos do usuário). Se um código malicioso tentar executar uma instrução de nível de núcleo (priviledged instruction), é a Unidade de Controle que bloqueia a decodificação e dispara uma interrupção de segurança (hardware exception)"]
        }
    },
    ula: {
        titulo: "Unidade Lógica e Aritmética",
        categoria: "Componente de Processamento",
        estilo: {
            textoPrinc: "text-purple-500",
            textoSec: "text-purple-500/70",
            borda: "border-purple-500",
            bgGlow: "shadow-[0_0_30px_rgba(168,85,247,0.1)]"
        },
        conteudo: {
            historia: "=== A JORNADA DA CENTRALIZAÇÃO DO CÁLCULO ===\n\nCentralizando a Força Bruta:\n• A história da Unidade Lógico-Aritmética (ULA) é a jornada da engenharia para centralizar e otimizar a força bruta do cálculo eletrônico, substituindo o antigo caos de circuitos matemáticos isolados.\n\nA Matemática Descentralizada e Caótica\n• Antes da consolidação do modelo clássico, não existia uma unidade de cálculo centralizada nos computadores.\n• No ENIAC, a matemática era distribuída: a máquina possuía 20 'acumuladores' gigantescos que funcionavam simultaneamente como gavetas de memória e somadores independentes.\n• Para multiplicar, os operadores precisavam enviar fisicamente os números através de cabos para uma 'Unidade Multiplicadora'. Isso gerava um desperdício imenso de hardware e uma quantidade colossal de válvulas duplicadas.\n\nO Órgão Central (Central Arithmetic)\n• A grande virada ocorreu em 1945 com a publicação do manuscrito 'First Draft of a Report on the EDVAC' por John von Neumann.\n• Ele percebeu que praticamente todos os passos de um algoritmo exigiam aritmética primária (adição, subtração, multiplicação, divisão) ou decisões lógicas.\n• Em vez de espalhar hardware de cálculo por toda a máquina, ele propôs um único órgão central especializado, batizado originalmente de CA (Central Arithmetic). A partir dali, todo e qualquer cálculo teria que passar obrigatoriamente pelas trilhas desse componente.\n\n\n=== A FUNDAÇÃO LÓGICA E BIOMIMÉTICA ===\n\nPara transformar o conceito abstrato de Central Arithmetic na ULA física atual, von Neumann uniu duas ciências fundamentais:\n\nÁlgebra Booleana no Silício\n• Utilização da matemática lógica criada por George Boole no século XIX, onde tudo se resume a estados binários (1 e 0). A engenharia provou que portas lógicas eletrônicas combinadas (circuitos AND, OR, NOT) poderiam realizar qualquer operação matemática complexa.\n\nA Analogia Muscular\n• Inspirado nos estudos neurológicos de McCulloch e Pitts (1943), von Neumann idealizou a ULA como os 'músculos contráteis' do cérebro eletrônico. A ULA não pensa; ela simplesmente reage aos estímulos elétricos enviados pela Unidade de Controle, processando os números e ejetando o resultado.",
            aprofundamento: "=== NATUREZA OPERACIONAL ===\n\n• O Substrato de Portões Eletrônicos:\n  A ULA é essencialmente um substrato denso de portões eletrônicos. Ela opera como uma complexa engrenagem puramente combinacional, fundamentada na álgebra de Boole, sendo a responsável imperativa por todo o processamento numérico contundente da máquina.\n\n• Execução Guiada pela UC:\n  A unidade é guiada pelos sinais decodificados e enviados pela Unidade de Controle, que determinam qual circuito interno será ativado. Suas operações dividem-se em duas vertentes:\n1. Aritméticas ➔ Executa as demandas matemáticas primárias, notadamente a adição (ADD) e subtração (SUB), podendo englobar multiplicação e divisão quando incorporadas fisicamente ao circuito.\n2. Lógicas ➔ Assegura as avaliações binárias baseadas em conjunções e disjunções cruciais, abarcando AND, OR, NOT e XOR, suplementadas por operações de ajuste posicional como a deslocação lateral de trilhas de bits (SHIFT).\n\n\n=== A MECÂNICA DE ENTRADA ===\n\nPara realizar um cálculo matematicamente válido, a ULA cruza passivamente diversas variáveis simultâneas. Do ponto de vista mecânico, as entradas que chegam ao componente consistem rotineiramente em quatro elementos vitais:\n\n1. Entrada A ➔ O aporte numérico que já está alojado localmente no Acumulador.\n2. Entrada B ➔ O valor da variável que acabou de ser resgatada do sistema de barramentos, vindo da memória.\n3. Sinalizador de Ação ➔ O flag mandatário, enviado pela Unidade de Controle, que ativa o OPCode correto para a operação pretendida.\n4. Carry-In ➔ A introdução do bit de resgate de transporte (conhecido popularmente como 'vem-um'), que carrega uma contingência temporal da operação passada.\n\n\n=== O ESCOAMENTO DOS RESULTADOS ===\n\nAssim que o estado do metal transacional engendra o cálculo (por exemplo, efetuando uma lógica em que o resultado final seja a soma das entradas), a ULA produz dois resultados principais de saída:\n\n• O Valor Absoluto:\n  O valor numérico consolidado do cálculo final é depositado incondicionalmente de volta no Acumulador, aguardando o próximo passo do programa.\n\n• O Banco de Registradores de Condição (Flags):\n  Junto do resultado numérico, a ULA reporta os efeitos secundários e estruturais desse cálculo, atualizando um banco restrito de sinalizadores.\n\n\n=== O ESCUDO DE AVALIAÇÃO: FLAGS DE STATUS ===\n\nEssas 'flags' geradas pela ULA são sinais vitais para que o computador consiga tomar decisões lógicas e criar bifurcações condicionais complexas no software. Elas indicam instantaneamente as seguintes características do último cálculo processado:\n\n[ Z ] Zero ➔ Indica se a conta deu exatamente zero.\n[ N ] Negativo/Sinal ➔ Indica se o número final ficou negativo.\n[ C ] Carry-Out ➔ Indica se houve extrapolação da capacidade final da base binária ou decimal.\n[ V ] Overflow ➔ Indica que o tamanho do resultado extrapolou o limite dimensional que o chip consegue abrigar.\n[ U ] Underflow ➔ Sinaliza uma perda extrema de precisão porque o resultado de uma conta ficou microscópico demais.\n[ E ] Errors ➔ Revela desastres latentes, como anomalias de codificação sistêmica ocorridas durante a operação matemática.",
        }
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    },
    io: {
        titulo: "Entrada/Saída",
        categoria: "Componente de Processamento",
        estilo: {
            textoPrinc: "text-blue-500",
            textoSec: "text-blue-500/70",
            borda: "border-blue-500",
            bgGlow: "shadow-[0_0_30px_rgba(59,130,246,0.1)]"
        },
        conteudo: {
            historia: "=== DO ESFORÇO FÍSICO À COMUNICAÇÃO FLUIDA ===\n\nO Ser Humano como Periférico\n• Na era do ENIAC, a 'entrada' de dados e instruções não ocorria por um teclado. O processo de programação exigia uma reconfiguração pesada em nível de hardware.\n• Para alterar a função da máquina, os operadores precisavam alterar manualmente matrizes de chaves físicas e recabear extensos painéis de conexões lógicas, um processo que podia levar dias. O ser humano era, literalmente, o mecanismo de E/S.\n• O avanço imediato foram os cartões perfurados e as fitas de papel, que automatizaram a leitura, mas ainda eram mecanismos puramente eletromecânicos lentos.\n\nA Ironia do 'First Draft' (1945)\n• Quando John von Neumann compilou o arcabouço lógico dos computadores modernos no documento fundador do EDVAC, ele dissecou a CPU e a Memória com precisão matemática.\n• No entanto, devido à natureza rústica e inacabada do manuscrito original, o documento carece totalmente da seção sobre o subsistema sistêmico de Entrada/Saída.\n\n\n=== A CONSOLIDAÇÃO DO BARRAMENTO ===\n\nSubjugação e Integração ao Hardware:\n• Posteriormente, a engenharia estabeleceu que a única forma de um periférico (como uma leitora de cartões ou uma impressora antiga) não quebrar a lógica e o sincronismo da máquina seria conectá-lo diretamente ao mesmo Sistema de Barramentos usado pela memória.\n• Dessa forma, toda e qualquer permissão de trânsito elétrico e troca de informações do portal periférico ficou definitivamente subjugada à Unidade de Controle.",
            aprofundamento: "=== ANÁLISE DOS DISPOSITIVOS DE E/S ===\n\n• Os Tradutores do Sistema:\n  Os dispositivos de Entrada e Saída (E/S) atuam como pontes de tradução essenciais entre duas realidades distintas: o mundo físico externo (predominantemente analógico) e o ecossistema lógico interno do computador (estritamente digital e binário).\n\n• Subjugação à Unidade de Controle:\n  Na base teórica pura da Arquitetura de Von Neumann, os periféricos de E/S não possuem autonomia operacional. Eles são componentes totalmente subjugados e orquestrados pela Unidade de Controle (UC) da CPU, que dita exatamente quando e como as leituras e escritas devem ocorrer.\n\n\n=== DINÂMICA OPERACIONAL DE FLUXO ===\n\nO tráfego de dados através do portal periférico divide-se em duas frentes fundamentais:\n\n• Fluxo de Entrada (Input)\nResponsável por capturar o estímulo ou a ação física do usuário, como o pressionamento de uma tecla ou o movimento de um mouse, e converter essa informação mecânica em uma sequência de impulsos elétricos discretos que representam a codificação binária assimilável pela máquina.\n\n• Fluxo de Saída (Output)\nResponsável por interceptar o resultado numérico final de um processamento matemático executado pela CPU e traduzi-lo de volta para formatos interpretáveis pelos sentidos humanos. Esse processo converte cadeias de bits abstratas em fenômenos perceptíveis, como um pixel colorido iluminado no monitor, uma onda sonora emitida por uma caixa de som ou caracteres grafados em um papel impresso.",
            exemplos: ["Periféricos de Entrada: Mouse, teclado, mesas digitalizadoras.","Periféricos de Saída: Monitores, fones de ouvido, caixas de som."]
        }
    },
        secoes: [
            {
                titulo: "História e Origem",
                tipo: "texto",
                conteudo: "BLA BLA BLA",
                destaque: true
            },
            {
                titulo: "Aprofundamento Técnico",
                tipo: "texto",
                conteudo: "BLE BLE BLE"
            },
            {
                titulo: "Aplicações Práticas",
                tipo: "lista",
                conteudo: ["Sinais de controle", "Interfaces de periféricos"]
            }
        ]
    }
};