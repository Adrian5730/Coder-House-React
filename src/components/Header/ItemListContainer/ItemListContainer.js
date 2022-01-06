import React, {useEffect, useState} from 'react'
import ItemCount from './ItemCount'
import { ItemList } from './ItemList';
import { traerProductos } from './products'
export const ItemListContainer = () => {
   
    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(()=>{
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
    },[]);
    


    return (
        <>
            {loading ? ( 
                <h3>Loading...</h3> 
            ) : (
                <div className='saludo'>
                    <ItemCount/>
                    <ItemList productos={data} />
                </div>
            ) }
            
        </>
    )
}
