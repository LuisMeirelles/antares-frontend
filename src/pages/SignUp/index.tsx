import React from 'react';

import {
    Container,
    Main
} from './styles';

import PageHeader from '../../components/PageHeader';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputBlock from '../../components/InputBlock';

const SignUp: React.FC = () => {
    return (
        <Container>
            <PageHeader
                title='Nós da banda Antares ficamos agradecidos por você querer fazer parte das nossas decisões.'
                description='Para participar das decisões da banda é só realizar o cadastro preenchendo os dados do formulário abaixo.'
            />

            <Main>
                <Form buttonText='Cadastrar-se'>
                    <Fieldset title='Cadastro'>
                        <InputBlock
                            label='E-mail'
                            type='email'
                            inputId='email'
                        />

                        <InputBlock
                            label='Nome de Usuário'
                            inputId='username'
                        />

                        <InputBlock
                            label='Nome Real'
                            inputId='name'
                        />

                        <InputBlock
                            label='Senha'
                            type='password'
                            inputId='pass'
                        />
                    </Fieldset>
                </Form>
            </Main>
        </Container>
    );
}

export default SignUp;
