import React, { FC } from 'react';
import { StyledButton, StyledButtonIcon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'


interface IButton {
    type: "button" | "submit" | "reset"
    icon?: 'pencil' | 'delete';
    text: string;
    width: '30' | '75' | '100';
    height: '10' | '25' | '30' | '50';
    color?: 'black' | 'white' | 'red';
    backgroundColor: '#6687B1' | '#F9D71C' | '#008000' | '#ff2400';
    value?: string;
    onClick?: () => void;
}

const Button: FC<IButton> = ({
    text,
    width,
    height,
    color,
    backgroundColor,
    type,
    onClick,
    icon
}) =>
    !icon ? (
        <StyledButton
            width={width}
            height={height}
            color={color}
            backgroundColor={backgroundColor}
            onClick={onClick}
            type={type}
        >{text}</StyledButton>
    ) : (
        <StyledButtonIcon
            width={width}
            height={height}
            color={color}
            backgroundColor={backgroundColor}
            onClick={onClick}
            type={type}
        >
            {
                icon === 'pencil' ? (
                    <FontAwesomeIcon icon={faPencil} color={'#FFC108'} />
                ) : icon === 'delete' ? (
                    <FontAwesomeIcon icon={faTrash} color={'#F8706F '} />
                ) : null}
        </StyledButtonIcon>
    )


export default Button;