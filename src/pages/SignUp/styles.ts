import styled from 'styled-components';
import { Container as BSContainer } from 'reactstrap';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
`;

export const PageHeader = styled.header`
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);
`;

export const TopBarContainer = styled(BSContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.96rem 0;
    color: var(--color-text-in-primary);
`;

export const ReturnButton = styled(Link)`
    height: 1.92rem;
    transition: all 0.2s;

    &:hover {
        opacity: 0.6;
    }
`;

export const Logo = styled.p`
    margin-bottom: 0;
    font-family: 'Caveat', cursive;
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-title-in-primary);
`;

export const HeaderTitle = styled.strong`
    font-size: 2.16rem;
    line-height: 2.52rem;
    color: var(--color-title-in-primary);

    @media (min-width: 700px) {
        max-width: 350px;
    }
`;

export const HeaderDescription = styled.p`
    max-width: 18rem;
    font-size: 0.96rem;
    line-height: 1.56rem;
    margin-top: 0.96rem;
    color: var(--color-text-in-primary);
`;

export const HeaderContent = styled(BSContainer)`
    position: relative;
    margin-bottom: 3.84rem;

    @media (min-width: 1100px) {
        flex: 1 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: 1100px;
        margin-bottom: 0;
        padding-bottom: 3rem;
    }
`;

export const Main = styled.main`
    width: 100%;
    max-width: 44.4rem;
    border-radius: 0.48rem;
    margin: -1.92rem auto 1.92rem;
    padding-top: 3.84rem;
    overflow: hidden;
    background-color: var(--color-box-base);
`;

export const Fieldset = styled.fieldset`
    border: 0;
    padding: 0 1.44rem;

    @media (min-width: 1100px) {
        padding: 0 3.84rem;
    }
`;

export const FieldsetTitle = styled.legend`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 0.96rem;
    border-bottom: 1px solid var(--color-line-in-white);
    font-weight: bold;
    font-size: 1.44rem;
    color: var(--color-text-title);
`;

export const InputBlock = styled.div`
    position: relative;

    & + & {
        margin-top: 0.84rem;
    }

    &::after {
        width: 0;
        height: 3px;
        content: "";
        background-color: var(--color-primary-light);
        position: absolute;
        left: 0.96rem;
        right: 0.96rem;
        bottom: 0;
        transition: all 0.2s;
    }

    &:focus-within::after {
        width: calc(100% - 1.92rem);
        transition: all 0.2s;
    }
`;

export const Label = styled.label`
    font-size: 0.84rem;
    color: var(--color-text-complement);
`;

export const Input = styled.input`
    width: 100%;
    height: 3.36rem;
    margin-top: 0.48rem;
    border-radius: 0.48rem;
    padding: 0 0.96rem;
    border: 1px solid var(--color-line-in-primary);
    background: var(--color-input-background);
`;

export const Footer = styled.footer`
    padding: 2.4rem 1.44rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 3.84rem;

    @media (min-width: 1100px) {
        padding: 2.4rem 3.84rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const WarningText = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.84rem;
    line-height: 1.44rem;
    color: var(--color-text-complement);

    @media (min-width: 1100px) {
        justify-content: space-between;
    }
`;

export const WarningIcon = styled.img`
    margin-right: 1.2rem;
    width: 32px;
    height: 32px;
`;

export const LoginButton = styled.button`
    width: 100%;
    height: 3.36rem;
    background: var(--color-secondary);
    color: var(--color-button-text);
    border: 0;
    border-radius: 0.48rem;
    font-weight: bold;
    font-size: 0.96rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    margin-top: 1.92rem;
    transition: all 0.2s;

    &:hover,
    &:focus {
        background-color: var(--color-secondary-dark);
    }

    @media (min-width: 1100px) {
        width: 12rem;
        margin-top: 0;
        cursor: pointer;
    }
`;
