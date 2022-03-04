import { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { selectAuth } from './../features/auth/authSlice'
import { toast } from 'react-toastify'
import { login } from './../features/auth/login'
import { Loading } from '../components/Loading'

export const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isLoading, error } = useSelector(selectAuth)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  useEffect(() => {
    if (error) {
      toast.error('Error')
    } else if (user !== null) {
      navigate('/')
      toast.success('login success')
    }
  }, [error, isLoading, navigate, user])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password } = formData
    if (!email || !password) {
      toast.error('Fill all the details')
    } else {
      let formUser = { email, password }
      dispatch(login(formUser))
    }
  }

  if (isLoading) {
    return <Loading />
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
          id='email'
          type='email'
          value={formData.email}
          onChange={(e) => {
            setFormData({ ...formData, email: e.target.value })
          }}
        />
        <FormLabel>Password</FormLabel>
        <TextField
          id='password'
          type='password'
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
