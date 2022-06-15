import React, { FC } from "react";
import { StyledSeperator } from "./styles"


interface ISeperator {
    margin: '5' | '10' | '15'; 
}

const Seperator: FC<ISeperator> = ({margin }) => (
    <StyledSeperator margin={margin}   />
);

export default Seperator;

