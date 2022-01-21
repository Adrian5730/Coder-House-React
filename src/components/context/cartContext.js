//Creacioin del Contexto

import { createContext, useContext, useState } from "react";

export const cartContext = createContext([])

//Funcion que me evita importar el useContext en todos los achivos

export function useCartContext(){
    return useContext(cartContext)
}

//Creacion del componente que maneja el contexto 

export const CartContextProvider = ({children}) => {
    //Estados y funciones globales
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito(item){

       const index = cartList.findIndex(i => i.id === item.id)

       if(index > -1){
           const cantidadActual = cartList[index].cantidad

           cartList.splice(index, 1)
           setCartList([... cartList, {...item, cantidad: item.cantidad + cantidadActual}])
       } else {
           setCartList([...cartList, {...item, cantidad: item.cantidad}])
       }
        
    }

    function vaciarCarrito(){
        setCartList([])
    }

     return(
         <cartContext.Provider value={{
             cartList,
             agregarAlCarrito,
             vaciarCarrito
         }}>
             {children}
         </cartContext.Provider>
     )
}