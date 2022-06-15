import styled from 'styled-components';

export const StyledRow = styled.div<{
    justifyContent?: string;
    alignItems?: string;
    flex?: number;

}>`
flex: ${({ flex }) => flex};
align-items: ${({ alignItems }) => alignItems};
justify-content: ${({ justifyContent }) => justifyContent};
flex-direction: row;
display: flex;
margin-top:10px;

`;