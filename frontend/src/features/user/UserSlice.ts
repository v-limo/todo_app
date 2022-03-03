import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Todo, TodoId } from '../../types/todoTypes'
import { fetchTodos } from './fetchUser'

type TodosState = {
  list: Todo[]
  isLoading: boolean
  error: boolean
}

const initialState = {
  list: [],
  isLoading: false,
  error: false,
} as TodosState

export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state: TodosState, action: PayloadAction<Todo>) {
      state.list.push(action.payload)
    },
    toggleTodo(state, action: PayloadAction<TodoId>) {
      const index = state.list.findIndex(({ id }) => id === action.payload)
      if (index) {
        state.list[index].completed = !state.list[index].completed
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.list.push(...payload)
    })

    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  },
})

export const { addTodo, toggleTodo } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos.list
export default todosSlice.reducer
