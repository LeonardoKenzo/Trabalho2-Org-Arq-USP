import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

export default function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-zinc-950">
      <div className="rounded-2xl bg-zinc-900 p-8 shadow-xl border border-zinc-800">
        <h1 className="text-2xl font-bold text-cyan-400">Ambiente Pronto!</h1>
        <p className="text-zinc-400 mt-2">Vite + React + Tailwind v4 funcionando.</p>
      </div>
    </div>
  )
}