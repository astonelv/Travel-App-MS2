import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Flights from './Flights';
import navbar from './navbar';




function App() {
  return (
    <div className="App">

   <Outlet/>
   <Route/>
   <Routes/>
     <Flights/>
    </div>
  );
}

export default App;