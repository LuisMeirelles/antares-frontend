import React, { InputHTMLAttributes } from 'react';

import {
    Container,
    Label,
    Input
} from './styles';

interface InputBlockProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    type?: string;
}

const InputBlock: React.FC<InputBlockProps> = ({ label, type, ...props }) => {
    return (
        <Container>
            <Label>{label}</Label>
            <Input type={type || 'text'} {...props} />
        </Container>
    );
}

export default InputBlock;
