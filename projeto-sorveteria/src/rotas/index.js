import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomePage from '../paginas/HomePage';

const Rotas = () => (
    <div>
        <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <HomePage/> }/>
            <Route path="/sabores" element={ <Sabores/> }/>
            <Route path="/sobre" element={ <Sobre/> }/>
        </Routes>
        </BrowserRouter>
    </div>
    )

export default Rotas