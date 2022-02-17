import { useCartContext } from '../../../context/cartContext';
import { collection, getFirestore, addDoc, query, documentId, writeBatch, getDocs, where } from 'firebase/firestore'
import './CartProducts.css'
import { Container, Row, Col, Button, Form } from 'react-bootstrap'
import { useState } from 'react';

const CartProducts = () => {

    const { cartList, precioTotal, vaciarCarrito, vaciarCarritoItem } = useCartContext()
    const [datosCliente, setdatosCliente] = useState({})




    const realizarCompra = async () => {
        let orden = {}

        orden.buyer = datosCliente;
        orden.total = precioTotal;

        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.titulo;
            const precio = cartItem.precio * cartItem.cantidad;
            const cantidad = cartItem.cantidad;

            return { id, nombre, precio, cantidad }
        })


        const db = getFirestore()
        const ordenCollection = collection(db, 'ordenes')
        await addDoc(ordenCollection, orden)
            .then(resp => console.log(resp))
            .catch(error => console.log(error))
            .finally(() => console.log('cargando'))

        const queryCollection = collection(db, 'productos')
        const queryActualizarStock = query(
            queryCollection, where(documentId(), 'in', cartList.map(it => it.id))
        )
        const batch = writeBatch(db)

        await getDocs(queryActualizarStock)
            .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cartList.find(item => item.id === res.id).cantidad
            })
            ))
            .catch(error => console.log(error))
            .finally(() => console.log('stock actualizado'))

        batch.commit()

    }

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
            <Container>
                {cartList.map(producto =>

                    <Row id='productsCart'>
                        <div id={producto.id} className="cartProduct" >
                            <div className="product">
                                <Col className="card__imgproduct" xs={2} xl={2}>
                                    <img src={`../${producto.imagen}`} alt="Imagen Producto" />
                                </Col>

                                <Col className="card__title" xs={5} xl={7}>
                                    <h2>{producto.titulo}</h2>
                                </Col>
                                <Col className="card__cantidad" xs={1} xl={1}>
                                    <p>{producto.cantidad}</p>
                                </Col>
                                <Col className="card__cost" xs={1} xl={1}>
                                    <p>$<strong> {producto.cantidad === 1 ? redondearDecimales(producto.precio, 3) : redondearDecimales(producto.precio * producto.cantidad, 3)}</strong></p>
                                </Col>
                                <Col className="card__button" xs={3} xl={1}>
                                    <Button variant="danger" onClick={() => vaciarCarritoItem(producto)} >Borrar</Button>
                                </Col>
                            </div>
                        </div>
                    </Row>

                )}
            </Container>
            <Container className="container_total">
                <Row>
                    <Col className='container_Vaciar' xl={12}>
                        <Button variant='danger' onClick={vaciarCarrito}>Vaciar Carrito</Button>
                    </Col>
                </Row>
                <Row className='container_info_total'>
                    <Col className='spanTotal' xs={5} xl={9}>
                        <strong><span>Total</span></strong>
                    </Col>
                    <Col xs={7} xl={3} className='precio_total' >
                        <span>$ <strong>{redondearDecimales(precioTotal, 3)}</strong></span>
                    </Col>
                </Row>
            </Container>
            <Container className='container_vaciar'>
                <Row>
                    <Col xl={12}>
                        <Form>
                            <Col xl={{ offset: 3, span: 6 }}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Nombre</Form.Label>
                                    <Form.Control required onChange={event => setdatosCliente({ ...datosCliente, nomnbre: event.target.value })} type="text" placeholder="Adrian Olave" />
                                </Form.Group>
                            </Col>
                            <Col xl={{ offset: 3, span: 6 }} >
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Correo</Form.Label>
                                    <Form.Control required onChange={event => setdatosCliente({ ...datosCliente, correo: event.target.value })} type="email" placeholder="Password" />
                                </Form.Group>
                            </Col>
                            <Col xl={{ offset: 3, span: 6 }} >
                                <Form.Group className="mb-3" controlId="Prueba@gmail.com">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control required onChange={event => setdatosCliente({ ...datosCliente, telefono: event.target.value })} type="number" placeholder="1125121089" />
                                </Form.Group>
                            </Col>
                            <Button variant='success' type='submit' onClick={realizarCompra}>Generar Compra</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartProducts;
