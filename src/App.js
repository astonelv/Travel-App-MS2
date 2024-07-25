import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Flights from './Flights';
import Navbar from './navbar';
import Home from './Home';
import Hotel from './hotel';

const App = () => {
  return (
    <div>
      <h1>Travel Guide</h1>
        <Navbar/>
        <Home/>
        <Outlet/>
     <Flights/>
     {/* <Hotel/> */}
    {/* <WorldMap /> */}
    </div>
  );
};

export default App;

