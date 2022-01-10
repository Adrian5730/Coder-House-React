import {useEffect, useState} from 'react'
import { traerProductos } from '../TraerProductos/TraerProductos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    useEffect(() => {
        traerProductos
        .then(respuesta => setProducto(respuesta.find(respuest => respuest.id === '1')))
    }, [])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
