import React from "react"
import Todo from "./Todo"
import { TodoForm,Todos } from '../interface/interface'

export default function TodoList({ handleEditChange,editTodo, todoList, checkCompleted, deleteTodo }: TodoForm) {
  return (
    <ul className="list-todo">
      {todoList.map((todo: Todos) =>
        <Todo
          key={todo.id}
          checkCompleted={checkCompleted}
          deleteTodo={deleteTodo}
          todo={todo}
          handleEditChange={handleEditChange}
          editTodo={editTodo}
        />)
      }
    </ul>
  )
}
