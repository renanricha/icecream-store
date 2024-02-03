import React from "react"
import './style.css'

export default function Rodape() {
    return (
        <footer>
            <div className="sup">
                <img src="assets/logo.png" alt="logo" />
                <div className="cont">
                    <h2>ENDEREÇO</h2>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div className="cont">
                    <h2>CONTATO</h2>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div className="cont">
                    <h2>HORÁRIOS</h2>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className="inf">
                <p>Gelateria. Orgulhosamente desenvolvido por "Renan Richa"</p>
            </div>
        </footer>
    )
}