import { useContext, useState } from 'react'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'
import { cartContext } from '../../../context/cartContext'
import './ItemDetail.css'


const ItemDetail = ({ producto }) => {

    const { agregarAlCarrito } = useContext(cartContext)



    const [show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito({ ...producto, cantidad: contador })
    }
    return (
        <Container className='containerItemDetail'>
            <Row>
                <Col className='containerImagen' xs={12} md={7} xl={8}>
                    <img src={`../${producto.imagenGrande}`} alt={producto.titulo} />
                </Col>
                <Col className='containerInfo' xs={12} md={5} xl={4}>
                    <Row>
                        <Col className='containerTitulo' xs={12} md={12} xl={12}>
                            <h2>{producto.titulo}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='containerPrecio' xs={12} md={12} xl={12}>
                            <h2>$ {producto.precio}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col className='containerCount' xs={12} md={12}  xl={12}>
                            {show ? <ItemCount stock={producto.stock} onAdd={onAdd} /> :
                                <div className='containerNavDetail'>
                                    <Link key={producto.id} to='/cart'><Button variant="success">Terminar la compra</Button></Link>
                                    <Link to='/'><Button variant="info">Seguir Comprando</Button></Link>
                                </div>}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail
