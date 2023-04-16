import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money,  } from "@phosphor-icons/react"
import { Button, ButtonConfirm, ContainerCheckout, Form, InfoLocation, InfoProduct, Input, InputGroup, Label, Legend, PaymentTypeButtonGroup, Table } from "./styles"

import { useCart } from "../../hooks/useCart"
import { ProductCart } from "../../components/ProductCart"

export const Checkout = () => {
    const { cart, totalCart, delivery } = useCart()

    return (
        <ContainerCheckout>
            <Form>
                <InfoLocation>
                    <Legend>Complete seu pedido</Legend>
                    <InputGroup>
                        <MapPinLine size={18} weight="light" color="#C47F17" />
                        <Label> Endereço de Entrega <span>Informe o endereço onde deseja receber seu pedido</span></Label>
                        <Input variant="medium" type="number" placeholder="CEP"/>
                        <Input variant="larger" type="text" placeholder="Rua"/>
                        <Input variant="small" type="number"placeholder="Número"/>
                        <Input variant="small" type="text" placeholder="UF" />
                        <Input variant="medium" type="text"placeholder="Complemento"/>
                        <Input variant="medium" type="text"placeholder="Bairro"/>
                        <Input variant="medium" type="text" placeholder="Cidade"/>
                    </InputGroup>

                    <InputGroup>
                        <CurrencyDollar color="#8047F8" size={18} weight="light" />
                        <Label> Pagamento <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span></Label>
                        <PaymentTypeButtonGroup>
                            <Button variant="larger"><CreditCard size={16} weight="light" /> CARTÃO DE CRÉDITO</Button>
                            <Button variant="larger"><Bank size={16} weight="light" /> CARTÃO DE DÉBITO</Button>
                            <Button variant="larger"><Money size={16} weight="light" /> DINHEIRO</Button>
                        </PaymentTypeButtonGroup>
                    </InputGroup>
                </InfoLocation>
                <InfoProduct>
                    <Legend>Cafés selecionados</Legend>
                    <InputGroup>
                        {cart.map((item) => {
                            return (
                                <ProductCart {...item} key={item.id} />
                            )
                        })}
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Total de itens</td>
                                    <td>R$ <span>{totalCart.value.toFixed(2)}</span></td>
                                </tr>
                                <tr>
                                    <td>Entrega</td>
                                    <td>R$ <span>{delivery()}</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <th>R$<span>{(delivery() + totalCart.value).toFixed(2)}</span></th>
                                </tr>
                            </tfoot>
                        </Table>
                        <ButtonConfirm>
                            CONFIRMAR PEDIDO
                        </ButtonConfirm>
                    </InputGroup>
                </InfoProduct>
            </Form>
        </ContainerCheckout>
    )
}