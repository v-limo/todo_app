import { Box, Container, Divider, Typography } from '@mui/material'
import { AddTodo } from './AddTodo'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectAuth } from '../features/auth/authSlice'
import { fetchTodos } from './../features/todos/fetchTodos'

export const Home = () => {
  const { user } = useSelector(selectAuth)
  console.log(user)
  const navigate = useNavigate()
  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      fetchTodos({ id: user.id, token: user.token })
    }
  }, [navigate, user])

  return (
    <Container
      maxWidth='lg'
      className='App'
      sx={{
        minHeight: '100vh',
        mt: '65px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <h2>
        Welcome <span>{user?.username}</span>
      </h2>
      <Divider />
      <Box></Box>

      <AddTodo />
    </Container>
  )
}
