import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./BasicNavbar.css";
import ThemeToggle from "../theme/ThemeToggle";
import React from "react";

function BasicNavbar(props) {
  var theme = props.theme;
  var textBsTheme = theme.dark ? "dark" : "light";

  const inputRef = React.useRef(null);
  const handleClick = React.useCallback(() => inputRef.current?.click(), []);

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
          <Navbar.Brand href="#home">rakshitgl</Navbar.Brand>
          <Navbar.Toggle
            id="navbarToggler"
            aria-controls="responsive-navbar-nav"
            ref={inputRef}
          >
            <span className="material-symbols-rounded">menu</span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#home" className="active">
                home
              </Nav.Link>
              <Nav.Link href="#notes">notes</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
              <Nav.Link href="#about">about me</Nav.Link>
              <Nav.Link
                onClick={
                  props.width <= 575
                    ? handleClick
                    : () => {
                        return;
                      }
                }
              >
                <ThemeToggle />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function generateStyleForNavbar(theme) {
  return {
    background: `${theme.accent}`,
    boxShadow: "0px 10px 20px " + theme.primaryBackground + "88",
  };
}

export default BasicNavbar;
