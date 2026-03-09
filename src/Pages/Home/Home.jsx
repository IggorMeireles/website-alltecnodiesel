import React from 'react'
import './style.css'
import siteLogo from '../../assets/LOGO1.png'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div id="global-home">
      <header className='w-full h-25 bg-black/70 flex justify-between'>
        <div className="w-300 flex items-center justify-between -right-50">
          <img src={siteLogo} alt="LOGO" className="h-40 relative -right-20"/>
          <nav id="texts-header" className="flex gap-8 relative -right-150">
            <NavLink to="/" className="hover:underline text-white">Página Inicial</NavLink>
            <NavLink to="/sobre-nos" className="hover:underline text-white">Sobre Nós</NavLink>
            <NavLink to="/" className="hover:underline text-white">Localização</NavLink>
            <NavLink to="/" className="hover:underline text-white">Entre em Contato</NavLink>
          </nav>
        </div>
      </header>
      <div className="flex flex-col max-w-162.5">  
        <h1 className="text-7xl font-extrabold leading-tight font-[Roboto] relative left-20 top-40 text-white">
          Força para o seu <span className="relative left-10 text-amber-700">motor,</span>
        </h1>

        <h1 className="text-7xl font-extrabold leading-tight font-[Roboto] relative left-40 top-40 text-white">
          confiança para sua <span className="relative left-10 text-amber-700">viagem.</span>
        </h1>

        <p className="mt-6 text-xs text-gray-200 font-[Bebas Neue] font-light relative left-60 top-40">
          Produtos automotivos de alta performance para garantir potência,<br />
          segurança e durabilidade em cada quilômetro.
        </p>
      </div>
    </div>
  )
}

export default Home