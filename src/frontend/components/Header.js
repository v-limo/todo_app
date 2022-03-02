import { Link } from 'react-router-dom'
import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Button } from '@mui/material'

export default function Bar() {
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

        <Link to='/visited'>
          <Button variant='outlined' color='primary'>
            Login
          </Button>
        </Link>
        <Link to='/fevorite'>
          <Button variant='outlined' color='primary'>
            Register
          </Button>
        </Link>
        <Button
          onClick={() => {
            return undefined
          }}
        >
          {!true ? <DarkModeIcon /> : <LightModeIcon />}
        </Button>
      </Toolbar>
    </AppBar>
  )
}
