import React from 'react'
import '../../Pages/EntreEmContato/style.css'
import siteLogo from '../../assets/LOGO1.png'
import instagram from '../../assets/elemento-instagram.png'
import whatsapp from '../../assets/elemento-whatsapp.png'
import backgroundSection from '../../assets/backgroundSection.png'
import { NavLink } from 'react-router-dom'


function Contato() {

    const btnInstagram = document.getElementById("btnInstagram");
    const btnWhatsapp = document.getElementById("btnWhatsapp");

    function abrirWhatsapp() {
        const numero = "5531986884445"
        const mensagem = "Olá, gostaria de mais informações!"

        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`

        window.open(url, "_blank")
    }

    return (
        <div id="global-contato">

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

            <div className='relative z-20 p-0 m-0 w-max h-max'>

                <div className='flex flex-row p-0 m-0'>
                    <img
                        src={whatsapp}
                        alt="WHATSAPP"
                        className="w-80 h-80 z-20 mt-20 ml-20"
                    />

                    <div className='flex flex-col p-0 m-0'>

                        <h1 className='text-white text-4xl font-extrabold font-[Bebas Neue] mt-30'>Entre em contato conosco!</h1>
                        <p className='text-white font-[Bebas Neue] mt-5'>Envie uma mensagem, e responderemos o mais rápido possível!</p>
                        <button id='btnWhatsapp' onClick={abrirWhatsapp} class="bg-emerald-200 hover:bg-emerald-500 active:scale-95 text-emerald-950 font-[Bebas Neue] border-b-4 border-l-4 border-emerald-400 hover:border-emerald-800 shadow-2xl font-extrabold py-2 px-4 mt-10 w-50 rounded">Enviar mensagem</button>

                    </div>
                </div>

                <div className='flex flex-row p-0 m-0 ml-200 -mt-45'>
                    <div className='flex flex-col m-0 p-0'>

                        <h1 className='text-white text-4xl font-extrabold font-[Bebas Neue] mt-30'>Encontre-nos!</h1>
                        <button id='btnInstagram' onClick={() => window.open("https://www.instagram.com/alltecnodiesel/", "_blank")} class="bg-fuchsia-400 hover:bg-fuchsia-600 active:scale-95 text-emerald-950 font-[Bebas Neue] border-b-4 border-r-4 border-fuchsia-800 hover:border-fuchsia-950 shadow-2xl font-extrabold py-2 px-4 mt-10 w-50 rounded">Instagram</button>

                    </div>

                    <img
                        src={instagram}
                        alt="INSTAGRAM"
                        className="w-80 h-80 z-20 mt-20"
                    />
                </div>

            </div>

        </div>
    )
}

export default Contato