import { createContext, useEffect, useState } from 'react'
import { OrderProductsCart } from '../utils/orderProductsCart'

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

interface AmountCartProps {
    amount: number
    value: number
}

interface ProductContextProps {
    cart: ProductProps[]
    totalCart: AmountCartProps
    addProductCart: (product: ProductProps, amount: number) => void
    removeProductCart: (id: string, amount: number) => void
    delivery: () => number
}


interface CardProviderProps {
    children: React.ReactNode
}

export const CartContext = createContext({} as ProductContextProps)

export function CartProvider({children}: CardProviderProps) {
    const [cart, setCart] = useState<ProductProps[]>([])
    const [totalCart, setTotalCart] = useState<AmountCartProps>({amount: 0, value: 0})

    const addProductCart = (product: ProductProps, amount: number) => {
        const listOfOtherProducts = cart.filter((item) => item.id !== product.id)
        if(cart.includes(product) || amount !== 1) {
            setCart([...listOfOtherProducts, {...product, amount}].sort(OrderProductsCart))
        } else {
            setCart((state) => [...state, product].sort(OrderProductsCart))
        }
    }

    const removeProductCart = (id: string, amount = 0 ) => {
        const listOfOtherProducts = cart.filter((item) => item.id !== id)
        const product = cart.filter((item) => item.id === id)
        if (amount > 0) {
            setCart([...listOfOtherProducts, {...product[0], amount: amount}].sort(OrderProductsCart))
        }else {
            setCart(cart.filter((product) => product.id !== id))
        }
    }

    const delivery = () => {
        if(totalCart.value == 0) {
            return 0
        } else if(totalCart.value < 50) {
            return totalCart.value / 10
        } else {
            return 10
        }
    }

    useEffect(() => {
        const amountProducts = cart.reduce(
            (acc, currentValue) => currentValue.amount + acc, 0
            )

        const valueProducts = cart.reduce((acc, currentValue) => (Number(currentValue.price) * currentValue.amount) + acc, 0)
        setTotalCart({amount: amountProducts, value: valueProducts})
    }, [cart])

    return (
        <CartContext.Provider value={{cart, totalCart, addProductCart, removeProductCart, delivery}}>
            {children}
        </CartContext.Provider>
    )
}
