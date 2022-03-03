import { useState } from 'react'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'


export const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login')
  }

  return (
    <Container
      maxWidth='lg'
      sx={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '50vw',
      }}
    >
      <FormControl>
        <FormLabel>Email</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          id='email'
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
          }}
        />
        <FormLabel>Password</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          id='password'
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
          }}
        />
        <Button
          sx={{ mt: 2 }}
          variant='contained'
          color='primary'
          size='large'
          onClick={handleSubmit}
        >
          Login
        </Button>
      </FormControl>
    </Container>
  )
}
