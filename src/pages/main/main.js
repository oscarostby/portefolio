import React from 'react';
import styled from 'styled-components';
import Header from "../../compoments/header";
import Slider from "../../compoments/slider"

const PageWrapper = styled.div`
  background-color: #34353a;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 250px;
  top: 50%;
  transform: translateY(-50%);
  @media (max-width: 768px) {
    position: static;
    transform: none;
    flex-direction: column;
  }
`;

const Content = styled.div`
  text-align: left;
  color: white;
  padding: 20px;
`;

const TextContainer = styled.div`
  margin-right: 20px;
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 20px;
  }
`;

const BigText = styled.h1`
  font-size: 500%;
  @media (max-width: 768px) {
    font-size: 300%;
  }
`;

const OrangeText = styled.span`
  color: orange;
`;

const SmallText = styled.p`
  font-size: 22px;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const SmallText1 = styled.p`
  font-size: 17px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Button = styled.button`
  margin-top: 3%;
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
    margin-top: 10%;
    font-size: 16px;
  }
`;

const HeaderWrapper = styled.div`
  flex: 0;
`;

const SliderComponent = styled.div`
  flex: 1; /* To take up remaining space */
  display: flex;
  justify-content: flex-end; /* Align slider to the right */
  margin-right: 200px; /* Space from the right */
  margin-left: 200px; /* Space from the right */

`;

const App = () => {
  return (
    <PageWrapper>
      <HeaderWrapper>
        <Header />
      </HeaderWrapper>
      <ContentWrapper>
        <TextContainer>
          <Content>
            <BigText>I'M <OrangeText>Oscar</OrangeText></BigText>
            <SmallText>MongoDB, Express.js, React, and Node.js</SmallText>
            <SmallText1>[MERN stack]</SmallText1>
            <Button>Read More ↓</Button>
          </Content>
        </TextContainer>
        <SliderComponent>
          <Slider />
        </SliderComponent>
      </ContentWrapper>
    </PageWrapper>
  );
};

export default App;
