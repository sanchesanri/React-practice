import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: red;

  &.active {
    color: #1f2064;
    background-color: inherit;
  }
`;

export const MainList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 900 px;
`;

export const StyledLi = styled.li`
  width: 100px;
  border: 1px solid #3ea1b9;
  border-radius: 3px;
  margin: 2px;
  padding: 5px 10px;

  &:hover {
    color: #1f2064;
    background-color: #945454;
  }
`;
