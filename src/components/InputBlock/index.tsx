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
            <Label>
                {label}
                <Input type={type || 'text'} {...props} />
            </Label>
        </Container>
    );
}

export default InputBlock;
