import React, {useEffect, useState} from 'react'
// import ItemCount from './ItemCount/ItemCount'
import { ItemList } from './ItemList/ItemList';
// import { traerProductos } from '../TraerProductos/TraerProductos'
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'

export const ItemListContainer = () => {
   
    const [data, setData] = useState({});
    const [loading, setloading] = useState(true);
    const { categoryId } = useParams()
    
    useEffect(()=>{

        const db = getFirestore()

        // const queryCollection = query(collection(db, 'productos'))
        // getDocs(queryCollection)
        // .then(respuesta => setData(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        // .catch(error => error)
        // .finally(()=> setloading(false))

        // const queryProducto = doc(db, 'productos', '5zhJArAmw3Y1GhRDCv2C')
        // getDoc(queryProducto)
        // .then(respuesta => setData({id: respuesta.id, ...respuesta.data()}))
        
        //Con firebase

        if (categoryId) {
            const queryCollection = query(collection(db, 'productos'), where('categoria', "==", categoryId))
            getDocs(queryCollection)
            .then(respuesta => setData(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch(error => error)
            .finally(()=> setloading(false))
        } else {
            const queryCollection = query(collection(db, 'productos'))
            getDocs(queryCollection)
            .then(respuesta => setData(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
            .catch(error => error)
            .finally(()=> setloading(false))
        }

        //Esto con los productos desde aca
        // if (categoryId) {
        //     traerProductos
        //     .then((respuesta)=>{
        //         setData(respuesta.filter(producto => producto.categoria === categoryId))
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         setloading(false )
        //     })
        // } else {  
        //     traerProductos
        //     .then((respuesta)=>{
        //         setData(respuesta)
        //     })
        //     .catch((error)=>{
        //         console.log(error)
        //     })
        //     .finally(()=>{
        //         setloading(false )
        //     })
        // }

    },[categoryId]);
    return (
        <>
            {loading ? ( 
                <h3>Cargando...</h3> 
            ) : (
                <div className='saludo'>
                    {/* <ItemCount/> */}
                    <ItemList productos={data} />
                </div>
            ) }
            
        </>
    )
}