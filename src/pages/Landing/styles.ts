import styled from 'styled-components';

import { Container as BSContainer } from 'reactstrap';

interface ButtonProps {
    login?: boolean;
    signin?: boolean;
}

export const Container = styled(BSContainer)`
    width: 90vw;
    max-width: 700px;
    color: var(--color-text-in-primary);

    @media (min-width: 1100px) {
        & {
            max-width: 1100px;
            display: grid;
            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-areas:
                "logo hero hero"
                "buttons buttons total";
        }
    }
`;

export const LogoContainer = styled.div`
    text-align: center;
    margin-bottom: 3.2rem;

    @media (min-width: 1100px) {
        grid-area: logo;
        align-self: center;
        text-align: left;
        margin: 0;
    }
`;

export const Logo = styled.h1`
    font-family: 'Caveat', cursive;
    font-size: 10rem;
    font-weight: bold;
    color: var(--color-title-in-primary);
`;

export const Description = styled.h2`
    font-size: 1.44rem;
    line-height: 2.16rem;
    margin-top: 0.48rem;

    @media (min-width: 1100px) {
        & {
            text-align: left;
            text-align: initial;
            font-size: 1.92rem;
        }
    }
`;

export const HeroImage = styled.img`
    width: 100%;

    @media (min-width: 1100px) {
        width: initial;
        height: 100%;
        grid-area: hero;
        justify-self: center;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 1.92rem 0;

    @media (min-width: 1100px) {
        grid-area: buttons;
        justify-content: flex-start;
    }
`;

export const Button = styled.a<ButtonProps>`
    width: 18rem;
    height: 3.24rem;
    border-radius:0.48rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-button-text);
    transition: all 0.2s;

    background-color: ${({login, signin}) => (login && 'var(--color-primary-lighter)') || (signin && 'var(--color-secondary)')};

    & {
        text-decoration: none !important;
    }

    &:first-of-type {
        margin-right: 0.96rem;
    }

    &:hover {
        background-color: ${({login, signin}) => (login && 'var(--color-primary-light)') || (signin && 'var(--color-secondary-dark)')};
        color: var(--color-button-text);
    }

    @media (min-width: 1100px) {
        font-size: 1.44rem;
        height: 4.44rem;
    }
`;

export const TotalSongs = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.84rem;

    @media (min-width: 1100px) {
        grid-area: total;
        justify-self: end;
    }
`;
