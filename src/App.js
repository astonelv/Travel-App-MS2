import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import Home from './Home';
function App() {
  return (
    <div className="App">
      
  
   <Outlet/>
    </div>
  );
}

export default App;
