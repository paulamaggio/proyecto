import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './styles.css'

let navegacion = [
    { nombre:'Home', ruta:'/', },
    { nombre:'Favoritos', ruta:'/favoritos', },
    { nombre:'Populares', ruta:'/populares', },
    { nombre:'Cartelera', ruta:'/cartelera', },
]

export default function Header(){

    return (
        <nav>
            <ul className="logo">
                <img src="./img/logo.png" alt="" />
            </ul>
        
            <ul className="main-nav">
                {
                    navegacion.map((elem) => <li>
                        <Link to={elem.ruta}>
                            {elem.nombre}
                        </Link>
                    </li>)
                }
            </ul>
        </nav>      
  )}
