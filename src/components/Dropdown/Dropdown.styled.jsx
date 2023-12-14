import styled from "styled-components";

export const DropdownWrapper = styled.div`
    position: relative;
    display: flex;
    justify-content:space-between;
    width: 350px;
    padding: 20px;
    border: 1px solid black;
    margin-bottom: 30px;
`

export const DropdownMenu = styled.div`
    position: absolute;
    top: 100%;
    left:0;
    width: 100%;
    padding: 20px 0;
    text-align: center;
    background-color: teal;
    color: white;
`;

export const DropdownButton = styled.button`
    margin-bottom:10px;
    padding: 10px 20px;
    border-radius: 7px;
    color: rgb(187, 128, 168);
    background-color: #61dafb;

    &:hover, &:focus{
    color: rgb(103, 223, 223);
    background-color: rgb(107, 128, 168);}
`