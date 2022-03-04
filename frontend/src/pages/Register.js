import { useState } from 'react'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { resetState } from './../features/auth/authSlice'
import { useNavigate } from 'react-router-dom'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Card } from '@mui/material'
import { selectAuth } from '../features/auth/authSlice'
import { Loading } from '../components/Loading'
import { register } from '../features/auth/register'

export const Register = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, error } = useSelector(selectAuth)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: '',
    username: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, username, repeatPassword } = formData
    if (!email || !password || !username || !repeatPassword) {
      toast.error('Fill all the details')
    } else if (password !== repeatPassword) {
      toast.error("password and repeatpassword don't match")
    } else {
      toast.success('login success')
      dispatch(register({ email, password, username }))
      navigate('/')
    }
  }

  isLoading && <Loading />

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
        <FormLabel>username</FormLabel>
        <TextField
          id='email'
          value={formData.username}
          onChange={(e) => {
            setFormData({ ...formData, username: e.target.value })
          }}
          margin='normal'
          required
        />
        <FormLabel>Email</FormLabel>
        <TextField
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
          type='password'
          id='password'
          value={formData.password}
          onChange={(e) => {
            setFormData({ ...formData, password: e.target.value })
          }}
          required
        />
        <FormLabel>Repeat assword</FormLabel>
        <TextField
          type='password'
          id='repeatpassword'
          value={formData.repeatPassword}
          onChange={(e) => {
            setFormData({ ...formData, repeatPassword: e.target.value })
          }}
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
