import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 2rem 10rem;
`

export const ContentInfo = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .75rem;
`

export const ImageLogo = styled.img`
    width: 5.25rem;
`

export const Location = styled.span`
    display: flex;
    gap: .25rem;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;

    font-size: 0.875rem;

    background: ${props => props.theme["purple-light"]};
    color: ${props => props.theme["purple-dark"]};
`

export const Cart = styled.span`
    display: flex;
    padding: .5rem;
    border-radius: 6px;

    font-size: 0.875rem;

    background: ${props => props.theme["yellow-light"]};
`


