import React from 'react';
import styled from 'styled-components';

// Definer stilen for underkomponenten
const StyledDiv = styled.div`
  background-color: #34353a;
  padding: 10px;
`;

// Definer hovedkomponenten
const MyComponent = () => {
  return (
    <StyledDiv>
      Hello Kebab
    </StyledDiv>
  );
};

export default MyComponent;
