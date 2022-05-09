export interface Todos {
  name: string
  isComplete: boolean
  id: string
}
export interface TodoForm {
  handleEditChange: any
  editTodo: Function
  todoList: Todos[]
  checkCompleted: Function
  deleteTodo: Function
}
export interface Filter {
  status: string
  setStatus: Function
}
export interface TodoItem {
  editTodo: Function
  handleEditChange: any
  todo: Todos
  checkCompleted: Function
  deleteTodo: Function
}
