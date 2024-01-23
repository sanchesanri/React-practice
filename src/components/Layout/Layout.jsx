import React from 'react';

import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <ul>
          <li>
            <NavLink to="/">Main</NavLink>
          </li>

          <li>
            <NavLink to="/classComponents">Experience</NavLink>
          </li>
          <li>
            <NavLink to="/counter">Counter</NavLink>
          </li>
          <li>
            <NavLink to="/colorPicker">ColorPicker</NavLink>
          </li>
          <li>
            <NavLink to="/dropdown">Dropdown</NavLink>
          </li>
          <li>
            <NavLink to="/todoEditor">TodoEditor</NavLink>
          </li>
          <li>
            <NavLink to="/todoList">TodoList</NavLink>
          </li>
          <li>
            <NavLink to="/loginForm">LoginForm</NavLink>
          </li>
          <li>
            <NavLink to="/videoSearch">VideoExample</NavLink>
          </li>
        </ul>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
