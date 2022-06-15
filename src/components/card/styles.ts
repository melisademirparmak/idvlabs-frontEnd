import styled from "styled-components";

export const StyledCard = styled.div<{
    justifyContent?: string;
    alignItems?: string;
    flex?: number;

}>`
flex: ${({ flex }) => flex};
align-items: ${({ alignItems }) => alignItems};
justify-content: ${({ justifyContent }) => justifyContent};
display: flex;
max-width:100%;
padding:60px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
border-radius:7px;
max-height: 100%;
background-color:white;
`;
