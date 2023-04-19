import styled from 'styled-components'

export const ItemProduct = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;

  margin-bottom: 1.25rem;
  border-radius: 6px 36px;
  padding-bottom: 1.25rem;

  background: ${(props) => props.theme.card};

  @media (max-width: 540px) {
    width: 10rem;
  }
`
export const ImageProduct = styled.div`
  position: relative;
  height: 6.25rem;

  img {
    position: absolute;
    top: -20px;
    left: calc((100% - 120px) / 2);
    width: 7.5rem;
  }
`

export const CategoryProduct = styled.div`
  margin-top: 0.75rem;

  span {
    margin-inline: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    font-weight: 700;
    font-size: 0.625rem;

    color: ${(props) => props.theme['yellow-dark']};
    background: ${(props) => props.theme['yellow-light']};
  }
`

export const NameProduct = styled.h4`
  margin: 1rem 1.25rem 0.875rem;

  color: ${(props) => props.theme.subtitle};

  font-family: 'Baloo 2';
  font-size: 1.25rem;
  font-weight: 700;
`

export const DescriptionProduct = styled.p`
  margin: 0 1.25rem;

  color: ${(props) => props.theme.label};

  font-size: 0.875rem;
  text-align: center;
  line-height: 1.8;

  @media (max-width: 540px) {
    margin: 0 0.25rem;
  }
`

export const FooterProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  @media (max-width: 540px) {
    margin-top: 1rem;
  }
`

export const ValueProduct = styled.div`
  margin-right: 1.5rem;
  color: ${(props) => props.theme.text};
  font-size: 0.875rem;

  span {
    font-family: 'baloo 2';
    font-size: 1.5rem;
  }

  @media (max-width: 540px) {
    span {
      font-size: 1rem;
    }
    margin-right: 0.5rem;
  }
`

export const OrderTotal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.25rem;
  margin-right: 0.5rem;
  border-radius: 6px;
  padding: 0.5rem;

  span {
    display: inline-block;
    font-weight: 700;
    font-size: 1rem;
    color: ${(props) => props.theme.text};
  }

  background: ${(props) => props.theme.button};

  button {
    all: unset;
    font-size: 1rem;
    cursor: pointer;
    color: ${(props) => props.theme.purple};
  }

  @media (max-width: 540px) {
    height: 1.5rem;
    padding: 0.25rem;

    span {
      font-size: 0.75rem;
    }

    button {
      font-size: 0.5rem;
    }
  }
`

export const OrderClosing = styled.div`
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};

  svg {
    color: ${(props) => props.theme.white};
  }
`
