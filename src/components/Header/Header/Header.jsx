import React, { useState, useEffect, useRef } from 'react';
import { Navbar, Nav, Button, Image, Container } from 'react-bootstrap';
import { FaSun, FaMoon } from 'react-icons/fa'; // Certifique-se de importar corretamente
import logo from './yes-logotipo.png';
import separator from './separator1.png';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkTheme, setDarkTheme] = useState(false); // Estado para controlar o tema

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuIfClickedOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', closeMenuIfClickedOutside);

    return () => {
      document.removeEventListener('mousedown', closeMenuIfClickedOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme); // Alternar entre tema claro e escuro
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="header">
      <Container fluid className="header-container">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <Image src={logo} alt="Logo" className="logo" />
          <div className="systemName d-flex align-items-center">
            <span className="separator">
              <Image src={separator} alt="Separator" />
            </span>
            <span className="system-name-text">TecIT - Tecnologia e Inovação</span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="align-items-center">
            <Button variant="outline-light" className="font-button">A +</Button>
            <span className="separator-two">
              <Image src={separator} alt="Separator" />
            </span>
            <Button variant="outline-light" className="font-button">A -</Button>
            <Button variant="outline-light" className="theme-button" onClick={toggleTheme}>
              {darkTheme ? <FaMoon /> : <FaSun />} {/* Alternar entre ícones de lua e sol */}
            </Button>
            <div className={`user-info d-flex align-items-center d-none d-lg-flex`}>
              <span className="user-initial">E</span>
              <div className="d-flex flex-column">
                <span className="user-name">Evaldo Braga</span>
                <span className="user-profile">Perfil do usuário</span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>

      {/* Menu Sanduíche para telas pequenas */}
      <div ref={menuRef} className={`menu-sanduiche ${menuOpen ? 'open' : ''}`}>
        <Nav className="flex-column align-items-center">
          <Button variant="outline-light" className="font-button">A +</Button>
          <Button variant="outline-light" className="font-button">A -</Button>
          <Button variant="outline-light" className="theme-button" onClick={toggleTheme}>
            {darkTheme ? <FaMoon /> : <FaSun />} {/* Alternar entre ícones de lua e sol */}
          </Button>
          <div className="user-info-mobile">
            <span className="user-initial">E</span>
            <div className="d-flex flex-column">
              <span className="user-name">Evaldo Braga</span>
              <span className="user-profile">Perfil do usuário</span>
            </div>
          </div>
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
