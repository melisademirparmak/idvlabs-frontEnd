import styled from "styled-components"

export const StyledModal = styled.div
    `
position: fixed;
display:flex;
align-items:center;
justify-content:center;
border-radius: 10px;
box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

export const StyledModalContent = styled.div
    `
width:400px;
background:#fafafa;
`

export const StyledModalHeaderAndFooter = styled.div
    `
padding:10px;
`

export const StyledModalBody = styled.div
    `
padding:10px;
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
`