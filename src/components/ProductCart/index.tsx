import { Minus, Plus, Trash } from "@phosphor-icons/react"
import { OrderTotal } from "../Product/styles"
import { ActionOrder, ContainerProductCart, Separator } from "./styles"
import { useCart } from "../../hooks/useCart"
import { Button } from "../../pages/Checkout/styles"
import { useEffect, useState } from "react"

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

export const ProductCart = (itemprod: ProductProps) => {
    const { addProductCart, removeProductCart } = useCart()
    const [amount, setAmount] = useState(itemprod.amount)

    function handleIncrement() {
        setAmount(amount + 1)
        addProductCart(itemprod, amount + 1)
    }
    
    function handleDecrement() {
        setAmount(amount - 1)
        removeProductCart(itemprod.id, amount - 1)
    }

    return (
        <ContainerProductCart>
            <img src={`../src/assets/coffees/${itemprod.image}`} alt={itemprod.name} />
                <div>
                    <p>{itemprod.name}</p>
                    <ActionOrder>
                        <OrderTotal>
                            <button type="button" onClick={handleDecrement}><Minus size={16} weight="regular" color="#4B2995" /></button>
                                <span>{amount}</span>
                            <button type="button" onClick={handleIncrement}><Plus size={16} weight="regular" color="#4B2995" /></button>
                        </OrderTotal>
                        <Button variant="small"><Trash size={16} weight="regular" /> Remover</Button>
                    </ActionOrder>
                </div>
                <p>
                    R$ <span>{(Number(itemprod.price) * amount).toFixed(2)}</span>
                </p>
            <Separator />
        </ContainerProductCart>
    )
}