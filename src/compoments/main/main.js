import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiMenu } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';
import frontPicture from '../../bilder/bg3front.png';
import backgroundPicture from '../../bilder/bg3.png';
import logo from '../../bilder/logo.png';

const PageContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${backgroundPicture});
  background-size: cover;
  background-position: center;
  z-index: 50;
`;

const FrontPicture = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${frontPicture});
  background-size: cover;
  background-position: top;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
`;

const HeaderContent = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
`;

const Logo = styled.img`
  height: 150px;
`;

const ButtonContainer = styled.div`
  position: ${({ scrolled, scrolledDown }) => (scrolledDown || scrolled ? 'fixed' : 'absolute')};
  top: 0;
  right: 20px;
  z-index: 100;
  background-color: ${({ scrolledDown }) => (scrolledDown ? 'white' : 'transparent')};
  width: 100%; /* Full width */
  transition: background-color 0.3s ease;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  background-color: ${({ scrolledDown }) => (scrolledDown ? 'white' : 'transparent')}; /* Added */
`;

const NavMenuItem = styled.li`
  margin-bottom: 10px;
`;

const NavLink = styled.button`
  background-color: transparent;
  border: 2px solid transparent; /* Added border */
  padding: 12px 20px; /* Increased padding */
  color: ${({ scrolled }) => (scrolled ? '#202444' : 'white')};
  font-size: 18px; /* Increased font size */
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 2px; /* Added border radius */

  &:hover {
    background-color: ${({ scrolled }) =>
      scrolled ? 'rgba(32, 36, 68, 0.1)' : 'rgba(255, 255, 255, 0.2)'};
    border-radius: ${({ scrolled }) => (scrolled ? '5px' : '2px')};
  }
`;

const MobileMenuButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;

const BottomContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 30vh;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const BottomSection = styled.div`
  width: 25%;
  height: 100%;
  background-color: #f0f0f0;
  border-right: 1px solid #202444;
  float: left;
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
  position: fixed;
`;

const TitleSmall = styled.div`
  font-size: 13px;
  font-weight: bold;
`;

const TitleBig = styled.div`
  margin-top: 40px;
  font-size: 80px;
  font-weight: bold;
`;

const DropdownMenu = styled.ul`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 2px; /* Added border radius */
  padding: 32px; /* Increased padding */
  display: ${({ isMenuOpen }) => (isMenuOpen ? 'block' : 'none')};
  z-index: 90;
  backdrop-filter: blur(5px);
`;

const ProjectsButton = styled(NavLink)`
  position: relative;
`;

const ProjectButton = styled(NavLink)`
  display: block;
  padding: 10px 16px; /* Increased padding */
  margin: 10px 10px 20px 20px;
  color: white;
  background-color: rgba(200, 200, 200, 0.6);
  border-radius: 2px; /* Added border radius */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 2px; /* Adjusted border radius */
  }
`;

const ProjectsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InvisibleHoverBox = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: -5px;
  width: calc(100% + 10px);
  height: 10px;
  z-index: 100;
`;

const Page = () => {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [scrolledDown, setScrolledDown] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (buttonRef.current) {
      const windowWidth = window.innerWidth;
      const menuWidth = 200; // Adjust this as needed
      const newLeftPosition = Math.max(0, windowWidth / 2 - menuWidth / 2);
      setLeftPosition(newLeftPosition);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      if (offset > 200) {
        setScrolledDown(true);
      } else {
        setScrolledDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <PageContainer>
      <Background />
      <FrontPicture />
      <HeaderContent>
        <Logo src={logo} alt="Logo" />
      </HeaderContent>
      <TitleContainer>
        <TitleSmall>MongoDB | Express.js | React | Node.js</TitleSmall>
        <TitleBig>Hey, I'm Oscar</TitleBig>
      </TitleContainer>
      {isMobile ? (
        <ButtonContainer scrolled={scrolled} scrolledDown={scrolledDown}>
          <MobileMenuButton onClick={toggleMenu}>
            <FiMenu />
          </MobileMenuButton>
          {isMenuOpen && (
            <NavMenu scrolledDown={scrolledDown}>
              <NavMenuItem>
                <NavLink scrolled={scrolled}>Knapp 1</NavLink>
              </NavMenuItem>
              <NavMenuItem>
                <NavLink scrolled={scrolled}>Knapp 2</NavLink>
              </NavMenuItem>
              <NavMenuItem>
                <NavLink scrolled={scrolled}>Knapp 3</NavLink>
              </NavMenuItem>
            </NavMenu>
          )}
        </ButtonContainer>
      ) : (
        <ButtonContainer scrolled={scrolled} scrolledDown={scrolledDown}>
          <ProjectsButton ref={buttonRef} onClick={toggleMenu}>
            Projects
            <DropdownMenu isMenuOpen={isMenuOpen} leftPosition={leftPosition}>
              <ProjectsRow>
                <ProjectButton onClick={() => console.log('Todo-liste applikasjon clicked')}>
                  Todo-liste applikasjon
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Nyhetsoversikt clicked')}>
                  Nyhetsoversikt
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Bildeskarusell clicked')}>
                  Bildeskarusell
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Nettbutikk clicked')}>Nettbutikk</ProjectButton>
                <ProjectButton onClick={() => console.log('Weather-app clicked')}>Weather-app</ProjectButton>
              </ProjectsRow>
              <ProjectsRow>
                <ProjectButton onClick={() => console.log('Chat-applikasjon clicked')}>
                  Chat-applikasjon
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Bloggplattform clicked')}>
                  Bloggplattform
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Spillkomponenter clicked')}>
                  Spillkomponenter
                </ProjectButton>
                <ProjectButton onClick={() => console.log('Eventkalender clicked')}>
                  Eventkalender
                </ProjectButton>
              </ProjectsRow>
            </DropdownMenu>
            <InvisibleHoverBox />
          </ProjectsButton>
          <NavLink scrolled={scrolled} onClick={() => console.log('Button 1 clicked')}>
            Knapp 1
          </NavLink>
          <NavLink scrolled={scrolled} onClick={() => console.log('Portfolio clicked')}>
            Portfolio
          </NavLink>
        </ButtonContainer>
      )}
      <BottomContainer className="scrollable">
        <BottomSection />
        <BottomSection />
        <BottomSection />
        <BottomSection />
      </BottomContainer>
    </PageContainer>
  );
};

export default Page;
