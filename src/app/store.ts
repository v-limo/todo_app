import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/todos/todosSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
