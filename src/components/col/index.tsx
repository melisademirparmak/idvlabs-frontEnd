import React, { FC, ReactNode } from 'react';
import { StyledCol } from './styles'


interface IColProps {
    justifyContent?: string;
    alignItems?: string;
    flex?: number;
    children: ReactNode;

}

const Col: FC<IColProps> = ({
    justifyContent,
    alignItems,
    flex,
    children
}) => (
    <StyledCol
        alignItems={alignItems}
        flex={flex}
        justifyContent={justifyContent}>
        {children}
    </StyledCol>
);

export default Col;