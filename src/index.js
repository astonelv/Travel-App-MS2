import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider,createBrowserRouter } from "react-router-dom";
import Home from './Root';
import ErrorPage from './errorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement:<ErrorPage/>,
    children:[
      {
      
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
