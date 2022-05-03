import { createAsyncThunk } from '@reduxjs/toolkit'
import { USerType } from '../../types/userTypes'
import instance from './../../utils/axios'

const API_URL = '/api/v1/users/login'

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  const response = await instance.post(API_URL, user)
  const result: USerType = response.data

  return result
})
