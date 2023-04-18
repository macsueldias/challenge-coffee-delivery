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

export function OrderProductsCart(itemA: ProductProps, itemB: ProductProps) {
  if (itemA.name > itemB.name) {
    return 1
  }
  if (itemA.name < itemB.name) {
    return -1
  }
  return 0
}
