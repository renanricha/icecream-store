import React from "react"
import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'

export default function HomePage() {
    return (
        <div>
            <Topo />
            <main>
            <section className="banner-home">
                <div className="cont-banner">
                    <h1>SORVETE ARTESANAL</h1>
                </div>
            </section>
            <section className="outras-secoes">
                <img src="/assets/banner-sabores.jpg" alt="banner: sabores" />
                <div className="textos-home">
                    <h2>NOSSOS SABORES</h2>
                    <h3>Novos e deliciosos!</h3>
                    <p></p>
                    <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
                </div>
            </section>
            <section className="outras-secoes home-sobre">
                <div className="textos-home">
                    <h2>NOSSOS EVENTOS</h2>
                    <h3>Delicias com sorvete!</h3>
                    <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvete da sua vida! Venha nos conhecer e passar um tempo aqui com a gente.</p>
                </div>
                <img src="/assets/eventos-image.jpg" alt="image: eventos" />
            </section>
            <section className="outras-secoes">
                <img src="/assets/sobre-image.jpg" alt="banner: sobre"/>
                <div className="textos-home" >
                    <h2>SOBRE NÓS</h2>
                    <h3>Alegria em cada casquinha!</h3>
                    <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que tem de melhor para o 	nosso cliente e você não pode ficar fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
                </div>
            </section>
            </main>
            <Rodape />
        </div>
    )
}