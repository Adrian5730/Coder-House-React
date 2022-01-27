import { doc, getDoc, getFirestore } from 'firebase/firestore'
import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
// import { traerProductos } from '../TraerProductos/TraerProductos'
import ItemDetail from './ItemDetail/ItemDetail'

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const { productId } = useParams();
    useEffect(() => {

        //Con firebase
        const db = getFirestore()

        const queryProducto = doc(db, 'productos', productId)
        getDoc(queryProducto)
        .then(respuesta => setProducto({id: respuesta.id, ...respuesta.data()}))

        //Esto con los productos desde aca
        // traerProductos
        // .then(respuesta => setProducto(respuesta.find(respuest => respuest.id === productId )))



    }, [productId])
    
    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer
