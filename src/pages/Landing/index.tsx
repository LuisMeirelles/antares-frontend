import React from 'react';

import {
    Container,
    LogoContainer,
    Logo,
    Description,
    HeroImage,
    ButtonsContainer,
    Button,
    TotalSongs
} from './styles';

import heroImage from '../../assets/img/hero-image.jpg';

const Landing: React.FC = () => {
    return (
        <Container>
            <LogoContainer>
                <Logo>Antares</Logo>
                <Description>Plataforma para interação com a banda Antares</Description>
            </LogoContainer>

            <HeroImage src={heroImage} />

            <ButtonsContainer>
                <Button href="#" login>Fazer Login</Button>
                <Button href="#" signin>Cadastrar</Button>
            </ButtonsContainer>

            <TotalSongs>
                Total de N músicas já recomendadas.
            </TotalSongs>
        </Container>
    );
}

export default Landing;
