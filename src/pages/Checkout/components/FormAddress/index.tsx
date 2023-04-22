import { useFormContext } from 'react-hook-form'
import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import axios from 'axios'

import { InputGroup, Label, Legend } from '../../styles'
import { Input } from './styles'
import { ButtonTypePayment } from '../ButtonTypePayment'

export const FormAdress = () => {
  const { register, setValue } = useFormContext()

  async function handleSearchAddress(cep: string) {
    await axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { data } = response

        setValue('neighborhood', data.bairro)
        setValue('street', data.logradouro)
        setValue('uf', data.uf)
        setValue('city', data.localidade)
      })
  }

  return (
    <>
      <Legend>Complete seu pedido</Legend>
      <InputGroup>
        <MapPinLine size={18} weight="light" color="#C47F17" />
        <Label>
          {' '}
          Endereço de Entrega{' '}
          <span>Informe o endereço onde deseja receber seu pedido</span>
        </Label>
        <Input
          variant="medium"
          placeholder="CEP"
          {...register('cep', { valueAsNumber: true })}
          onBlur={(e) => handleSearchAddress(e.target.value)}
          required
        />
        <Input variant="larger" placeholder="Rua" {...register('street')} />
        <Input
          variant="small"
          type="number"
          placeholder="Número"
          {...register('number', { valueAsNumber: true })}
          required
        />
        <Input variant="small" placeholder="UF" {...register('uf')} />
        <Input
          variant="medium"
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <Input
          variant="medium"
          placeholder="Complemento"
          {...register('complement')}
        />
        <Input variant="medium" placeholder="Cidade" {...register('city')} />
      </InputGroup>

      <InputGroup>
        <CurrencyDollar color="#8047F8" size={18} weight="light" />
        <Label>
          {' '}
          Pagamento{' '}
          <span>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </span>
        </Label>
        <ButtonTypePayment />
      </InputGroup>
    </>
  )
}
