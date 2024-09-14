import React, { useState } from 'react'
import searchIcon from '../images/search.svg';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Autocomplete, styled, TextField, Button } from '@mui/material';
import LocationData from '../LocationsData';

const AUTH = '';

const Location = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [locations, setLocations] = useState([]);

  const Background = styled('div')({
    background: 'linear-gradient(#64dafe, white)'
  });

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
    <Background>
      <h1 style={{ fontFamily: 'serif', textAlign: 'center', paddingTop: '1rem' }}>Choose your locations and places</h1>
      <header className="search-bar__container">
        <button style={{ cursor: 'pointer' }} onClick={() => navigate('/dashboard')}>
          Go Back
        </button>
          <input 
            type="text" 
            className="search-bar" 
            placeholder="Search"
            value={input}
            onChange={updateInput}
            />
        <button className="submitLocation" style={{ cursor: 'pointer' }} onClick={handleSearch}>
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
      <Autocomplete
        disablePortal
        options={LocationData}
        sx={{width: '50%', margin: '0 auto', backgroundColor: 'white'}}
        renderInput={(params) => <TextField {...params} label="Locations" />}
      />

      <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', marginTop: '2rem'}}>
        <Button sx={{textAlign: 'center', width: '20%', height: '80%', backgroundColor: 'green'}} variant='contained' onClick={() => navigate('/completion')}>
          Complete Trek
        </Button>
      </div>
    </Background>
    </>
  )
}

export default Location;