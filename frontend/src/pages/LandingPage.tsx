import React from 'react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>LandingPage (below is a button to navigate to the auth page)</div>
      <button onClick={() => navigate('/auth')}>To Auth</button>
      <button onClick={() => navigate('/location')}>To location</button>
    </>
  )
}

export default LandingPage