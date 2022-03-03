import { Box, Container } from '@mui/material'
import { AddTodo } from './AddTodo'

export const Home = () => {
  return (
    <Container
      // maxWidth='lg'
      className='App'
      sx={{ minHeight: '100vh', mt: '64px' }}
    >
      <Box>Content</Box>
      <Box>
        <AddTodo />
      </Box>
    </Container>
  )
}
