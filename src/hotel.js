import React, {useEffect, useState} from "react";
import './hotel.css';
import hotel from './hotel';


const hotel = () => {
    const [hotel, sethotel] = useState([])
    useEffect(()=>{
    const handleFetch = async () => {
        const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotelsByLocation?latitude=40.730610&longitude=-73.935242&pageNumber=1&currencyCode=USD';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
                'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
            }
        };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                // console.log(result.data)
                if (result.data && Array.isArray(result.data)) {
                    sethotel(result.data);
                } else {
                    sethotel([]);
                }
            } catch (error) {
                console.error(error);
                sethotel([]);
            }
                
        } 
        handleFetch()
    },[])

    console.log('hotel', 'hotel')
    return (
        <div>
            <h1>Hotels</h1>
            
            <ul>
                {
                    flights.map((hotel, index) => (
                        <li key={`hotel-${index}`} >
                            {hotel.name}
                        </li>
                    )) 
                }
            </ul>
        </div>
    )
}

export default hotel;
