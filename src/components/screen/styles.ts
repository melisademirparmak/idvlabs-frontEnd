import styled from "styled-components";


export const StyledScreen = styled.div<{
    justifyContent?: string;
    alignItems?: string;
    flex?: number;
}>`
flex: ${({ flex }) => flex};
align-items: ${({ alignItems }) => alignItems};
justify-content: ${({ justifyContent }) => justifyContent};
display: flex;
background-image:url('https://img.freepik.com/free-vector/flat-geometric-background_23-2148967370.jpg?w=2000');
background-repeat:no-repeat;
background-position:center;
background-size: cover;
height:100vh;
`;

