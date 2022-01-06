import React from 'react'
import {useState} from 'react'

const ItemCount = () => {
    
    const stock = 5;
    const [count, setCount] = useState(1)

    const  handleCount =() =>{
        if (stock===count) {
            alert('no queda mas stock')
        } else {
            setCount(count+1)
        }

    }

    const  handleDiscount =() =>{
        if (count===0) {
            alert('no tienes mas unidades')
        } else{
            setCount(count-1)
        }
    }

    const  message =() =>{
        alert("se activo agregar al carrito")
    }




    return (
        <>
            <button onClick={handleCount}>+</button>
            <p>{count}</p>
            <button onClick={handleDiscount}>-</button>
            <button onClick={message}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
