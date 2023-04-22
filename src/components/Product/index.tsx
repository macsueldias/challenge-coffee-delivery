import { Minus, Plus, ShoppingCart } from '@phosphor-icons/react'
import {
  CategoryProduct,
  DescriptionProduct,
  FooterProduct,
  ImageProduct,
  ItemProduct,
  NameProduct,
  OrderClosing,
  OrderTotal,
  ValueProduct,
} from './styles'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'

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

export const Product = (product: ProductProps) => {
  const [amount, setAmount] = useState(0)

  const { addProductCart, cart } = useCart()

  function handleIncrement() {
    setAmount(amount + 1)
  }

  function handleDecrement() {
    if (amount > 0) {
      setAmount(amount - 1)
    }
  }

  return (
    <ItemProduct>
      <ImageProduct>
        <img src={`coffees/${product.image}`} alt={product.name} />
      </ImageProduct>

      <CategoryProduct>
        {product.categories.map((category) => {
          return <span key={category.id}>{category.title}</span>
        })}
      </CategoryProduct>

      <NameProduct>{product.name}</NameProduct>
      <DescriptionProduct>{product.description}</DescriptionProduct>

      <FooterProduct>
        <ValueProduct>
          R$ <span>{product.price.toFixed(2)}</span>
        </ValueProduct>

        <OrderTotal>
          <button onClick={handleDecrement}>
            <Minus size={16} weight="bold" color="#4B2995" />
          </button>
          <span>{amount}</span>
          <button onClick={handleIncrement}>
            <Plus size={16} weight="bold" color="#4B2995" />
          </button>
        </OrderTotal>

        <OrderClosing onClick={() => addProductCart(product, amount)}>
          <ShoppingCart size={16} weight="fill" />
        </OrderClosing>
      </FooterProduct>
    </ItemProduct>
  )
}
