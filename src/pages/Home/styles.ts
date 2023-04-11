import styled from "styled-components";

export const ContainerBanner = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 4.5rem;
    width: 100%;
    height: 24rem;
    margin: 2rem 10rem 6rem;
`

export const InfoHeader = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const TitleMain = styled.h1`
    width: 588px;

    font-size: 3rem;
    font-weight: 800;
    font-family: 'Baloo 2';
    line-height: 1.4;

    color: ${props => props.theme.title};

    span {
        display: block;
        margin-top: 1rem;

        font-size: 1.25rem;
        font-weight: 400;
        font-family: 'Roboto';
        line-height: 2;
    }
`

export const DescriptionServices = styled.ul`
    display: flex;
    margin-top: 4rem;
    width: 34rem;
    flex-wrap: wrap;
    gap: 1.25rem;
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
        padding: .5rem;
        margin-right: .5rem;
        border-radius: 50%;

        background: ${props => props.theme[SERVICES_COLORS[props.serviceColor]]};
        color: ${props => props.theme["white"]};
    }
`

export const IlustrationProduct = styled.img`

`

export const ContainerProducts = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`

export const TitleProduct = styled.h3`
    font-family: 'Baloo 2';
    font-size: 2rem;
    text-align: left;

    color: ${props => props.theme.subtitle};
`

export const ListProducts = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    margin-top: 4rem;
`

export const ItemProduct = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 16rem;

    margin-bottom: 1.25rem;
    border-radius: 6px 36px;
    padding-bottom: 1.25rem;

    background: ${props => props.theme.card};
    

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
    margin-top: .75rem;

    span {
        padding: .25rem .5rem;
        border-radius: 100px;
        
        font-weight: 700;
        font-size: .625rem;

        
        color: ${props => props.theme["yellow-dark"]};
        background: ${props => props.theme["yellow-light"]};
    }
`

export const NameProduct = styled.h4`
    margin: 1rem 1.25rem .875rem;

    color: ${props => props.theme.subtitle};

    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;
`

export const DescriptionProduct = styled.p`
    margin: 0 1.25rem;

    color: ${props => props.theme.label};
    
    font-size: .875rem;
    text-align: center;
    line-height: 1.8;

`

export const FooterProduct = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
`

export const ValueProduct = styled.div`
    margin-right: 1.5rem;
    color: ${props => props.theme.text};
    font-size: .875rem;

    span {
        font-family: 'baloo 2';
        font-size: 1.5rem;
    }
`

export const OrderTotal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .25rem;
    width: 4.5rem;
    padding: .5rem;
    margin-right: .5rem;
    border-radius: 6px;
    line-height: 1.6;

    span {
        font-weight: 700;
    }

    background: ${props => props.theme.button};

    button {
        all: unset;
        font-size: 1.2rem;
        cursor: pointer;
        color: ${props => props.theme.purple};

    }
`

export const OrderClosing = styled.div``
