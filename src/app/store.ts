import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../frontend/features/todos/todosSlice'
import darkModeReducer from '../frontend/features/darkMode/darkModeSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    darkMode: darkModeReducer
  },
})

export type AppDispatch = typeof store.dispatch
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export type RootState = ReturnType<typeof store.getState>
