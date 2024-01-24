import styled from 'styled-components';
// import { theme } from "../../styles/theme";

export const CounterWrapper = styled.div`
  width: 350px;
  border: 1px solid black;
  padding: 15px;
  text-align: center;
  margin-bottom: 30px;
`;

export const SpanCounter = styled.span`
  font-size: 50px;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ControlButton = styled.button`
  padding: 10px 20px;
  border-radius: 7px;
  color: rgb(187, 128, 168);
  background-color: #61dafb;

  &:hover,
  &:focus {
    color: rgb(103, 223, 223);
    background-color: rgb(107, 128, 168);
  }
`;

export const StyledLi = styled.li``;

export const StyledUl = styled.ul`
  width: 600px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(6, 100px);
  grid-template-rows: 100px 100px 100px;
  grid-auto-flow: column;
`;
