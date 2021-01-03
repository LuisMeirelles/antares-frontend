import React from 'react';

import {
    Container,
    Label,
    Input
} from './styles';

interface InputBlockProps {
    label: string;
    type?: string;
    inputId?: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ label, type, inputId, ...props }) => {
    return (
        <Container {...props}>
            <Label>{label}</Label>
            <Input type={type || 'text'} id={inputId} />
        </Container>
    );
}

export default InputBlock;
