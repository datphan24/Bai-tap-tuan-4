import React from "react"
import Todo from "./Todo"

export default function TodoList({ todoList, checkCompleted }) {
  return (
    <ul className="list-todo">
      {todoList.map(todo => <Todo key={ todo.id } checkCompleted={checkCompleted} todo={todo}/>)}
    </ul>
  )
}
