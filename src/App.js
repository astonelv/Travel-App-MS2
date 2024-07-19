import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from './Components/TopNav';
import Home from './Root';
function App() {
  return (
    <div className="App">
            <TopNav></TopNav>
            <Home></Home>
   <Outlet/>
    </div>
  );
}

export default App;
