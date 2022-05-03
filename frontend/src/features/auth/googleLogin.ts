import { createAsyncThunk } from '@reduxjs/toolkit'
import { USerType } from '../../types/userTypes'
import instance from './../../utils/axios'

const API_URL = '/api/v1/users/google-login'

export const googleLogin = createAsyncThunk(
  'auth/google-login',
  async (token) => {
    const response = await instance.post(API_URL, token)
    const result: USerType = response.data
    return result
  }
)
