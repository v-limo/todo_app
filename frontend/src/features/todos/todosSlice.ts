import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../../app/store'
import { Todo } from '../../types/todoTypes'
import { fetchTodos } from './fetchTodos'
import { createTodo } from './createTodo';
import { deleteTodo } from './deleteTodo'
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
    toggleTodo(state, action) {
      // const index = state.list.findIndex(({ id }) => id === action.payload)
      // if (index) {
      //   state.list[index].complete = !state.list[index].complete
      // }
    },

    resetTodoState(state: TodosState) {
      state.list = []
      state.isLoading = false
      state.error = false
    },
  },

  extraReducers: (builder) => {
    //FetchTodos
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

    //Add Todo
    builder.addCase(createTodo.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(createTodo.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      state.list.push(payload)
    })

    builder.addCase(createTodo.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })

    //Delete Todo
    builder.addCase(deleteTodo.pending, (state) => {
      state.isLoading = true
      state.error = false
    })

    builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.error = false
      // state.list.push(payload)
    })

    builder.addCase(deleteTodo.rejected, (state) => {
      state.isLoading = false
      state.error = true
    })
  },
})

export const { resetTodoState } = todosSlice.actions
export const selectTodos = (state: RootState) => state.todos.list
export default todosSlice.reducer
