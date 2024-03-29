import React from "react"
import Topo from '../../componentes/Topo'
import Rodape from '../../componentes/Rodape'
import './style.css'

export default function Sobre() {
    return (
        <div>
            <Topo />
            <main className="limitar-secao">
                <section className="banner-sobre">
                    <div className="cont-banner">
                        <h1>A GELATERIA</h1>
                    </div>
                </section>
                <section className="texto-sobre">
                    <h1>Sobre Nós</h1>
                    <h2>Nós simplesmente amamos sorvete!</h2>
                    <p>Somos uma empresa apaixonada pelo que faz. Colocamos amor em cada sorvete produzido. Fazemos o melhor sorvete para os nossos clientes e gostamos de receber elogios. Estamos operando desde 2009 com as melhores matérias-primas para a produção final do sorvete. Vendemos tanto para varejo como para atacado.</p>
                    <p>Nossos clientes podem comprar os nossos sorvetes e degustar na nossa loja ou levar para sua residência e aproveitar junto com a família. Também vendemos para estabelecimentos e criamos eventos como festa de aniversário, formaturas e eventos empresariais. Para contratar os nossos serviços, basta entrar em contato conosco. Iremos proporcionar o melhor atendimento e os melhores produtos para você fazer a sua festa mais saborosa, com o melhor sorvete da cidade.</p>
                </section>
                <section className="imagens-sobre">
                <img src="/assets/sobre-image.jpg" alt="imagem: pessoas na sorveteria" />
                <img src="/assets/sorveteria.jpg" alt="imagem: sorveteria" />
                </section>
            </main>
            <Rodape />
        </div>
    )
}