import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const LoginForm = ({onSubmit, setState, state}) => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mt: 8,
        }}
      >
           <Typography variant="h2" style={{color:"#3c78d8"}} >
          Platform Zero
        </Typography>
        <Box sx={{ mt: 2, width: '100%' }}>
          <TextField
            variant="standard"
            margin="dense"
            required
            fullWidth
            label="Email Address"
            type='email'
            value={state.email}
            onChange={(e)=> setState(e,"email")}
          />
          <TextField
            variant="standard"
            margin="dense"
            required
            fullWidth
            label="Password"
            type="password"
            value={state.password}
            onChange={(e)=> setState(e,"password")}
          />
          <Button
            type="button"
            fullWidth
            variant="contained"
            style={{backgroundColor:"#0e9fc1"}}
            sx={{ mt: 3, mb: 2 }}
            onClick={()=>onSubmit()}
          >
             Sign In
          </Button>
          <Typography  style={{color:"#3c78d8"}}><Link to={"/register"} >Create a new account?</Link></Typography>
        </Box>
      </Box>
    </Container>
  )
}

export default LoginForm