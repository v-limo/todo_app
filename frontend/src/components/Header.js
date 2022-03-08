import HomeIcon from '@mui/icons-material/Home'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import DarkModeIcon from '@mui/icons-material/DarkMode'
import LightModeIcon from '@mui/icons-material/LightMode'
import { Box, Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {
  selectDarkMode,
  toggleDarkMode,
} from '../features/darkMode/darkModeSlice'
import { logout, selectAuth } from '../features/auth/authSlice'
import { resetTodoState } from '../features/todos/todosSlice'

export default function Bar() {
  const dispatch = useDispatch()
  const { darkMode } = useSelector(selectDarkMode)
  const navigate = useNavigate()
  const { user } = useSelector(selectAuth)
  return (
    <AppBar sx={{ backgroundColor: 'background.default' }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <HomeIcon onClick={() => navigate('/')} />

        <Box>
          {user ? (
            <Button
              variant='outlined'
              color='primary'
              onClick={() => {
                dispatch(logout())
                dispatch(resetTodoState())
              }}
            >
              Logout
            </Button>
          ) : (
            <>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => navigate('/register')}
              >
                Register
              </Button>
            </>
          )}

          <Button onClick={() => dispatch(toggleDarkMode())}>
            {!darkMode ? <DarkModeIcon /> : <LightModeIcon />}
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
