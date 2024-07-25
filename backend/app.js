// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CityList from './components/CityList';
// import MapView from './components/MapView';
// import TopNav from './components/TopNav';  
// import './App.css';


// const App = () => {
//   const [cities, setCities] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('/api/places')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => setCities(data))
//       .catch(error => {
//         console.error('Error fetching cities:', error);
//         setError(error.message);
//       });
//   }, []);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <Router>
//       <TopNav />  {/* Use TopNav here */}
//       <Routes>
//         <Route path="/" element={<CityList cities={cities} />} />
//         <Route path="/map/:id" element={<MapView cities={cities} />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;


