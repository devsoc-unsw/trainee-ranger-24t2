// import React from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from '@mui/material';
import redarrow from '../images/redarrow.png'

const LandingPage = () => {
  const navigate = useNavigate();

  // styles
  const Background = styled('div')({
    background: 'linear-gradient(#64dafe, white)'
  });

  const LandingHeading = styled('h1')({
    fontSize: '5.75rem', 
    textAlign: 'center', 
    padding: '3em 0 0', 
    fontFamily: 'serif'
  });

  const ArrowCont = styled('div')({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  });

  const RedArrow = styled('img')({
    position: 'relative', 
    marginLeft: '5em', 
    top: '-3em', 
    width: '20%', 
    height: '15%'
  });

  const ButtonCont = styled('div')({
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  })

  const LandingButton = styled('button')({
    padding: '1.5rem 4rem', 
    backgroundColor: 'white', 
    fontFamily: 'serif', 
    fontSize: '1.2em', 
    border: '5px solid black', 
    borderRadius: '10px', 
    cursor: 'pointer'
  })

  return (
    <>
    <Background>

      <LandingHeading>Trek</LandingHeading>
      <ArrowCont>
        <RedArrow src={redarrow}/>
      </ArrowCont>
      <ButtonCont>
        <LandingButton onClick={() => navigate('/auth')}>Start Trekking</LandingButton>
        {/* <button onClick={() => navigate('/location')}>To location</button> */}
      </ButtonCont>
    </Background>
    </>
  )
}

export default LandingPage