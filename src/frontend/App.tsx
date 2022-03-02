import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Paper, ThemeProvider } from '@mui/material'

import { Home } from './pages/Home'

import NoMatch from './pages/NoMatch'

import Layout from './pages/Layout'
import { useSelector } from 'react-redux'

import { Register } from './pages/Register'
import { Login } from './pages/Login'
import TodoDetails from './pages/TodoDetails'

const App = () => {
  // let { darkMode: mode } = useSelector(selectDarkmode)
  // const theme = mode ? darkTheme : lightTheme

  return (
    // <ThemeProvider theme={theme}>
    <Paper sx={{ minHeight: '100vh' }}>
      <Router>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='register' element={<Register />} />
            <Route path='login' element={<Login />} />
            <Route path='todo/:id' element={<TodoDetails />} />
            <Route path='*' element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </Paper>
    // </ThemeProvider>
  )
}

export default App
