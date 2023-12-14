import styled from "styled-components";

export const ColorPickerWrapper = styled.div`
    width: 350px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom: 30px
`

export const ColorPickerTitle = styled.h2`
line - height: 1.3;
`
export const ColorPickerOption = styled.button`
    display: inline - block;
width: 50px;
height: 50px;
margin: 4px;
border: none;
border-radius:5px;
outline: none;
cursor: pointer;
transition: transform 250ms linear;
transform: ${props => props.$active ? "scale(1.2)" : "none"};
`

export const ColorPickerActive = styled.div`
    transform: scale(1.2);
`