import styled from 'styled-components'

export const ContainerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 2rem 10rem;

  @media (max-width: 540px) {
    padding: 1rem;
  }
`

export const ContentInfo = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
`

export const ImageLogo = styled.img`
  width: 5.25rem;
`

export const Location = styled.span`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 6px;

  font-size: 0.875rem;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const Cart = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 6px;

  font-size: 0.875rem;

  background: ${(props) => props.theme['yellow-light']};

  span {
    position: absolute;
    top: -0.475rem;
    right: -0.475rem;
    width: 1.125rem;
    height: 1.125rem;
    background: ${(props) => props.theme['yellow-dark']};
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    font-weight: 700;
    font-size: 0.75rem;
    line-height: 1.6;
    text-align: center;
  }
`
