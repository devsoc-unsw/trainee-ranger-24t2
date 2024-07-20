import React from 'react'
import { useNavigate } from 'react-router-dom'


const AuthPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div>AuthPage</div>
      <button onClick={() => navigate('/')}>Back to landing</button>
    </>
  )
}

export default AuthPage