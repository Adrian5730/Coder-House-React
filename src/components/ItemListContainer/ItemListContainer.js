import React, {useEffect, useState} from 'react'
// import ItemCount from './ItemCount/ItemCount'
import { ItemList } from './ItemList/ItemList';
import { traerProductos } from '../TraerProductos/TraerProductos'
import { useParams } from 'react-router-dom';
export const ItemListContainer = () => {
   
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);
    const { categoryId } = useParams()
    
    useEffect(()=>{

        if (categoryId) {
            traerProductos
            .then((respuesta)=>{
                setData(respuesta.filter(producto => producto.categoria === categoryId))
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setloading(false )
            })
        } else {  
            traerProductos
            .then((respuesta)=>{
                setData(respuesta)
            })
            .catch((error)=>{
                console.log(error)
            })
            .finally(()=>{
                setloading(false )
            })
        }

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