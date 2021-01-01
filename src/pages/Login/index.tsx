import React from 'react';

import {
    Container,
    PageHeader,
    TopBarContainer,
    ReturnButton,
    Logo,
    HeaderContent,
    HeaderTitle,
    Main,
    Fieldset,
    FieldsetTitle,
    InputBlock,
    Label,
    Input,
    Footer,
    WarningText,
    WarningIcon,
    LoginButton
} from './styles';

import returnIcon from '../../assets/img/return-icon.svg';
import warningIcon from '../../assets/img/warning-icon.svg';

const Login: React.FC = () => {
    return (
        <Container>
            <PageHeader>
                <TopBarContainer>
                    <ReturnButton to='/'>
                        <img src={returnIcon} alt="Voltar"/>
                    </ReturnButton>

                    <Logo>Antares</Logo>
                </TopBarContainer>

                <HeaderContent>
                    <HeaderTitle>Preencha os campos abaixo para fazer login.</HeaderTitle>
                </HeaderContent>
            </PageHeader>

            <Main>
                <form>
                    <Fieldset>
                        <FieldsetTitle>Login</FieldsetTitle>

                        <InputBlock>
                            <Label>E-mail ou Nome de Usuário</Label>
                            <Input type='text' id='user' />
                        </InputBlock>

                        <InputBlock>
                            <Label>Senha</Label>
                            <Input type='password' id='pass' />
                        </InputBlock>
                    </Fieldset>

                    <Footer>
                        <WarningText>
                            <WarningIcon src={warningIcon} alt='ícone de aviso importante' />
                            Aviso:
                            <br />
                            Por favor, preencha todos os dados!
                        </WarningText>

                        <LoginButton type='submit'>Fazer Login</LoginButton>
                    </Footer>
                </form>
            </Main>
        </Container>
    );
}

export default Login;
