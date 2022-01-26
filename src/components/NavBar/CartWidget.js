import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext';
import './CartWidget.css'

export const CartWidget = () => {

    const { cartList, cantidad } = useCartContext()
    return (
        <>

            <div className='contenedorCarrito'>
                <Link to="/cart" id='iconCarrito'>
                    <Button variant="dark"  >
                        <i class="fas fa-shopping-cart"></i>
                    </Button>
                    {cartList.length !== 0 &&
                    <Button className='itemsCarrito' variant="danger">
                        <span >{cantidad}</span>
                    </Button>
                    }
                </Link>
            </div>


        </>
    )
}