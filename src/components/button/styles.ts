import styled from "styled-components";

export const StyledButton = styled.button<{
    type: "button" | "submit" | "reset"
    icon?: 'pencil' | 'delete';
    width: '30' | '75' | '100';
    height: '10' | '25' | '30' | '50';
    color?: 'black' | 'white' | 'red';
    backgroundColor: '#6687B1' | '#F9D71C' | '#008000' | '#ff2400';
}>`
width:${(props) => props.width}%;
height:${(props) => props.height}px;
color: ${(props) => props.color};
background-color:${(props) => props.backgroundColor};
border:1px solid ${(props) => props.backgroundColor}; 
border-radius:${(props) => props.width}px;
cursor:pointer;
`;

export const StyledButtonIcon = styled.button<{
    width: '30' | '75' | '100';
    height: '10' | '25' | '30' | '50';
    color?: 'black' | 'white' | 'red';
    backgroundColor: '#6687B1' | '#F9D71C' | '#008000' | '#ff2400';
}>`
width:${(props) => props.width}px;
height:${(props) => props.height}px;
cursor:pointer;
border:none;
`;