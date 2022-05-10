import React from "react"
import Todo from "./Todo"

export default function TodoList({ handleEditChange,editTodo, todoList, checkCompleted, deleteTodo }) {
  return (
    <ul className="list-todo">
      {todoList.map(todo =>
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
