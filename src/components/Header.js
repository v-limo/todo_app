import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'

import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import SearchIcon from '@mui/icons-material/Search'
import AddIcon from '@mui/icons-material/Add'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import HelpOutlineIcon from '@mui/icons-material/HelpOutline'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import { Avatar, Input, InputAdornment } from '@mui/material'

export default function Header() {
  return (
    <Box sx={{ height: '45px' }}>
      <AppBar
        position='static'
        elevation={0}
        height='100vh'
        color='secondary'
        sx={{ m: '0', bgcolor: '#db4c3f' }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/*left toolbar */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <MenuIcon />
            <HomeIcon />
            <Input
              id='input'
              startAdornment={
                <InputAdornment position='start'>
                  <SearchIcon />
                </InputAdornment>
              }
            />
          </Box>

          {/* right toolbar */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <AddIcon />
            <ExpandMoreIcon />
            <Typography variant='body2' color='initial'>
              5/5
            </Typography>
            <HelpOutlineIcon />
            <NotificationsNoneIcon />
            <Avatar>VL</Avatar>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
