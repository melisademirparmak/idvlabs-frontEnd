import styled from 'styled-components';

export const StyledCol = styled.div<{
    justifyContent?: string;
    alignItems?: string;
    flex?: number;

}>`
flex: ${({ flex }) => flex};
align-items: ${({ alignItems }) => alignItems};
justify-content: ${({ justifyContent }) => justifyContent};
flex-direction: column;
display: flex;
`;