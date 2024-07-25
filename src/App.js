import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import './App.css';
import Flights from './Flights';
import Navbar from './navbar';
import Home from './Home';
import WorldMap from './WorldMap';
import Hotel from './hotel';

const App = () => {
  return (
    <div>
      <h1>Travel Guide</h1>
        <Navbar/>
        <Home/>
        <Outlet/>
        {/* <Hotel/> */}
     <Flights/>
    <WorldMap />
    </div>
  );
};

export default App;

