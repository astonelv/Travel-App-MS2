import React, {useEffect, useState} from "react";


const Hotel = () => {

    const [hotel, setHotel] = useState([]);
    const [selectedHotel] = useState(null);

useEffect(()=>{

        const fetchHotel = async () => {
            const url = 'https://tripadvisor-com1.p.rapidapi.com/hotels/search?geoId=60763';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'ce3b6efb66msh7742c71395305acp1ecdadjsnc190f2c35d1d',
                    'x-rapidapi-host': 'tripadvisor-com1.p.rapidapi.com'
                }
            };
         try {
              const response = await fetch(url, options);
              const result = await response.text();
              setHotel(result.data);
              } catch (error) {
              console.error(error);
          }
        
    };  
    fetchHotel();
    
    },[]);
const handleBookHotel = (hotel) => {
        setHotel(hotel);
        console.log(`Booking confirmed for ${hotel.name}`);
    };
    return (
        <div>
            <h1>Hotels</h1>
            <h2>Available Hotels</h2>
            <h3>Book a hotel</h3>
            <ul>
                {hotel.map((hotel, index) => (
                    
                        <li key={`hotel-${index}`}>
                            <div>
                                <strong>{hotel.name}</strong> - {hotel.price} USD
                                </div>  
                                <div>
                                    Hotel {hotel.city}
                                </div>
                                <div> 
                                    Date: {hotel.date}
                                </div>
                                    <button onClick={() => handleBookHotel(hotel)}>Book</button>
                        </li>
                ))}
            </ul>
{selectedHotel && (
                <div>
                    <h2>Booking confirmed for {selectedHotel.name}</h2>
                    <p>Hotel Booked: {selectedHotel.name}</p>
                </div>
            )}
       </div>
                
        );                          
};

export default Hotel;
