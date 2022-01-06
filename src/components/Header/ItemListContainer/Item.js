export const Item = ({producto}) => {

    return (
        <div>
            <h2>{producto.titulo}</h2>
            <h3>Precio: {producto.precio}</h3>
            <img src={producto.imagen} alt={producto.titulo} />
        </div>
    )
}
