import styled from "styled-components";

export const StyledText = styled.p<{
    fontSize?: '18' | '20' | '22';
    color?: 'black' | 'white' | 'red';
    fontWeight?:  '500' | '600' | '700' | '900'
}>`
font-size: ${(props) => props.fontSize}px;
color: ${(props) => props.color};
font-weight: ${(props) => props.fontWeight};
`;