import React from 'react';
import { Outlet, Route,Routes } from 'react-router-dom';
import './App.css';
import Flights from './Flights';
import Navbar from './navbar';
import Home from './Home';
import TopNav from './Components/TopNav';
import Home from './Root';
function App() {
  return (
    <div className="App">
      <TopNav/>
  <Navbar/>
  <Home/>
   <Outlet/>
   <Route/>
   <Routes/>
     <Flights/>
    </div>
  );
}

export default App;