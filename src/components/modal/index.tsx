import React, { FC } from 'react';
import Button from "components/button";
import Input from "components/input";
import { StyledModal, StyledModalContent, StyledModalBody } from "./styles";
import Seperator from 'components/seperator';

interface IModal {
    isVisible: boolean;
    inputDefValue?: string;
    buttonOnClick?: () => void;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

}

const Modal: FC<IModal> = ({
    isVisible,
    inputDefValue,
    buttonOnClick,
    onChange
}) => (

    isVisible ? (
        <StyledModal >
            <StyledModalContent>
                <StyledModalBody>
                    <Input type={'text'} defaultValue={inputDefValue} onChange={onChange} />
                    <Seperator margin={'5'} />
                    <Seperator margin={'5'} />
                    <Button text={'Kaydet'} width={'30'} height={'25'} backgroundColor={'#6687B1'} onClick={buttonOnClick} type={'submit'} color={'white'} />
                </StyledModalBody>

            </StyledModalContent>
        </StyledModal >
    ) : null

);



export default Modal;