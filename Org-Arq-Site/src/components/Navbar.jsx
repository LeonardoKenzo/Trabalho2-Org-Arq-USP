import { detalhesData } from "../data/conteudoDetalhado";

export default function Navbar()
{
    return (
        <div className="flex  items-center w-full p-4 my-4 h-18 rounded-2xl bg-black/15 border border-black hover:border-white/15  ease-in-out transition-[100] ">
            <li className="m-auto list-none flex flex-row gap-x-8">
                
                <ul className=" hover:scale-[1.1] transition-[100] cursor-pointer z-40 text-white">
                    arquitetura
                </ul>
                <ul className=" hover:scale-[1.1] transition-[100]  cursor-pointer z-40 text-white">
                    organizacao
                </ul>
                <ul className=" hover:scale-[1.1] transition-[100] cursor-pointer z-40 text-white">
                    RISC
                </ul>
                <ul className=" hover:scale-[1.1] transition-[100]  cursor-pointer z-40 text-white">
                    CISC
                </ul>
                 <ul className=" hover:scale-[1.1] transition-[100]  cursor-pointer z-40 text-white">
                    Visão Geral
                </ul>
                 <ul className="hover:scale-[1.1] transition-[100]   cursor-pointer z-40 text-white">
                    RAM
                </ul>
                <ul className=" hover:scale-[1.1] transition-[100] cursor-pointer z-40 text-white">
                    Unidade de Controle
                </ul>
                 <ul className="hover:scale-[1.1] transition-[100]  cursor-pointer z-40 text-white">
                    ULA
                </ul>
                 <ul className="hover:scale-[1.1] transition-[100]  cursor-pointer z-40 text-white">
                    I/O
                </ul>
        
               
            </li>
        </div>
    )
}