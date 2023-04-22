import { ProductProps } from './reducer'

export enum ActionTypes {
  ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
  INCREMENT_AMOUNT_PRODUCT = 'INCREMENT_AMOUNT_PRODUCT',
  REMOVE_PRODUCTS = 'REMOVE_PRODUCTS',
  REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export function incrementProductCartReducer(
  listOfOtherProducts: ProductProps[],
) {
  return {
    type: ActionTypes.INCREMENT_AMOUNT_PRODUCT,
    payload: listOfOtherProducts,
  }
}

export function addProductCartReducer(product: ProductProps) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      product,
    },
  }
}

export function decrementAmountCartReducer(product: ProductProps[]) {
  return {
    type: ActionTypes.REMOVE_PRODUCTS,
    payload: [...product],
  }
}

export function removeProductCartReducer(product: ProductProps[]) {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
    payload: [...product],
  }
}
