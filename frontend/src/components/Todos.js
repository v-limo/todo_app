import React from 'react'
import { Container } from '@mui/material'
import { Todo } from './Todo'
// import {Todo} from
export const Todos = ({ todos }) => {
  return (
    <Container
    //   sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}
    >
      {todos.map((todo) => (
        <Todo todo={todo} key={todo._id} />
      ))}
    </Container>
  )
}
