import React from 'react'
import './style.css'
import siteLogo from '../../assets/LOGO1.png'
import { NavLink } from 'react-router-dom'


function Localizacao() {
    return (
        <div id="global-localizacao">

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

            <section className='h-120 w-180 mt-25 ml-30 rounded-3xl bg-[#454348]/40 flex justify-center items-center'>

                <div>
                    <div id="endereco" className='p-0'>
                        <h1 className='z-10 text-white font-[Bebas Neue] text-3xl flex justify-center font-bold'>ENDEREÇO</h1>
                        <p className='font-[Bebas Neue] text-white flex justify-center pt-5'>R. Caldas da Raínha - São Francisco, Belo Horizonte - MG, 31255-180</p>
                    </div>

                    <div>
                        <h1 className='font-[Bebas Neue] text-white flex justify-center pt-10 text-3xl font-bold'>MAPS</h1>
                        <iframe
                            className='rounded-4xl w-100 h-60 z-10 pt-5 flex justify-center ml-13'
                            src={"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d415.43296656882507!2d-43.95963888462719!3d-19.87923154842878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa691d1c143599d%3A0x56c779495b371ba6!2sall%20tecnodiesel%20oficina%20mecanica!5e0!3m2!1spt-BR!2sbr!4v1773185269207!5m2!1spt-BR!2sbr"}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>

            </section>

        </div>
    )
}

export default Localizacao