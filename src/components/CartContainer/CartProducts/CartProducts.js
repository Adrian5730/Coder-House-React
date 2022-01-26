import { useCartContext } from '../../../context/cartContext';

const CartProducts = () => {

    const { cartList, precioTotal, vaciarCarrito, vaciarCarritoItem } = useCartContext()


    function redondearDecimales(numero, decimales) {
        const numeroRegexp = new RegExp('\\d\\.(\\d){' + decimales + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
        if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
            return Number(numero.toFixed(decimales));
        } else {
            return Number(numero.toFixed(decimales)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
        }
    }

    return (
        <>
            {cartList.map(producto =>
                <>
                    <div id='productsCart'>
                        <div id={producto.id} className="cartProduct">
                            <div className="product" >
                                <div className="card__imgproduct">
                                    <img src={`../${producto.imagen}`} alt="Imagen Producto" />
                                </div>

                                <div className="card__title">
                                    <h2>{producto.titulo}</h2>
                                </div>
                                <div className="card__cost">
                                    <p>{producto.cantidad}</p>
                                </div>
                                <div className="card__cost">
                                    <p>$<strong> {producto.cantidad === 1 ? redondearDecimales(producto.precio,3) : redondearDecimales(producto.precio * producto.cantidad, 3)}</strong></p>
                                </div>
                                <div className="card__cost">
                                    <button onClick={() =>vaciarCarritoItem(producto)} >Borrar</button>
                                </div>

                            </div>

                        </div>
                    </div>
                </>
            )}
            <div className="card__cost">

                <div className="card__cost">
                    Total ${redondearDecimales(precioTotal, 3)}
                </div>
            </div>
            <button onClick={vaciarCarrito}>Vaciar Carrito</button>
        </>
    );
};

export default CartProducts;
