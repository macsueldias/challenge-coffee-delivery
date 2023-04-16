import styled from "styled-components"

export const ContainerProductCart = styled.div`
    display: flex;
    align-items: stretch;

    margin: .5rem .25rem;

    img {
        width: 4rem;
    }

    > div {
        margin-left: 0.5rem;
    }

    > p{
        display: flex;
        color: ${props => props.theme.text};
        font-weight: 700;
        margin-left: 3rem;
    }

    @media (max-width: 540px) {
        img {
            width: 3rem;
        }

        > div {
            margin-left: 0.5rem;
        }

        > p {
            margin-left: 1rem;
            font-size: .875rem;
        }
    }
`


export const ActionOrder = styled.div`
    display: flex;
    gap: .5rem;
    margin-top: .5rem;
    
    font-size: .75rem;
`

export const Separator = styled.div`
    width: 100%;
    height: 1px;
    margin-block: 1.5rem;
    
    background: ${props => props.theme.button};
    
`