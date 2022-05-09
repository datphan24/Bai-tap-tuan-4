import React from "react"
import Todo from "./Todo.tsx"
import { TodoForm } from '../interface/interface'

export default function TodoList({ handleEditChange,editTodo, todoList, checkCompleted, deleteTodo }: TodoForm) {
  return (
    <ul className="list-todo">
      {todoList.map((todo: Todo) =>
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
