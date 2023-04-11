import { Cart, ContainerHeader, ContentInfo, ImageLogo, Location } from "./styles"
import  Logo  from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export const Header = () => {
    return (
        <ContainerHeader>
            <ImageLogo src={Logo} alt="" />
            <ContentInfo>
                <Location><MapPin size={18} weight="fill" color="#8047F8" />Piracicaba-SP</Location>
                <Cart><ShoppingCart size={18} weight="fill" color="#C47F17" /></Cart>
            </ContentInfo>
        </ContainerHeader>
    )
}