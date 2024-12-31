import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';

const RegistrationPage=()=>{
    return(

        <Container maxWidth="sm">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            mt: 8,
          }}
        >
          <Typography variant="h4" component="h1" gutterBottom>
          Registration
          </Typography>
          <Box sx={{ mt: 2, width: '100%' }}>

          <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              type='name'
              name="name"
              autoComplete="name"
              autoFocus
            />

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              type='email'
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Registration
            </Button>
          </Box>
        </Box>
      </Container>
    )
}

export default RegistrationPage