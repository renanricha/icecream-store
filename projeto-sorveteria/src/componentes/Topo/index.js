import React from "react"
import { Link } from 'react-router-dom'
import './style.css'

export default function Topo() {
    return (
        <header>
            <div className="container">
                <img src='/assets/logo.png' alt='logo da pagina' />
                <nav className="topo-links">
                    <Link className="option-link" to='/'>Home</Link>
                    <Link className="option-link" to='/sabores'>Sabores</Link>
                    <Link className="option-link" to='/sobre'>Sobre</Link>
                </nav>
            </div>
        </header>
    )
}