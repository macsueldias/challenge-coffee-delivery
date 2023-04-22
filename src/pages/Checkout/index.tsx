import { useNavigate } from 'react-router-dom'
import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { ContainerCheckout, Form, InfoLocation, InfoProduct } from './styles'

import { FormAdress } from './components/FormAddress'
import { ProductSelect } from './components/ProductSelect'

import { useCart } from '../../hooks/useCart'

const checkoutFormSchema = z.object({
  cep: z.number(),
  street: z.string(),
  number: z.number(),
  uf: z.string(),
  complement: z.string(),
  neighborhood: z.string(),
  city: z.string(),
  payment: z.string(),
})

export type CheckoutFormData = z.infer<typeof checkoutFormSchema>

export const Checkout = () => {
  const navigate = useNavigate()

  const { EntryOrder } = useCart()

  const confirmOrderForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutFormSchema),
  })

  async function handleCheckout(data: CheckoutFormData) {
    try {
      const response = await EntryOrder(data)
      if (response) {
        navigate('/success')
      }
    } catch (error) {
      console.log('Verificar se os dados foram preenchido corretamente')
    }
  }
  const { handleSubmit } = confirmOrderForm

  return (
    <ContainerCheckout>
      <FormProvider {...confirmOrderForm}>
        <Form onSubmit={handleSubmit(handleCheckout)}>
          <InfoLocation>
            <FormAdress />
          </InfoLocation>

          <InfoProduct>
            <ProductSelect />
          </InfoProduct>
        </Form>
      </FormProvider>
    </ContainerCheckout>
  )
}
