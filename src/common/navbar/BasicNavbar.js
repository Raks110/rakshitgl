import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./BasicNavbar.css";
import ThemeToggle from "../theme/ThemeToggle";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function BasicNavbar(props) {
  var theme = props.theme;
  var textBsTheme = theme.dark ? "dark" : "light";

  const inputRef = React.useRef(null);
  const handleClick = React.useCallback(() => inputRef.current?.click(), []);
  const closeNavbar = () => clickToggleNavbar(handleClick, props.width);

  const location = useLocation();

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        style={generateStyleForNavbar(theme)}
        data-bs-theme={textBsTheme}
        className="fixed-top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            rakshitgl
          </Navbar.Brand>
          <Navbar.Toggle
            id="navbarToggler"
            aria-controls="responsive-navbar-nav"
            ref={inputRef}
          >
            <span className="material-symbols-rounded">menu</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link
                as={Link}
                to="/home"
                className={
                  "/home" === location.pathname ? "active" : "inactive"
                }
                onClick={closeNavbar}
              >
                home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/notes"
                className={
                  "/notes" === location.pathname ? "active" : "inactive"
                }
                onClick={closeNavbar}
              >
                notes
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/projects"
                className={
                  "/projects" === location.pathname ? "active" : "inactive"
                }
                onClick={closeNavbar}
              >
                projects
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={
                  "/about" === location.pathname ? "active" : "inactive"
                }
                onClick={closeNavbar}
              >
                about me
              </Nav.Link>
              <Nav.Link onClick={closeNavbar}>
                <ThemeToggle />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function clickToggleNavbar(handleClick, width) {
  if (width <= 575) handleClick();
}

function generateStyleForNavbar(theme) {
  return {
    background: `${theme.accent}`,
    boxShadow: "0px 10px 20px " + theme.primaryBackground + "88",
  };
}

export default BasicNavbar;
