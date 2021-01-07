import React, {
    useState,
    FormEvent
} from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Main
} from './styles';

import PageHeader from '../../components/PageHeader';
import Form from '../../components/Form';
import Fieldset from '../../components/Fieldset';
import InputBlock from '../../components/InputBlock';

import api from '../../services/api';

const Login: React.FC = () => {
    const [loginData, setLoginData] = useState({
        user: '',
        password: ''
    });

    const history = useHistory();

    async function handleLogin(evt: FormEvent) {
        evt.preventDefault();

        try{
            await api.post('/auth', { ...loginData });

            history.push('/');
        } catch (error) {
            alert('Ocorreu um erro ao realizar a autenticação');

            console.error(error);
        }
    }

    return (
        <Container>
            <PageHeader
                title='Preencha os campos abaixo para fazer login.'
            />

            <Main>
                <Form buttonText='Fazer Login' onSubmit={handleLogin}>
                    <Fieldset title='Login'>
                        <InputBlock
                            label='E-mail ou Nome de Usuário'
                            value={loginData.user}
                            onChange={evt => setLoginData({ ...loginData, user: evt.target.value })}
                        />

                        <InputBlock
                            label='Senha'
                            type='password'
                            value={loginData.password}
                            onChange={evt => setLoginData({ ...loginData, password: evt.target.value })}
                        />
                    </Fieldset>
                </Form>
            </Main>
        </Container>
    );
}

export default Login;
