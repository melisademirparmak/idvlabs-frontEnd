import React, { FC } from "react";
import { StyledInput } from "./styles"

interface InputProps {
    type: string;
    borderColor?: 'black' | 'red' | 'blue';
    borderSize?: '1' | '3' | '5';
    borderStyle?: 'solid' | 'dashed' | 'none';
    id?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    defaultValue?: string;
    inputValue?: string;
}

const Input: FC<InputProps> = ({
    type,
    borderColor,
    borderSize,
    borderStyle,
    id,
    onChange,
    value,
    defaultValue,
    inputValue,
}) => (
    <StyledInput borderColor={borderColor} borderSize={borderSize} borderStyle={borderStyle} type={type} id={id} onChange={onChange} value={value} defaultValue={defaultValue} />
)

export default Input;