import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import SeonTeoria from './components/SeonTeoria.jsx';
import Particles from './assets/Particles.jsx';
import SeonCicloInstrucao from './components/SeonCicloInstrucao.jsx';
import DetalhesTopico from './components/DetalhesTopicos.jsx';

function HomePage(){
  return (
    <main className="animate-fade-in">
      <section className='mb-6 border-b border-slate-800 pb-6'>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
          Teoria
        </h2>
        <SeonTeoria />
      </section>

      <section className='mb-6 border-b border-slate-800 pb-6'>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Ciclo de Instrução
        </h2>
        <SeonCicloInstrucao />
      </section>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className='min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12 selection:bg-cyan-500/30'>
        {/* Fundo Global */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Particles
            particleColors={["#22d3ee", "#ffffff", "#475569"]}
            particleCount={500}
            particleSpread={12}
            speed={0.1}
            particleBaseSize={80}
            moveParticlesOnHover={true}
            alphaParticles={true}
            disableRotation={false}
          />
        </div>

        <div className="relative z-10">
          {/* Header Global */}
          <header className="mb-12 border-b border-slate-800 pb-6 flex justify-between items-center">
            <Link to="/" className="group">
              <h1 className="text-2xl md:text-3xl font-black tracking-wider text-cyan-400 font-mono group-hover:text-cyan-300 transition-colors">
                  Pré-Visualização
              </h1>
              <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-mono">
                  Arquitetura de Computadores
              </p>
            </Link>
          </header>

          {/* Sistema de Roteamento */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Rota dinâmica. O :idTopico vira uma variável lá dentro do componente */}
            <Route path="/topico/:idTopico" element={<DetalhesTopico />} /> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}