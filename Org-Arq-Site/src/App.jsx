import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css';

const SeonTeoria = lazy(() => import('./components/SeonTeoria.jsx'));
const SeonCicloInstrucao = lazy(() => import('./components/SeonCicloInstrucao.jsx'));
const DetalhesTopico = lazy(() => import('./components/DetalhesTopicos.jsx'));
const Particles = lazy(() => import('./assets/Particles.jsx'));



const PARTICLE_COLORS = ["#22d3ee", "#ffffff", "#475569"];

// Definição da animação padrão das páginas (deslizar e esmaecer)
const pageVariants = {
  initial: { opacity: 0, y: 15 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -15 }
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3
};

const LoadingFallback = () => (
  <div className="flex justify-center items-center p-8 text-cyan-400 font-mono text-sm animate-pulse">
    [ CARREGANDO_MÓDULOS... ]
  </div>
);

function HomePage() {
  return (
    <motion.main 
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <section className='mb-6 border-b border-slate-800 pb-6'>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
          Teoria
        </h2>
        <Suspense fallback={<LoadingFallback />}>
          <SeonTeoria />
        </Suspense>
      </section>

      <section className='mb-6 border-b border-slate-800 pb-6'>
        <h2 className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-6">
            Ciclo de Instrução
        </h2>
        <Suspense fallback={<LoadingFallback />}>
          <SeonCicloInstrucao />
        </Suspense>
      </section>
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/topico/:idTopico" 
          element={
            <Suspense fallback={<LoadingFallback />}>
              <DetalhesTopico />
            </Suspense>
          } 
        /> 
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <div className='min-h-screen bg-slate-900 text-slate-100 font-sans p-6 md:p-12 selection:bg-cyan-500/30'>
        {/* Fundo Global */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <Suspense fallback={null}>
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
          </Suspense>
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

          

         


          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}