import React from "react"
import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'

export default function Sabores() {
    return (
        <div>
            <Topo />
            <main className="limitar-secao">
                <section className="banner-sabores">
                    <div className="cont-banner">
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>
            
                <h1 className="titulo-sabores">SABORES DE SORVETE</h1>

                <section className="cards">
                    <div className="card">
                        <img src="/assets/sabor-oreo.png" alt="sabor: oreo" />
                        <div className="textos-cards-sabores">
                            <h2>Sorvete de Oreo</h2>
                            <p></p>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/assets/sabor-pistache.png" alt="sabor: pistache" />
                        <div className="textos-cards-sabores">
                            <h2>Sorvete Pistache</h2>
                            <p></p>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                    </div>
                <div className="card">
                    <img src="/assets/sabor-cookies-avela.png" alt="sabor: cookies e avelã" />
                    <div className="textos-cards-sabores">
                        <h2>Sorvete Cookies & Avelã</h2>
                        <p></p>
                        <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/assets/sorbet-kiwi.png" alt="sabor: Kiwi" />
                    <div className="textos-cards-sabores">
                        <h2>Sorvete de Kiwi</h2>
                        <p></p>
                        <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/assets/sorbet-morango.png" alt="sabor: Morango" />
                    <div className="textos-cards-sabores">
                        <h2>Sorvete de Morango</h2>
                        <p></p>
                        <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="/assets/sorbet-limao.png" alt="sabor: Limao" />
                    <div className="textos-cards-sabores">
                        <h2>Sorvete de Limão Siciliano</h2>
                        <p></p>
                        <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                    </div>
                </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
}