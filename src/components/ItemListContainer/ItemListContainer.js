import React, { useEffect, useState } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import Loading from './Loading/Loading';

export const ItemListContainer = () => {

    const [data, setData] = useState({});
    const [loading, setloading] = useState(true);
    const { categoryId } = useParams()

    useEffect(() => {

        const db = getFirestore()

        if (categoryId) {
            const queryCollection = query(collection(db, 'productos'), where('categoria', "==", categoryId))
            getDocs(queryCollection)
                .then(respuesta => setData(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(error => error)
                .finally(() => setloading(false))
        } else {
            const queryCollection = query(collection(db, 'productos'))
            getDocs(queryCollection)
                .then(respuesta => setData(respuesta.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
                .catch(error => error)
                .finally(() => setloading(false))
        }

    }, [categoryId]);
    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <div className='saludo'>
                    <ItemList productos={data} />
                </div>
            )}

        </>
    )
}