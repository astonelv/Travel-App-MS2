import logo from './logo.svg';
import './App.css';
import React from 'react';
import navbar from './navbar';




function App() {
  return (
    <div className="App">
      <hotels/>
      <h1>Travel Website </h1>
      <div className='loginbtn'> 
      <button className='btn'>
      <a href="#" className="Login"> 
      <h2> Login</h2>
      </a>
      </button>
      <button className='sign in'>
      <a href="#" className="Sign in">
      <h2> Sign in</h2> 
      </a>
      </button>

      
      
      </div>
      

      <image src = {logo} className = "App-logo" alt = "logo"/>
      
      
    </div>
  );
}

export default App;
