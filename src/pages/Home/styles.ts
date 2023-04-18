import styled from 'styled-components'

export const ContainerBanner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4.5rem;
  width: 100%;
  height: 24rem;
  margin: 2rem 10rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: 40rem;
  }
`

export const InfoHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const TitleMain = styled.h1`
  width: 36rem;

  font-size: 3rem;
  font-weight: 800;
  font-family: 'Baloo 2';
  line-height: 1.4;

  color: ${(props) => props.theme.title};

  span {
    display: block;
    margin-top: 1rem;

    font-size: 1.25rem;
    font-weight: 400;
    font-family: 'Roboto';
    line-height: 2;
  }

  @media (max-width: 768px) {
    font-size: 1.75rem;
    width: 22rem;
  }
`

export const DescriptionServices = styled.ul`
  display: flex;
  margin-top: 4rem;
  width: 34rem;
  flex-wrap: wrap;
  gap: 1.25rem;

  @media (max-width: 768px) {
    width: 22rem;
  }
`

const SERVICES_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  purple: 'purple-dark',
  gray: 'text',
} as const

interface ServicesProps {
  serviceColor: keyof typeof SERVICES_COLORS
}

export const ItemService = styled.li<ServicesProps>`
  width: 14rem;
  display: flex;
  align-items: center;

  list-style: none;

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    margin-right: 0.5rem;
    border-radius: 50%;

    background: ${(props) => props.theme[SERVICES_COLORS[props.serviceColor]]};
    color: ${(props) => props.theme.white};
  }

  @media (max-width: 768px) {
    width: 10rem;
    font-size: 0.875rem;
  }
`

export const IlustrationProduct = styled.img`
  @media (max-width: 768px) {
    width: 22rem;
  }
`

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const TITLE_COLORS = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  text: 'text',
  subtitle: 'subtitle',
} as const

interface TitleProps {
  titleColor: keyof typeof TITLE_COLORS
}

export const Title = styled.h3<TitleProps>`
  font-family: 'Baloo 2';
  font-size: 2rem;
  text-align: left;
  margin-top: 5rem;

  color: ${(props) => props.theme[TITLE_COLORS[props.titleColor]]};

  @media (max-width: 768px) {
    text-align: center;
  }
`

export const ListProducts = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 540px) {
    gap: 1rem;
    justify-content: center;
  }
`
