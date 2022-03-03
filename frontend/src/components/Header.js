import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import {
  selectDarkMode,
  toggleDarkMode,
} from '../features/darkMode/darkModeSlice'

export default function Bar() {
  const dispatch = useDispatch()
  const { darkMode } = useSelector(selectDarkMode)
  return (
    <AppBar sx={{ backgroundColor: 'background.default' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <Link to='/'>
          <HomeIcon />
        </Link>

        <Box>
          <Link to='/login'>
            <Button variant='outlined' color='primary'>
              Login
            </Button>
          </Link>
          <Link to='/register'>
            <Button variant='outlined' color='primary'>
              Register
            </Button>
          </Link>
          <Button onClick={() => dispatch(toggleDarkMode())}>
            {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
