import React from 'react'
import {useState} from 'react'

const ItemCount = ({stock, onAdd}) => {
    
    const initial = 1;
    const [count, setCount] = useState(initial)

    const  handleCount =() =>{
        count <  stock
        ? setCount(prev => prev + 1)
        :console.log("stock maximo alcanzado")
    }

    const  handleDiscount =() =>{
        count > initial &&
            setCount( prev => prev - 1)
    }


    return (
        <div>
            <p>{count}</p>
            <button onClick={handleCount}>+</button>
            <button onClick={()=> onAdd(count)} disabled={count < 1 && 'disabled'}>Agregar al carrito</button>
            <button onClick={handleDiscount}>-</button>   
        </div>
    )
}

export default ItemCount
