export type TodoProps = {
  completed: boolean
  userId: number
  id: number
  title: string
}

const Todo = ({ completed, userId, id, title }: TodoProps) => {
  return <div>Todo</div>
}

export default Todo
