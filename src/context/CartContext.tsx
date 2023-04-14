import { createContext, ReactNode, useEffect, useState } from 'react'

interface CategoryProps {
    id: string
    title: string
}

interface ProductProps {
    id: string
    name: string
    image: string
    description: string
    categories: CategoryProps[]
    price: string
    amount: number
}

interface ProductContextProps {
    cart: ProductProps[]
    addProductCart: (data: ProductProps) => void
    removeProductCart: (id: string) => void
}

interface CardProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext({} as ProductContextProps)

export function CartProvider({children}: CardProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>([])

    const addProductCart = (product: ProductProps) => {
        setCart((state) => [...state, product])
    }

    const removeProductCart = (id: string) => {
        setCart(cart.filter((product) => product.id !== id))
    }

    return (
        <CartContext.Provider value={{cart, addProductCart, removeProductCart}}>
            {children}
        </CartContext.Provider>
    )
}
