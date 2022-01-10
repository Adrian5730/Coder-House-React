import React from 'react'
import { CartWidget } from './CartWidget'
import './NavBar.css'

// import '/NavBar.css'
export const NavBar = () => {
    return (
        <header id='header'>
            <div className="menu" >
                <ul>
                    <li><a href="a">Novedades</a></li>
                    <li><a href="a">Categorias</a>
                        <ul className="categorias">
                            <li><a href="a">Tecnologia</a></li>
                            <li><a href="a">Electro y Hogar</a></li>
                            <li><a href="a">Salud y Belleza</a></li>
                            <li><a href="a">Seguridad y Vigilacia</a></li>
                        </ul>
                    </li>
                    <li><a href="a">Ofertas</a></li>
                    <li><a href="a">Envios</a></li>
                    <li><a href="a">Contacto</a></li>
                </ul>
            </div>
            <CartWidget /*saludo={"hola estoy hablando desde navbar"}*/ />
        </header>
        
    )
}
