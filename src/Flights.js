// import React, { useEffect, useState } from "react";

// const Flights = () => {
//     const [flights, setFlights] = useState([]);
//     const [selectedFlight, setSelectedFlight] = useState(null);

//     useEffect(() => {
//         const fetchFlights = async () => {
//             const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london';
//             const options = {
//                 method: 'GET',
//                 headers: {
//                     'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
//                     'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
//                 }
//             };

//             try {
//                 const response = await fetch(url, options);
//                 const result = await response.json();
//                 setFlights(result.data);
//             } catch (error) {
//                 console.error('Error fetching flights:', error);
//             }
//         };

//         fetchFlights();
//     }, []);

//     const handleBookFlight = (flight) => {
//         setSelectedFlight(flight);
//         // Here you can implement the booking logic, e.g., send a booking request to a server.
//         console.log(`Booking confirmed for ${flight.name}`);
//         // Optionally, you can show a confirmation message or redirect the user.
//     };

//     return (
//         <div>
//             <h1>Flights</h1>
//             <ul>
//                 {flights.map((flight, index) => (
//                     <li key={`flight-${index}`}>
//                         {flight.name} - {flight.price} USD
//                         <button onClick={() => handleBookFlight(flight)}>Book</button>
//                     </li>
//                 ))}
//             </ul>
//             {selectedFlight && (
//                 <div>
//                     <h2>Booking Confirmation</h2>
//                     <p>Flight booked: {selectedFlight.name}</p>
//                     {/* Optionally, display more details or confirmation */}
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Flights;

import React, { useEffect, useState } from "react";

const Flights = () => {
    const [flights, setFlights] = useState([]);
    const [selectedFlight, setSelectedFlight] = useState(null);

    useEffect(() => {
        const fetchFlights = async () => {
            const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/flights/searchAirport?query=london';
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

        fetchFlights();
    }, []);

    const handleBookFlight = (flight) => {
        setSelectedFlight(flight);
        // Here you can implement the booking logic, e.g., send a booking request to a server.
        console.log(`Booking confirmed for ${flight.name}`);
        // Optionally, you can show a confirmation message or redirect the user.
    };

    return (
        <div>
            <h1>Flights</h1>
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
                    {/* Optionally, display more details or confirmation */}
                </div>
            )}
        </div>
    );
};

export default Flights;


