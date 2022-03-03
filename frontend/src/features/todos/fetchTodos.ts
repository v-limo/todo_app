import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../types/todoTypes'


export const fetchTodos = createAsyncThunk<Todo[]>('todos/fetch', async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const result: Todo[] = await response.json()
  return result
})
