import { Link } from "react-router-dom";
import { detalhesData } from "../data/conteudoDetalhado";
import { useState } from "react";
const links = [
    {
        nome:'HOME',
        url:'/',
        color:'hover:text-amber-500'

    },
    {
        nome:'Arquitetura',
        url:'/topico/arquitetura',
        color:'hover:text-blue-500'
    },
    {
        nome:'Organizacao',
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

function nav_button(show,setShow)
{
    return (
        <button className ='font-mono text-2xl text-gray-100/50 cursor-pointer hover:[scale-110] transition-all duration-200' onClick={()=>setShow(e=>!e)}> {show ? '✕' : '☰'} </button>
    )
}
export default function Navbar()
{   

    const [show, setShow] = useState(false);
    return (

        <nav className="w-full px-4 my-8">
            {nav_button(show,setShow)}

            <div
                className={`
                overflow-hidden
                transition-all
                duration-500
                ease-in-out
                ${show ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
                `}
            >
                <ul className="flex flex-wrap justify-center gap-4 md:gap-8 p-4 rounded-2xl bg-black/15 border border-black hover:border-white/30">
                {links.map((e, idx) => (
                    <li key={idx}>
                    <Link
                        to={e.url}
                        className={`font-mono text-sm md:text-base text-white hover:scale-110 transition-all duration-200 inline-block ${e.color || ""}`}
                    >
                        {e.nome}
                    </Link>
                    </li>
                ))}
                </ul>
            </div>
        </nav>
    );
}