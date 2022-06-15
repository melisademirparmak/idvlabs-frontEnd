import styled from 'styled-components';

export const StyledSeperator = styled.div<{
    margin?: '5' | '10' | '15'; 

}>`
margin-top: ${(props) => props.margin}px;
margin-bottom: ${(props) => props.margin}px;
margin-right: ${(props) => props.margin}px;

`;