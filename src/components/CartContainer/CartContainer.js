import { useCartContext } from '../../context/cartContext';
import {Link} from 'react-router-dom'
import CartProducts from './CartProducts/CartProducts';
import './Cart.css'

const CartContainer = () => {

    const { cartList } = useCartContext()

    return (
        <>
            {cartList.length !== 0 ? <CartProducts /> 
            : <h2>No tienes productos, puedes ir al <Link to="/">catalogo</Link></h2> }

        </>
    );
};

export default CartContainer;
