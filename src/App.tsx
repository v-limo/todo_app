import React from 'react'
import { useEffect, useState } from 'react'

import './App.css'
import { TodoT } from './components/Todo'
import Todos from './components/Todos'

const App = () => {
  const [todos, setTodos] = useState<TodoT[]>([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((json) => setTodos(json))
  }, [])

  return <Todos todos={todos} />

}

export default App
