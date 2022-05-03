import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Paper } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.css'
import 'react-toastify/dist/ReactToastify.min.css'
import { ToastContainer } from 'react-toastify'

import { Home } from './pages/Home'
import NoMatch from './pages/NoMatch'
import Layout from './pages/Layout'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import TodoDetails from './pages/TodoDetails'
import { AddTodo } from './pages/AddTodo'
import { ThemeProvider } from '@emotion/react'
import { selectDarkMode } from './features/darkMode/darkModeSlice'
import { darkTheme, lightTheme } from './theme'
import { useSelector } from 'react-redux'

const App = () => {
  let { darkMode: mode } = useSelector(selectDarkMode)
  const theme = mode ? darkTheme : lightTheme




  return (
    <ThemeProvider theme={theme}>
      <Paper sx={{ minHeight: '100vh' }}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='register' element={<Register />} />
              <Route path='login' element={<Login />} />
              <Route path='addTodo' element={<AddTodo />} />
              <Route path='todo/:id' element={<TodoDetails />} />
              <Route path='*' element={<NoMatch />} />
            </Route>
          </Routes>
        </Router>
        <ToastContainer />
      </Paper>
    </ThemeProvider>
  )
}

export default App
