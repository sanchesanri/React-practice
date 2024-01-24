import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: red;
  /* & :hover,
  :focus {
    color: red;
  } */
  &.active {
    color: #2e1f1f;
    background-color: #945454;
  }
`;

export const StyledLi = styled.li`
  width: 100px;
  border: 1px solid #3ea1b9;
  border-radius: 3px;
  margin: 2px;
  padding: 5px 10px;
`;
