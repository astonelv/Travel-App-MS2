import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Flights from './Flights';

const App = () => {
  return (
    <div>
      <h1>Travel Guide</h1>
<TopNav/>
       <Home/>
   <Outlet/>
   <Route/>
   <Routes/>
     <Flights/>
     <WorldMap />
    </div>
  );
};

export default App;
