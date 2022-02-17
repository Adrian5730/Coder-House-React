import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CartVacio.css'

const CartVacio = () => {

    return (
        <>
            <Container className='carritoVacio'>
                <Row>
                    <Col xl={12}>
                    <h2>No tienes productos, puedes ir al <Link to="/">catalogo</Link></h2>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12}>
                        <img src='../images/iconos/carritoVacio.png'  alt="Imagen Carrito Vacio"/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CartVacio;
