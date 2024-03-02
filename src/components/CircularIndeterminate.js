import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminate() {
  return (
    <section style={{background: "linear-gradient(90deg, #20294a, #320037)", display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </section>
    
  );
}