import { Minus, Plus, ShoppingCart } from "@phosphor-icons/react"
import { CategoryProduct, DescriptionProduct, FooterProduct, ImageProduct, ItemProduct, NameProduct, OrderClosing, OrderTotal, ValueProduct } from "./styles"

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

export const Product = ({name, image, description, price, amount, categories}: ProductProps) => {
    
    return (
        <ItemProduct>
            <ImageProduct>
                <img src={`../../src/assets/coffees/${image}`} alt="" />
            </ImageProduct>
                <CategoryProduct>
                    {categories.map((category) => {
                        return (
                            <span key={category.id}>{category.title}</span>
                        )
                    })}
                </CategoryProduct>
                <NameProduct>{name}</NameProduct>
                <DescriptionProduct>{description}</DescriptionProduct>
                <FooterProduct>
                    <ValueProduct>
                        R$ <span>{price}</span>
                    </ValueProduct>
                    <OrderTotal>
                        <button><Minus size={16} weight="bold" color="#4B2995" /></button>
                        <span>{amount}</span>
                        <button><Plus size={16} weight="bold" color="#4B2995" /></button>
                    </OrderTotal>
                    <OrderClosing>
                        <ShoppingCart size={16} weight="fill" />
                    </OrderClosing>
                </FooterProduct>  
        </ItemProduct>
    )
}