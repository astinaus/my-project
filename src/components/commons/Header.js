import React from "react";
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink } from "./NavElements";

const Header = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img src="/logo.png" width="100" alt="logo"></img>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/Movies" activeStyle>
            Movies
          </NavLink>
          <NavLink to="/Actors" activeStyle>
            Actors
          </NavLink>
          <NavLink to="/Directors" activeStyle>
            Directors
          </NavLink>
          <NavLink to="/Recommend" activeStyle>
            Recommend
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/signin">Sign in</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Header;
