import { Card, Divider, Button } from '@mui/material'
import { useDispatch } from 'react-redux';
import { deleteTodo } from './../features/todos/deleteTodo';

export const Todo = ({ todo }) => {
  const dispatch = useDispatch()

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id))
  }

  //  ( new Date() > new Date(todo.dateLine))
  return (
    <Card
      sx={{ padding: 4, margin: 1, bgcolor: todo.completed ? 'green' : '' }}
    >
      <h3> {todo.todo}</h3>
      <p>Created: {new Date(todo.createdAt).toLocaleString()}</p>
      <p>Dateline: {new Date(todo.dateLine).toLocaleString()}</p>
      <p>Dateline: {new Date(todo.dateLine).toLocaleString()}</p>

      <Button
        variant='contained'
        onClick={() => deleteTodoHandler(todo._id)}
        color='error'
      >
        Delete
      </Button>
      <Divider />
    </Card>
  )
}
