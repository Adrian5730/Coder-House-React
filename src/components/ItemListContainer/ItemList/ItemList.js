import { Item } from "../Item/Item"

export const ItemList = ({productos}) => {
    return (
        <section  id="products">
            {productos.map((producto)=>(
                <Item key={producto.id} producto={producto}/>
            ))}
        </section>
    )
}

//rafce


