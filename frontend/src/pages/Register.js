import { useState } from 'react'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Card } from '@mui/material'

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
    <Card
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
          margin='normal'
          required
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
          margin='normal'
          required
        />
        <FormLabel>Password</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          type='password'
          id='password'
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
          }}
          margin='normal'
          required
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
    </Card>
  )
}
