import React, { useState, useEffect } from "react";
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
  const [role, setRole] = useState("none");

  useEffect(() => {
    getUserRole();
  }, [role]);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const getUserRole = () => {
    if (props.user === null || props.user.Role === "none") {
      setRole("none");
      console.log("No User Logged In");
    } else if (props.user.Role === "employee") {
      setRole("employee");
      console.log(role);
    } else if (props.user.Role === "customer") {
      setRole("customer");
      console.log(role);
    }
  };

  return (
    <div onMouseEnter={() => getUserRole()}>
      <Navbar className="navbar" color="faded" dark>
        <NavbarBrand href="/" className="mr-auto">
          customKeys
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            {role === "none" && (
              <div>
                <NavItem>
                  <NavLink href="/Register/">Register</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/login/">Login</NavLink>
                </NavItem>
              </div>
            )}
            {role === "employee" && (
              <div>
                <NavItem>
                  <NavLink href="/logout/">Logout</NavLink>
                </NavItem>

                <NavItem>
                  <NavLink href="/portal/">Employee Portal</NavLink>
                </NavItem>
              </div>
            )}
            {role === "customer" && (
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
