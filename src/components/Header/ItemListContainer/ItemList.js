import { Item } from "./Item"

export const ItemList = ({productos}) => {
    return (
        <div>
            {productos.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
            ))}
        </div>
    )
}

//rafce


