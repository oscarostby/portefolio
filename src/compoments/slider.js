import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Slide1 from "../bilder/2.png";
import Slide2 from "../bilder/1.jpg";
import Slide3 from "../bilder/3.png";
import Slide4 from "../bilder/4.png";


const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden; /* Ensure the slider clips overflow */
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease; /* Add transition for smooth sliding */
`;

const Slide = styled.img`
  max-height: 500px;
  width: 100%; /* Ensure each slide takes full width of container */
  flex: 0 0 auto; /* Ensure the image doesn't grow or shrink */
`;

const Dots = styled.div`
  text-align: center;
  margin-top: 10px;
`;

const Dot = styled.span`
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: ${(props) => (props.active ? '#bbb' : '#555')};
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
`;

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [Slide1, Slide2, Slide3, Slide4]; // Legg til flere bilder her hvis nødvendig

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <SliderContainer>
      <SliderWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <Slide
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
          />
        ))}
      </SliderWrapper>
      <Dots>
        {slides.map((_, index) => (
          <Dot
            key={index}
            active={index === currentSlide}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </Dots>
    </SliderContainer>
  );
};

export default Slider;
