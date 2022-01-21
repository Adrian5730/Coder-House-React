import { useContext, useState } from 'react'
import ItemCount from '../../ItemListContainer/ItemCount/ItemCount'
import {Link} from 'react-router-dom'
import { cartContext } from '../../context/cartContext'


const ItemDetail = ({producto}) => {

    const {cartList, agregarAlCarrito} = useContext(cartContext)

   

    const [show, setShow] = useState(true)

    const onAdd = (contador) => {
        setShow(false)
        agregarAlCarrito({...producto, cantidad: contador})
        alert(`${contador}`)
    }
    return (
        <div>
            <h2>{producto.titulo}</h2>
            <h3>{producto.precio}</h3>
            <img src={`../${producto.imagen}`} alt={producto.titulo} />
            <br/>
            {show ? <ItemCount stock={producto.stock} onAdd={onAdd}/> : 
                <div>
                    <Link to='/cart'><button>Terminar la compra</button></Link>    
                    <Link to='/'><button>Seguir Comprando</button></Link>
                </div>}
            
        </div>
    )
}

export default ItemDetail
