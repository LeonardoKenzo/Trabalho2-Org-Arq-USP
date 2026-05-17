import { useState } from 'react'
import './App.css'
import SeonTeoria from './components/SeonTeoria';

export default function App() {
  return (
    <div className='min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12 selection:bg-cyan-500/30'>
      {/*Heaader*/}
      <header className="mb-12 border-b border-slate-800 pb-6 flex justify-between items-center">
        <div>
          <h1 className="text-2xl md:text-3xl font-black tracking-wider text-cyan-400 font-mono">
              Pré-Visualização
          </h1>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono">
              Arquitetura de Computadores
          </p>
        </div>
      </header>

      <main>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
          Teoria
        </h2>
        <SeonTeoria />
      </main>
    </div>
  );
}