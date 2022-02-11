import Todo, { TodoProps } from './Todo'

type TodoT = {
  todos: Array<TodoProps>
}

const Todos = (props: TodoT[]) => {
  const { todos } = props
  return (
    <div>
      {todos.map((todo: TodoProps, key: number) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default Todos
