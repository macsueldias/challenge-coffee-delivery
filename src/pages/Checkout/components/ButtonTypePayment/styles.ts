import styled from 'styled-components'
import * as ToggleGroup from '@radix-ui/react-toggle-group'

export const ButtonPayment = styled(ToggleGroup.Item)<{ variant: string }>`
  height: ${(props) => (props.variant === 'small' ? '2rem' : '3rem')};
  width: ${(props) => (props.variant === 'small' ? '5.5rem' : '11rem')};
  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;
  outline: none;
  padding: ${(props) => (props.variant === 'small' ? '0.5rem' : '1rem')};
  cursor: pointer;
  border-radius: 6px;

  font-size: 0.75rem;

  border: 1px solid transparent;
  background: ${(props) => props.theme.button};
  color: ${(props) => props.theme.text};

  svg {
    color: ${(props) => props.theme.purple};
    margin-right: 0.25rem;
  }

  &:active,
  :hover {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  &[aria-checked='true'] {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple-dark']};
  }

  @media (max-width: 540px) {
    height: ${(props) => (props.variant === 'small' ? '1.5rem' : '2rem')};
    width: ${(props) => (props.variant === 'small' ? '5.5rem' : '11rem')};
    gap: 0;
  }
`

export const PaymentTypeButtonGroup = styled(ToggleGroup.Root)`
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-top: 2rem;

  @media (max-width: 540px) {
    flex-direction: column;
  }
`
