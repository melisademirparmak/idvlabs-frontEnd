import React, { FC, ReactNode } from "react";
import { StyledScreen } from "./styles"


interface IScreen {
    justifyContent?: string;
    alignItems?: string;
    flex?: number;
    children: ReactNode;
}

const Screen: FC<IScreen> = ({
    children,
    justifyContent,
    alignItems,
    flex
}) => (
    <StyledScreen
        justifyContent={justifyContent}
        alignItems={alignItems}
        flex={flex}
    >
        {children}
    </StyledScreen>
);

export default Screen;