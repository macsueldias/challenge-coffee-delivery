import { Cart, ContainerHeader, ContentInfo, ImageLogo, Location } from "./styles"
import  Logo  from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCart } from "../../hooks/useCart"
import { NavLink } from "react-router-dom"

export const Header = () => {
    const { totalCart } = useCart()

    return (
        <ContainerHeader>
            <NavLink to="/">
                <ImageLogo src={Logo} alt="" />
            </NavLink>
            <ContentInfo>
                <Location><MapPin size={18} weight="fill" color="#8047F8" />Piracicaba-SP</Location>
                <NavLink to="/checkout">
                    <Cart><ShoppingCart size={18} weight="fill" color="#C47F17" />
                        {totalCart.amount > 0 && (
                            <span>{totalCart.amount}</span>
                        )}
                    </Cart>
                </NavLink>
            </ContentInfo>
        </ContainerHeader>
    )
}