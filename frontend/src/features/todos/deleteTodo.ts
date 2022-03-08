import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '../../app/store';
const API_URL = 'api/v1/todos'

export const deleteTodo = createAsyncThunk('todos/delete', async (id, thunkAPI) => {
    const state = thunkAPI.getState() as RootState
    const token = state?.auth?.user?.token
    const config = {
        headers: { Authorization: `Bearer ${token}` },
    }
    const response = await axios.delete(`${API_URL}/${id}`, config)
    const result = await response.data
    return result
})


