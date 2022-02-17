import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import './ItemCount.css'

const ItemCount = ({ stock, onAdd }) => {

    const initial = 1;
    const [count, setCount] = useState(initial)

    const handleCount = () => {
        count < stock
            ? setCount(prev => prev + 1)
            : console.log("stock maximo alcanzado")
    }

    const handleDiscount = () => {
        count > initial &&
            setCount(prev => prev - 1)
    }


    return (
        <>
            <div className='cantainerOperaciones'>
                <Button className='operaciones' onClick={handleCount}>+</Button>
                <span>{count}</span>
                <Button className='operaciones' onClick={handleDiscount}>-</Button>
            </div>
            <div className='cantainerAgregarCart'>
                <Button onClick={() => onAdd(count)} disabled={count < 1 && 'disabled'}>Agregar al carrito</Button>
            </div>
        </>
    )
}

export default ItemCount
