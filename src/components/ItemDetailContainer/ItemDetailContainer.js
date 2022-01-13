import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { traerProductos } from '../TraerProductos/TraerProductos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { productId } = useParams();
    useEffect(() => {
        traerProductos
        .then(respuesta => setProducto(respuesta.find(respuest => respuest.id === productId )))
    }, [productId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
