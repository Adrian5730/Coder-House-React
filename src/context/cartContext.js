//Creacioin del Contexto

import { createContext, useContext, useState } from "react";

export const cartContext = createContext([])

//Funcion que me evita importar el useContext en todos los achivos

export function useCartContext() {
    return useContext(cartContext)
}

//Creacion del componente que maneja el contexto 

export const CartContextProvider = ({ children }) => {
    //Estados y funciones globales
    const [cartList, setCartList] = useState([])
    const [precioTotal, setPrecioTotal] = useState(0)
    const [cantidad, setCantidad] = useState(0)

    function agregarAlCarrito(item) {

        const index = cartList.findIndex(i => i.id === item.id)

        if (index > -1) {
            const cantidadActual = cartList[index].cantidad
                cartList.splice(index, 1)
            setCartList([...cartList, { ...item, cantidad: item.cantidad + cantidadActual }])
            setPrecioTotal(precioTotal + (item.precio*item.cantidad))
            setCantidad(cantidad + item.cantidad)
        } else {
            setCartList([...cartList, { ...item, cantidad: item.cantidad }])
            setPrecioTotal(precioTotal + (item.precio*item.cantidad))
            setCantidad(cantidad + item.cantidad)
        }
        
    }

    function vaciarCarritoItem(item){
        const nuevoCarrito = cartList.filter(i => i.id !== item.id)
        setCartList(nuevoCarrito)
        setPrecioTotal(item.precio*item.cantidad-precioTotal)
        setCantidad(cantidad - item.cantidad)
    }

    function vaciarCarrito() {
        setCartList([])
        setPrecioTotal(0)
        setCantidad(0)
    }

    return (
        <cartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            precioTotal,
            cantidad,
            vaciarCarrito,
            vaciarCarritoItem
        }}>
            {children}
        </cartContext.Provider>
    )
}