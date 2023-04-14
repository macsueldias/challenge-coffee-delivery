import styled from "styled-components"

export const ContainerSuccess = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        p {
            text-align: center;
        }
    }
`

export const ContentSuccess = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: end;
    gap: 2rem;
    flex-wrap: wrap;

    img {
        width: 30rem;
    }
    
    @media (max-width: 768px) {
        justify-content: center; 

        p {
            text-align: center;
        }
    }

    @media (max-width: 540px) {
        img {
            width: 22rem;
        }
    }
`

export const ContentOrder = styled.div`
    display: flex;
    flex-direction: column;
`

export const InfoOrder = styled.div`
    display: flex;
    flex-direction: column;
    width: 32.5rem;
    padding: 2.5rem;
    margin-top: 2.5rem;
    gap: 2rem;
    
    border: 2px solid ${props => props.theme["purple-light"]};
    border-radius: 6px 36px;

    div {
        display: flex;
    }

    @media (max-width: 540px) {
        width: 22rem;
        padding: 1rem;
    }
`
