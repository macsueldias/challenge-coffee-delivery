import { MapPinLine, Minus, Plus, Trash } from "@phosphor-icons/react"
import { ActionOrder, ButtonConfirm, ButtonRemove, ContainerCheckout, Form, InfoLocation, InfoProduct, Input, InputGroup, Label, Legend, ProductCart, Separator, Table } from "./styles"

import coffe from '../../assets/coffees/Coffee-3.png'
import { OrderTotal } from "../Home/styles"

export const Checkout = () => {
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
                </InfoLocation>
                <InfoProduct>
                    <Legend>Cafés selecionados</Legend>
                    <InputGroup>
                        <ProductCart>
                            <img src={coffe} alt="" />
                            <div>
                                <p>Expresso Tradicional</p>
                                <ActionOrder>
                                    <OrderTotal>
                                        <button><Minus size={16} weight="bold" color="#4B2995" /></button>
                                            <span>1</span>
                                        <button><Plus size={16} weight="bold" color="#4B2995" /></button>
                                    </OrderTotal>
                                    <ButtonRemove><Trash size={16} weight="light" /> Remover</ButtonRemove>
                                </ActionOrder>
                            </div>
                            <p>
                                R$ <span>9.90</span>
                            </p>
                        </ProductCart>
                        <Separator />
                        <ProductCart>
                            <img src={coffe} alt="" />
                            <div>
                                <p>Expresso Tradicional</p>
                                <ActionOrder>
                                    <OrderTotal>
                                        <button><Minus size={16} weight="bold" color="#4B2995" /></button>
                                            <span>1</span>
                                        <button><Plus size={16} weight="bold" color="#4B2995" /></button>
                                    </OrderTotal>
                                    <ButtonRemove><Trash size={16} weight="light" /> Remover</ButtonRemove>
                                </ActionOrder>
                            </div>
                            <p>
                                R$ <span>9.90</span>
                            </p>
                        </ProductCart>
                        <Separator />
                        <Table>
                            <tbody>
                                <tr>
                                    <td>Total de itens</td>
                                    <td>R$ <span>29,70</span></td>
                                </tr>
                                <tr>
                                    <td>Entrega</td>
                                    <td>R$ <span>3,50</span></td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>Total</th>
                                    <th>R$<span>33,20</span></th>
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