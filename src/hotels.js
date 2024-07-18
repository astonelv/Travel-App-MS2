import React, { useState, useEffect} from 'react';

const Hotels = () => {
    const {hotels, setHotels} = useState({};
        useEffect(() => {
        const handleFetch = async () => {
            const url = 'https://tripadvisor16.p.rapidapi.com/api/v1/hotels/searchHotels?pageNumber=1&currencyCode=USD';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '117e291c81mshbb40fee4de3cbd8p192cccjsn0dc3c33ebfb1',
		'x-rapidapi-host': 'tripadvisor16.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

 }
   handleFetch()
}, [])

 console.log ('hotels', hotels);
 return (
    <div>
        <h1>hotels</h1>
        <ul>
            {
                hotels.map((hotel, index) => ( 
                    <li key={`hotel-${index}`}>
                        {hotel.name} -{hotel.city}
                    </li>
                  ))
                }
        </ul>
    </div>
 )
}

export default Hotels
