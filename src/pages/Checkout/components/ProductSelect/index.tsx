import { InputGroup, Legend } from '../../styles'
import { ButtonConfirm, Table } from './styles'

import { ProductCart } from '../../../../components/ProductCart'

import { useCart } from '../../../../hooks/useCart'

export const ProductSelect = () => {
  const { cart, delivery, totalCart } = useCart()
  return (
    <>
      <Legend>Cafés selecionados</Legend>
      <InputGroup>
        {cart.map((item) => {
          return <ProductCart {...item} key={item.id} />
        })}
        <Table>
          <tbody>
            <tr>
              <td>Total de itens</td>
              <td>
                R$ <span>{Number(totalCart.value).toFixed(2)}</span>
              </td>
            </tr>
            <tr>
              <td>Entrega</td>
              <td>
                R$ <span>{delivery()}</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Total</th>
              <th>
                R$<span>{Number(delivery() + totalCart.value).toFixed(2)}</span>
              </th>
            </tr>
          </tfoot>
        </Table>
        <ButtonConfirm type="submit">CONFIRMAR PEDIDO</ButtonConfirm>
      </InputGroup>
    </>
  )
}
