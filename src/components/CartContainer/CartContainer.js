import { useCartContext } from '../../context/cartContext';
import  CartVacio  from './CartVacio/CartVacio'
import CartProducts from './CartProducts/CartProducts';
import './CartContainer.css'

const CartContainer = () => {

    const { cartList } = useCartContext()

    return (
        <>
            {cartList.length !== 0 ? <CartProducts /> 
            : <CartVacio /> }

        </>
    );
};

export default CartContainer;
