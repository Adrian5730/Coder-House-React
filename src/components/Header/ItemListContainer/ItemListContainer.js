import React from 'react'
import {useState} from 'react'
import ItemCount from './ItemCount'

export const ItemListContainer = () => {
   
    // const [count, setCount] = useState(0)
    // const  handleCount =() =>{
    //     setCount(count+1)
    // }
    
    return (
        <div className='saludo'>
            {/* <p>Saludos xd</p> */}
            {/* <button onClick={handleCount}>+</button> */}

            <ItemCount/>
        </div>
    )
}
