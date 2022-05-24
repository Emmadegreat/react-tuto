import React from 'react';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Error from './components/pages/Error';

function App() {
  
  return (
      
      <div className="App">
        <Header />
        <Footer />
      </div>
    
  );
}

export default App;
