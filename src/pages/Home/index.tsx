import { CategoryProduct, ContainerBanner, ContainerProducts, DescriptionProduct, DescriptionServices, FooterProduct, IlustrationProduct, ImageProduct, InfoHeader, ItemProduct, ItemService, ListProducts, NameProduct, OrderClosing, OrderTotal, TitleMain, TitleProduct, ValueProduct } from "./styles"
import { ShoppingCart, ClockCountdown, Package, Coffee, Minus, Plus } from '@phosphor-icons/react'

import ilustration from '../../assets/Ilustration-coffee.svg'

import { data } from '../../data/products'





export const Home = () => {
    return (
        <>
            <ContainerBanner>
                <InfoHeader>
                    <TitleMain>
                        Encontre o café perfeito para qualquer hora do dia
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
                    </TitleMain>
                    <DescriptionServices>
                        <ItemService serviceColor="yellowDark">
                            <span><ShoppingCart size={16} weight="fill" /></span>Compra simples e segura
                        </ItemService>
                        <ItemService serviceColor="yellow">
                            <span><ClockCountdown size={16} weight="fill" /></span>Compra simples e segura
                        </ItemService>
                        <ItemService serviceColor="gray">
                            <span><Package size={16} weight="fill" /></span>Compra simples e segura
                        </ItemService>
                        <ItemService serviceColor="purple">
                            <span><Coffee size={16} weight="fill" /></span>Compra simples e segura
                        </ItemService>
                    </DescriptionServices>
                </InfoHeader>
                <IlustrationProduct src={ilustration} alt="" />
            </ContainerBanner>
            <ContainerProducts>
                <TitleProduct>
                    Nossos cafés
                </TitleProduct>
                <ListProducts>
                    {data.map((product) => {
                        return (
                            <ItemProduct>
                                <ImageProduct>
                                    <img src={`../../src/assets/coffees/${product.image}`} alt="" />
                                </ImageProduct>
                                    <CategoryProduct>
                                        {product.categories.map((category) => {
                                            return (
                                                <span>{category}</span>
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
                                            <button><Minus size={16} weight="bold" color="#4B2995" /></button>
                                            <span>{product.amount}</span>
                                            <button><Plus size={16} weight="bold" color="#4B2995" /></button>
                                        </OrderTotal>
                                        <OrderClosing>
                                            <ShoppingCart size={16} weight="fill" />
                                        </OrderClosing>
                                    </FooterProduct>  
                            </ItemProduct>
                        )
                    })}
                </ListProducts>
            </ContainerProducts>
        </>

    )
}