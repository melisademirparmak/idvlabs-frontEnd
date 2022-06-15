import styled from "styled-components";

export const StyledInput = styled.input<{
    borderColor?: 'black' | 'red' | 'blue';
    borderSize?: '1' | '3' | '5';
    borderStyle?: 'solid' | 'dashed' | 'none';
}>`

border-bottom: 1px solid #6687B1;
`;