
// import React, { useState } from "react";

// const Flights = () => {
//     const [flights, setFlights] = useState([]);
//     const [selectedFlight, setSelectedFlight] = useState(null);
//     const [airportCode, setAirportCode] = useState('');

//     const handleInputChange = (e) => {
//         setAirportCode(e.target.value);
//     };

//     const handleFormSubmit = async (e) => {
//         e.preventDefault();
//         const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=${airportCode}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
//                 'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
//             }
//         };

//         try {
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setFlights(result.data);
//         } catch (error) {
//             console.error('Error fetching flights:', error);
//         }
//     };

//     const handleBookFlight = (flight) => {
//         setSelectedFlight(flight);
//         console.log(`Booking confirmed for ${flight.name}`);
//     };

//     return (
//         <div>
//             <h1>Flights</h1>
//             <form onSubmit={handleFormSubmit}>
//                 <label>
//                     Enter Airport Code:
//                     <input type="text" value={airportCode} onChange={handleInputChange} />
//                 </label>
//                 <button type="submit">Search</button>
//             </form>
//             <ul>
//                 {flights.map((flight, index) => (
//                     <li key={`flight-${index}`}>
//                         <div>
//                             <strong>{flight.name}</strong> - {flight.price} USD
//                         </div>
//                         <button onClick={() => handleBookFlight(flight)}>Book</button>
//                     </li>
//                 ))}
//             </ul>
//             {selectedFlight && (
//                 <div>
//                     <h2>Booking Confirmation</h2>
//                     <p>Flight booked: {selectedFlight.name}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Flights;

import React, { useState } from "react";

const Flights = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);
    const [airportCode, setAirportCode] = useState('');

    const handleInputChange = (e) => {
        setAirportCode(e.target.value);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const url = `https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=${airportCode}`;
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
                'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            setFlights(result.data);
        } catch (error) {
            console.error('Error fetching flights:', error);
        }
    };

    const handleBookFlight = async (flight) => {
        setSelectedFlight(flight);
        console.log(`Booking confirmed for ${flight.name}`);

        try {
            const response = await fetch('http://localhost:5000/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ flight })
            });

            const result = await response.json();
            console.log('Booking saved:', result);
        } catch (error) {
            console.error('Error saving booking:', error);
        }
    };

    return (
        <div>
            <h1>Flights</h1>
            <form onSubmit={handleFormSubmit}>
                <label>
                    Enter Airport Code:
                    <input type="text" value={airportCode} onChange={handleInputChange} />
                </label>
                <button type="submit">Search</button>
            </form>
            <ul>
                {flights.map((flight, index) => (
                    <li key={`flight-${index}`}>
                        <div>
                            <strong>{flight.name}</strong> - {flight.price} USD
                        </div>
                        <button onClick={() => handleBookFlight(flight)}>Book</button>
                    </li>
                ))}
            </ul>
            {selectedFlight && (
                <div>
                    <h2>Booking Confirmation</h2>
                    <p>Flight booked: {selectedFlight.name}</p>
                </div>
            )}
        </div>
    );
};

export default Flights;

