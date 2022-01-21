
import { useCartContext } from '../context/cartContext';


const Cart = () => {

    const { cartList, vaciarCarrito } = useCartContext()
    return (
        <div>
            {cartList.map(producto => <li key={producto.id}>{producto.titulo} - cantidad: {producto.cantidad} <img src={producto.imagen}/> </li>)}
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </div>
    );
};

export default Cart;
