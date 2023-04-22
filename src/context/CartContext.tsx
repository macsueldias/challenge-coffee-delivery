import React, { createContext, useEffect, useReducer, useState } from 'react'
import {
  addProductCartReducer,
  decrementAmountCartReducer,
  incrementProductCartReducer,
  removeProductCartReducer,
} from '../reducers/cart/actions'
import { cartReducer } from '../reducers/cart/reducer'

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
  price: number
  amount: number
}

interface AmountCartProps {
  amount: number
  value: number
}

interface OrderProps {
  cep: number
  street: string
  complement: string
  neighborhood: string
  city: string
  uf: string
  number: number
  payment: string
}

interface ProductContextProps {
  cart: ProductProps[]
  totalCart: AmountCartProps
  order: OrderProps
  EntryOrder: (order: OrderProps) => Promise<boolean>
  addProductCart: (product: ProductProps, amount: number) => void
  removeProductCart: (id: string, amount: number) => void
  delivery: () => number
}

interface CardProviderProps {
  children: React.ReactNode
}

export const CartContext = createContext({} as ProductContextProps)

export function CartProvider({ children }: CardProviderProps) {
  const [cart, dispatch] = useReducer(cartReducer, [], () => {
    const storedStateAsJSON = localStorage.getItem(
      '@coffed-delivery:cart-1.0.0',
    )

    if (storedStateAsJSON) {
      return JSON.parse(storedStateAsJSON)
    }
  })

  useEffect(() => {
    const stateJson = JSON.stringify(cart)

    localStorage.setItem('@coffed-delivery:cart-1.0.0', stateJson)
  }, [cart])

  const [totalCart, setTotalCart] = useState<AmountCartProps>(
    {} as AmountCartProps,
  )

  const [order, setOrder] = useState<OrderProps>({} as OrderProps)

  const EntryOrder = async (order: OrderProps) => {
    try {
      setOrder(order)
    } catch (error) {
      console.log('Endereço não foi salvo')
    }
    return true
  }

  const addProductCart = (product: ProductProps, amount: number) => {
    const listOfOtherProducts = cart.filter((item) => item.id !== product.id)
    const containProductInCart = cart.find((item) => item.id === product.id)
    let productCurrent = product
    if (containProductInCart) {
      productCurrent = cart.find((item) => item.id === product.id)
    }

    if (containProductInCart || amount !== 1) {
      dispatch(
        incrementProductCartReducer([
          ...listOfOtherProducts,
          { ...product, amount },
        ]),
      )
    } else {
      dispatch(addProductCartReducer({ ...productCurrent, amount }))
    }
  }

  const removeProductCart = (id: string, amount = 0) => {
    const listOfOtherProducts = cart.filter((item) => item.id !== id)
    const product = cart.filter((item) => item.id === id)
    if (amount > 0) {
      dispatch(
        decrementAmountCartReducer([
          ...listOfOtherProducts,
          { ...product[0], amount },
        ]),
      )
    } else {
      dispatch(removeProductCartReducer([...listOfOtherProducts]))
    }
  }

  console.log(cart)

  const delivery = () => {
    if (totalCart.value === 0) {
      return 0
    } else if (totalCart.value < 50) {
      return totalCart.value / 10
    } else {
      return 10
    }
  }

  useEffect(() => {
    const amountProducts = cart.reduce(
      (acc, currentValue) => currentValue.amount + acc,
      0,
    )

    const valueProducts = cart.reduce(
      (acc, currentValue) =>
        Number(currentValue.price) * currentValue.amount + acc,
      0,
    )
    setTotalCart({ amount: amountProducts, value: valueProducts })
  }, [cart])

  return (
    <CartContext.Provider
      value={{
        cart,
        totalCart,
        order,
        EntryOrder,
        addProductCart,
        removeProductCart,
        delivery,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
