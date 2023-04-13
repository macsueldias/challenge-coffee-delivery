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
    background: ${props => props.theme.card};
    padding: 2.5rem;
    border-radius: 6px;
`

export const Label = styled.label`
    color: ${props => props.theme.subtitle};

     margin-left: 1rem;

    span {
        display: block;
        font-size: .8rem;
        margin-top: .5rem;
    }
`
export const InfoProduct = styled.div`
    width: 28rem;
`

export const Input = styled.input<{variant: string}>`

    background: ${props => props.theme.input};
    border: 0;
    outline: none;
    margin: 2.5%;
    border-radius: 4px;
    padding: 0.75rem;
    border: 1px solid #E6E5E5;
    width: ${props => props.variant == 'small'? '20%' : props.variant == 'medium' ? '45%' : '100%'};
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }   
`

export const ProductCart = styled.div`
    display: flex;
    align-items: stretch;

    margin: .5rem .25rem;

    img {
        width: 4rem;
    }

    > div {
        margin-left: 1.25rem;
    }

    > p{
        color: ${props => props.theme.text};
        font-weight: 700;
        margin-left: 3rem;
    }
`
export const ButtonRemove = styled.button`
    border: 0;
    outline: none;
    cursor: pointer;
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    background: ${props => props.theme.button};
    height: 2rem;
    padding: .5rem;
    border-radius: 6px;
    font-size: .75rem;

    svg {
        color: ${props => props.theme.purple};
        margin-right: .25rem;
    }
`

export const ActionOrder = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: .5rem;
    font-size: .75rem;
`

export const Separator = styled.div`
    margin-block: 1.5rem;
    height: 1px;
    background: ${props => props.theme.button};
    width: 100%;
`
export const Table = styled.table`
    display: flex;
    flex-direction: column;
    width: 100%;

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
    font-size: .875rem;
    font-weight: 700;
    color: ${props => props.theme.white};
    background: ${props => props.theme.yellow};
    border-radius: 6px;
    width: 100%;
    padding: 12px 8px;
    margin-top: 1.5rem;
    border: 0;
    outline: none;
`