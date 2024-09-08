import React, { useState } from 'react'
import searchIcon from '../images/search.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AUTH = '';

const Location = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [locations, setLocations] = useState([]);

  const updateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSearch = async() => {
    console.log(input);
    // console.log('API Key:', process.env.REACT_APP_FOURSQUARE_API_KEY);
    if (input) {
        const options = {
          method: 'GET',
          url: 'https://api.foursquare.com/v3/places/search',
          headers: {
            accept: 'application/json',
            Authorization:  AUTH,
          }, 
          params: {
            near: input,  
            limit: 4
          }
        };
        try {
          const res = await axios.get('https://api.foursquare.com/v3/places/search', options);
          console.log(res.data);
          setLocations(res.data.results);
        } catch(e) {
          console.log(e);
        }
        
    }
    

  }

  return (
    <> 
      <header className="search-bar__container">
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search"
            value={input}
            onChange={updateInput}
          />
        <button className="submitLocation" onClick={handleSearch}>
          <img src={searchIcon} alt="Search" />
        </button>
      </header> 
      <div className="locationResults">
        {locations.map((place, index) => (
            <div key={index} className='location'>
              <h3 className='location-name'>{place.name}</h3>
              <p className='location-address'>{place.location.formatted_address}</p>
              <button className="addLocationToItinerary">
                Add to Itinerary
              </button>
            </div>
        ))}
      </div>
    </>
  )
}

export default Location;