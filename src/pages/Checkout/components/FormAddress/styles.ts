import styled from 'styled-components'

export const Input = styled.input<{ variant: string }>`
  width: ${(props) =>
    props.variant === 'small'
      ? '20%'
      : props.variant === 'medium'
      ? '45%'
      : '100%'};
  border: 0;
  outline: none;
  margin: 2.5%;
  border-radius: 4px;
  padding: 0.75rem;
  border: 1px solid #e6e5e5;

  background: ${(props) => props.theme.input};
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (max-width: 540px) {
    width: ${(props) => (props.variant === 'small' ? '45%' : '100%')};
  }
`
