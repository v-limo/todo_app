import { Container, Divider, Button } from '@mui/material'
import { AddTodo } from './AddTodo'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Modal from 'react-modal'

import { selectAuth } from '../features/auth/authSlice'
import { fetchTodos } from './../features/todos/fetchTodos'
import { selectTodos } from './../features/todos/todosSlice'
import { Todos } from './../components/Todos'

export const Home = () => {
  const { user } = useSelector(selectAuth)
  const todos = useSelector(selectTodos)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [modalIsOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!user) {
      navigate('/login')
    } else {
      dispatch(fetchTodos())
    }
  }, [dispatch, navigate, user])

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  const styles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }
  Modal.setAppElement('#root')

  return (
    <Container
      maxWidth='lg'
      className='App'
      sx={{
        minHeight: '100vh',
        mt: '65px',
      }}
    >
      <h2>
        Welcome <span>{user?.username}</span>
      </h2>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={styles}
        contentLabel='Example Modal'
      >
        <AddTodo />
      </Modal>
      <Button variant='outlined' color='primary' onClick={openModal}>
        AddTodo
      </Button>
      {/* <AddTodo /> */}
      <Divider />
      <Todos todos={todos} />
      <Divider />
    </Container>
  )
}
