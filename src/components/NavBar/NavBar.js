import React from 'react'
import { Link } from 'react-router-dom'
import { CartWidget } from './CartWidget'
import './NavBar.css'

// import '/NavBar.css'
export const NavBar = () => {
    return (
        <>
            <header id='header'>
                <Link to={'/'} className="btnImg"><img src="../images/iconos/logo.svg" alt="Logo 'Empresa'" /></Link>
                <div className="menu" >
                    <div className="btnBurguer">
                        <i className="fas fa-times closeBtn"></i>
                    </div>
                    <ul>
                        <li><Link to={'/'}>Novedades</Link></li>
                        <li><Link to={'/categories'}>Categorias</Link>
                            <ul className="categorias">
                                <li><Link to={'/category/1'}>Tecnologia</Link></li>
                                <li><Link to={'/category/2'}>Electro y Hogar</Link></li>
                                <li><Link to={'/category/3'}>Salud y Belleza</Link></li>
                                <li><Link to={'/category/4'}>Seguridad y Vigilacia</Link></li>
                            </ul>
                        </li>
                        <li><Link to={'/'}>Ofertas</Link></li>
                        <li><Link to={'/'}>Envios</Link></li>
                        <li><Link to={'/'}>Contacto</Link></li>
                    </ul>
                </div>
                <div className="btnBurguer">
                    <i className="fas fa-bars menuBtn"></i>
                </div>
                <CartWidget /*saludo={"hola estoy hablando desde navbar"}*/ />
            </header>
            <div className='separador'></div>
        </>
    )
}
