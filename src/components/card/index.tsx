import React, { FC, ReactNode } from "react";
import { StyledCard } from "./styles";

interface ICard {
    justifyContent?: string;
    alignItems?: string;
    flex?: number;
    children: ReactNode;
}

const Card: FC<ICard> = ({
    justifyContent,
    alignItems,
    flex,
    children
}) => (
    <StyledCard
        justifyContent={justifyContent}
        flex={flex}
        alignItems={alignItems}
    >{children}</StyledCard>
);

export default Card;