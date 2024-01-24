import React, { Suspense } from 'react';

import { StyledLi, StyledNavLink } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ul style={{ display: 'flex' }}>
          <StyledLi>
            <StyledNavLink to="/">Main</StyledNavLink>
          </StyledLi>

          <StyledLi>
            <StyledNavLink to="/classComponents">Experience</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/counter">Counter</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/colorPicker">ColorPicker</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/dropdown">Dropdown</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/todoEditor">TodoEditor</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/todoList">TodoList</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/loginForm">LoginForm</StyledNavLink>
          </StyledLi>
          <StyledLi>
            <StyledNavLink to="/videoSearch">VideoExample</StyledNavLink>
          </StyledLi>
        </ul>
      </header>
      <main>
        <Suspense>{children}</Suspense>
      </main>
    </div>
  );
};

export default Layout;
