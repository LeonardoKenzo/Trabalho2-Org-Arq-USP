import { Link } from "react-router-dom";
import { detalhesData } from "../data/conteudoDetalhado";

const links = [
    {
        nome:'HOME',
        url:'/',
        color:'hover:text-amber-500'

    },
    {
        nome:'arquitetura',
        url:'/topico/arquitetura',
        color:'hover:text-blue-500'
    },
    {
        nome:'organizacao',
        url:'/topico/organizacao',
        color:'hover:text-green-500'
    },
    {
        nome:'RISC',
        url:'/topico/risc',
        color:'hover:text-blue-200'
    },
    {
        nome:'CISC',
        url:'/topico/cisc',
        color:'hover:text-amber-200'
    },
  
    {
        nome:'Visão Geral',
        url:'/topico/vonneumann',
        color:'hover:text-white'
    },
    {
        nome:'RAM',
        url:'/topico/ram',
        color:'hover:text-red-500'
    },
    {
        nome:'Unidade de Controle',
        url:'/topico/uc'
    },
    {
        nome:'ULA',
        url:'/topico/ula',
        color:'hover:text-pink-500'
    },
    {
        nome:'I/O',
        url:'/topico/io',
        color:'hover:text-cyan-500'
    }
]


export default function Navbar()
{
    return (
        <div className="flex  items-center w-fit m-auto p-4 my-8 h-18 rounded-2xl bg-black/15 border border-black hover:border-white/30  ease-in-out transition-[100] ">
            <li className="m-auto list-none flex flex-row gap-x-8">
                
                {links?.map((e,idx)=>(
                    <Link to={e.url}>

                         <ul key={idx} className={`font-mono hover:scale-[1.1] ${e.color} transition-[100] cursor-pointer z-40 text-white`}>
                            {e.nome}
                        </ul>
                    </Link>
                   

                ))}
               
              
        
               
            </li>
        </div>
    )
}