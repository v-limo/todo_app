import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../types/todoTypes'
import axios from 'axios'
const API_URL = 'api/v1/todos'

type FetchProps = {
  token: string
  id: string
}

export const fetchTodos = createAsyncThunk('todos/get', async (user: FetchProps) => {
  const { token, id } = user

  const config = {
    Authorization: `Bearer ${token}`
  }
  const response = await axios.get(API_URL)
  const result: Todo[] = await response.data
  return result
})

