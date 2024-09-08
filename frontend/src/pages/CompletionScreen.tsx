import React from 'react'
import places from '../images/Placenames.jpg'
import trek from '../images/trekss.png'
import { Rating, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const CompletionScreen = () => {
  const navigate = useNavigate();

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
  });

  const WhiteCont = styled('div')({
    paddingTop: '1vw', 
    backgroundColor: 'white', 
    justifyContent: 'flex-end', 
    alignItems: 'center', 
    width: '35vw', 
    height: '75vh', 
    borderRadius: '20px'
  });

  const CongratText = styled('p')({
    textAlign: 'center', 
    fontSize: '2.5vw', 
    padding: '0 1em'
  });

  const AlignCont = styled('div')({
    textAlign: 'center', 
    alignItems: 'center'
  });

  const ImageContainer = styled('div')({
    width: '28vw', 
    height: '42vh', 
    margin: 'auto', 
    borderStyle: 'solid', 
    borderColor: '#5edbff'
  });

  const MapImage = styled('img')({
    padding: '0', 
    backgroundRepeat: 'no-repeat', 
    objectFit: 'cover', 
    height: '80%', 
    width: '100%'
  });

  const TrekText = styled('p')({
    fontSize: '1.5vw', 
    marginTop: '0em', 
    padding: '1.3rem', 
    backgroundColor: '#5edbff'
  })

  const ButtonContainer = styled('p')({
    backgroundColor: '#5edbff', 
    display: 'flex', 
    justifyContent: 'space-evenly', 
    marginTop: '1vw', 
    padding: '1vw 0'
  });

  return (
    <BackgroundImg>
      <WhiteCont>
        <CongratText>Congrats on finishing your Trek! 🥳</CongratText>

        <AlignCont>
          <ImageContainer>
            <MapImage src={trek}/>
            <TrekText>You Trekked 6.5km</TrekText>
          </ImageContainer>
          <Rating name='trek-rating' defaultValue={0.0} precision={0.1} sx={{marginTop: '1rem', fontSize: '2vw', color: '#fdea2e'}}/>
          <p>Rate your Trek</p>
        </AlignCont>

        <ButtonContainer>
          <CompletionButton>Share</CompletionButton>
          <CompletionButton>Home</CompletionButton> {/* To navigate to the dashboard/home page */}
          <CompletionButton>Next Trip</CompletionButton>
        </ButtonContainer>
      </WhiteCont>
    </BackgroundImg>
        // <img src={places} style={{backgroundRepeat: 'no-repeat', backgroundSize: 'auto'}}>
        //   <p>Hi</p>
        // </img>
    // <div>CompletionScreen</div>
  )
}

export default CompletionScreen