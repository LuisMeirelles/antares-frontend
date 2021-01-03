import React from 'react';

import {
    Footer,
    WarningText,
    WarningIcon,
    SubmitButton
} from './styles';

import warningIcon from '../../assets/img/warning-icon.svg';

interface FormProps {
    buttonText: string;
    noWarning?: boolean;
}

const Form: React.FC<FormProps> = ({ noWarning, buttonText, children, ...props }) => {
    return (
        <form {...props}>
            {children}

            <Footer noWarning={noWarning}>
                {
                    !noWarning &&
                        <WarningText>
                            <WarningIcon src={warningIcon} alt='ícone de aviso importante' />
                            Aviso:
                            <br />
                            Por favor, preencha todos os dados!
                        </WarningText>
                }

                <SubmitButton type='submit'>{buttonText}</SubmitButton>
            </Footer>
        </form>
    );
}

export default Form;
