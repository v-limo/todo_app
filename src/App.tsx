import React from 'react'

import { useSelector, useDispatch, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './app/store'
import { selectTodos, toggleTodo } from './features/todos/todosSlice'
import { useEffect } from 'react'
import { fetchTodos } from './features/todos/fetchTodos'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

const App = () => {
  const dispatch = useDispatch()
  const todos = useTypedSelector(selectTodos)
  console.log(todos)
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id + Math.random()}>
          <input
            type='checkbox'
            checked={todo.completed}
            onChange={() => dispatch(toggleTodo(todo.id))}
          />
          {todo.title}
        </li>
      ))}
    </ul>
  )
}

export default App
