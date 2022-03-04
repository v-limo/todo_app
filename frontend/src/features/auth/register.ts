import { createAsyncThunk } from '@reduxjs/toolkit'
import { USerType } from '../../types/userTypes'
import axios from 'axios'

const API_URL = 'http://localhost:5000/api/v1/users/register'

export const register = createAsyncThunk('auth/register', async (user) => {
  const response = await axios.post(API_URL, user)
  const result: USerType = await response.data
  return result
})
