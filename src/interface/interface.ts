export interface Todo {
  name: string
  isComplete: boolean
  id: string
}
export interface TodoForm {
  handleEditChange: any
  editTodo: Function
  todoList: []
  checkCompleted: Function
  deleteTodo: Function
  todo: Todo
}
export interface Filter {
  status: string
  setStatus: Function
}
