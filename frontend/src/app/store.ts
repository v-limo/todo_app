import { configureStore } from '@reduxjs/toolkit'
import darkModeReducer from '../features/darkMode/darkModeSlice'
import authReducer from '../features/auth/authSlice'
import todosReducer from '../features/todos/todosSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    todos: todosReducer,
    darkMode: darkModeReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
