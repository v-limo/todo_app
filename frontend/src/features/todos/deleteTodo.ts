import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../types/todoTypes'
import axios from 'axios'
const API_URL = 'api/v1/todos'

export const deleteTodo = createAsyncThunk('todos/delete', async () => {
    const response = await axios.delete(API_URL)
    const result: Todo[] = await response.data
})


