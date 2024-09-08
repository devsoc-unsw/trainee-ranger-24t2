import React from 'react'
import places from '../images/Placenames.jpg'
import trek from '../images/trekss.png'
import { Box, Button, Rating, styled } from '@mui/material'

const CompletionScreen = () => {
  const BackgroundImg = styled('div')({
    color: 'black', 
    backgroundImage: `url(${places})`, 
    backgroundRepeat: 'no-repeat', 
    backgroundSize: 'cover', 
    height: '100vh', 
    width: '100vw', 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center',
    fontFamily: 'arial'
  });

  const CompletionButton = styled('button')({
    width: '8rem', 
    height: '4rem', 
    fontSize: '1.6rem', 
    borderRadius: '10px', 
    backgroundColor: 'white', 
    cursor: 'pointer'
  })

  return (
    <BackgroundImg>
      <div style={{backgroundColor: 'white', justifyContent: 'flex-end', alignItems: 'center', width: '35vw', height: '85vh', borderRadius: '20px'}}>
        <p style={{textAlign: 'center', fontSize: '2.7rem', padding: '0 1em'}}>Congrats on finishing your Trek! 🥳</p>

        <div style={{textAlign: 'center', alignItems: 'center'}}>
          <div style={{width: '28vw', height: '42vh', margin: 'auto', borderStyle: 'solid', borderColor: '#5edbff'}}>
            <img src={trek} style={{padding: '0rem', backgroundRepeat: 'no-repeat', objectFit: 'cover', height: '20rem', width: '100%'}}/>
            <p style={{fontSize: '1.5rem', marginTop: '0em', padding: '1em', backgroundColor: '#5edbff'}}>You Trekked ...km</p>
          </div>
          <Rating name='trek-rating' defaultValue={0.0} precision={0.1} sx={{marginTop: '0.1em', fontSize: '3rem', color: '#fdea2e'}}/>
          <p style={{padding: '0'}}>Rate your Trek</p>
        </div>

        <div style={{backgroundColor: '#5edbff', display: 'flex', justifyContent: 'space-evenly', padding: '2em 0'}}>
          <CompletionButton>Share</CompletionButton>
          <CompletionButton>Home</CompletionButton>
          <CompletionButton>Next Trip</CompletionButton>
        </div>
      </div>
    </BackgroundImg>
        // <img src={places} style={{backgroundRepeat: 'no-repeat', backgroundSize: 'auto'}}>
        //   <p>Hi</p>
        // </img>
    // <div>CompletionScreen</div>
  )
}

export default CompletionScreen