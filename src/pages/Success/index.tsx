import { MapPinLine, Money, Timer } from "@phosphor-icons/react"
import { IlustrationProduct, Title } from "../Home/styles"
import { Label } from "../Checkout/styles"
import illustration from '../../assets/Illustration.png'
import { ContainerSuccess, ContentOrder, ContentSuccess, InfoOrder } from "./styles"


export const Success = () => {
    return (
        <ContainerSuccess>
            

            <ContentSuccess>
                <ContentOrder>
                    <Title titleColor="yellowDark">
                        Uhu! Pedido confirmado
                    </Title>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                    <InfoOrder>
                        <div>
                            <MapPinLine color="#8047F8" size={18} weight="fill" />
                            <Label> Entrega em <b>Rua João Daniel Martinelli, 102</b> <span>Farrapos - Porto Alegre, RS</span></Label>
                        </div>
                        <div>
                            <Timer color="#DBAC2C" size={18} weight="fill" />
                            <Label> Previsão de entrega <span><b>20 min - 30 min</b></span></Label>
                        </div>
                        <div>
                            <Money color="#C47F17" size={18} weight="fill" />
                            <Label> Pagamento na entrega <span><b>Cartão de Crédito</b></span></Label>
                        </div>
                    </InfoOrder>
                </ContentOrder>
                <img src={illustration} alt="" />
            </ContentSuccess>
            
        </ContainerSuccess>
    )
}