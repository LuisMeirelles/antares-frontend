import React, { useState, FormEvent } from 'react';
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

const SignUp: React.FC = () => {
    const [signUpData, setSignUpData] = useState({
        email: '',
        username: '',
        name: '',
        password: ''
    });

    const history = useHistory();

    async function handleSignUp(evt: FormEvent) {
        evt.preventDefault();

        try{
            await api.post('/users', { ...signUpData });

            history.push('/');
        } catch (error) {
            alert('Ocorreu um erro ao realizar o cadastro');

            console.error(error);
        }
    }

    return (
        <Container>
            <PageHeader
                title='Nós da banda Antares ficamos agradecidos por você querer fazer parte das nossas decisões.'
                description='Para participar das decisões da banda é só realizar o cadastro preenchendo os dados do formulário abaixo.'
            />

            <Main>
                <Form buttonText='Cadastrar-se' onSubmit={handleSignUp}>
                    <Fieldset title='Cadastro'>
                        <InputBlock
                            label='E-mail'
                            type='email'
                            value={signUpData.email}
                            onChange={evt => setSignUpData({...signUpData, email: evt.target.value})}
                        />

                        <InputBlock
                            label='Nome de Usuário'
                            value={signUpData.username}
                            onChange={evt => setSignUpData({...signUpData, username: evt.target.value})}
                        />

                        <InputBlock
                            label='Nome Real'
                            value={signUpData.name}
                            onChange={evt => setSignUpData({...signUpData, name: evt.target.value})}
                        />

                        <InputBlock
                            label='Senha'
                            type='password'
                            value={signUpData.password}
                            onChange={evt => setSignUpData({...signUpData, password: evt.target.value})}
                        />
                    </Fieldset>
                </Form>
            </Main>
        </Container>
    );
}

export default SignUp;
