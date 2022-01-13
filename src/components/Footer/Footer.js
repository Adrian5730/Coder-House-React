import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <footer className="contacto">
            <div className="contenedorInfo">
                <div className="infoRedes">
                    <span>Encontranos en:</span>
                    <Link to="https://www.facebook.com" rel="noreferrer" target="_blank"><img src="../images/redes/facebook.svg" alt="facebook" /></Link>
                    <Link to="https://twitter.com" rel="noreferrer" target="_blank"><img src="../images/redes/twitter.svg" alt="twitter" /></Link>
                    <Link to="https://www.instagram.com" rel="noreferrer" target="_blank"><img src="../images/redes/instagram.svg" alt="instagram" /></Link>
                </div>
                <span>© Gijutsu 2021 - Todos los derechos reservados</span>
            </div>
            <div className="linea"></div>
            <div className="contenedorInfo">
                <div className="nosotros">
                    <Link to="#">Nosotros</Link>
                    <Link to="#">Contactanos</Link>
                    <Link to="#">Politicas de privacidad</Link>
                </div>
            </div>
            <div className="linea"></div>
            <div className="contenedorInfo ">
                <div className="tarjeta">
                    <img src="../images/iconos/creditCard.svg" alt="#" />
                        <p>¡Podés pagar con nuestras tarjetas seleccionadas en cuotas y sin interés!</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
