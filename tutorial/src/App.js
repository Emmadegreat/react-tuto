import {Route, BrowserRouter as Router} from 'react-router-dom'

import About from './components/About';
import Header from './components/Header';
import Joke from './components/Joke';
import React from 'react';

function App() {
  
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container mx-auto">
          <Route path ="/" exact component={Joke} />
          <Route path="/" exact component={About} />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
