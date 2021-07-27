import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import "./NavBar.css";

const NavBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar className="navbar" color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">
          customKeys
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {!props.user ? (
              ((
                <NavItem>
                  <NavLink href="/Register/">Register</NavLink>
                </NavItem>
              ),
              (
                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
              ))
            ) : (
              <NavItem>
                <NavLink href="/logout/">Logout</NavLink>
              </NavItem>
            )}
            <NavItem>
              <NavLink href="/cart/">Shopping Cart</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
