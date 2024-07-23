import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import navbar from './navbar';




function App() {
  return (
    <div className="App">

   <Outlet/>
    </div>
  );
}

export default App;