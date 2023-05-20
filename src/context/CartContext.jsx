import { createContext, useContext, useState } from "react"

const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setCartList] = useState([])

    const addToCart = (newProduct) =>{

        const idx = cartList.findIndex(prod => newProduct.id === prod.id)

        if (idx === -1) { 
            setCartList([
                ... cartList,
                newProduct
            ])
        }else{
            cartList[idx].cantidad += newProduct.cantidad
            setCartList([ ...cartList ])
        }

    }

    const precioTotal = () => cartList.reduce((total, objProducto) => total += (objProducto.cantidad * objProducto.precio), 0)

    const cantidadTotal= () => cartList.reduce((total, objProd) => total += objProd.cantidad, 0)

    const eliminarProducto = (pid) => {
        setCartList(cartList.filter(prod => prod.id !== pid))
    }

    const vaciarCarrito = () => {
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            vaciarCarrito,
            precioTotal,
            eliminarProducto,
            cantidadTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}