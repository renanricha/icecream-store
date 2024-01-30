import React from "react"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <Link className="btn-sabores" to='/sabores'>Sabores</Link>
            <Link className="btn-sobre" to='/sobre'>Sobre</Link>
        </div>
    )
}