import React, {useEffect, useState} from "react";
import './hotel.css';


const Hotel = () => {
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

    // console.log('hotel', hotel)
    return (
        <div>
        <h1>Hotels</h1>
        {error && <div>Error: {error}</div>}
        
        <ul>
             {hotel.length > 0 && hotel.map((hotel, index) => (
                    <li key={`hotel-${index}`}>
                    <div>
                    <strong>{hotel.name}</strong>  - {hotel.city} USD {hotel.price} per night       
                    </div>
                        <h2>{hotel.name}</h2>
                        <p>{hotel.city}</p>
                        <button onClick={() => handleBookHotel(hotel)}>Book</button>
                    
                    </li>
               
                )) }
            
        </ul>
    </div>
)
}

export default Hotel;
