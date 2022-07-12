import { Box } from '@mui/material';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../config/Firebase';

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <Box sx={{ margin: 10 }}>
      Welcome to Mood Meter! <br/>
      Current user now: {user.email}
    </Box>
  )
}

export default Home