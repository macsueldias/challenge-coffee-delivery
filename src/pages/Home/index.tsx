import {
  ShoppingCart,
  ClockCountdown,
  Package,
  Coffee,
} from '@phosphor-icons/react'

import {
  ContainerBanner,
  ContainerProducts,
  DescriptionServices,
  IlustrationProduct,
  InfoHeader,
  ItemService,
  ListProducts,
  Title,
  TitleMain,
} from './styles'

import ilustration from 'images/ilustration-coffee.svg'
import { data } from '../../data/products'

import { Product } from '../../components/Product'

export const Home = () => {
  return (
    <>
      <ContainerBanner>
        <InfoHeader>
          <TitleMain>
            Encontre o café perfeito para qualquer hora do dia
            <span>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </span>
          </TitleMain>

          <DescriptionServices>
            <ItemService serviceColor="yellowDark">
              <span>
                <ShoppingCart size={16} weight="fill" />
              </span>
              Compra simples e segura
            </ItemService>
            <ItemService serviceColor="yellow">
              <span>
                <ClockCountdown size={16} weight="fill" />
              </span>
              Entrega rápida e rastreada
            </ItemService>
            <ItemService serviceColor="gray">
              <span>
                <Package size={16} weight="fill" />
              </span>
              Embalagem mantém o café intacto
            </ItemService>
            <ItemService serviceColor="purple">
              <span>
                <Coffee size={16} weight="fill" />
              </span>
              O café chega fresquinho até você
            </ItemService>
          </DescriptionServices>
        </InfoHeader>

        <IlustrationProduct src={ilustration} alt="" />
      </ContainerBanner>
      <ContainerProducts>
        <Title titleColor="subtitle">Nossos cafés</Title>
        <ListProducts>
          {data.map((product) => {
            return <Product key={product.id} {...product} />
          })}
        </ListProducts>
      </ContainerProducts>
    </>
  )
}
