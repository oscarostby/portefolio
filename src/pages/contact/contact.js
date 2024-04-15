import React from 'react';
import Terminal from 'react-terminal-component';
import styled from 'styled-components';
import bgImage from '../../bilder/bg.png'; // Importerer bakgrunnsbildet

const TerminalWrapper = styled.div`
  width: 800px; /* Bredde på terminalen (omtrent samme størrelse som en Mac-terminal) */
  height: 500px; /* Høyde på terminalen (omtrent samme størrelse som en Mac-terminal) */
  max-width: 90vw; /* Begrens maksimal bredden til 90% av visningen */
  max-height: 80vh; /* Begrens maksimal høyde til 80% av visningen */
  padding: 20px; /* Avstand fra innholdet til kanten av terminalen */
  border-radius: 10px; /* Border radius */
  font-family: Menlo, Monaco, 'Courier New', monospace; /* Skrifttype som ligner på Mac Terminal */
  background-color: rgba(0, 0, 0, 0.2); /* Bakgrunnsfarge som ligner på Mac Terminal */
  color: #fff; /* Tekstfarge */
`;

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${bgImage}); /* Setter bakgrunnsbildet */
  background-size: cover; /* Justerer størrelsen på bakgrunnsbildet */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = styled.div`
  width: 800px; /* Samme bredde som terminalen */
  height: 30px; /* Høyde på navbaren */
  background-color: rgba(0, 0, 0, 0.2); /* Bakgrunnsfarge som ligner på Mac Terminal */
  border-radius: 5px 5px 0 0; /* Kantede radius */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
`;

const NavBarText = styled.span`
  color: #fff; /* Tekstfarge */
`;

const App = () => {
  return (
    <AppContainer>
      <NavBar>
        <NavBarText>contact@mail.com</NavBarText>
        <NavBarText>
          <span style={{ color: 'red' }}>●</span>
          <span style={{ color: 'yellow' }}>●</span>
          <span style={{ color: 'green' }}>●</span>
        </NavBarText>
      </NavBar>
      <TerminalWrapper>
        <Terminal
          promptSymbol="$"
          welcomeMessage="Welcome to my Linux terminal look-alike!"
          commands={{
            help: {
              description: "Displays help information",
              exec: () => "This is a simple Linux terminal look-alike built with React. Try running some commands!",
            },
            clear: {
              description: "Clears the terminal screen",
              exec: () => "",
            },
          }}
        />
      </TerminalWrapper>
    </AppContainer>
  );
};

export default App;