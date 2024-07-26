import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import ErrorPage from './errorPage';
import Home from './Root';
import Flights from "./Flights.js";
import Hotel from './hotel.js';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "flights/:bookingid",
        element: <Flights/>,
      },
      {
        path: "hotels/:hotelid"
      }
    ]

  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
      <App />
  </RouterProvider>
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();