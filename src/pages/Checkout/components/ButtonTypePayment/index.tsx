import { Controller, useFormContext } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import { ButtonPayment, PaymentTypeButtonGroup } from './styles'

const typesPayment = [
  {
    id: uuidv4(),
    name: 'Cartão de Crédito',
    info: 'Pagamento no Crédito',
  },
  {
    id: uuidv4(),
    name: 'Cartão de Débito',
    info: 'Pagamento no Débito',
  },
  {
    id: uuidv4(),
    name: 'Dinheiro',
    info: 'Pagamento em Dinheiro',
  },
]

export const ButtonTypePayment = () => {
  const { control } = useFormContext()

  return (
    <Controller
      control={control}
      name="payment"
      render={({ field }) => {
        return (
          <PaymentTypeButtonGroup
            type="single"
            aria-label="Text alignment"
            onValueChange={field.onChange}
            value={field.value}
          >
            {typesPayment.map((option) => {
              return (
                <ButtonPayment
                  key={option.id}
                  variant="larger"
                  value={option.name}
                  aria-label={option.info}
                >
                  {option.name}
                </ButtonPayment>
              )
            })}
          </PaymentTypeButtonGroup>
        )
      }}
    />
  )
}
