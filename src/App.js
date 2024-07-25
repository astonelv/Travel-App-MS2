import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import './App.css';
import Flights from './Flights';
import Navbar from './navbar';
import Home from './Home';
import Hotel from './hotel';



function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <Flights/>
       {/* <Hotel/> */}
       <Outlet/>
    </div>
  );
}

export default App;
