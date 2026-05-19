export const cicloData = {
    passos: [
        {
            fase: "FETCH",
            titulo: "1. Busca da Instrução",
            descricao: "O processador lê a instrução residente na memória RAM utilizando o endereço apontado pelo Program Counter (PC).",
            detalhesHardware: "O endereço do PC é enviado ao Barramento de Endereços. A memória retorna o dado pelo Barramento de Dados para o Registrador de Instrução (IR). O PC é incrementado.",
            registradoresAfetados: ["PC", "MAR", "MBR", "IR"],
            logText: "SYS_LOG: Buscando instrução no endereço armazenado em [PC]. Dados transferidos para o [IR].",
            cores: {
                borda: "border-cyan-500",
                texto: "text-cyan-400",
                glow: "shadow-[0_0_20px_rgba(34,211,238,0.2)]"
            }
        },
        {
            fase: "DECODE",
            titulo: "2. Decodificação",
            descricao: "A Unidade de Controle analisa o código de operação (Opcode) armazenado no IR para decifrar a ação necessária.",
            detalhesHardware: "Circuitos lógicos combinacionais identificam qual operação será executada e quais serão os operandos de origem e destino.",
            registradoresAfetados: ["IR", "UC"],
            logText: "SYS_LOG: Unidade de Controle decodificou o Opcode. Identificada operação lógica/aritmética iminente.",
            cores: {
                borda: "border-purple-500",
                texto: "text-purple-400",
                glow: "shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            }
        },
        {
            fase: "EXECUTE",
            titulo: "3. Execução",
            descricao: "A Unidade de Controle envia os sinais de comando necessários e ativa a ULA para realizar a operação física.",
            detalhesHardware: "A ULA recebe os dados dos registradores de uso geral e computa a operação lógica ou aritmética requerida pela instrução.",
            registradoresAfetados: ["ULA", "Registradores de Uso Geral"],
            logText: "SYS_LOG: Sinais de controle enviados para a ULA. Operação matemática processada com sucesso.",
            cores: {
                borda: "border-emerald-500",
                texto: "text-emerald-500",
                glow: "shadow-[0_0_20px_rgba(16,185,129,0.2)]"
            }
        },
        {
            fase: "WRITEBACK",
            titulo: "4. Escrita dos Resultados",
            descricao: "O resultado gerado pela ULA é persistido de volta em um registrador interno ou em uma posição específica de memória.",
            detalhesHardware: "O barramento interno é ativado para gravar o dado final, atualizando as flags de status do processador (como Zero ou Overflow).",
            registradoresAfetados: ["Registrador Destino", "Flags Register"],
            logText: "SYS_LOG: Resultado gravado no registrador destino. Ciclo finalizado. Atualizando Flags.",
            cores: {
                borda: "border-amber-500",
                texto: "text-amber-500",
                glow: "shadow-[0_0_20px_rgba(245,158,11,0.2)]"
            }
        }
    ],
    glossarioRegistradores: [
    { sigla: "PC", nome: "Program Counter", funcao: "Guarda o endereço da próxima instrução a ser buscada." },
    { sigla: "IR", nome: "Instruction Register", funcao: "Armazena a instrução decodificada/executada atualmente." },
    { sigla: "MAR", nome: "Memory Address Reg.", funcao: "Guarda o endereço de memória a ser acessado." },
    { sigla: "MBR", nome: "Memory Buffer Reg.", funcao: "Buffer temporário para dados que entram/saem da memória." }
  ]
};