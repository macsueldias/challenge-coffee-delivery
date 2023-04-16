import { CurrencyDollar, MapPinLine, } from "@phosphor-icons/react"
import {  ButtonConfirm, ButtonPayment, ContainerCheckout, Form, InfoLocation, InfoProduct, Input, InputGroup, Label, Legend, PaymentTypeButtonGroup, Table } from "./styles"

import axios from "axios"

import { useCart } from "../../hooks/useCart"
import { ProductCart } from "../../components/ProductCart"
import { z } from "zod"
import { useForm, Controller } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from "react"

interface AddressProps {
    bairro: string
    cep: string
    complemento: string
    ddd: string
    gia: string
    ibge: string
    localidade: string
    logradouro: string
    siafi: string
    uf: string
}

const checkoutFormSchema = z.object({
    cep: z.string(),
    street: z.string(),
    number: z.string(),
    uf: z.string(),
    complement: z.string(),
    neighborhood: z.string(),
    city: z.string(),
    payment: z.string()
})

type CheckoutFormData = z.infer<typeof checkoutFormSchema>

export const Checkout = () => {
    const { cart, totalCart, delivery } = useCart()
    const [address, setAddress] = useState<AddressProps>({bairro: '',
        cep: '',
        complemento: '',
        ddd: '',
        gia: '',
        ibge: '',
        localidade: '',
        logradouro: '',
        siafi: '',
        uf: ''})
    const [cep, setCep] = useState('')

    const {register, handleSubmit, control} = useForm<CheckoutFormData>({
        resolver: zodResolver(checkoutFormSchema)
    })

    function handleCheckout(data: any) {
        // console.log(data)
    }

    async function handleSearchAddress() {
        await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((response) => {
          const { data } = response
          setAddress(data);
        })
    }

    return (
        <ContainerCheckout>
            <Form onSubmit={handleSubmit(handleCheckout)}>
                <InfoLocation>
                    <Legend>Complete seu pedido</Legend>
                    <InputGroup>
                        <MapPinLine size={18} weight="light" color="#C47F17" />
                        <Label> Endereço de Entrega <span>Informe o endereço onde deseja receber seu pedido</span></Label>
                        <Input variant="medium" placeholder="CEP" {...register('cep')} onChange={(e) => setCep(e.target.value)}  onBlur={handleSearchAddress}/>
                        <Input variant="larger" placeholder="Rua" value={address?.logradouro} {...register('street')}/>
                        <Input variant="small" placeholder="Número" {...register('number')}/>
                        <Input variant="small" placeholder="UF" value={address?.uf} {...register('uf')}/>
                        <Input variant="medium" placeholder="Complemento" {...register('complement')}/>
                        <Input variant="medium" placeholder="Bairro" value={address?.bairro} {...register('neighborhood')}/>
                        <Input variant="medium" placeholder="Cidade" value={address?.localidade} {...register('city')}/>
                    </InputGroup>

                    <InputGroup>
                        <CurrencyDollar color="#8047F8" size={18} weight="light" />
                        <Label> Pagamento <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span></Label>
                        <Controller
                            control={control}
                            name="payment"
                            render={({ field }) => {
                                return (
                                <PaymentTypeButtonGroup type="single" defaultValue="Cartão de Débito" aria-label="Text alignment"  onValueChange={field.onChange} value={field.value} >
                                    <ButtonPayment variant="larger" value="Cartão de Crédito" aria-label="Pagamento no Crédito" >
                                        CARTÃO DE CRÉDITO
                                    </ButtonPayment>
                                    <ButtonPayment variant="larger" value="Cartão de Débito" aria-label="Pagamento no débito" >
                                        CARTÃO DE DÉBITO
                                    </ButtonPayment>
                                    <ButtonPayment variant="larger" value="Dinheiro" aria-label="Pagamento em dinheiro" >
                                        DINHEIRO
                                    </ButtonPayment>
                                </PaymentTypeButtonGroup>
                            )}}
                        />
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
                        <ButtonConfirm type="submit">
                            CONFIRMAR PEDIDO
                        </ButtonConfirm>
                    </InputGroup>
                </InfoProduct>
            </Form>
        </ContainerCheckout>
    )
}