import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './router/index'

function App() {
  return (
    <Router>
        <Routes></Routes>
      </Router>
  );
}

export default App;
