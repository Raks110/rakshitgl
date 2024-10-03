import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './BasicNavbar.css';
import colors from '../colors';
import ThemeToggle from '../theme/ThemeToggle';
import { ThemeContext } from '../theme/ThemeContext';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';

export default function BasicNavbar() {

  const { darkTheme } = useContext(ThemeContext);
  var accentBackground = colors.light.accent;
  var primaryBackground = colors.light.primary_background;
  if(darkTheme) {
    accentBackground = colors.dark.accent;
    primaryBackground = colors.dark.primary_background;
  }

  return (
    <>
      <Helmet bodyAttributes={{style: `background-color: ${primaryBackground}`}}/>
      <Navbar collapseOnSelect expand="sm" style={{
          background: `${accentBackground}`,
          margin: '8px',
          borderRadius: '12px'
        }} data-bs-theme={darkTheme ? 'dark' : 'light'}>
        <Container>
          <Navbar.Brand href="#home">rakshitgl</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav">
            <span class="material-symbols-rounded">
              menu
            </span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end">
              <Nav.Link href="#home">home</Nav.Link>
              <Nav.Link href="#notes">notes</Nav.Link>
              <Nav.Link href="#projects">projects</Nav.Link>
              <Nav.Link href="#about">about me</Nav.Link>
              <Nav.Link>
                <ThemeToggle/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}