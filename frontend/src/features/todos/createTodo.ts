import { createAsyncThunk } from '@reduxjs/toolkit'
import { Todo } from '../../types/todoTypes'
import axios from 'axios'
import { RootState } from '../../app/store'
const API_URL = 'api/v1/todos'

// type FetchProps = {
//     todo: string
//     dateline: Date
//     complete: boolean
// }
export const createTodo = createAsyncThunk(
    'todos/Get',
    async (todo: any, thunkAPI) => {
        const state = thunkAPI.getState() as RootState
        const token = state?.auth?.user?.token

        const config = {
            headers: { Authorization: `Bearer ${token}` },
        }
        const response = await axios.post(API_URL, todo, config)
        const result: Todo = await response.data
        return result
    }
)
