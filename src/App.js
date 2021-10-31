import { Box } from '@mui/material'
import React from 'react'
import Drawerr from './components/Drawerr'
import Header from './components/Header'

export const App = () => (
  <Box sx={{ bgcolor: '#ffffff', height: '100vh', width: '100%' }}>
    {/* <Header /> */}
    <Drawerr/>
  </Box>
)
