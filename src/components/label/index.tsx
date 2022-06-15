import React, {FC} from "react";
import { StyledText } from './styles';

interface ILabel {
    text:string;
    fontSize?: '18' | '20' | '22';
    color?: 'black' | 'white' | 'red';
    fontWeight?:  '500' | '600' | '700' | '900'

}

const Label: FC <ILabel> = ({
text,
fontSize,
color,
fontWeight,
}) => (
    <StyledText
    fontSize={fontSize}
    color={color}
    fontWeight={fontWeight}
    >{text}</StyledText>
)

export default Label;