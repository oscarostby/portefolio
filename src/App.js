import React from 'react';
import { BrowserRouter, Route, Routes, Route as R } from 'react-router-dom'; // Import the new components
import Home from './pages/main/main'; // Assuming this is where your main content resides
import Contact from './pages/contact/contact'; // Assuming this is where your main content resides

function App() {
  return (
    <BrowserRouter>
      <Routes> {/* Use Routes instead of Switch */}
        <R path="/" element={<Home />} /> {/* Use Route with 'element' prop */}
        <R path="/contact" element={<Contact />} /> {/* Use Route with 'element' prop */}

        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;