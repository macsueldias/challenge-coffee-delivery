import styled from "styled-components"

export const ContainerCheckout = styled.div`
`
export const Form = styled.form`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
`
export const InfoLocation = styled.div`
    width: 40rem;

    @media (max-width: 768px) {
        width: 20rem;
    }

    @media (max-width: 540px) {
        width: 20rem;
    }
`
export const Legend = styled.legend`
    margin: 2rem 0;
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-weight: 700;

    color: ${props => props.theme.subtitle};
`

export const InputGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 2.5rem;
    border-radius: 6px;

    background: ${props => props.theme.card};

    @media (max-width: 540px) {
        padding: 1rem
    }
`

export const Label = styled.label`
    margin-left: 1rem;
    
    color: ${props => props.theme.subtitle};
    span {
        display: block;
        font-size: .8rem;
    }
`
export const InfoProduct = styled.div`
    width: 28rem;

     @media (max-width: 768px) {
        width: 20rem;
    }

    @media (max-width: 540px) {
        width: 20rem;
    }
`

export const Input = styled.input<{variant: string}>`
    width: ${props => props.variant == 'small'? '20%' : props.variant == 'medium' ? '45%' : '100%'};
    border: 0;
    outline: none;
    margin: 2.5%;
    border-radius: 4px;
    padding: 0.75rem;
    border: 1px solid #E6E5E5;

    background: ${props => props.theme.input};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }

    @media (max-width: 540px) {
        width: ${props => props.variant == 'small'? '45%' : '100%'};
    }
`

export const Button = styled.button<{variant: string}>`
    height: ${props => props.variant == "small" ? "2rem" : "3rem"};
    width: ${props => props.variant == "small" ? "5.5rem" : "11rem"};
    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    outline: none;
    padding: ${props => props.variant == "small" ? "0.5rem" : "1rem"};
    cursor: pointer;
    border-radius: 6px;
    
    font-size: .75rem;
    
    border: 1px solid transparent;
    background: ${props => props.theme.button};
    color: ${props => props.theme.text};

    svg {
        color: ${props => props.theme.purple};
        margin-right: .25rem;
    }

    &:active, :hover {
        background: ${props => props.theme["purple-light"]};
        border: 1px solid ${props => props.theme["purple-dark"]};
    }

    @media (max-width: 540px) {
        height: ${props => props.variant == "small" ? "1.5rem" : "2rem"};
        width: ${props => props.variant == "small" ? "5.5rem" : "11rem"};
        gap: 0;
    }
`

export const Table = styled.table`
    width: 100%;
    display: flex;
    flex-direction: column;

    tbody {
        font-size: .875rem;
    }

    tr {
        display: flex;
        justify-content: space-between;
        padding: 0.5rem;
    }
`

export const ButtonConfirm = styled.button`
    width: 100%;
    font-weight: 700;
    border-radius: 6px;
    border: 0;
    outline: none;
    padding: 12px 8px;
    margin-top: 1.5rem;

    font-size: .875rem;

    color: ${props => props.theme.white};
    background: ${props => props.theme.yellow};
`

export const PaymentTypeButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    gap: 0.75rem;
    margin-top: 2rem;

    @media (max-width: 540px) {
        flex-direction: column;
    }
`