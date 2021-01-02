import React from 'react';

import {
    Container,
    PageHeader,
    TopBarContainer,
    ReturnButton,
    Logo,
    HeaderContent,
    HeaderTitle,
    HeaderDescription,
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

const SignUp: React.FC = () => {
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
                    <HeaderTitle>Nós da banda Antares ficamos agradecidos por você querer fazer parte das nossas decisões.</HeaderTitle>
                    <HeaderDescription>Para participar das decisões da banda é só realizar o cadastro preenchendo os dados do formulário abaixo.</HeaderDescription>
                </HeaderContent>
            </PageHeader>

            <Main>
                <form>
                    <Fieldset>
                        <FieldsetTitle>Cadastro</FieldsetTitle>

                        <InputBlock>
                            <Label>E-mail</Label>
                            <Input type='email' id='email' />
                        </InputBlock>

                        <InputBlock>
                            <Label>Nome de Usuário</Label>
                            <Input type='text' id='username' />
                        </InputBlock>

                        <InputBlock>
                            <Label>Nome Real</Label>
                            <Input type='text' id='name' />
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

                        <LoginButton type='submit'>Cadastrar-se</LoginButton>
                    </Footer>
                </form>
            </Main>
        </Container>
    );
}

export default SignUp;
