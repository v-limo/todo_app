import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../types/todoTypes'
import axios from 'axios'
import { RootState } from '../../app/store'

const API_URL = 'api/v1/todos'

export const fetchTodos = createAsyncThunk('todos/gettodos', async (_, thunkAPI) => {

  const state = thunkAPI.getState() as RootState
  const token = state?.auth?.user?.token

  const config = {
    headers: { Authorization: `Bearer ${token}` },
  }
  const response = await axios.get(API_URL, config)
  const result: Todo[] = await response.data
  return result
})

