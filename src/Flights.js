import React, {useEffect, useState} from "react";

const Flights = () => {
    const [flights, setFlights] = useState([])
    useEffect(()=>{
    const handleFetch = async () => {
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
                // console.log(result.data)
                setFlights(result.data)
            } catch (error) {
                console.error(error);
            }
        } 
        handleFetch()
    },[])

    console.log('flights', flights)
    return (
        <div>
            <h1>Flights</h1>
            <ul>
                {
                    flights.map((flight, index) => (
                        <li key={`flight-${index}`} >
                            {flight.name}
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default Flights