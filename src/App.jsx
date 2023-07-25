import Home from './pages/Home';
import Aboutus from './pages/Aboutus';
import ContactUs from './pages/ContactUs';
import React from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aboutus' element={<Aboutus />} />
        <Route path='/ContactUs' element={<ContactUs />} />

      </Routes>
      
    </div>
  );
}

export default App;
