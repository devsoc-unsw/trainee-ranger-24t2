import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, CircularProgress, Container, Typography, Box, Paper } from '@mui/material';
import './AuthPage.css';

const AuthPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [isRegister, setIsRegister] = useState(false);

  const handleAuth = async () => {
    setLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      if (isRegister) {
        // Registration logic
        if (email && password && name) {
          console.log('Registered:', { email, name });
          navigate('/dashboard');
        } else {
          setError('Please fill in all fields');
        }
      } else {
        // Login logic
        if (email === 'test@example.com' && password === 'password') {
          navigate('/dashboard');
        } else {
          setError('Invalid email or password');
        }
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <Box sx={{ background: 'linear-gradient(#64dafe, white)', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <Container className="auth-page">
      <Paper elevation={3} sx={{ padding: 4, backgroundColor: 'white', borderRadius: 2, width: '30%', minWidth: '300px', textAlign: 'center' }}>
        <Box component="form" noValidate autoComplete="off">
          <Typography variant="h4" component="h2" gutterBottom sx={{ color: 'black' }}>
            {isRegister ? 'Register for Trek' : 'Login for Trek'}
          </Typography>
          {isRegister && (
            <div className="form-group">
              <TextField
                label="Name"
                type="text"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                sx={{ input: { color: 'black' }, label: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' }, '&:hover fieldset': { borderColor: 'black' }, '&.Mui-focused fieldset': { borderColor: 'black' } } }}
              />
            </div>
          )}
          <div className="form-group">
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!error}
              helperText={error && ' '}
              sx={{ input: { color: 'black' }, label: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' }, '&:hover fieldset': { borderColor: 'black' }, '&.Mui-focused fieldset': { borderColor: 'black' } } }}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!error}
              helperText={error}
              sx={{ input: { color: 'black' }, label: { color: 'black' }, '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'black' }, '&:hover fieldset': { borderColor: 'black' }, '&.Mui-focused fieldset': { borderColor: 'black' } } }}
            />
          </div>
          <div className="form-group">
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleAuth}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : isRegister ? 'Register' : 'Login'}
            </Button>
          </div>
          <div className="form-group">
            <Button
              variant="text"
              fullWidth
              onClick={() => setIsRegister(!isRegister)}
              sx={{ color: 'black', textTransform: 'none' }}
            >
              {isRegister ? 'Already have an account? Login' : "Don't have an account? Register"}
            </Button>
          </div>
        </Box>
      </Paper>
    </Container>
    </Box>
  );
};

export default AuthPage;