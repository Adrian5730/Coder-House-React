import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <div>
            <h2>{producto.titulo}</h2>
            <h3>{producto.precio}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
        </div>
    )
}

export default ItemDetail
