import { createAsyncThunk } from '@reduxjs/toolkit'
import { USerType } from '../../types/userTypes'
import axios from 'axios'

const API_URL = '/api/v1/users/login'

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  // try {
  const response = await axios.post(API_URL, user)
  const result: USerType = response.data
  return result
  // }
  // catch (error: Error) {
  //   const message =
  //     (error.response &&
  //       error.response.data &&
  //       error.response.data.message) ||
  //     error.message ||
  //     error.toString()
  //   return thunkAPI.rejectWithValue(message)
  // }
})
