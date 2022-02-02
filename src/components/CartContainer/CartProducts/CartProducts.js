import { useCartContext } from '../../../context/cartContext';
import {  collection, getFirestore, addDoc, doc, updateDoc, query, documentId, writeBatch, getDocs, where } from 'firebase/firestore'

const CartProducts = () => {

    const { cartList, precioTotal, vaciarCarrito, vaciarCarritoItem } = useCartContext()


    const realizarCompra = async () => {
        let orden = {}

        orden.buyer = { nombre: 'Adrian', email: 'adrian@adrian.com', tel: '7831711' }
        orden.total = precioTotal; 

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.titulo;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad;

            return {id, nombre, precio, cantidad}
        })
        
        //Guardando Orden
        const db = getFirestore()
        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
        .then(resp => console.log(resp))
        .catch(error => console.log(error))
        .finally(() => console.log('cargando'))

        //actualizando
        // const orderDoc = doc(db, 'productos','94TwnUVfDzf3rZ2Z0qaI');
        // updateDoc(orderDoc, {precio: 199.999})


        //actualizar Stock
        const queryCollection = collection(db, 'productos')

        //console.log(queryCollection)
        const queryActualizarStock = query(
            queryCollection, where(documentId(), 'in', cartList.map(it => it.id))
        )
        const  batch = writeBatch(db)

        await getDocs(queryActualizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref,{
            stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
        ))
        .catch(error => console.log(error))
        .finally(()=> console.log('stock actualizado'))

        batch.commit()

    }

    

    return (
        <>
            {cartList.map(prod => <li key={prod.id}>{prod.titulo} - cant: {prod.cantidad}</li>)}
            <button onClick={vaciarCarrito}>vaciarCarrito</button>
            <button onClick={realizarCompra}>Generar Orden</button>




            {/* {cartList.map(producto =>
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
                                    <p>$<strong> {producto.cantidad === 1 ? redondearDecimales(producto.precio, 3) : redondearDecimales(producto.precio * producto.cantidad, 3)}</strong></p>
                                </div>
                                <div className="card__cost">
                                    <button onClick={() => vaciarCarritoItem(producto)} >Borrar</button>
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
            <button onClick={vaciarCarrito}>Vaciar Carrito</button> */}
        </>
    );
};

export default CartProducts;
