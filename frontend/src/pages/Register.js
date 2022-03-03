import { useState } from 'react'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

export const Register = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userName: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Container
      maxWidth='lg'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormControl>
        <FormLabel>Username</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          id='email'
          value={formData.userName}
          onChange={(e) => {
            setFormData({ ...formData, userName: e.target.value })
          }}
        />
        <FormLabel>Email</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          type='email'
          id='email'
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
          }}
        />
        <FormHelperText>Password</FormHelperText>
        <TextField
          sx={{ minWidth: '40vw' }}
          type='password'
          id='password'
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
          }}
        />

        <Button
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          type='submit'
          variant='contained'
          color='primary'
          size='large'
        >
          Register
        </Button>
      </FormControl>
    </Container>
  )
}
