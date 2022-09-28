import { Outlet, NavLink } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Characters</NavLink>
          </li>
          <li>
            <NavLink to="/about">Quotes</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
