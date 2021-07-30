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
            {props.user.Role === "none" && (
              <div>
                <NavItem>
                  <NavLink href="/Register/">Register</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
              </div>
            )}
            {props.user.Role === "employee" && (
              <div>
                <NavItem>
                  <NavLink href="/logout/">Logout</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/portal/">Employee Portal</NavLink>
                </NavItem>
              </div>
            )}
            {props.user.Role === "customer" && (
              <div>
                <NavItem>
                  <NavLink href="/logout/">Logout</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/cart/">Shopping Cart</NavLink>
                </NavItem>
              </div>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default NavBar;
