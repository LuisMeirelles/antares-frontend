import React from 'react';

import {
    Container,
    Main
} from './styles';

import PageHeader from '../../components/PageHeader';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputBlock from '../../components/InputBlock';

const Login: React.FC = () => {
    return (
        <Container>
            <PageHeader
                title='Preencha os campos abaixo para fazer login.'
            />

            <Main>
                <Form buttonText='Fazer Login'>
                    <Fieldset title='Login'>
                        <InputBlock
                            label='E-mail ou Nome de Usuário'
                            inputId='user'
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

export default Login;
