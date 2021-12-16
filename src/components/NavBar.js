//rfc
//rafc
import React from 'react'

export const NavBar = () => {
    return (
        <header id="header">
            <div className="menu" >
                <ul>
                    <li><a href="#">Novedades</a></li>
                    <li><a href="#">Categorias</a>
                    <ul className="categorias">
                        <li><a href="#">Tecnologia</a></li>
                        <li><a href="#">Electro y Hogar</a></li>
                        <li><a href="#">Salud y Belleza</a></li>
                        <li><a href="#">Seguridad y Vigilacia</a></li>
                    </ul>
                    </li>
                    <li><a href="#">Ofertas</a></li>
                    <li><a href="#">Envios</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </header>
    )
}
