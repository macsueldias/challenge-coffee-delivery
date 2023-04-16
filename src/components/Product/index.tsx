import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { CategoryProduct, DescriptionProduct, FooterProduct, ImageProduct, ItemProduct, NameProduct, OrderClosing, OrderTotal, ValueProduct } from "./styles"
import { useCart } from "../../hooks/useCart"
import { useState } from "react"

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

export const Product = (product : ProductProps) => {
    const [amount, setAmount] = useState(0)

    const  {addProductCart} = useCart()

    function handleIncrement() {
        setAmount(amount + 1)
    }
    
    function handleDecrement() {
        setAmount(amount - 1)
    }
    
    return (
        <ItemProduct>
            <ImageProduct>
                <img src={`../../src/assets/coffees/${product.image}`} alt="" />
            </ImageProduct>
                <CategoryProduct>
                    {product.categories.map((category) => {
                        return (
                            <span key={category.id}>{category.title}</span>
                        )
                    })}
                </CategoryProduct>
                <NameProduct>{product.name}</NameProduct>
                <DescriptionProduct>{product.description}</DescriptionProduct>
                <FooterProduct>
                    <ValueProduct>
                        R$ <span>{product.price}</span>
                    </ValueProduct>
                    <OrderTotal>
                        <button onClick={handleDecrement}><Minus size={16} weight="bold" color="#4B2995" /></button>
                        <span>{amount}</span>
                        <button onClick={handleIncrement}><Plus size={16} weight="bold" color="#4B2995" /></button>
                    </OrderTotal>
                    <OrderClosing onClick={() => addProductCart(product, amount)}>
                        <ShoppingCart size={16} weight="fill" />
                    </OrderClosing>
                </FooterProduct>  
        </ItemProduct>
    )
}