import React from 'react'

const ItemDetail = ({producto}) => {
    return (
        <div>
            {producto.titulo}
            <img src={producto.imagen} alt={producto.titulo} />
        </div>
    )
}

export default ItemDetail
