import { useState } from 'react'
import Container from '@mui/material/Container'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { Switch } from '@mui/material'

export const AddTodo = () => {
  const [formData, setFormData] = useState({
    todo: '',
    dateline: new Date(),
    complete: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
  }
  return (
    <Container
      maxWidth='lg'
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <FormControl>
        <FormLabel>Todo</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          id='todo'
          value={formData.todo}
          onChange={(e) => {
            setFormData({ ...formData, todo: e.target.value })
          }}
        />
        <FormLabel>Dateline</FormLabel>
        <TextField
          sx={{ minWidth: '40vw' }}
          type='date'
          id='dateline'
          value={formData.dateline}
          onChange={(e) => {
            setFormData({ ...formData, dateline: e.target.value })
          }}
        />
        <FormHelperText>Complete</FormHelperText>
        <Switch
          sx={{ mt: 1 }}
          size='large'
          checked={formData.complete}
          onChange={(e) => {
            setFormData({ ...formData, complete: e.target.value })
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />

        <Button
          sx={{ mt: 2 }}
          onClick={handleSubmit}
          type='submit'
          variant='contained'
          color='primary'
          size='large'
        >
          Add Todo
        </Button>
      </FormControl>
    </Container>
  )
}
