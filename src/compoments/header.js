import React, { useState } from 'react';
import styled from 'styled-components';
import logo from '../bilder/logo.png';

const Container = styled.div`
  background-color: #34353a;
  padding: 20px;
  font-family: Futura Medium, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 110px;
  height: auto;
`;

const ButtonContainer = styled.div`
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Button = styled.button`
  padding: 11px 22px;
  margin-right: 11px;
  background-color: transparent;
  color: ${props => (props.active ? 'white' : '#9a9b9c')};
  border: none;
  cursor: pointer;
  outline: none;
  font-size: 17.6px;
  transition: background-color 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: white;
    color: #34353a;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ContactButton = styled.button`
  padding: 8.8px 22px;
  background-color: #ffffff;
  color: #34353a;
  border: 2px solid transparent;
  cursor: pointer;
  outline: none;
  font-size: 17.6px;
  transition: background-color 0.5s ease, color 0.5s ease, border-color 0.5s ease;

  &:hover {
    background-color: #34353a;
    color: white;
    border-color: #ffffff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  cursor: pointer;
  color: white;
  font-size: 24px;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.div`
  display: ${props => (props.open ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: #34353a;
  padding: 10px;
  border-radius: 5px;
  z-index: 10;
  animation: slideDown 0.5s ease;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MenuItem = styled.button`
  color: white;
  background-color: transparent;
  border: none;
  padding: 10px;
  font-size: 17.6px;
  cursor: pointer;
  outline: none;
  transition: color 0.5s ease;

  &:hover {
    color: #9a9b9c;
  }
`;

const CloseButton = styled.div`
  color: white;
  font-size: 24px;
  align-self: flex-end;
  cursor: pointer;
`;

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <Header>
        <Logo src={logo} alt="Logo" />
        <ButtonContainer>
          <Button active>Home</Button>
          <Button>About</Button>
          <Button>Projects</Button>
        </ButtonContainer>
        <ContactButton>Contact</ContactButton>
        <HamburgerMenu onClick={toggleMenu}>{menuOpen ? '✕' : '☰'}</HamburgerMenu>
      </Header>
      <Menu open={menuOpen}>
        <CloseButton onClick={toggleMenu}>{'✕'}</CloseButton>
        <MenuItem>Home</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Projects</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </Container>
  );
};

export default App;
