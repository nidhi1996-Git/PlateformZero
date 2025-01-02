import React from 'react';
import { TextField, Button, Typography, Box, Container } from '@mui/material';
import { Link } from 'react-router-dom';

const SignUpForm = ({onSubmit, setState, state}) => {

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 2,
                }}
            >
                <Typography variant="h2" style={{ color: "#3c78d8" }} >Platform Zero</Typography>
                <Box sx={{ mt: 1, width: '100%' }}>
                    <TextField
                        variant="standard"
                        margin="dense"
                        required
                        fullWidth
                        value={state.name}
                        label="Name"
                        onChange={(e)=>setState(e,"name")}
                    />
                    <TextField
                        variant="standard"
                        margin="dense"
                        required
                        fullWidth
                        value={state.email}
                        label="Email Address"
                        type='email'
                        onChange={(e)=>setState(e,"email")}
                    />
                    <TextField
                        variant="standard"
                        margin="dense"
                        required
                        fullWidth
                        label="Organization"
                        value={state.organization}
                        onChange={(e)=>setState(e,"organization")}
                    />

                    <TextField
                        variant="standard"
                        margin="dense"
                        required
                        fullWidth
                        label="Location"
                        value={state.location}
                        onChange={(e)=>setState(e,"location")}
                    />
                    <TextField
                        variant="standard"
                        margin="dense"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        value={state.password}
                        onChange={(e)=>setState(e,"password")}
                    />
                    <Button
                        type="button"
                        onClick={()=>onSubmit()}
                        fullWidth
                        variant="contained"
                        style={{ backgroundColor: "#0e9fc1" }}
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign Up
                    </Button>
                    <Typography style={{ color: "#3c78d8" }}><Link to={"/login"} >Already have an account?</Link></Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default SignUpForm