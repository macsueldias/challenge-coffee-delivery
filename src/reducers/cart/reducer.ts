import { OrderProductsCart } from '../../utils/orderProductsCart'
import { ActionTypes } from './actions'

export interface CategoryProps {
  id: string
  title: string
}

export interface ProductProps {
  id: string
  name: string
  image: string
  description: string
  categories: CategoryProps[]
  price: number
  amount: number
}

export function cartReducer(state: ProductProps[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      return [...state, action.payload.product].sort(OrderProductsCart)
    case ActionTypes.INCREMENT_AMOUNT_PRODUCT:
      return [...action.payload].sort(OrderProductsCart)
    case ActionTypes.REMOVE_PRODUCTS:
      return [...action.payload].sort(OrderProductsCart)
    case ActionTypes.REMOVE_PRODUCT:
      return [...action.payload].sort(OrderProductsCart)
    default:
      return state
  }
}
