import React from 'react';
import './App.css';
import Navbar from './components/Nav';
import Login from './components/Login/index';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div class="login">
        <Login />
      </div>
      
    </div>
  );
}

export default App;
