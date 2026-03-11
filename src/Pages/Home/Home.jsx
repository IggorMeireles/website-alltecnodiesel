import React from 'react'
import './style.css'
import siteLogo from '../../assets/LOGO1.png'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div id="global-home" className="min-h-screen">
      <header className="w-full bg-black/60 z-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
          <img
            src={siteLogo}
            alt="LOGO"
            className="p-1 m-0 h-20 md:h-20 object-contain z-20 transition duration-1000 hover:p-0"
          />

          <nav className="hidden md:flex gap-6 text-white text-sm lg:text-base">
            <NavLink to="/" className="hover:underline z-20 active:scale-95 active:opacity-50">Página Inicial</NavLink>
            <NavLink to="/sobre-nos" className="hover:underline z-20 active:scale-95 active:opacity-50">Sobre Nós</NavLink>
            <NavLink to="/localizacao" className="hover:underline z-20 active:scale-95 active:opacity-50">Localização</NavLink>
            <NavLink to="/" className="hover:underline z-20 active:scale-95 active:opacity-50">Entre em Contato</NavLink>
          </nav>

        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center md:items-start text-center md:text-left z-20">

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-[Roboto] text-white z-20">
          Força para o seu <br /><span className="text-amber-600 ml-15">motor,</span>
        </h1>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight font-[Roboto] text-white mt-2 ml-30 z-20">
          confiança para sua <br /><span className="text-amber-600 ml-15">viagem.</span>
        </h1>

        <p className="mt-6 ml-60 text-sm sm:text-base text-gray-200 font-[Bebas Neue] font-light max-w-xl z-20">
          Produtos automotivos de alta performance para garantir potência,
          segurança e durabilidade em cada quilômetro.
        </p>

      </div>

    </div>
  )
}

export default Home